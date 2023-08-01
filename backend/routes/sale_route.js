const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const SaleModel = mongoose.model("SaleModel");


// Route to add a new sale
router.post('/addsale', async (req, res) => {
  const { product_name, quantity, amount } = req.body;

  if (!product_name || !quantity || !amount) {
    return res.status(400).json({ msg: 'Empty values not allowed.' });
  }

  try {
    const sale = await SaleModel.create({
      product_name,
      quantity: parseInt(quantity),
      amount: parseInt(amount),
    });

    res.status(201).json({ sale, msg: 'Sale added Successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to add SaleModel.' });
  }
});

// Route to get the top five sales
router.get('/topfive', async (req, res) => {
  try {
    const documentsFromToday = await SaleModel.find({}).sort({ amount: 'desc' }).limit(5);
    res.send({ documentsFromToday, msg: 'Top five from the backend' });
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch top five sales.' });
  }
});

// Route to get the revenue for today
// Route to calculate today's revenue
router.get('/todayrevenue', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const todaySales = await SaleModel.find({
      timestamp: { $gte: today, $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) },
    });

    const totalRevenue = todaySales.reduce((total, sale) => total + sale.revenue, 0);
    res.json({ todayRevenue: totalRevenue });
  } catch (error) {
    console.error('Error fetching today\'s revenue:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;

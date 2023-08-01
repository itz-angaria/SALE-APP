const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

// Define the Mongoose schema for the "Sale" entity
const saleSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Quantity must be at least 1
  },
  amount: {
    type: Number,
    required: true,
    min: 1, // Amount must be at least 1
  },
  author: {
    type: ObjectId,
    ref: "UserModel"
  }
}, {timestamps:true});

mongoose.model("SaleModel", saleSchema);
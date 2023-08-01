import React, { useEffect, useState } from 'react';
import './Sale.css';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const TopSale = () => {
  const [topSales, setTopSales] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${API_BASE_URL}/topfive`)
      .then((response) => {
        setLoading(false);
        setTopSales(response.data.documentsFromToday);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div className='container content-container shadow-sm p-4'>
      <h2 className='text-center'>TOP 5 SALES</h2>
      {loading ? (
        <div className='col-md-12 mt-3'>
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sale Amount</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {topSales.map((sale, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{sale.product_name}</td>
                <td>{sale.quantity}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopSale;

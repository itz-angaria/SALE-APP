import React, { useState } from 'react';
import './Sale.css';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const AddSale = () => {
  const [product_name, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addsale = (event) => {
    event.preventDefault();
    setLoading(true);
    const requestData = {product_name, quantity, amount};
    axios.post(`${API_BASE_URL}/addsale`, requestData)
      .then((result) => {
      if(result.status === 201){
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Successfully Added'
        })
        navigate('/topsale');
      }
      setProductName('');
      setQuantity('');
      setAmount('');
    })
     .catch((error) => {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Some error occurred try again'
      })
      })
  }
    


  return (
    <div className='container content-container shadow-sm p-4'>
      <h2 className='text-center'>ADD SALE ENTRY</h2>
      {loading ? <div className='col-md-12 mt-3'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div> : ''}
      <form  onSubmit={(e) => addsale(e)}>
      <div className="mb-3">
        <label className='float-start'>Product</label>
        <input type="text" value={product_name} onChange={(ev) => setProductName(ev.target.value)} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className='float-start'>Quantity</label>
        <input type="text" value={quantity} onChange={(ev) => setQuantity(ev.target.value)}  className="form-control"/>
      </div>
      <div className="mb-3">
        <label className='float-start'>Amount</label>
        <input type="text" value={amount} onChange={(ev) => setAmount(ev.target.value)} className="form-control" />
      </div>
      <div className="mb-3">
        <button type='submit' className="form-control btn btn-primary" id="submit">
          Submit
        </button>
      </div>
      </form>
      
    </div>
  );
};

export default AddSale;

import React, { useState } from 'react';
import './Sale.css';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registration = (event) => {
    event.preventDefault();
    setLoading(true);
    const requestData = { firstName: firstName, lastName: lastName, email, password }
    axios.post(`${API_BASE_URL}/register`, requestData)
      .then((result) => {
      if(result.status === 201){
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'User successfully registered'
        })
        navigate('/login');
      }
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
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
    <h2 className='text-center'>REGISTRATION FORM</h2>
    {loading ? <div className='col-md-12 mt-3'>
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div> : ''}
    <form onSubmit={(e) => registration(e)}>
      <div className='mb-3'>
        <label className='float-start'>First Name</label>
        <input type='text' value={firstName} onChange={(ev) => setFirstName(ev.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Last Name</label>
        <input type='text' value={lastName} onChange={(ev) => setLastName(ev.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Email</label>
        <input type='email'value={email} onChange={(ev) => setEmail(ev.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='float-start'>Password</label>
        <input type='password' value={password} onChange={(ev) => setPassword(ev.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <button type='submit' className='form-control btn btn-primary' id='submit'>
          Submit
        </button>
      </div>
    </form>
  </div>
);
};

export default Registration;

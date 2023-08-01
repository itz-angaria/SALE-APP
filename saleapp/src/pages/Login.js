import React, { useState } from 'react';
import './Sale.css';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                    localStorage.setItem("token", result.data.result.token);
                    localStorage.setItem('user', JSON.stringify(result.data.result.user));
                    dispatch({type: 'LOGIN_SUCCESS', payload: result.data.result.user});
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully loggedin'
                      })
                    navigate('/addsale');
                }
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.error
                })
            })

    }

    return (
        <div>
            <div className='container content-container shadow-sm p-4'>
                <h2 className='text-center'>LOGIN FORM</h2>
                {loading ? <div className='col-md-12 mt-3'>
                    <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                </div> : ''}
                <form onSubmit={(e)=>login(e)}>
                <div className="mb-3">
                    <label className='float-start'>Email address</label>
                    <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="float-start">Password</label>
                    <input className="form-control" type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
                </div>
                <div className="mb-3">
                    <button type='submit' className="form-control btn btn-primary" id="submit" >Submit</button>
                </div>
                </form>

            </div>
        </div>
    )
}

export default Login
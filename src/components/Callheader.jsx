import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import Dashboard from "../pages/Dashboard"
import logo from '../images/zamzamlogo.png'


const Callheader = ({ callnav }) => {
    const navigate = useNavigate();
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    function logout() {
        localStorage.removeItem('user-info');
        navigate('/');
    }

    return (
        <div className='call_header px-3 bg-dark'>
            <nav class="navbar navbar-expand-lg container-fluid justify-content-between">

                <div className='logo'>
                    <img src={logo} alt={"logo"}/> 
                </div>

                <div class="collapse navbar-collapse justify-content-end">
                    <div className='border-left ps-3 ms-3 d-flex align-items-center'>
                        <label className='text-white me-3'>counter:</label>
                        <select class="form-select w-auto" aria-label=".form-select-sm example">
                            <option selected>counter</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <p className='border-left text-white ps-3 ms-3 mb-0'>Zam Zam</p>
                    <div className='border-left ps-3 ms-3 date'>
                        <p id='demo' className='text-white mb-0'>
                            <div className="d-flex">
                                <p className='mb-0 me-2'>
                                    {' '}
                                    {dateState.toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </p>
                                -
                                <p className='mb-0 ms-2'>
                                    {dateState.toLocaleString('en-US', {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true,
                                    })}
                                </p>
                            </div>
                        </p>
                    </div>
                    <div className='logout border-left text-white ps-3 ms-3'>
                        <button onClick={logout} className='text-white btn p-0'><svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="18" height="18" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                            <path d="M7.5 1v7h1V1h-1z" />
                            <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                        </svg></button>
                    </div>
                </div>
            </nav>
            {callnav}
        </div>
    )
}


export default Callheader;
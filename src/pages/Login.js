import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../components/Layout";
import './style.css';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const login = async () => {
    try { 
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
       
     
    return (
        <Layout>
            
            <div className="row justify-content-md-center mt-5 align-items-center container mx-auto">
                
                <div className="col-4 p-0 bg-white rounded">
                    <div className="card border-0">
                        <div className="card-body">
                             <div className='text-center'>
                             <img className='pt-3 login_logo' src='https://qwaiting.com/images/qwaiting-logo.svg' />
                            <h4 className="card-title my-4">Sign In</h4>
                             </div>
                            
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={username}
                                        onChange={(e)=>{setUsername(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                       
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2 mb-3">
                                <button className='btn btn-primary btn-block' onClick={login}>Login</button>
                                   
                                </div>
                           
                        </div>
                    </div>
                </div>
              
              
            </div>
        </Layout>
    );
}
   
export default Login;
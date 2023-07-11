import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Callheader from "../components/Callheader"
import Callfoter from '../components/Callfoter'
import axios from 'axios';



function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
   
    // useEffect(()=>{
    //     if(localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
    //         navigate("/");
    //     }else {
    //         getUser()
    //     }
    // },[])
    useEffect(() => {
        if (localStorage.getItem('token') === '') {
          navigate('/');
        } else {
          getUser();
        }
      }, []);

    const getUser = () => {
        axios.get('/api/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
           setUser(r.data)
        })
        .catch((e) => {
            console.log(e)
        });
    }


    return (
        <div>
            <Callheader>
            </Callheader>
            <div className='call_page p-3'>
                <div className='row vh-100'>
                    <div className='col-7'>
                        <div className='h-100'>
                            <div className='w-100 shadow rounded p-5 mb-4 h-75 text-center d-flex align-items-center justify-content-center'>
                                <h4 className='fw-bold'>No Call</h4>
                            </div>
                            <div className='w-100 text-center shadow rounded p-4'>
                                <h5>Total Served Tokens</h5>
                                <h3>0</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn_call_next'>Next</button>
                    </div>
                    <div className='col-3'>
                        <div className='w-100 shadow h-100'>
                            <div className='heading'>
                                <p className='text-white bg-darkblue p-2 text-center'>0 visitors are waiting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Callfoter>
            </Callfoter>
        </div>

    );
}

export default Dashboard;
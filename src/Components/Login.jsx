import React, { useState, useEffect } from 'react'
import {fetchData} from '../Slices/authSlice'
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { isLogin } from './isLogin';
 

const Login = () =>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
    
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const handleChange = (event) =>{
        setForm({
            ...form,
           [event.target.name] : event.target.value
        })
    }
    const formSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchData(form))
    }
     
    useEffect(()=>{
        if(isLogin()){
            return navigate("/dashboard"); 
        } 
        if(isAuthenticated){
            navigate("/dashboard"); 
            
        }else{
            navigate("/login");
            
        }
    },[isLogin()])
     
    

    return(
        <> 
                <div className='container'>
                    <div className='card'>
                        <form>
                            <div className='form-group'>
                                <input type='email' name='email' onChange={handleChange} className='form-control' placeholder='Email' />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='password' onChange={handleChange} className='form-control' placeholder='Password' />
                            </div>
                            <div className='align-items-center d-flex form-group justify-content-between'>
                                <button type='button' onClick={formSubmit} className='btn btn-primary'>Login</button>
                                <Link to="/register">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
    )
    
}

export default Login
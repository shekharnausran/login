import React, { useState, useEffect } from 'react'
import {fetchData} from '../Slices/authSlice'
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
const Login = () =>{
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const [form, setForm] = useState({
        username : '',
        password : ''
    })
    const handleChange = (event) =>{
        setForm({
            ...form,
           [event.target.name] : event.target.value
        })
    }
    const formSubmit = (event) =>{
        event.preventDefault()
        dispatch(fetchData(form))
    }
     
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/dashboard");            
        }else{
            navigate("/login");
        }
    },[isAuthenticated, navigate])
     
    return(
        <>
            <div className='container'>
                <div className='card'>
                    <form>
                        <div className='form-group'>
                            <input type='text' name='username' onChange={handleChange} className='form-control' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <input type='password' name='password' onChange={handleChange} className='form-control' placeholder='Password' />
                        </div>
                        <div className='form-group'>
                            <button type='button' onClick={formSubmit} className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { registerUser } from '../Slices/authSlice';
const Register = () =>{
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        email: '',
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
        alert(JSON.stringify(form))
        dispatch(registerUser(form))
    }
     
    useEffect(()=>{
       
    },[])
     
    return(
        <>
            <div className='container'>
                <div className='card'>
                    <form>
                        <div className='form-group'>
                            <input type='text' name='firstName' onChange={handleChange} className='form-control' placeholder='First Name' />
                        </div>
                        <div className='form-group'>
                            <input type='text' name='lastName' onChange={handleChange} className='form-control' placeholder='Last Name' />
                        </div>
                        <div className='form-group'>
                            <input type='text' name='username' onChange={handleChange} className='form-control' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <input type='email' name='email' onChange={handleChange} className='form-control' placeholder='Email Address' />
                        </div>
                        <div className='form-group'>
                            <input type='tel' name='phone' onChange={handleChange} className='form-control' placeholder='Phone Number' />
                        </div>
                        <div className='form-group'>
                            <input type='text' name='password' onChange={handleChange} className='form-control' placeholder='Password' />
                        </div>
                        <div className='align-items-center d-flex form-group justify-content-between'>
                            <button type='button' onClick={formSubmit} className='btn btn-primary'>Register</button>
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
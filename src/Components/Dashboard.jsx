import React, {useEffect} from "react";
import { useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux"
import {logout} from '../Slices/authSlice'
 
const Dashboard = () => {
    const localToken =  JSON.parse(localStorage.getItem("localToken"));
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    
    const logoutbtn =()=>{
        dispatch(logout())
        localStorage.clear();
        if(localStorage.getItem("localToken") === null){
            navigate("/login")
        }
    }
   
    if(localToken !== null){
        return(
            <>
                <h1>Dashboard - {localToken}</h1>
                <button onClick={logoutbtn} className="btn btn-danger">Logout</button>
            </>
        )
    }
    
}

export default Dashboard
import React, {useEffect} from "react";
import { useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux"
import {logout} from '../Slices/authSlice'
 
const Dashboard = () => {
    const localinfo =  JSON.parse(localStorage.getItem("localInfo"));
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    
    const logoutbtn =()=>{
        dispatch(logout())
        localStorage.clear();
        if(localStorage.getItem("localInfo") === null){
            navigate("/login")
        }
    }
   
    if(localinfo !== null){
        return(
            <>
                <h1>Dashboard - {localinfo.username}</h1>
                <button onClick={logoutbtn} className="btn btn-danger">Logout</button>
            </>
        )
    }
    
}

export default Dashboard
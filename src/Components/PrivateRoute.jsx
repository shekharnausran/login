import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../Components/isLogin'

const PrivateRoute = ({ children }) => {
    

    // If isLogin(), return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogin() ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
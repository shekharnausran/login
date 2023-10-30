import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../Components/isLogin'

const PublicRoute = ({children}) => {

    return isLogin() ? <>{children}</> : <Navigate to="/login" />;
};

export default PublicRoute;
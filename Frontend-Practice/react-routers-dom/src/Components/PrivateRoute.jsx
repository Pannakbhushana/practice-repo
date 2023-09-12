import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function PrivateRoute({children}) {
    const {state}=useContext(AuthContext);

    if(!state){
        return <Navigate to="/login" />
    }
    return children
  
}

export default PrivateRoute

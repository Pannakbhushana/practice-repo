import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthConteext';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({children}) {
    const {auth}=useContext(AuthContext);

    if(auth){
        return children;
    }

    return <Navigate to="/login" />
}

export default PrivateRoutes

import React from 'react';
import {Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

function PrivateRoute({children}) {
    const {state}=useContext(AuthContext);

    if(state){
        return children
    }
    return <Navigate to="/login" />
  
}

export default PrivateRoute

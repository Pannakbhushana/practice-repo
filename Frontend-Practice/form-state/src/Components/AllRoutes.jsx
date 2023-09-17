import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import Users from '../Pages/Users';
import SinglePage from '../Pages/SinglePage';
import Login from '../Pages/Login';
import PageNotFound from '../Pages/PageNotFound';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>} />
        <Route path='/users/:id' element={<PrivateRoute><SinglePage/></PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

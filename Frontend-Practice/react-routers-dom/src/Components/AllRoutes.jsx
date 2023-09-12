import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SingleProducrPage from '../Pages/SingleProducrPage';
import PageNotFound from '../Pages/PageNotFound';
import Users from '../Pages/Users';
import PrivateRoute from './PrivateRoute';


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/users/:id' element={<SingleProducrPage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

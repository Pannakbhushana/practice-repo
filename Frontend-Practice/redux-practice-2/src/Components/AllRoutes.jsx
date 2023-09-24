import React from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Users from '../Pages/Users';
import SinglePage from '../Pages/SinglePage';
import PageNotFound from '../Pages/PageNotFound';
import LoginPage from '../Pages/LoginPage';
import PrivateRoutes from './PrivateRoutes';

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/users' element={<PrivateRoutes><Users/></PrivateRoutes>} />
        <Route path='/users/:id' element={<SinglePage/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes

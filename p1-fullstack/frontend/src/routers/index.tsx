import {Route, Routes} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PostPage } from "../pages/PostPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import SignUp from "../pages/SignUp";
import AdminPage from "../pages/AdminPage";
import PrivateRoute from "./PrivateRoute";
import LogIn from "../pages/LogIn";
import Debouncing from "../pages/Debouncing";
import Throttling from "../pages/Throttling";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post" element={<PrivateRoute><PostPage/></PrivateRoute>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/debounce" element={<Debouncing/>}/>
        <Route path="/throtling" element={<Throttling/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/post/:id" element={<PostDetailsPage/>}/>
        <Route path="/product/:id" element={<ProductDetailsPage/>}/>
    </Routes>
}

export default Routers
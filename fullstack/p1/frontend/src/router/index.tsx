import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { LogIn } from "../pages/Login";
import { SignUp } from "../pages/Signup";
import { PostDetails } from "../pages/PostDetails";

const Router = () => {
    return <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/post/:id" element={<PostDetails/>}/>
    </Routes>
}

export default Router
import {Route, Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { PostDetailsPage } from "../pages/PostDetailsPage";

export const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<PostDetailsPage/>}/>
    </Routes>
}
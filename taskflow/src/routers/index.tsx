import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage";

const Routers = () =>{
    return <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage/>} />
    </Routes>
}

export default Routers
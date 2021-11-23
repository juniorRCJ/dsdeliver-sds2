import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";



function RoutesConfig() {
    return(
        <BrowserRouter> 
            <Navbar />
            <Routes>
                <Route path="/orders" element={<Orders />} />
                    <Orders />
                
                <Route path="/" element={<Home />} />
                    <Home />
                
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesConfig;
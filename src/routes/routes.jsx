import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../document/home/home'
import Sersa from "../document/sersa/sersa";
import Single from "../document/single/single";



function Routess() {
      return  (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/tanlanganlar" element={<Sersa />} />
        </Routes>
      )
    
    
}

export default Routess;
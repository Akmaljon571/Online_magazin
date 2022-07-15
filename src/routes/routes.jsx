import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../document/home/home'
import Karzinka from "../document/karzinka/karzinka";
import Sersa from "../document/sersa/sersa";
import Single from "../document/single/single";



function Routess() {
      return  (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/tanlanganlar" element={<Sersa />} />
            <Route path="/karzinka" element={<Karzinka />} />
        </Routes>
      )
    
    
}

export default Routess;
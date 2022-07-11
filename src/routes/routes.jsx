import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../document/home/home'
import Single from "../document/single/single";

// const Home = lazy(() => import('../document/home/home'))
// const Single = lazy(() => import('../document/single/single'))


function Routess() {
      return  (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
        </Routes>
      )
    
    
}

export default Routess;
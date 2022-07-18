import { Route, Routes } from "react-router-dom";
import Home from '../document/home/home'
import Karzinka from "../document/karzinka/karzinka";
import Sersa from "../document/sersa/sersa";
import Single from "../document/single/single";
import Token from "../document/token/token";
import Tolov from "../document/tolov/tolov";
import Error from "../page/error/error";



function Routess() {
      return  (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/tanlanganlar" element={<Sersa />} />
            <Route path="/karzinka" element={<Karzinka />} />
            <Route path="/tolov" element={<Tolov />} />
            <Route path="/dastavka" element={<Token />} />
            <Route path="/*" element={<Error />} />
        </Routes>
      )
    
    
}

export default Routess;
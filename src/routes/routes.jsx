import { Route, Routes } from "react-router-dom";
import Admin from "../components/admin/admin";
import Home from '../document/home/home'
import Karzinka from "../document/karzinka/karzinka";
import Sersa from "../document/sersa/sersa";
import Single from "../document/single/single";
import Token from "../document/token/token";
import Tolov from "../document/tolov/tolov";
import useStart from "../hooks/useStart";
import Error from "../page/error/error";



function Routess() {
  const { tokenJson } = useStart()
  console.log(tokenJson);
      return  (
        <Routes>
            <Route path="/" element={tokenJson ? <Admin/> : <Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/tanlanganlar" element={<Sersa />} />
            <Route path="/karzinka" element={<Karzinka />} />
            <Route path="/tolov" element={<Tolov />} />
            <Route path="/dastavka" element={<Token />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<Error />} />
        </Routes>
      )
    
    
}

export default Routess;
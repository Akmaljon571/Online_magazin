import { useContext } from "react";
import { State } from '../content/state'


function useStart() {
   const { sersa, setSersa, karzinka, setKarzinka, baza, setBaza, render, setRender, single, setSingle, collapsed, setCollapsed, til, setTil, tanla, setTanla } = useContext(State)

    return { 
       sersa,
       setSersa,
       karzinka,
       setKarzinka,
       baza,
       setBaza,
       render,
       setRender,
       single,
       setSingle,
       collapsed,
       setCollapsed,
       til,
       setTil,
       tanla,
       setTanla
    };
}

export default useStart;
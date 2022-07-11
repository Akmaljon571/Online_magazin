import { useContext } from "react";
import { State } from '../content/state'


function useStart() {
   const { sersa, setSersa, karzinka, setKarzinka, baza, setBaza } = useContext(State)

    return { 
       sersa,
       setSersa,
       karzinka,
       setKarzinka,
       baza,
       setBaza
    };
}

export default useStart;
import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    const [sersa, setSersa] = useState(1);  // sersa bosilishini sanash
    const [karzinka, setKarzinka] = useState(2);  // karzinkaga nechta tovar ketayotganini sanash
    const [baza, setBaza] = useState(kereli);
    const data  ={
        sersa,
        setSersa,
        karzinka,
        setKarzinka,
        baza,
        setBaza
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
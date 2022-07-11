import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    let renerUchun = kereli.filter((key) => {
        if (key.name == 'Kiyim') {
            return key
        }
    })
    const [sersa, setSersa] = useState(1);  // sersa bosilishini sanash
    const [karzinka, setKarzinka] = useState(2);  // karzinkaga nechta tovar ketayotganini sanash
    const [baza, setBaza] = useState(kereli); // ummumiy data malumotlari
    const [render, setRender] = useState(renerUchun); // render boladigan state filter
    const [single, setSingle] = useState({}); // single pagega otish
    const data  ={
        sersa,
        setSersa,
        karzinka,
        setKarzinka,
        baza,
        setBaza,
        render,
        setRender,
        single,
        setSingle
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
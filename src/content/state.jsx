import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    let renerUchun = kereli.filter((key) => {
        if (key.title == 'kiyim') {
            return key
        }
    })
    const [sersa, setSersa] = useState(1);  // sersa bosilishini sanash
    const [karzinka, setKarzinka] = useState(2);  // karzinkaga nechta tovar ketayotganini sanash
    const [baza, setBaza] = useState(kereli); // ummumiy data malumotlari
    const [render, setRender] = useState(renerUchun); // render boladigan state filter
    const [single, setSingle] = useState({}); // single pagega otish
    const [collapsed, setCollapsed] = useState(true); // menu button ochilib yopilishi uchun
    const [til, setTil] = useState('uz') // til tanlash uchun state;

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
        setSingle,
        collapsed,
        setCollapsed,
        til,
        setTil
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
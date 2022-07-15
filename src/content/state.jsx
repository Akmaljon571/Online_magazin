import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    let renerUchun = kereli.filter((key) => {
        if (key.title == 'kiyim') {
            return key
        }
    })
    const [sersa, setSersa] = useState(false);  // sersa bosilishini sanash
    const [tanla, setTanla] = useState([]); // sersa tanlaganlarni yigish uchun
    const [karzinka, setKarzinka] = useState([]);  // karzinkaga nechta tovar ketayotganini sanash
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
        setTil,
        tanla,
        setTanla
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {
    let renerUchun = kereli.filter((key) => {
        if (key.title === 'kiyim') {
            return key
        } 
        return false
    })

    let local = JSON.parse(localStorage.getItem('sersa'))
    let Kar = JSON.parse(localStorage.getItem('karzinka'))
    let localtrus = JSON.parse(localStorage.getItem('trus'))
    
    const [sersa, setSersa] = useState(local || []);  // sersa bosilishini sanash
    const [tanla, setTanla] = useState(local || []); // sersa tanlaganlarni yigish uchun
    const [karzinka, setKarzinka] = useState(Kar || []);  // karzinkaga nechta tovar ketayotganini sanash
    const [baza, setBaza] = useState(kereli); // ummumiy data malumotlari
    const [render, setRender] = useState(renerUchun ? renerUchun : []); // render boladigan state filter
    const [single, setSingle] = useState({}); // single pagega otish
    const [collapsed, setCollapsed] = useState(true); // menu button ochilib yopilishi uchun
    const [til, setTil] = useState('uz') // til tanlash uchun state;
    const [search, setSearch] = useState(false); // Search uchun
    const [trus, setTrus] = useState(localtrus || []);
    // const [hero, setHero] = useState(true); // hero ochilib yopilishi uchun
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
        setTanla,
        search,
        setSearch,
        trus,
        setTrus
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
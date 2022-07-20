import { createContext, useState } from "react";
import kereli from "../kereli";

export const State = createContext()

export const StatePriveder = ({ children }) => {

    let renerUchun = kereli.filter((key) => {
        if (key.title === kereli[0].title) {
            return key
        } 
        return false
    })
    const token = JSON.parse(localStorage.getItem('token'))
    let local = JSON.parse(localStorage.getItem('sersa'))
    let Kar = JSON.parse(localStorage.getItem('karzinka'))
    let localtrus = JSON.parse(localStorage.getItem('trus'))
    let Dark = JSON.parse(localStorage.getItem('dark'))
    
    const [tokenModal, setTokenModal] = useState(false);  // token kelganda modal ochilib yopilishi
    const [sersa, setSersa] = useState(local || []);  // sersa bosilishini sanash
    const [tokenJson, setTokenJosn] = useState(token || null);  // jsondagi token keelish yoki kelmasligi
    const [tanla, setTanla] = useState(local || []); // sersa tanlaganlarni yigish uchun
    const [karzinka, setKarzinka] = useState(Kar || []);  // karzinkaga nechta tovar ketayotganini sanash
    const [baza, setBaza] = useState(kereli); // ummumiy data malumotlari
    const [render, setRender] = useState(renerUchun ? renerUchun : []); // render boladigan state filter
    const [single, setSingle] = useState({}); // single pagega otish
    const [collapsed, setCollapsed] = useState(true); // menu button ochilib yopilishi uchun
    const [til, setTil] = useState('uz') // til tanlash uchun state;
    const [search, setSearch] = useState(false); // Search uchun
    const [trus, setTrus] = useState(localtrus || []);
    const [dark, setDark] = useState(Dark || 'oq');
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
        setTrus,
        dark,
        setDark,
        tokenJson,
        setTokenJosn,
        tokenModal,
        setTokenModal
    }


    return <State.Provider value={data}>{ children }</State.Provider>
}
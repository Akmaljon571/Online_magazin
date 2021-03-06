import { useContext } from "react";
import { State } from '../content/state'


function useStart() {
   const { sersa, setSersa, karzinka, setKarzinka, baza, setBaza, render, setRender, single, setSingle, collapsed, setCollapsed, til, setTil, tanla, setTanla, search, setSearch, setTrus, trus, dark, setDark, tokenJson, setTokenJosn, tokenModal, setTokenModal } = useContext(State)

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
    };
}

export default useStart;
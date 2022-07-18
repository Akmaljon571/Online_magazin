import useStart from '../../hooks/useStart';
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'antd';
import React from 'react'
import Language from '../../language';
import './sersa.scss'
import language from '../../language';
import tolliq from '../../img/800px-Heart_corazón.svg.png'


function Sersa() {
    const { setSingle, tanla, til, trus, setTanla, setTrus } = useStart()
    const navigate = useNavigate()
    const single = (evt, id) => {
        if (evt.target.classList[0] !== 'bi') {
          setSingle(id)
          navigate('/single')
        }
       }

       const tolliqSersa = (id) => {
           let trusCopy = trus.filter(kk => {
             if (kk !== id.id) {
                return kk
             }
             return false
           })
           setTrus(trusCopy)

           let tanlaCopy = tanla.filter(key => {
            if (key.id !== id.id) {
              return key
            }
            return false
           })
           setTanla(tanlaCopy)
       }


       React.useEffect(() => {
        window.localStorage.setItem('sersa', JSON.stringify(tanla))
        window.localStorage.setItem('trus', JSON.stringify(trus))
      }, [tanla, trus]);

    return ( 
    <>
       {tanla.length === 0 ? 
        <div className="bosh">
           <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" fill="currentColor" className="bi bi-heart bosh_img" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
          <h2 className="bosh_h2">
          {language[til].tanlanganar}
          </h2>
          <p className="bosh_p">
          {language[til].lekin}
          </p>
          <Link to={'/'} className="bosh_btn">
           {language[til].mahsulot}
          </Link>
        </div>
       
       
       
       
       
       
       : 
          <ul className="kiyim_list">            
          {tanla.map(item => (
              <li key={item.id} onClick={(evt) => single(evt, item)} className="sersa_item">
                {item.eskiNarx ? <Badge.Ribbon text="Aksiya" color="green">
                  </Badge.Ribbon> : ''}
              <div className="kiyim_nav">
              <img src={tolliq} onClick={() => tolliqSersa(item)} className='bi boshSersa' alt="sersa" />
    
              <img src={item.img1} height='237' className='kiyim_image' width='219' alt="" />
              </div>
              <div className="kiyim_narx">
                  <h3 className='kiyim_h3'>{item.name}</h3>
                  <div className="kiyim_sp">
                    <span className="kiyimNarx">{item.narx} {Language[til].som}</span>
                    {
                      item.eskiNarx ? <span className="kiyimEski">{item.eskiNarx} {Language[til].som}</span> : ''
                    }
                    
                  </div>
              </div>
              </li>
          ))}
          </ul>}
    </>
    );  
}

export default Sersa;
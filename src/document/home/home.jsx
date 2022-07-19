import useStart from '../../hooks/useStart';
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { Badge, Empty } from 'antd';
import Language from '../../language';
import boshSersa from '../../img/images.png'
import TolliqSersa from '../../img/800px-Heart_corazón.svg.png'
import React from 'react';

function Home() {
  const { render, setSingle, tanla, setTanla, search, til, trus, setTrus } = useStart()
  
    
    const navigate = useNavigate()
    const single = (evt, id) => {
       if (evt.target.classList[0] !== 'bi') {
         setSingle(id)
         navigate('/single')
       } 
      }
      
      const sersaPush = (id, evt) => {
        if (evt.target.src === boshSersa) {
           evt.target.src = TolliqSersa
           setTanla([id, ...tanla])
           setTrus([id.id, ...trus])

        } else if (evt.target.src === TolliqSersa) {
          let san = tanla.filter(key => {
            if (key.id === id.id) {
               setTrus(trus.filter(kk => {
                  if (kk !== key.id) {
                    return kk
                  }
                  return false
                }))
            }
            if (key.id !== id.id) {
              return key
            } 
            evt.target.src = boshSersa
            return false
          })
          
          setTanla(san ? san : []);
        }
      }
        
        React.useEffect(() => {
          window.localStorage.setItem('sersa', JSON.stringify(tanla))
          window.localStorage.setItem('trus', JSON.stringify(trus))
        }, [tanla, trus]);
        

    return ( 
       <>
        {search ? <Empty className='Empy' /> :
        <>
          {render.map(key => (
            <div key={key.name} className="kiyim">
                <h1 className='kiyim_h1'>{key.name}</h1>
                <ul className="kiyim_list">
                
                {key.obj.slice(0, 12).map(item => (
                    <li key={item.id} onClick={(evt) => single( evt, item)} className="kiyim_item">
                       {item.eskiNarx ? <Badge.Ribbon text="Aksiya" color="green">
                        </Badge.Ribbon> : ''}
                     <div className="kiyim_nav">

                      <span className='bi' onClick={(evt) => sersaPush(item, evt)}>
                         <img src={trus.includes(item.id) ? TolliqSersa : boshSersa} className='bi boshSersa' width={20} height={20} alt="dc" />
                      </span>  
                      
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
                </ul>
                
                
            </div>
          ))}
          </>
        }
       </>
     );
}

export default Home;
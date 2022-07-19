import './hero.scss'
import React, { useState, useEffect } from 'react'
import useStart from '../../hooks/useStart'
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';



function Hero() {
  const { baza, setRender, render } = useStart()
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then(response => response.json())
    //         .then(json => setBaza(json))
    // }, []); // buni backend kelgandan keyin togilash kere
    // let data

    let rendercopy = (evt) => {
      let data = baza.filter(key => {
        if (key.title === evt.target.id) {
          return key
        } 
        return false
      })
      setRender(data ? data : [])
      navigate('/')
    }

    return ( 
        <div className='hero_ota'>
        <div className="hero">
            
            {baza.slice(0, 8).map((key) => (
              <div key={key.name} className='hero_image'>
                 <Image
                 preview={{
                   visible: false,
                 }}
                 width={70}
                 height={70}
                 className='hero_img'
                 src={key.img1}
                 onClick={() => setVisible(true)}
               />
               <div
                 style={{
                     display: 'none',
                    }}
                    >

                 <Image.PreviewGroup
                   preview={{
                       visible,
                       onVisibleChange: (vis) => setVisible(vis),
                    }}
                    >
                    
                   {key.obj.map(item => (
                      <Image  key={item.id} src={item.img1} />
                   ))}
                  </Image.PreviewGroup>
                 </div>
                 <h2 onClick={rendercopy} id = {key.title} className={render[0].title === key.title ? 'hero_h2 footer_active' : 'hero_h2'}>{key.name}</h2>
               </div>
            ))}

        </div>
        </div>
     );
}

export default Hero;
import useStart from '../../hooks/useStart';
import locaion from '../../img/location.png'
import qalam from '../../img/qalam.png'
import arrow from '../../img/arrow.png'
import Language from '../../language';
import { useState, useEffect, useRef } from 'react';
import './tolov.scss'
import language from '../../language';
import { useNavigate } from 'react-router-dom';


function Tolov() {
    const [bot, setBot] = useState({
      token: null,
      chatId: null,
      data: null
    });
    const select = useRef()
    const shahar = useRef()
    const tuman = useRef()
    const uy = useRef()
    const padez = useRef()
    const nomer = useRef()
    const { karzinka, til } = useStart()
    const [jami, setJami] = useState(0);
    const navigate = useNavigate()
    const inputNumber = (evt) => {
        if (evt.target.value.includes('_')) {
            
        } else {
            if (evt.target.value.length === 13) {
                let code1 = evt.target.value.charAt(4)
                let code = evt.target.value.charAt(5)
                let raqam1 = evt.target.value.charAt(6)
                let raqam2 = evt.target.value.charAt(7)
                let raqam3 = evt.target.value.charAt(8)
                let raqam4 = evt.target.value.charAt(9)
                let raqam5 = evt.target.value.charAt(10)
                let raqam6 = evt.target.value.charAt(11)
                let raqam7 = evt.target.value.charAt(12)
                console.log(evt.target.value.length);
                evt.target.value = `+998(${code1}${code})${raqam1}${raqam2}${raqam3}_${raqam4}${raqam5}_${raqam6}${raqam7}`
             } 
        }
    }

    useEffect(() => {
      if (bot.token) {
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatId}&parse_mode=html&text=${bot.data}`)
        navigate('/dastavka')
      }
    }, [bot]);
 
    useEffect(() => {
        let data = 0
        karzinka.map(key => {
          return data = data + key.narx
        })
        setJami(data)
    }, [setJami, karzinka]);


    let dastavka = () => {
      if (select.current.value !== '' && shahar.current.value !== '' && nomer.current.value !== '') {
        setBot({
         token: '5510105965:AAEzPKl2j0jz6mUcxryNt9Z2aFVpcNmvmVo',
         chatId: '1772591765',
         data: `
           Viloyat: ${select.current.value} \n,
           Shahar: ${shahar.current.value},
           uy: ${uy.current.value},
           padez: ${padez.current.value},
           nomer: ${nomer.current.value},
           buyurtma_jami summa: ${jami},
           buyurtma nomi: ${karzinka.map(key => key.name)}
        `});
      } else {
        alert('toldir')
      }

    }


    return ( 
        <>
           <div className="tolov">
             <h2 className="tolov_h2">
              {language[til].zakaz}
             </h2> 
                <div className="tolov_otas">
                    <div className="tolov_left">
                      <div className="tolov_header">
                        <h3 className="tolov_header--h3">{language[til].dastavka}</h3>
                        <p className='tolov_header--p'>{jami} {Language[til].som}</p>
                      </div>
                      <div className="tolov_main">
                        <img src={locaion} className='tolov_main--image' alt="nmadur ekan" />
                        <p className='tolov_main--p'>{language[til].locat}</p>
                      </div>
                      <div className="tolov_footer">
                        <div className="tolov_footer--select--otas">
                        <select ref={select} className='tolov_footer--select' required>
                            <option value="Toshkent shahar">Toshkent Shahar</option>
                            <option value="Toshkent viloyat">Toshkent Viloyat</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Xorazm">Xorazm</option>
                            <option value="Namangan">Namangan</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Qashqadaryo">Qashqadaryo</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Sirdaryo">Sirdaryo</option>
                            <option value="Surxondaryo">Surxondaryo</option>
                        </select>
                        <img src={arrow} className='tolov_footer--select--img' alt="arrow" />
                        </div>
                        <label htmlFor="payon" className='tolov_footer--label'>
                            <input ref={shahar} type="text" required className='tolov_footer--rayon'placeholder={language[til].uy} />
                            <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                        </label>
                        <div className="label_otas">
                            <label htmlFor="payon" className='tolov_footer--label'>
                                <input ref={tuman} type="text" required className='tolov_footer--rayon--left'  placeholder={language[til].tuman} />
                                <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                            </label>
                            <label htmlFor="payon" className='tolov_footer--label'>
                                <input ref={uy} type="text" className='tolov_footer--rayon--rigth' placeholder={language[til].padez} />
                                <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                            </label>
                        </div>
                        <label htmlFor="payon" className='tolov_footer--label--'>
                            <input ref={padez} type="text" required className='tolov_footer--rayon--bottom' placeholder={language[til].kvartira} />
                            <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                        </label>
                      </div>
                    </div>

                    <div className="royxat">
                         <div className="royxat_header">
                             <div className="royxat_header--h2">
                               {language[til].vash}
                             </div>
                             {karzinka.map(key => (
                                    <div key={key.id} className='royxat_header--nav'>
                                        <span className="royxat_header--name">
                                            {key.name}
                                        </span>
                                        <span className="royxat_header--narx">
                                            {key.narx} {Language[til].som}
                                        </span>
                                    </div>
                             ))}
                            
                         </div>
                         <div className="royxat_main">
                             <h2 className="royxat_main--h2">
                               {language[til].tolov}
                             </h2>
                             <a href='/' className='royxat_main--telegram'>
                                {language[til].tg}
                             </a>
                             <a href='/' className='royxat_main--telegram'>
                                {language[til].insta}
                             </a>
                         </div>
                         <div className="royxat_footer">
                           <h2 className='royxat_footer--raqam'>{language[til].qabul}</h2>
                           <input ref={nomer} onChange={inputNumber} type="text" className='royxat_footer--nomer' placeholder='+998__ ___ __ __' />
                         </div>
                         <button onClick={dastavka} className="royxat_btn">{language[til].berish} </button>
                    </div>
                </div>
           </div>
        </>
     );
}

export default Tolov;
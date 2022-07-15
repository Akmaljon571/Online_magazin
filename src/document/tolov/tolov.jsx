import useStart from '../../hooks/useStart';
import locaion from '../../img/location.png'
import qalam from '../../img/qalam.png'
import arrow from '../../img/arrow.png'
import { useState, useEffect } from 'react';
import './tolov.scss'

function Tolov() {
    const { karzinka } = useStart()
    const [jami, setJami] = useState(0);

    const inputNumber = (evt) => {
        if (evt.target.value.includes('_')) {
            
        } else {
            if (evt.target.value.length == 13) {
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
        let data = 0
        karzinka.map(key => {
          data = data + key.narx
        })
        setJami(data)
    }, [setJami]);


    return ( 
        <>
           <div className="tolov">
             <h2 className="tolov_h2">
              Оформление заказа
             </h2> 
                <div className="tolov_otas">
                    <div className="tolov_left">
                      <div className="tolov_header">
                        <h3 className="tolov_header--h3">Доставка курьером</h3>
                        <p className='tolov_header--p'>{jami} so'm</p>
                      </div>
                      <div className="tolov_main">
                        <img src={locaion} className='tolov_main--image' alt="image" />
                        <p className='tolov_main--p'>Адрес доставки</p>
                      </div>
                      <div className="tolov_footer">
                        <div className="tolov_footer--select--otas">
                        <select className='tolov_footer--select'>
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
                            <input type="text" className='tolov_footer--rayon' placeholder='Улица / Район' />
                            <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                        </label>
                        <div className="label_otas">
                            <label htmlFor="payon" className='tolov_footer--label'>
                                <input type="text" className='tolov_footer--rayon--left' placeholder='Дом' />
                                <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                            </label>
                            <label htmlFor="payon" className='tolov_footer--label'>
                                <input type="text" className='tolov_footer--rayon--rigth' placeholder='Подъезд' />
                                <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                            </label>
                        </div>
                        <label htmlFor="payon" className='tolov_footer--label--'>
                            <input type="text" className='tolov_footer--rayon--bottom' placeholder='Квартира' />
                            <img src={qalam} className="tolov_footer--qalam" alt="alt" />
                        </label>
                      </div>
                    </div>

                    <div className="royxat">
                         <div className="royxat_header">
                             <div className="royxat_header--h2">
                               Ваш заказ
                             </div>
                             {karzinka.map(key => (
                                    <div key={key.id} className='royxat_header--nav'>
                                        <span className="royxat_header--name">
                                            {key.name}
                                        </span>
                                        <span className="royxat_header--narx">
                                            {key.narx} so'm
                                        </span>
                                    </div>
                             ))}
                            
                         </div>
                         <div className="royxat_main">
                             <h2 className="royxat_main--h2">
                               Способ оплаты
                             </h2>
                             <a href='/' className='royxat_main--telegram'>
                                Adminni orqali tolov qilish
                             </a>
                             <a href='/' className='royxat_main--telegram'>
                                Bot orqali tolov qilish
                             </a>
                         </div>
                         <div className="royxat_footer">
                           <h2 className='royxat_footer--raqam'>Номер получателя</h2>
                           <input onChange={inputNumber} type="text" className='royxat_footer--nomer' placeholder='+998__ ___ __ __' />
                         </div>
                         <button className="royxat_btn">Закончить оформление</button>
                    </div>
                </div>
           </div>
        </>
     );
}

export default Tolov;
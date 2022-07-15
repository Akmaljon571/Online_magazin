import useStart from "../../hooks/useStart";
import {Link} from 'react-router-dom'
import { useState } from "react";
import udalit from '../../img/udalit.png'
import './karzinka.scss'
import kar from '../../img/Иллюстрация.png'

function Karzinka() {
    const { karzinka } = useStart()
    const [sanoq, setSanoq] = useState(1);
    console.log(karzinka);
    return ( 
        <>
           {karzinka.length == 0 ?  <div className="bosh">
           <img src={kar} alt="" />
          <h2 className="bosh_h2">
          Корзина пуста
          </h2>
          <p className="bosh_p">
          Но это никогда не поздно исправить :)
          </p>
          <Link to={'/'} className="bosh_btn">
          В каталог товаров
          </Link>
          </div> : 
            <div className="sotuv">
                <h2 className="sotuv_h2">
                  Корзина
                </h2>

                {karzinka.map(key => (
                    <div key={key.id} className="sotuv_ota">
                    <div  className="sotuv_left">
                        <div  className="sotuv_header">
                            <img className="sotuv_header--img" src={key.img1} width={146} height={136} alt="img" /> 
                            <div className="sotuv_header--div">
                                <span className="sotuv_header--minus">
                                    -
                                </span>
                                <span className="sotuv_header--sanoq">{sanoq}</span>
                                <span className="sotuv_header--plus">+</span>
                            </div>
                        </div> 
                        <div className="sotuv_main">
                            <h2 className="sotuv_main--h2">{key.name}</h2>
                            <p className="sotuv_main--p">{key.narx} so'm</p>
                        </div>
                        <div className="sotuv_footer">
                            <img src={udalit} className='sotuv_footer--udalit' alt="" />
                            <p className="sotuv_footer--narx">{key.narx} so'm</p>
                        </div>
                    </div>
                    <div className="sanoq_rigth">
                        <div className="sanoq_rigth--header">
                            <div className="sanoq_rigth--top">
                                <h2 className="sanoq_rigth--h2">
                                  ИТОГО
                                </h2>
                                <p className="sanoq_rigth--p">
                                    {key.narx} so'm
                                </p>
                            </div>
                                <button className="sanoq_bottom--btn">
                                    Перейти к оформлению
                                </button>
                        </div>
                        <div className="sanoq_rigth--footer">
                            <div className="sanoq_rigth--top">
                                <h2 className="sanoq_rigth--h2">
                                  Admin 
                                </h2>
                                <p className="sanoq_rigth--p">
                                    +998900456961
                                </p>
                            </div>
                                <Link to='#' className="sanoq_bottom--link ">
                                    +998900456961
                                </Link>                
                        </div>
                    </div>
                    </div>
                ))}
            </div>
          }
        </>
     );
}

export default Karzinka;
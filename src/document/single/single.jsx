import useStart from "../../hooks/useStart";
import Language from '../../language'
import { useNavigate, Link } from "react-router-dom";
import "./single.scss";
import language from "../../language";
import { useEffect } from "react";
import boshSersa from '../../img/images.png'
import TolliqSersa from '../../img/800px-Heart_corazón.svg.png'

function Single() {
  const { single, karzinka, til, setKarzinka, tanla, setTanla, setTrus, trus, } = useStart();
  const navigate = useNavigate()
  const btnKarzinka = () => {
    setKarzinka([...karzinka, single]);
    navigate('/karzinka')
  }

  const sersaPush = (id, evt) => {
    if (evt.target.src == boshSersa) {
       evt.target.src = TolliqSersa
       setTanla([id, ...tanla])
       setTrus([id.id, ...trus])

    } else if (evt.target.src == TolliqSersa) {
      let san = tanla.filter(key => {
        if (key.id === id.id) {
           setTrus(trus.filter(kk => {
              if (kk !== key.id) {
                return kk
              }
            }))
        }
        if (key.id !== id.id) {
          return key
        } 
        evt.target.src = boshSersa
      })
      
      setTanla(san);
    }
  }
  useEffect(() => {
    window.localStorage.setItem('sersa', JSON.stringify(tanla))
    window.localStorage.setItem('trus', JSON.stringify(trus))
  }, [tanla, trus]);

  return (
    <>
      <div className="single">
        <h1 className="single_h1">{single.name}</h1>
        <ul className="single_list">
          <li className="single_item">
          <span className='bi' onClick={(evt) => sersaPush(single, evt)}>
            <img src={trus.includes(single.id) ? TolliqSersa : boshSersa} className='bi boshSersa' width={20} height={20} alt="dc" />
          </span> 
            <div className="single_header">
              <img
                src={single.img1}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img2}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img3}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img4}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img5}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img6}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
            </div>
            <div className="single_footer">
              <h2 className="single_name">{single.name}</h2>
              <div className="single_narx">
                <span className="single_narx1">{single.narx} {Language[til].som}</span>
                <div className="single_narx2"><span className="single_narxChiziq"></span>{single.eskiNarx}</div>
              </div>
            </div>
          </li>
        </ul>
        <div className="single_data">
          <div className="single_left">
             <div className="single_left--header">
             {language[til].sifat}
             </div>
             <div className="single_left--main">
              <span>
                Активное шумоподавление: Нет
              </span>
              <span>
                Вес: 10 гр
              </span>
              <span>
                Влагозащита: Нет
              </span>
              <span>
                Длина кабеля: 1.2 м
              </span>
             </div>
          </div>
          <div className="single_btn">
            <Link to={'/tolov'} onClick={btnKarzinka}  className="single_btn--btn">{language[til].sot}</Link>
             <button onClick={btnKarzinka} className="single_btn--svg">
              <img src={karzinka} className='single_btn--svg--img' alt="" />
              {language[til].qosh}
             </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;

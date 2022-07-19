import './fixed.scss'
import { Link } from 'react-router-dom'
import tg from '../../img/Telegram_2019_Logo.svg.png'
import insta from '../../img/Instagram_logo_2016.svg.webp'
import web from '../../img/RU.png'
import admin from '../../img/62667.png'


function Fixed() {
    return ( 
        <div className="fixed">
           <Link className='internet'  to={'/'}>
            <img src={tg} className='internet'  alt="" />
           </Link>
           <Link className='internet'  to={'/'}>
            <img src={insta} className='internet'  alt="" />
           </Link>
           <Link className='internet'  to={'/'}>
            <img src={web} className='internet'  alt="cc" />
           </Link>
           <a className='internet'  href="tel:+998900456961">
            <img src={admin} className='internet'  alt="" />
           </a>
        </div>
     );
}

export default Fixed;
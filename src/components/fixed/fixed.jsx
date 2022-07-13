import './fixed.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Fixed() {
    const [menu, setMenu] = useState(false);
    


    return(
        <div id='1' className={menu ? 'fixed fixed_bg' : "fixed"}>
             <span onClick={() => setMenu(!menu)} className="admin"></span>
             {menu && <>
             <Link className='fixed_tg' to={'/'}>
                 <span ></span>
             </Link>
             <Link className='fixed_insta' to={'/'}>
                <span></span>
             </Link>
             <Link className='fixed_call' to={'/'}>
                <span></span>
             </Link>
             <Link className='fixed_web' to={'/'}>
                <span></span>
             </Link>
             </>}
             
        </div>
    )
}

export default Fixed;
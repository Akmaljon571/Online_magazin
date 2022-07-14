import Fixed from '../../components/fixed/fixed'
import { Link, useNavigate } from 'react-router-dom'
import useStart from '../../hooks/useStart'
import './footer.scss'

function Footer() {
    const { baza, setRender, render, til, setTil } = useStart()
    const navigate = useNavigate()
    const footer_item = (evt) => { 
        let data = baza.filter(key => {
            if (key.title == evt.target.id) {
              return key
            }
          })
          setRender(data)
          navigate('/')
          
    }

    const yazik = (evt) => {
        if (evt.target.textContent === 'O\'zb') {
            setTil('uz')
        } else if (evt.target.textContent === 'Рус') {
            setTil('ru')
        } else if (evt.target.textContent === 'Eng') {
            setTil('en')
        }
    }

    return (
        <footer className="footer">
                <div className="logo_mahina"></div>
                <ul className="footer_list">
                        { baza.slice(0, 8).map(key => (
                            <li key={key.name} className="footer_item">
                                    <h2  onClick={footer_item}  id = {key.title} className={render[0].title == key.title ? 'footer_h1 footer_active' : 'footer_h1'}>{key.name}</h2>
                            </li>
                        ))}
                </ul>
                <div className="footer_til--ota">
                    <h2 className='footer_h3'>Tilni o'zgartirish</h2>
                    <div className="footer_til" onClick={yazik}>
                        <span className='footer_internet'></span>
                        <span className={til == 'uz' ? 'footer_uz uz' : 'footer_uz'}>O'zb</span>
                        <span className={til == 'ru' ? 'footer_uz uz' : 'footer_uz'}>Рус</span>
                        <span className={til == 'en' ? 'footer_uz uz' : 'footer_uz'}>Eng</span>
                    </div>
                </div>
                <div className="footer_ulash">
                <h2 className='footer_h5'>Bog'lanish</h2>
                <div className="img_otas">
                    <Link to={'/'} className="footer_tg"></Link>
                    <Link to={'/'} className="footer_insta"></Link>
                    <Link to={'/'} className="footer_call"></Link>
                    <Link to={'/'} className="footer_web"></Link>
                </div>
                </div>
        </footer>
    )
}

export default Footer
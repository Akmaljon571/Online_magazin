import Fixed from '../../components/fixed/fixed'
import { Link, useNavigate } from 'react-router-dom'
import useStart from '../../hooks/useStart'
import './footer.scss'

function Footer() {
    const { baza, setRender } = useStart()
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
    return (
        <footer className="footer">
                <div className="logo_mahina"></div>
                <ul className="footer_list">
                        { baza.slice(0, 8).map(key => (
                            <li key={key.name} className="footer_item">
                                    <h2  onClick={footer_item}  id = {key.title} className="footer_h1">{key.name}</h2>
                            </li>
                        ))}
                </ul>
                <div className="img_otas">
                    <Link to={'/'} className="footer_tg"></Link>
                    <Link to={'/'} className="footer_insta"></Link>
                    <Link to={'/'} className="footer_call"></Link>
                    <Link to={'/'} className="footer_web"></Link>
                </div>
        </footer>
    )
}

export default Footer
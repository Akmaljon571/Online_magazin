import useStart from '../../hooks/useStart';
import language from '../../language';
import './token.scss'

function Token() {
    const {til} = useStart()
    return ( 
        <div className="token">
            <p className='token_p'>{language[til].token}</p>
        </div>
     );
}

export default Token;
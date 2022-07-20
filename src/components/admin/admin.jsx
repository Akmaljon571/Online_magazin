import { useEffect } from 'react';
import useStart from '../../hooks/useStart';
import Header from '../../page/header/header';
import './admin.scss'

function Admin() {
    const {tokenJson} = useStart()
    useEffect(() => {
        if (tokenJson) {
          localStorage.setItem("token", JSON.stringify(tokenJson));
          console.log(tokenJson);
        }
      }, [tokenJson]);

    return ( <Header /> );
}

export default Admin;
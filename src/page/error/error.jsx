import './error.scss'
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate()
   let btn = () => {
    navigate('/')
   }

    return ( 
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={btn} type="primary">Back Home</Button>}
        />
     );
}

export default Error;
import { Headers, Main, Footer } from './page'
import { Container } from './components'
import Routess from './routes/routes';
import { useNavigate } from 'react-router-dom'
import {
   UploadOutlined,
   SkinOutlined,
 } from '@ant-design/icons';
 import { Layout, Menu } from 'antd';
 import React from 'react';
 import kereli from './kereli';
import useStart from './hooks/useStart';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
 
 function User() {
  const shef = React.useRef();
   const { Header, Sider, Content } = Layout;
   const { collapsed, setCollapsed, baza, setRender, render, til, setTil } = useStart()
   const navigate = useNavigate()
   const menuClose = (evt) => {
      if (evt.target.className === 'logo_bg') {
         setCollapsed(!collapsed)
      }
   }

   let rendercopy = (evt) => {
    let data = baza.filter(key => {
      console.log(evt.key, '9');
        if (key.id === (evt.key - 0) && evt.key !== '9') {
          navigate('/')
          return key
        } else if (evt.key === '9') {
          navigate('/error')
          return render
        }
        return false
      })
      console.log(data);
    setRender(data ? data : render)
    setCollapsed(!collapsed)
  }

  const select_til = () => {
    setTil(shef.current.value);
  };


    return ( 
      <Container>
      <Layout>
      <Sider onClick={menuClose} trigger={null}   collapsed={collapsed}>
         {collapsed ? 
         '' : <>
         <span className='logo_bg'></span>
        <div className='logoDad'>
           <div className="logoMenu"></div>
           <select ref={shef} value={til} className="layOut_til" onChange={select_til}>
            <option value="uz">🇺🇿 Uz</option>
            <option value="ru">🇷🇺 Ru</option>
            <option value="en">🇱🇷 En</option>
          </select>
        </div>
        </>}
        

        
        <Menu
          theme="dark"
          mode="inline"
          onClick={rendercopy}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <SkinOutlined />,
              label: `${kereli[0].name}`,
            },
            {
            key: '2',
            icon: <SkinOutlined />,
              label: `${kereli[1].name}`,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: `${kereli[2].name}`,
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: `${kereli[3].name}`,
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: `${kereli[4].name}`,
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: `${kereli[5].name}`,
            },
            {
              key: '7',
              icon: <UploadOutlined />,
              label: `${kereli[6].name}`,
            },
            {
              key: '8',
              icon: <UploadOutlined />,
              label: `${kereli[7].name}`,
            },
            {
              key: '9',
              icon: <UploadOutlined />,
              label: 'Profile',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
          <Headers/>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Main>
            <Routess />
          </Main>
          <Footer></Footer>
        </Content>
       </Layout>
      </Layout>
      </Container>
     );
}

export default User;
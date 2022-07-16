import { Headers, Main, Footer } from './page'
import { Container } from './components'
import Routess from './routes/routes';
import {
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined,
 } from '@ant-design/icons';
 import { Layout, Menu } from 'antd';
 import React from 'react';
 import kereli from './kereli';
import useStart from './hooks/useStart';
 
 
 function User() {
   const { Header, Sider, Content } = Layout;
   const { collapsed, setCollapsed } = useStart()

   const menuClose = (evt) => {
      if (evt.target.className === 'logo_bg') {
         setCollapsed(!collapsed)
      }
   }

    return ( 
      <Container>
      <Layout>
      <Sider onClick={menuClose} trigger={null}   collapsed={collapsed}>
         {collapsed ? 
         '' : <>
         <span className='logo_bg'></span>
        <div className='logoDad'>
           <div className="logoMenu"></div>
           <div onClick={() => setCollapsed(!collapsed)} className='logo_X logo_s'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#333" className="bi bi-arrow-right logo_s" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
           </svg></div>
        </div>
        <div className='logo_footer'></div>
        </>}
        

        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: `${kereli[0].name}`,
            },
            {
            key: '2',
            icon: <VideoCameraOutlined />,
              label: `${kereli[1].name}`,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'hozirhca',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
        >
          {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })} */}
          <Headers/>
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

{/* <Container>
         <div className='leftContainer'>
            <Layout />
         </div>
         <div className='miniContainer'>
         <Header />
         <Main>
            <Routess />
         </Main>
         <Footer />
         </div>
        </Container> */}
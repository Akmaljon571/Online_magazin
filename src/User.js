import { Headers, Main, Footer } from './page'
import { Container } from './components'
import Routess from './routes/routes';
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
import Hijab from './hijab';
 
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

        </div>
        </>}
        

        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <SkinOutlined />,
              label: `${kereli[0].name}`,
            },
            {
            key: '2',
            icon: <Hijab />,
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
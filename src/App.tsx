import React, { FC } from 'react';
import 'antd/dist/antd.dark.css';
import { Layout, Menu, Typography as Typo } from 'antd';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <div className="App">
      <Header className="mainHeader">
        <div className="logo">Jesse Medrano</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About Me</Menu.Item>
          <Menu.Item key="3">Projects</Menu.Item>
        </Menu>
      </Header>
      <Content></Content>
    </div>
  );
};

export default App;

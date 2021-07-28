import React, { FC } from 'react';
import 'antd/dist/antd.dark.css';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import { Home, AboutMe, Projects } from './views';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <div className="App">
      <Header className="mainHeader">
        <NavBar />
      </Header>
      <Content className="mainContent">
        <div className="mainContent__background">
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/" component={Home} />
        </div>
      </Content>
    </div>
  );
};

export default App;

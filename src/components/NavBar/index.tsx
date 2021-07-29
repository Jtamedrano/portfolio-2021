import React from 'react';
import { Menu, Row } from 'antd';
import { useHistory } from 'react-router-dom';

interface Props {}

const index = (props: Props) => {
  const history = useHistory();

  const handleGoTo = (route: string) => {
    history.push(`/${route || ''}`);
  };

  return (
    <Row className="NavBar_container">
      <div className="logo">Jesse Medrano</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${history.location.pathname}`]}
      >
        <Menu.Item key="/" onClick={() => handleGoTo('')}>
          Home
        </Menu.Item>
        <Menu.Item key="/about-me" onClick={() => handleGoTo('about-me')}>
          About Me
        </Menu.Item>
        <Menu.Item key="/projects" onClick={() => handleGoTo('projects')}>
          Projects
        </Menu.Item>
      </Menu>
    </Row>
  );
};

export default index;

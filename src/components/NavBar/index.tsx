import React from 'react';
import { Menu, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

interface Props {}

const index = (props: Props) => {
  const history = useHistory();

  const handleGoTo = (route: string) => {
    history.push(`/${route || ''}`);
  };

  return (
    <nav className="max-width">
      <Row className="NavBar_container" gutter={16} justify="space-between">
        <Col>
          <div className="NavBar_logo">Jesse Medrano</div>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[`${history.location.pathname}`]}
          >
            <Menu.Item key="/" onClick={() => handleGoTo('')}>
              Home
            </Menu.Item>
            <Menu.Item key="/projects" onClick={() => handleGoTo('projects')}>
              Projects
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </nav>
  );
};

export default index;

import React from 'react';
import { Menu, Space } from 'antd';
import { useHistory } from 'react-router-dom';

interface Props {}

const index = (props: Props) => {
  const history = useHistory();

  const handleGoTo = (route: string) => {
    history.push(`/${route || ''}`);
  };

  return (
    <Space direction="horizontal">
      <div className="logo">Jesse Medrano</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => handleGoTo('')}>
          Home
        </Menu.Item>
        <Menu.Item key="2" onClick={() => handleGoTo('about-me')}>
          About Me
        </Menu.Item>
        <Menu.Item key="3" onClick={() => handleGoTo('projects')}>
          Projects
        </Menu.Item>
      </Menu>
    </Space>
  );
};

export default index;

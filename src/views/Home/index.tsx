import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Text, Title } = Typography;

interface Props {}

const index = (props: Props) => {
  return (
    <Space direction="vertical" align="center">
      <Title>Jesse Medrano</Title>
      <Text>Full Stack Software Engineer</Text>
      <Text>Greater Los Angeles Area, California</Text>
      <Button type="primary">Projects</Button>
    </Space>
  );
};

export default index;

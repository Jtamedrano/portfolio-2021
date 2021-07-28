import React, { FC, useState } from 'react';
import { Space, Row, Col, Typography } from 'antd';

import ProjectCard from './ProjectCard';

const { Text, Title } = Typography;

const index: FC = () => {
  const [projects] = useState(() => [
    { title: 'Richard Arnold for Oregon' },
    { title: 'Symplee.App' },
    { title: 'Story Squad' },
    { title: 'Javascript Lifestyle' },
    { title: 'Portfolio' },
  ]);
  return (
    <Space direction="vertical">
      <Title>Projects</Title>
      <Row gutter={16}>
        <Space wrap={true}>
          {projects.map(({ title }, i) => {
            return <ProjectCard key={`project__${i + 1}`} title={title} />;
          })}
        </Space>
      </Row>
    </Space>
  );
};

export default index;

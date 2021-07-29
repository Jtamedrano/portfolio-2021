import React, { FC, useState } from 'react';
import { Space, Row, Col, Typography } from 'antd';

import richImg from '../../imgs/rich-card-logo.png';
import symImg from '../../imgs/symplee-card-logo.png';
import storyImg from '../../imgs/story-card-logo.png';
import jslImg from '../../imgs/jsl-card-logo.png';
import jmImg from '../../imgs/jm-card-logo.png';

import ProjectCard from './ProjectCard';

const { Text, Title } = Typography;

const index: FC = () => {
  const [projects] = useState(() => [
    { title: 'Richard Arnold for Oregon', image: richImg },
    { title: 'Symplee.App', image: symImg },
    { title: 'Story Squad', image: storyImg },
    { title: 'Javascript Lifestyle', image: jslImg },
    { title: 'Jtamedrano.com', image: jmImg },
  ]);

  return (
    <Space direction="vertical">
      <Title>Projects</Title>
      <Row>
        <Space wrap={true}>
          {projects.map((cardInfo, i) => {
            return (
              <ProjectCard key={`project__${i + 1}`} cardInfo={cardInfo} />
            );
          })}
        </Space>
      </Row>
    </Space>
  );
};

export default index;

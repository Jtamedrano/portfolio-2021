import React, { FC } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface IProjectCard {
  title: string;
}

const ProjectCard: FC<IProjectCard> = ({ title }) => {
  return (
    <Card hoverable className="projectCard">
      <Meta title={title} />
    </Card>
  );
};

export default ProjectCard;

import React, { FC } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface IProjectCard {
  cardInfo: {
    title: string;
    image: string;
  };
}

const ProjectCard: FC<IProjectCard> = ({ cardInfo }) => {
  const { image, title } = cardInfo;

  return (
    <Card
      hoverable
      className="projectCard"
      cover={<img alt={`${title} logo`} src={image} />}
    >
      <Meta title={title} />
    </Card>
  );
};

export default ProjectCard;

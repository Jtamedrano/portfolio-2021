import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const ProjectCard = ({ title, description, live, git, id }) => (
  <Card
    id={id}
    className="projects__card"
    actions={[
      live ? (
        <a href={live} target="_blank" rel="noreferrer">
          Live
        </a>
      ) : (
        <p>Live Not Available</p>
      ),
      git ? (
        <a href={git} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : (
        <p>Private Repo</p>
      ),
    ]}
  >
    <Meta
      title={title}
      description={description}
      className="projects__card_body"
    />
  </Card>
);

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__background">
        <div className="projects__content max_content">
          <div className="projects__text">
            <h2>Projects</h2>
          </div>
          <div className="projects__rows">
            <ProjectCard
              title="Family Real Estate Network"
              live="https://frenhomes.com/"
              description="Real Estate Brokerage Application, designed to navigate traffic to contact broker."
            />
            <ProjectCard
              live="https://richarnoldfororegon.com/"
              git="https://github.com/Jtamedrano/RICH-A-FRONTEND"
              title="Richard Arnold For Oregon"
              description="Political campaign for a position on a school board. React, Google Firebase, and Stripe included"
            />
            <ProjectCard
              id="Cardalance"
              title="Cardalance"
              live="https://cardalance.com/"
              description="Personal Finance and Budgeting Web Application. React.JS/Typescript Frontend and Microservice Backend using Kotlin and Spring Boot."
            />
            <ProjectCard
              title="New Evolution Digital"
              live="https://newevo.dev"
              description="Corporate Landing Page for New Evolution Digital, a Software Development Freelance Partnership."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

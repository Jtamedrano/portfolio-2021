import React from "react";
import { Card, Row, Col } from "antd";
// import { Link } from "gatsby";
const { Meta } = Card;

const ProjectCard = ({ title, description, live, git }) => (
  <Col span={8}>
    <Card
      className="projects__card"
      actions={[
        live ? (
          <a href={live} target="_blank">
            Live
          </a>
        ) : (
          <p>Live Not Available</p>
        ),
        git ? (
          <a href={git} target="_blank">
            GitHub
          </a>
        ) : (
          <p>Private Repo</p>
        ),
      ]}
    >
      <Meta title={title} description={description} />
    </Card>
  </Col>
);

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__background">
        <div className="projects__content max_content">
          <div className="projects__text">
            <h2>Projects</h2>
            {/* <p>
              Here is a list of projects and commissions. 
			  For a more detailed
              list, <Link to="/projects">click here</Link>
            </p> */}
          </div>
          <div className="projects__rows">
            <Row gutter={16} className="projects__row" align="stretch">
              <ProjectCard
                title="Symplee.App"
                live="https://symplee.app"
                description="Messaging Application - Main features include Chat/Audio/Video Communication."
              />
              <ProjectCard
                live="https://richarnoldfororegon.com/"
                git="https://github.com/Jtamedrano/RICH-A-FRONTEND"
                title="Richard Arnold For Oregon"
                description="Political campaign for a position on a school board. React, Google Firebase, and Stripe included"
              />
              <ProjectCard
                title="New Evolution Digital"
                live="https://newevo.dev"
                description="Corporate Landing Page for New Evolution Digital, a Software Development Freelance Partnership."
              />
            </Row>
            {/* <Row gutter={16} className="projects__row">
              <ProjectCard
                title="E-Commerce"
                description="Project Description Here"
              />
              <ProjectCard
                title="Real Estate Broker"
                description="Project Description Here"
              />
              <ProjectCard
                title="Sales CRM"
                description="Project Description Here"
              />
            </Row> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

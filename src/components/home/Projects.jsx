import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "gatsby";
const { Meta } = Card;

const ProjectCard = ({ title, description }) => (
  <Col span={8}>
    <Card
      className="projects__card"
      actions={[<p>Live</p>, <p>GitHub</p>, <p>Details</p>]}
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
                description="Messaging Application - Main features include Chat/Audio/Video Communication."
              />
              <ProjectCard
                title="Richard Arnold For Oregon"
                description="Political campaign for a position on a school board. Wordpress, Next, and Stripe included"
              />
              <ProjectCard
                title="New Evolution Digital"
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

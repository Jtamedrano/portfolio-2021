import React from 'react';
import './style.scss';
interface Props {}

const projects = [
  'Basic CRM',
  'Med Cabinet',
  'Basic Todo',
  'Water My Plant',
  'Amazon Clone',
];

const Projects = (props: Props) => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {!!projects &&
        projects.map((project, i) => <p key={`P-${i}`}>{project}</p>)}
    </section>
  );
};

export default Projects;

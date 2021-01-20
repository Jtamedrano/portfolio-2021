import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

const ProjectItem = (props) => {
  const { projectName } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    const search = projectName.replaceAll('-', ' ');
    const foundProject = projects.find(
      (project) => project.name.toLowerCase() === search.toLowerCase()
    );
    if (foundProject) {
      setProject(foundProject);
    }
    return () => {
      setProject({});
    };
  }, [projectName]);

  if (project.name)
    return (
      <div className="project-item">
        <h3 className="project-item-header">{project.name}</h3>
        <div className="project-item-content">
          <div className="project-item-image-wrapper">
            <img src={project.image_url} className="" alt="" />
          </div>
          <div className="project-item-text-wrapper">
            <div className="project-item-text-group">
              <h4 className="project-item-text-group-header">
                Project Description
              </h4>
              <div className="project-item-text-group-content">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-item-text-group">
              <h4 className="project-item-text-group-header">
                What makes this project special
              </h4>
              <ul className="project-item-text-group-content">
                {project.key_features.map((feat) => (
                  <li className="">{feat}</li>
                ))}
              </ul>
            </div>
            <div className="project-item-text-group">
              <h4 className="project-item-text-group-header">
                Technologies Used
              </h4>
              <ul className="project-item-text-group-content">
                {project.tech.map((tech, i) => (
                  <li key={`tech-${i}`} className="">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-item-text-group">
              <h4 className="project-item-text-group-header">Links</h4>
              <ul className="project-item-text-group-content">
                <a href={project.github_link} className="">
                  <li>GitHub</li>
                </a>
                <a href={project.url} className="">
                  <li>Go To App</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  else return <></>;
};

export default ProjectItem;

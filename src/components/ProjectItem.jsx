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
        <div className="project-item-image-wrapper">
          <img src={project.image_url} className="" alt="" />
        </div>
        <div className="project-item-text-wrapper">
          <div>
            <h3 className="">{project.name}</h3>
            <h4 className="">{project.description}</h4>
          </div>
          <hr className="" />
          <div>
            <h5 className="">What makes this project special</h5>
            <ul className="">
              {project.key_features.map((feat) => (
                <li className="">{feat}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="">Technologies Used</h5>
            <ul className="">
              {project.tech.map((tech, i) => (
                <li key={`tech-${i}`} className="">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="">Links</h5>
            <ul className="">
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
    );
  else return <></>;
};

export default ProjectItem;

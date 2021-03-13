import React from "react";
import "./style.scss";
interface Props {}

const projectsNames = [
  "Amazon Clone",
  "African Market",
  "Water My Plant",
  "Basic Todo",
];

const projectInfo = [
  {
    id: 1,
    name: "Amazon Clone",
    link: "clone-7b00a.web.app/",
    git: "https://github.com/Jtamedrano/amazon-clone",
    quickDescription: "A e-commerce site meant to replicate amazon.",
    tech: ["React", "Redux", "Google Firebase"],
  },
  {
    id: 2,
    name: "African Market",
    link: "https://med-cabinet-dusky.vercel.app/",
    git: "https://github.com/Build-Week-Med-Cabinet3/UI",
    quickDescription: "A sample medicinal cannabis search app.",
  },
  {
    id: 3,
    name: "Water My Plants",
    link: "https://med-cabinet-dusky.vercel.app/",
    git: "https://github.com/Build-Week-Med-Cabinet3/UI",
    quickDescription: "A sample medicinal cannabis search app.",
  },
  {
    id: 4,
    name: "Basic Todo App",
    link: "",
    git: "https://github.com/Build-Week-Med-Cabinet3/UI",
    quickDescription: "A sample medicinal cannabis search app.",
  },
];

const Projects = (props: Props) => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {/* {!!projectsNames &&
        projectsNames.map((project, i) => <p key={`P-${i}`}>{project}</p>)} */}
      {!!projectInfo &&
        projectInfo.map((project, i) => {
          const rootClass = project.name.replace(" ", "");
          return (
            <div
              id={`projectSummary${project.id}`}
              key={`projectSummary${project.id}`}
              className={`projectSummary ${rootClass}`}
            >
              <div className="projectSummary_imageContainer">Gallary</div>
              <div className="projectSummary_text">
                <h3>{project.name}</h3>
                <div className="projectSummary_linkRack">
                  <a href={project.link}>Project</a>
                  <a href={project.git} className="gitHub-btn">
                    Github
                  </a>
                </div>
                <div>{project.quickDescription}</div>
                <div>
                  {!!project.tech && (
                    <p>
                      Built with{" "}
                      {project.tech.map((tech, i) => (
                        <span key={`tech-span-${project.name}-${i + 1}`}>
                          {tech}
                          {i === project.tech.length - 1 ? "." : ", "}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Projects;

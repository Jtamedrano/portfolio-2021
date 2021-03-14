import { MouseEvent, useContext } from "react";
import { IContext, PageContext } from "../../PageContextProvider";

interface ProjectView {
  project: {
    id: number;
    name: string;
    link: string;
    git: string;
    quickDescription: string;
    tech?: string[];
    additionalComment?: string;
  };
}

const Project = ({ project }: ProjectView) => {
  const context = useContext(PageContext) as IContext;
  const rootClass = project.name.replace(" ", "");

  const handleGallaryClick = (e: MouseEvent) => {
    e.preventDefault();
    if (!!context.setModalState) context.setModalState(true);
  };

  return (
    <div
      id={`projectSummary${project.id}`}
      className={`projectSummary ${rootClass}`}
    >
      <div
        className="projectSummary_imageContainer"
        onClick={handleGallaryClick}
      >
        Gallary
      </div>
      <div className="projectSummary_text">
        <h3>{project.name}</h3>
        <div className="projectSummary_linkRack">
          <a href={project.link} className="project-btn">
            Project
          </a>
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
                  {!!project.tech && i === project.tech.length - 1 ? "." : ", "}
                </span>
              ))}
            </p>
          )}
        </div>
        <p className="projectDisclaimer">
          {!!project.additionalComment && project.additionalComment}
        </p>
      </div>
    </div>
  );
};

export default Project;

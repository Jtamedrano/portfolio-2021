import React from "react";
import cx from "classnames";

interface CardProps {
  id?: string;
  className?: string;
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  id,
  className,
  children,
}) => (
  <div id={id} className={cx("relative w-full flex flex-col", className)}>
    {children}
  </div>
);

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  desktopImage?: string;
  mobileImage?: string;
  live?: string;
  id?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  outcomes,
  id,
  desktopImage,
  mobileImage,
}) => (
  <div className="gap-4 w-full py-4">
    <Card id={id} className="">
      <div className="mb-4">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-lg font-light mb-4">{subtitle}</p>
        <p className="text-lg font-light mb-4">{description}</p>
        <ul className="list-disc list-inside">
          {(outcomes ?? []).map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 h-1/2 justify-end flex-1">
        <div className="flex-2/3">
          {desktopImage && (
            <img
              src={desktopImage}
              alt={title}
              className="object-center w-full h-full border-4 border-gray-600 rounded-md shadow-md"
            />
          )}
        </div>
        <div>
          {mobileImage && (
            <img
              src={mobileImage}
              alt={title}
              className="object-center w-auto h-full border-4 border-gray-600 rounded-md shadow-md"
            />
          )}
        </div>
      </div>
    </Card>
  </div>
);

const PROJECT_LIST = [
  {
    title: "Radical Pressure Washing",
    subtitle: "A Web Revamp for Lead Generation",
    describe:
      "Radical Pressure Washing needed a more effective website to showcase their services. The old site lacked clear calls to action, had minimal service details, and wasn’t mobile-friendly. I implemented a modern design using Next.js and Strapi CMS, added before-and-after imagery, introduced simple contact methods, and included SEO optimizations. The one-month build, involving just one design session and a few minor revisions, dramatically improved both performance and user engagement.",
    outcomes: [
      "SEO score rose from 39 to 92",
      "Accessibility rating jumped from 25 to 99",
      "Completed in just one month",
      "Zero email bounces via a direct “mailto” form solution",
      "Client praised the rapid turnaround and immediate lead generation",
    ],
    desktop: "radical-desktop.png",
    mobile: "radical-mobile.png",
    live: "https://www.radicalpressurewash.com/",
  },
  {
    title: "Radical Property Services",
    subtitle: "Repeat customer grows their business",
    describe: "A landing page website for a property maintenance company.",
    live: "https://radicalpropertymgmt.com",
  },
  {
    title: "Polo Massage",
    subtitle: "A web presence for a start-up massage therapist",
    describe: "A landing page website for a massage therapist.",
    live: "https://polomassage.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold tracking-tight mb-12 text-primary sticky top-2 z-[60]">
        Projects
      </h2>
      {PROJECT_LIST.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          description={project.describe}
          live={project.live}
          desktopImage={project.desktop}
          mobileImage={project.mobile}
          outcomes={project.outcomes ?? []}
        />
      ))}
    </div>
  );
};

export default Projects;

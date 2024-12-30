import React from "react";
import { ProjectCard } from "./ProjectCard";

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
    live: "https://www.radicalpressurewash.com/",
  },
  {
    title: "Radical Property Services",
    subtitle: "Repeat customer grows their business",
    describe: "A landing page website for a property maintenance company.",
    desktop: "pmgmt-desktop.png",
    live: "https://radicalpropertymgmt.com",
  },
  {
    title: "Polo Massage",
    subtitle: "A web presence for a start-up massage therapist",
    describe: "A landing page website for a massage therapist.",
    desktop: "polo-desktop.png",
    live: "https://polomassage.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold tracking-tight mb-12 text-primary">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROJECT_LIST.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            desktopImage={project.desktop}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

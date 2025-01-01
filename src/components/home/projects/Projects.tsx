import React from "react";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

const PROJECT_LIST = [
  {
    slug: "From Scratch",
    title: "Startup Launch",
    description:
      "Designed, developed and deployed a new webpage for a startup, launched two weeks before expected deadline.",
    desktop: "/polo-desktop.png",
    keyPoints: [
      "Designed a modern, visually appealing layout from concept",
      "Developed responsive, mobile-first functionality",
      "Created engaging copy and visuals to attract leads",
    ],
    technologies: ["React", "Next.js", "Google Api"],
  },
  {
    slug: "Website Upgrade",
    title: "Landing Page Revamp",
    description:
      "Revamped an outdated landing page to enhance engagement with 0% bounce rate from email contact form.",
    desktop: "/radical-desktop.png",
    keyPoints: [
      "Designed a modern layout aligned with brand identity",
      "Included Content Management System Integration",
      "Improved mobile responsiveness",
    ],
    technologies: ["React", "Next.js", "Strapi CMS"],
  },
  {
    slug: "Enterprise Application",
    title: "Applications for the Masses",
    description:
      "Worked on various apps, from webforms to complex enterprise level systems designed for thousands of users.",
    keyPoints: [
      "Built a robust, scalable architecture to handle complex workflows",
      "Developed user-friendly interfaces for internal teams",
      "Ensured security and compliance with industry standards",
    ],
    technologies: [
      "Typescript",
      "Kotlin",
      "MySQL",
      "MongoDB",
      "Jenkins",
      "etc.",
    ],
    desktop: "/enterprise_imagery.png",
  },
];

const Projects = () => {
  return (
    <section className="bg-slate-900">
      <div className="py-8 bg-slate-800">
        <div className="container mx-auto flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">
            Projects
          </h2>
          <p className="text-lg font-light text-slate-300">
            Here are some highlights from my recent projects. These are public
            websites that I&apos;ve built from scratch or revamped to improve.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-8 flex flex-col lg:flex-row gap-4">
        {PROJECT_LIST.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            desktopImage={project.desktop}
            slug={project.slug}
            keyPoints={project.keyPoints}
            technologies={project.technologies}
          />
        ))}
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-8 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-slate-100">
            Have a project in mind? Let&apos;s bring it to life!
          </h3>
          <Link
            href="/contact"
            className="bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-xl font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
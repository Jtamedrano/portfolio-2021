import Image from "next/image";
import { AnalyticLink } from "../../Analytics/AnalyticLink";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  desktopImage: string;
  keyPoints: string[];
  technologies: string[];
  url?: string;
  isBlank?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  desktopImage,
  title,
  slug,
  keyPoints,
  technologies,
  url,
  isBlank,
}) => (
  <div className="flex-1 flex flex-col gap-4">
    <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
      <Image
        src={desktopImage}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="object-cover w-full h-full object-top"
        loading="lazy"
      />
    </div>

    <div className="relative text-slate-100 flex flex-col gap-4 flex-1 h-full">
      <div className="flex flex-col gap-2 items-start">
        <p className="text-sm font-semibold">{slug}</p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-slate-300 leading-tight">{description}</p>
      </div>
      <ul className="list-disc list-inside flex-1 text-slate-300">
        {keyPoints.map((point, index) => (
          <li key={`${slug}-keypoint-${index}`}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold">Technologies</h4>
        <p className="text-slate-300">{(technologies ?? []).join(", ")}</p>
      </div>
      {url && (
        <AnalyticLink
          href={url}
          label="Visit"
          className="underline text-secondary-400 flex items-center gap-2 hover:text-secondary-500 transition-colors duration-300 w-fit"
          eventValue={title}
          eventCategory="visit_project"
          target={isBlank ? "_blank" : undefined}
        />
      )}
    </div>
  </div>
);

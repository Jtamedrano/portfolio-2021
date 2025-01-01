import Image from "next/image";
import { FaEye } from "react-icons/fa6";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  desktopImage: string;
  keyPoints: string[];
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  desktopImage,
  title,
  slug,
  keyPoints,
  technologies,
}) => (
  <div className="flex-1 flex flex-col gap-4">
    <div className="w-full h-[200px] bg-black0">
      <Image
        src={desktopImage}
        alt={title}
        width={400}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>

    <div className="relative text-slate-100 flex flex-col gap-4">
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
        <p className="text-slate-300">{technologies.join(", ")}</p>
      </div>
    </div>
  </div>
);
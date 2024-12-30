import { FaEye } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  desktopImage?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  desktopImage,
}) => (
  <div className="relative w-full rounded-md shadow-md group cursor-default transition-all duration-500">
    <div className="relative h-full transition-all duration-500 z-10 rounded-md overflow-hidden">
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-85 group-hover:bg-opacity-50 transition-all duration-500">
        <img
          src={desktopImage}
          alt={title}
          className="object-cover w-full h-full opacity-10 group-hover:opacity-80 transition-all duration-500"
        />
      </div>

      <div className="p-4 relative z-10 text-white bg-black/30 text-center group-hover:opacity-0 transition-all duration-500">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-lg font-light mb-4">{subtitle}</p>
      </div>
    </div>
    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:-bottom-12 transition-all ease-in-out duration-500">
      <button className="bg-accent text-white py-2 px-4 rounded-full inline-flex items-center justify-center gap-2 mt-4 font-semibold">
        <FaEye className="inline-block" /> View
      </button>
    </div>
  </div>
);

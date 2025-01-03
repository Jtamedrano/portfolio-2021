import cx from "classnames";
import { AnalyticLink } from "../Analytics/AnalyticLink";
interface ServiceItemProps {
  className?: string;
  title: string;
  description: string;
  keyFeatures: string[];
  image: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  className,
  description,
  image,
  keyFeatures,
  title,
}) => {
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={cx("flex flex-col gap-8 py-4", className)}>
      <div className="h-[300px] bg-white">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-2xl font-bold text-secondary-900">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-secondary-900">
            Includes
          </h3>
          <ul className="list-disc list-inside leading-6">
            {(keyFeatures ?? []).map((feature, idx) => (
              <li key={`feature-${idx}`}>{feature}</li>
            ))}
          </ul>
        </div>
        <AnalyticLink
          href={`/contact?service=${encodedTitle}`}
          label="Schedule"
          className="bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-lg font-semibold hover:bg-secondary-800 transition-colors duration-300 text-center w-full lg:w-fit"
          eventValue={title}
          eventCategory="schedule_service"
        />
      </div>
    </div>
  );
};

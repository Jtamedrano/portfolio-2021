import cs from "classnames";

interface BannerProps {
  title: string;
  description?: string;
  className?: string;
}

export const Banner: React.FC<React.PropsWithChildren<BannerProps>> = ({
  title,
  description,
  className,
  children,
}) => {
  return (
    <section
      className={cs("bg-gradient-to-br from-blue-300 to-blue-400", className)}
    >
      <div className="container flex flex-col lg:flex-row justify-center items-center self-stretch mx-auto py-4 px-4 xl:px-0 gap-12 overflow-hidden">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold tracking-tight uppercase text-pretty">
            {title}
          </h2>
          {description && (
            <p className="leading-relaxed flex flex-col text-pretty">
              {description}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

import cx from "classnames";
import React from "react";
interface PageSectionContainerProps {
  className?: string;
  bgClassName?: string;
  bgStyle?: React.CSSProperties;
  containerChildren?: React.ReactNode;
}

const PageSectionContainer: React.FC<
  React.PropsWithChildren<PageSectionContainerProps>
> = ({ children, className, containerChildren, bgClassName, bgStyle }) => {
  return (
    <section className={cx(bgClassName)} style={bgStyle}>
      <div
        className={cx(
          "container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0",
          className
        )}
      >
        {children}
      </div>
      {containerChildren}
    </section>
  );
};

export default PageSectionContainer;

"use client";

import Link from "next/link";
import { logEvent } from "../../utilities/logEvent";

interface AnalyticLinkProps extends React.ComponentProps<typeof Link> {
  href: string;
  label: string;
  className?: string;
  eventValue: string;
  eventCategory?: string;
}

export const AnalyticLink: React.FC<AnalyticLinkProps> = ({
  href,
  label,
  className,
  eventValue,
  eventCategory,
  ...rest
}) => {
  const handleClick = () => {
    logEvent(
      "click",
      "link",
      (eventCategory ?? label).toLowerCase().replaceAll(" ", "_"),
      eventValue
    );
  };

  return (
    <Link
      {...rest}
      href={href}
      className={className}
      onClick={handleClick}
      onMouseDown={handleClick}
    >
      {label}
    </Link>
  );
};

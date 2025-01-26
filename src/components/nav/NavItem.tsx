"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

interface NavItemProps {
  label: string;
  to: string;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  to,
  className = "navItem",
}) => {
  const pathMane = usePathname();
  return (
    <li className={className}>
      <Link
        href={to}
        className={cx(
          "text-lg hover:text-secondary transition-colors duration-300",
          {
            "text-secondary underline": pathMane === to,
          }
        )}
      >
        {label}
      </Link>
    </li>
  );
};

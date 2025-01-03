import Link from "next/link";

interface NavItemProps {
  label: string;
  to: string;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  to,
  className = "navItem",
}) => (
  <li className={className}>
    <Link
      href={to}
      className="text-lg hover:text-secondary transition-colors duration-300"
    >
      {label}
    </Link>
  </li>
);

import Link from "next/link";
import { Fragment } from "react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
      {items.map((item, index) => (
        <Fragment key={item.href}>
          {index > 0 && <span>/</span>}
          <Link
            href={item.href}
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {item.label}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
};

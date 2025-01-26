import Link from "next/link";
import { Fragment } from "react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex space-x-2 text-sm text-gray-500">
      {items.map((item, index) => (
        <Fragment key={item.href}>
          {index > 0 && <span>/</span>}
          <Link href={item.href}>{item.label}</Link>
        </Fragment>
      ))}
    </nav>
  );
};

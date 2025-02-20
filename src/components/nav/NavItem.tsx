"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface NavItemProps {
  label: string;
  to: string;
  flyoutLabel?: string;
  flyoutItems?: { label: string; to: string; description: string }[];
  className?: string;
}

const BaseNavItem: React.FC<NavItemProps> = ({
  label,
  to,
  className = "navItem",
}) => {
  const pathMane = usePathname();

  return (
    <li
      className={cx(
        "text-lg hover:text-secondary transition-colors duration-300",
        className
      )}
    >
      <Link
        href={to}
        className={cx({
          "text-secondary underline": pathMane === to,
        })}
      >
        {label}
      </Link>
    </li>
  );
};

export const NavItem: React.FC<NavItemProps> = ({
  label,
  to,
  className = "navItem",
  flyoutItems,
  flyoutLabel,
}) => {
  const pathMane = usePathname();
  if (!flyoutItems || !flyoutItems.length) {
    return <BaseNavItem label={label} to={to} className={className} />;
  }

  return (
    <li className={className}>
      <Popover className="relative">
        {({ close }) => (
          <>
            <PopoverButton
              className={cx(
                "text-lg hover:text-secondary transition-colors duration-300 inline-flex items-center gap-1 ring-0 outline-none",
                {
                  "text-secondary underline": pathMane === to,
                }
              )}
            >
              <span>{label}</span>
              <MdKeyboardArrowDown aria-hidden="true" className="size-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 flex- w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {flyoutItems.map((item) => (
                    <div
                      key={item.to}
                      className="group relative flex gap-x-6 rounded-lg p-4 dark:hover:bg-slate-700 hover:bg-slate-200 transition-colors duration-300"
                    >
                      <div onClick={close}>
                        <Link
                          href={item.to}
                          className="font-semibold text-secondary dark:text-gray-200"
                        >
                          {item.label}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm/5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-700 px-4 py-2" onClick={close}>
                  <BaseNavItem
                    label={flyoutLabel || label}
                    to={to}
                    className="p-4 text-white hover:text-secondary-300"
                  />
                </div>
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </li>
  );
};

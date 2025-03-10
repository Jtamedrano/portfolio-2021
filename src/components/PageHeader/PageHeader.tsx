import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="py-8 bg-gradient-to-br from-secondary-500 to-secondary-700">
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 py-6">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          {title}
        </h1>
        {!!description && (
          <p className="text-lg text-gray-100 dark:text-slate-200">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

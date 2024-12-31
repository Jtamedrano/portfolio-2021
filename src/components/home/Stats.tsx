import React from "react";

interface StatItemProps {
  title: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatItem title="Enterprise Work" value="3 Years" />
          <StatItem title="Freelance Work" value="4 Years" />
          <StatItem title="Users Served" value="10000+" />
        </div>
      </div>
    </section>
  );
};

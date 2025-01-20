import React from "react";

interface StatItemProps {
  title: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex-1 flex flex-col gap-2">
      <h3 className="text-sm font-bold text-slate-800">{title}</h3>
      <p className="text-lg font-bold text-slate-600">{value}</p>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="bg-gray-300">
      <div className="container mx-auto py-8 px-3 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-slate-800">Current Stats</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          <StatItem title="Time In Enterprise" value="3 Years" />
          <StatItem title="Time Freelancing" value="4 Years" />
          <StatItem title="Websites Worked On" value="7 Websites" />
          <StatItem title="Apps Worked On" value="4 Apps" />
        </div>
      </div>
    </section>
  );
};

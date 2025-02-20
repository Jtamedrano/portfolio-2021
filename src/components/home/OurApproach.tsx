import {
  HiArrowTrendingUp,
  HiCodeBracket,
  HiMagnifyingGlass,
  HiPencil,
  HiUser,
} from "react-icons/hi2";
import PageSectionContainer from "../PageContainer/PageContainer";

/**
 * Discovery & Strategy: We’ll learn about your specific services (plumbing, HVAC, landscaping, etc.), target neighborhoods, and customer pain points.
Custom Coding: Using Next.js and Vercel, we develop a website tailored to your goals—no templates, no guesswork.
Local SEO Integration: We craft keyword-optimized content, meta tags, and schema to help you rank higher in search results.
Conversion Optimization: Strategic calls to action, clear contact forms, and mobile-friendly layouts turn visitors into leads.
Ongoing Support: As your business evolves, we’re here to update content, add new features, and ensure your site remains at peak performance.
 */
const listItems = [
  {
    icon: HiMagnifyingGlass,
    title: "Discovery & Strategy",
    description:
      "We’ll learn about your specific services (plumbing, HVAC, landscaping, etc.), target neighborhoods, and customer pain points.",
  },
  {
    icon: HiCodeBracket,
    title: "Custom Coding",
    description:
      "Using Next.js and Vercel, we develop a website tailored to your goals—no templates, no guesswork.",
  },
  {
    icon: HiPencil,
    title: "Local SEO Integration",
    description:
      "We craft keyword-optimized content, meta tags, and schema to help you rank higher in search results.",
  },
  {
    icon: HiArrowTrendingUp,
    title: "Conversion Optimization",
    description:
      "Strategic calls to action, clear contact forms, and mobile-friendly layouts turn visitors into leads.",
  },
  {
    icon: HiUser,
    title: "Ongoing Support",
    description:
      "As your business evolves, we’re here to update content, add new features, and ensure your site remains at peak performance.",
  },
];

export const OurApproach = () => {
  return (
    <PageSectionContainer className="py-20 space-y-8">
      <h2 className="text-4xl font-bold text-secondary-500 dark:text-gray-100 text-center">
        A Proven Process for Growth-Focused Web Design
      </h2>
      <p className="text-lg/7 font-light dark:text-gray-300">
        Our approach to web design is rooted in collaboration, transparency, and
        results. Here&apos;s how we help home service businesses like yours
        stand out online:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-8 bg-secondary-100 dark:bg-slate-800 dark:text-gray-100 rounded-lg shadow-md"
          >
            <item.icon className="size-8 text-secondary-500 dark:text-gray-100" />
            <h3 className="text-xl font-semibold text-secondary-500 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-lg/7 font-light dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </PageSectionContainer>
  );
};

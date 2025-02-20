import Image from "next/image";
import PageSectionContainer from "../PageContainer/PageContainer";

const listItems = [
  {
    title: "Faster Page Speeds",
    description:
      "Clean, custom code with minimal bloat ensures your site loads quickly.",
  },
  {
    title: "Better User Experience",
    description:
      "We design every element to guide visitors towards taking action—whether that’s booking a service or calling you immediately.",
  },
  {
    title: "Enhanced Local SEO",
    description:
      "A custom build allows for much finer control over on-page optimization, giving home service businesses a competitive edge in local search.",
  },
];

export const NoCookieCutters = () => {
  return (
    <PageSectionContainer className="py-20 flex flex-col lg:flex-row gap-24">
      <div className="relative flex-1 rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/images/custom-coded-website.webp"
          alt="Custom website designed for a home service business"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="space-y-8 flex-1">
        <h2 className="text-4xl font-bold text-secondary-500 dark:text-gray-100">
          Why We Don&apos;t Settle for Cookie-Cutter Templates
        </h2>
        <p className="text-lg/7 font-light dark:text-gray-300">
          Many website builders promise convenience, but they often come with
          hidden drawbacks—slow load times, limited customization, and
          lackluster SEO. Our custom-coded approach addresses these pitfalls by:
        </p>
        <ul className="list-disc list-inside text-lg/7 font-light dark:text-gray-300 space-y-2">
          {listItems.map((item, index) => (
            <li key={index}>
              <strong className="font-semibold text-secondary-500 dark:text-gray-100">
                {item.title}
              </strong>{" "}
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageSectionContainer>
  );
};

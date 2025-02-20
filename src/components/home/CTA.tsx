import { AnalyticLink } from "../Analytics/AnalyticLink";
import PageSectionContainer from "../PageContainer/PageContainer";

export const CTA = () => {
  return (
    <PageSectionContainer
      bgClassName="bg-secondary-100 dark:bg-slate-800"
      className="py-20 space-y-8"
    >
      <div className="container mx-auto py-8 flex flex-col lg:flex-row gap-12 justify-between items-center px-3">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-secondary-500 dark:text-slate-100">
            Do you need more calls or leads for your business?
          </h3>
          <p className="text-pretty text-lg/7 font-light dark:text-slate-300 max-w-4xl">
            Stop losing customers to slow, template-based sites. Let’s build a
            custom solution designed to help your home service business dominate
            local search and convert more visitors.
          </p>
        </div>
        <div className="w-max">
          <AnalyticLink
            href="/contact"
            label="Get Your Free Consultation"
            className="bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-xl font-semibold hover:bg-secondary-800 transition-colors duration-300 w-full text-center lg:w-auto"
            eventValue="projects"
          />
        </div>
      </div>
    </PageSectionContainer>
  );
};

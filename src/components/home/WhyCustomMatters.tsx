import PageSectionContainer from "../PageContainer/PageContainer";

export const WhyCustomMatters: React.FC = () => {
  return (
    <PageSectionContainer
      bgClassName="bg-secondary-100 dark:bg-slate-900"
      className="py-20 space-y-8 text-center"
    >
      <h2 className="text-4xl font-bold text-secondary-500 dark:text-gray-100">
        Custom-Coded Websites Deliver Real Results for Home Service Businesses
      </h2>
      <p className="text-lg/7 font-light dark:text-gray-300 max-w-7xl mx-auto">
        Most home service professionals rely heavily on word-of-mouth. But in
        today&apos;s digital landscape, potential clients often look online
        first. By building your website from the ground up with custom
        code—specifically using Next.js and hosting on Vercel—we optimize every
        feature for speed, SEO, and conversion. This means more customers find
        your site, stay longer, and pick up the phone.
      </p>
    </PageSectionContainer>
  );
};

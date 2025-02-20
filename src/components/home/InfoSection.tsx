import { HomePageForm } from "./HomePageForm";

export const InfoSection: React.FC = () => {
  return (
    <section className="py-8 flex justify-between self-stretch items-start">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-24 flex-1 px-3 py-10">
        <div className="relative flex justify-center items-center flex-1">
          {/* Sample Form */}
          <HomePageForm />
        </div>
        <div className="flex flex-col justify-center gap-4 flex-1 text-slate-800 dark:text-slate-200">
          <div className="flex flex-col gap-3">
            <h3 className="text-4xl font-bold text-secondary-500 dark:text-secondary-300">
              How we get businesses to increase their web traffic and lead
              conversion
            </h3>
            <p className="text-lg/8">
              From initial concept to live deployment, I provide a seamless
              process that ensures your website is tailored to your vision and
              built for success.
            </p>
          </div>
          <ul className="list-disc list-inside leading-8 text-base flex flex-col gap-2">
            <li>
              <strong>Custom Design:</strong> Crafted to reflect your brand and
              engage your audience.
            </li>
            <li>
              <strong>Responsive Development:</strong> Websites that look great
              and perform flawlessly on any device.
            </li>
            <li>
              <strong>User-Centric Approach:</strong> Prioritizing intuitive
              navigation and user experience.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> Built with growth in mind to
              adapt to your business needs.
            </li>
            <li>
              <strong>Effortless Deployment:</strong> Launch-ready websites with
              ongoing support for smooth operation.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

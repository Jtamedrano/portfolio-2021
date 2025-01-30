import { HiCheckCircle } from "react-icons/hi2";
import { AnalyticLink } from "../../components/Analytics/AnalyticLink";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ServiceBundle } from "../../components/services/ServiceBundle";
import { BUNDLES_MAP } from "../../models/service";

const BUNDLES = [
  BUNDLES_MAP["starter-bundle"],
  BUNDLES_MAP["growth-bundle"],
  BUNDLES_MAP["enterprise-bundle"],
];

const brandSolutions = [
  {
    title: "Tailored Solutions",
    description:
      "We don't believe in one-size-fits-all. Our services are customized to meet your specific needs.",
  },
  {
    title: "Expertise You Can Trust",
    description:
      "With years of experience in technology and design, we deliver results that drive success.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment to your success doesn't end at launch. We provide continuous support to ensure your business thrives.",
  },
  {
    title: "Proven Results",
    description:
      "We've helped businesses like yours achieve their goals. Let us help you take your brand to the next level.",
  },
];

export const metadata = {
  title:
    "Affordable Web Design Packages for Small Businesses | J Medrano Design",
  description:
    "Get a professional website without breaking the bank. Our website design bundles include hosting, maintenance, and SEO to help your service-based business thrive. Explore our affordable pricing today!",
  keywords:
    "web design, web development, custom website design, website packages, website bundles, affordable web design, small business web design, web design for contractors, web design for real estate agents, web design for service businesses",
};

export default function ServiceBundlesPage() {
  return (
    <>
      <PageHeader
        title="Discover Our Tailored Service Bundles"
        description="At J Medrano Design, we understand that every business has unique needs. That's why we've crafted specialized service bundles to help you achieve your goals efficiently and affordably. Whether you're just starting out or looking to scale, our bundles offer the perfect solution."
      />
      <div className="bg-slate-200 py-12 px-3 xl:px-0 flex-1 flow-root">
        <div className="isolate container grid grid-cols-1 lg:grid-cols-3 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:divide-x lg:divide-y-0">
          {BUNDLES.map((bundle) => (
            <ServiceBundle key={`bundle-${bundle.id}`} bundle={bundle} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-secondary-200 to-secondary-300 py-12">
        <div className="container flex flex-col justify-center self-stretch mx-auto py-8 px-4 xl:px-0 gap-12">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight uppercase text-secondary-700 text-pretty">
            Why Choose J Medrano Design?
          </h3>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
            {brandSolutions.map((solution, index) => (
              <li key={`solution-${index}`} className="flex flex-col gap-4">
                <h4 className="text-2xl lg:text-3xl font-semibold text-pretty">
                  {solution.title}
                </h4>
                <p className="text-lg lg:text-xl text-pretty">
                  {solution.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
            <div className="flex-1">
              <p className="font-semibold">Ready to Elevate Your Business?</p>
              <p>
                Contact us today to learn more about our service bundles and
                find the perfect fit for your business. Let's build something
                amazing together!
              </p>
            </div>
            <AnalyticLink
              href="/contact"
              label="Get Started"
              className="bg-secondary-700 text-slate-100 text-lg lg:text-base py-2 px-8 inline-block rounded-full font-semibold hover:bg-secondary-800 transition-colors duration-300 text-center"
              eventValue="cta"
              eventCategory="contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}

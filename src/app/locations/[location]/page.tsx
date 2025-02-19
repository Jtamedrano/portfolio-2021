import Image from "next/image";
import { AnalyticLink } from "../../../components/Analytics/AnalyticLink";
import PageSectionContainer from "../../../components/PageContainer/PageContainer";
import { locationContent, LOCATIONS } from "../../../constants/nav";
import style from "../../../styles/location.module.css";
import { HiBriefcase, HiCodeBracket, HiWrench } from "react-icons/hi2";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> => {
  const { location } = await params;
  const locationData = LOCATIONS.find((loc) => loc.slug === location);

  if (!locationData) {
    return {
      title: "Location Not Found | J Medrano Design LLC",
      description:
        "Sorry, the page you're looking for cannot be found. We serve a variety of locations in California, including Anaheim, Los Angeles, and Orange County. Contact us today to learn more about our web design services.",
    };
  }

  const locationName = `${locationData.city}, ${locationData.state}`;

  const locationKeywords = [
    "web design",
    "{locationName} web design",
    "web design {locationName}",
    "web design in {locationName}",
    "website design",
    "{locationName} website design",
    "website design {locationName}",
    "website design in {locationName}",
    "web design company",
    "{locationName} web design company",
    "web design company in {locationName}",
    "internet marketing",
    "{locationName} internet marketing",
    "internet marketing {locationName}",
    "best web design",
    "{locationName} best web design",
    "best web design {locationName}",
    "best web design in {locationName}",
    "SEO services in {locationName}",
  ];

  const serviceKeywords = [
    "custom website design",
    "custom web design",
    "responsive web design",
    "responsive design",
    "user-friendly design",
    "web design",
    "web development",
    "website design",
    "service-based business solutions",
    "small business websites",
    "enterprise applications",
    "free website design consultation",
    "scalable web solutions",
    "SEO services",
    "local SEO",
    "SEO optimization",
    "SEO strategies",
    "SEO solutions",
    "Home Service Businesses",
  ];

  return {
    title: `Web Design for Home Service Businesses in ${locationName} | J Medrano Design LLC`,
    description: `"Looking for web design in ${locationName}? J Medrano Design LLC creates high-converting, SEO-friendly websites for Home Service Businesses. Get a free consultation and website audit today!`,
    keywords: Array.from(
      new Set([...locationKeywords, ...serviceKeywords])
    ).join(", "),
    openGraph: {
      title: `Web Design for Home Service Businesses in ${locationName} | J Medrano Design LLC`,
      description: `Data driven web design and development services in ${locationName} with J Medrano Design LLC. Specializing in custom websites and applications for Home Service Businesses. Enhance your online presence with scalable, secure, and visually appealing web solution. Contact us today!`,
      images: [
        {
          url: "https://jmedranodesign.com/location-header.png",
          alt: `Web Design for Home Service Businesses in ${locationName} | J Medrano Design LLC`,
        },
      ],
      type: "website",
      siteName: "J Medrano Design LLC",
    },
  };
};

export const generateStaticParams = async () => {
  return LOCATIONS.map((location) => ({
    location: location.slug,
  }));
};

const LocationPage = async ({
  params,
}: {
  params: Promise<{ location: string }>;
}) => {
  const { location } = await params;

  const locationData = LOCATIONS.find((loc) => loc.slug === location);

  if (!locationData) {
    return {
      status: 404,
    };
  }

  const locationName = `${locationData.city}, ${locationData.state}`;
  const locationDetails = locationContent[location];

  return (
    <div className={style.locationPage}>
      <PageSectionContainer
        bgClassName="bg-gradient-to-br from-slate-700 to-slate-800 relative"
        className="py-16 flex gap-8 items-center justify-between z-10 relative"
        containerChildren={
          <Image
            src="/location-header.png"
            alt={`Web Design Services in {locationName}`}
            fill
            className="object-cover w-auto h-auto opacity-15 grayscale"
          />
        }
      >
        <div className="flex flex-col gap-8 flex-1 py-20">
          <h1 className="text-4xl font-bold text-white">
            {locationDetails.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-5xl">
            {locationDetails.intro}
          </p>
          <AnalyticLink
            href="/contact"
            label="Request a Quote"
            eventValue={`Request a Quote - ${locationName}`}
            eventCategory="CTA"
            className="bg-secondary-500 text-white font-bold px-4 py-2 rounded-md w-fit text-lg hover:bg-secondary-600 transition-colors duration-200"
          />
        </div>
      </PageSectionContainer>

      <PageSectionContainer className="py-16 text-slate-300">
        <h2 className="text-2xl font-bold text-secondary-500 mb-2">
          Why Business in {locationData.city} Need a Professional Website
        </h2>
        <p className="text-lg mb-4">{locationDetails.importance}</p>
        <p className="text-lg mb-4">{locationDetails.whyNeeded}</p>
        <h3 className="text-xl font-bold text-secondary-500 mb-2">
          Benefits of Local SEO
        </h3>
        <p className="text-lg mb-2">{locationDetails.seoBenefits}</p>
        <ul className="list-disc list-inside text-lg">
          <li>Rank higher in search results for location-based searches.</li>
          <li>
            Attract more local customers actively looking for your services.
          </li>
          <li>
            Increase both website traffic and foot traffic to your home service
            business.
          </li>
        </ul>
      </PageSectionContainer>

      <PageSectionContainer
        className="py-16 text-white z-10 relative"
        bgClassName="relative"
        containerChildren={<div className={style.serviceBg} />}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-secondary-400 mb-2">
            Our Web Design Services in {locationName}
          </h2>
          <p className="max-w-5xl mx-auto">
            At J Medrano Design LLC, we offer a variety of web design services
            tailored to the needs of businesses in {locationName}. Our goal is
            to create a website that is as unique as your business, ensuring it
            stands out in the competitive digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              Custom Website Design
            </h3>
            <p className="text-lg">{locationDetails.services.customDesign}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              Responsive Design
            </h3>
            <p className="text-lg">
              {locationDetails.services.responsiveDesign}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              User-Friendly Experience
            </h3>
            <p className="text-lg">{locationDetails.services.userExperience}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              Free Consultations and Special Offers
            </h3>
            <p className="text-lg">{locationDetails.services.specialOffers}</p>
          </div>
        </div>
      </PageSectionContainer>
      <PageSectionContainer className="py-16 text-slate-300">
        <div className="text-center mb-8 lg:text-left">
          <h2 className="text-2xl font-bold text-secondary-500 mb-2">
            Why Choose J Medrano Design LLC for Web Services in {locationName}
          </h2>
          <p className="text-lg">
            When it comes to web design in {locationName}, J Medrano Design LLC
            stands out. We understand the challenges businesses face in
            today&apos;s digital world, and we&apos;re here to help you overcome
            them.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <HiCodeBracket className="text-4xl text-secondary-500" />
            <h3 className="text-xl font-bold text-secondary-500">
              Expertise in Modern Web Design
            </h3>
            <p className="text-lg">{locationDetails.whyChoose.expertise}</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <HiBriefcase className="text-4xl text-secondary-500" />
            <h3 className="text-xl font-bold text-secondary-500">
              Commitment to Local Businesses
            </h3>
            <p className="text-lg">
              {locationDetails.whyChoose.localCommitment}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <HiWrench className="text-4xl text-secondary-500" />
            <h3 className="text-xl font-bold text-secondary-500">
              Reliable and Scalable Solutions
            </h3>
            <p className="text-lg">{locationDetails.whyChoose.scalability}</p>
          </div>
        </div>
      </PageSectionContainer>

      <PageSectionContainer
        bgClassName="bg-gradient-to-br from-slate-700 to-slate-900"
        className="py-16 text-slate-200 text-center lg:text-left"
      >
        <h2 className="text-2xl font-bold text-secondary-400 mb-2">
          Contact Us Today
        </h2>
        <p className="text-lg mb-4">
          Call us at{" "}
          {
            <AnalyticLink
              href="tel:+1-909-636-1186"
              label="1-909-636-1186"
              eventValue={`Call Us - ${locationName}`}
              eventCategory="CTA"
              className="underline text-blue-500 hover:text-blue-700"
            />
          }{" "}
          or email us at{" "}
          {
            <AnalyticLink
              href="mailto:jtamedrano@gmail.com"
              label="jtamedrano@gmail.com"
              eventValue={`Email Us - ${locationName}`}
              eventCategory="CTA"
              className="underline text-blue-500 hover:text-blue-700"
            />
          }
          . You can also fill out the contact form on our website to schedule
          your free consultation.
        </p>
        <h3 className="text-xl font-bold text-secondary-400 mb-2">
          Let&apos;s Build Your Dream Website
        </h3>
        <p className="text-lg mb-4">{locationDetails.ctaMessage}</p>
        <AnalyticLink
          href="/contact"
          label="Request a Quote"
          eventValue={`Request a Quote - ${locationName}`}
          eventCategory="CTA"
          className="bg-secondary-700 text-white px-4 py-2 rounded-md flex w-full lg:w-fit mt-8 font-bold justify-center items-center hover:bg-secondary-800 transition-colors duration-200"
        />
      </PageSectionContainer>
    </div>
  );
};

export default LocationPage;

import cx from "classnames";
import Image from "next/image";
import { AnalyticLink } from "../../../components/Analytics/AnalyticLink";
import PageSectionContainer from "../../../components/PageContainer/PageContainer";
import { LOCATIONS } from "../../../constants/nav";
import style from "../../../styles/location.module.css";
import { HiBriefcase, HiCodeBracket, HiWrench } from "react-icons/hi2";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ location: string }>;
}) => {
  const { location } = await params;
  const locationData = LOCATIONS.find((loc) => loc.slug === location);

  if (!locationData) {
    return {
      title: "Location Not Found | J Medrano Design",
      description:
        "Sorry, the page you're looking for cannot be found. We serve a variety of locations in California, including Anaheim, Los Angeles, and Orange County. Contact us today to learn more about our web design services.",
    };
  }

  const locationName = `${locationData.city}, ${locationData.state}`;

  return {
    title: `Top Web Design & Development in ${locationName} | J Medrano Design`,
    description: `Discover exceptional web design and development services in ${locationName} with J Medrano Design. Specializing in custom websites and applications for service-based businesses, we offer free consultations and a free hero section redesign. Enhance your online presence with scalable, secure, and visually appealing solutions. Contact us today!`,
    openGraph: {
      title: `Top Web Design & Development in ${locationName} | J Medrano Design`,
      description: `Discover exceptional web design and development services in ${locationName} with J Medrano Design. Specializing in custom websites and applications for service-based businesses, we offer free consultations and a free hero section redesign. Enhance your online presence with scalable, secure, and visually appealing solutions. Contact us today!`,
      images: [
        {
          url: "https://jmedranodesign.com/location-header.png",
          alt: `Web Design Services in ${locationName} | J Medrano Design`,
        },
      ],
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
            Web Design Services in {locationName}
          </h1>
          <p className="text-gray-300 text-lg max-w-5xl">
            Welcome to J Medrano Design, your trusted partner in creating
            cutting-edge web design solutions tailored to your unique business
            needs. With years of experience in web design and development, we
            specialize in helping small businesses in {locationName} establish a
            strong online presence. Our goal is to provide tailored solutions
            that resonate with your audience and help your business grow.
          </p>
          <AnalyticLink
            href="/contact"
            label="Request a Quote"
            eventValue={`Request a Quote - ${locationName}`}
            eventCategory="CTA"
            className="bg-secondary-700 text-white px-4 py-2 rounded-md w-fit text-2xl"
          />
        </div>
      </PageSectionContainer>
      <PageSectionContainer className="py-16 text-slate-700">
        <h2 className="text-2xl font-bold text-secondary-700 mb-2">
          Understanding the Importance of Web Design
        </h2>
        <p className="text-lg mb-4">
          In today&apos;s competitive market, having a professional website
          isn&apos;t just an option—it&apos;s a necessity. For small businesses
          in {locationName}, a locally-focused website can make all the
          difference. A well-designed website tailored to your community&apos;s
          preferences builds trust and establishes credibility. It helps
          potential customers connect with your business and ensures that your
          brand reflects the values and culture of {locationName}.
        </p>
        <h3 className="text-xl font-bold text-secondary-700 mb-2">
          Why Businesses in {locationName} Need a Professional Website
        </h3>
        <p className="text-lg mb-4">
          Every community has its unique preferences and needs. By focusing on
          localized web design, you&apos;re creating a platform that speaks
          directly to your audience. This approach not only makes your business
          more relatable but also shows your commitment to the {locationName}{" "}
          community. A strong local presence fosters loyalty, turning first-time
          visitors into long-term customers.
        </p>
        <h3 className="text-xl font-bold text-secondary-700 mb-2">
          Benefits of Local SEO
        </h3>
        <p className="text-lg mb-2">
          By incorporating local SEO strategies, such as targeting keywords like
          “Pressure Washing in {locationName},” your business can gain a
          significant competitive edge. Local SEO helps you rank higher in
          search results, making it easier for customers to find you. It also
          attracts people who are actively looking for your services, increasing
          the likelihood of conversions. Additionally, local SEO enhances your
          online visibility, which translates to greater foot traffic and more
          opportunities to grow your business. By investing in local SEO, you
          can enjoy the following benefits:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Rank higher in search results for location-based searches.</li>
          <li>
            Attract more local customers actively looking for your services.
          </li>
          <li>
            Increase both website traffic and foot traffic to your business.
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
            At J Medrano Design, we offer a variety of web design services
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
            <p className="text-lg">
              We create personalized websites that reflect your brand and speak
              directly to your audience in {locationName}. A custom website goes
              beyond generic templates to showcase your business&apos;s
              personality, values, and offerings. Whether you need a clean and
              simple design or a feature-packed platform, our team works with
              you to deliver a site that fits your goals and enhances your
              customer&apos;s experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              Responsive Design
            </h3>
            <p className="text-lg">
              Your website will look great and perform flawlessly on all
              devices, from desktops to smartphones, ensuring a seamless user
              experience. With more people browsing on mobile devices, a
              responsive design isn&apos;t just a feature—it&apos;s a necessity.
              We ensure that your website adapts to any screen size, providing
              your customers with a consistent and enjoyable browsing
              experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              User-Friendly Experience
            </h3>
            <p className="text-lg">
              A great website is more than just visually appealing; it must also
              be functional and easy to navigate. Our designs prioritize
              intuitive navigation, fast load times, and compelling content that
              keeps visitors engaged. By focusing on user experience, we help
              turn visitors into loyal customers who keep coming back for more.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-400 mb-4">
              Free Consultations and Special Offers
            </h3>
            <p className="text-lg">
              We believe in starting strong relationships with our clients.
              That&apos;s why we offer free consultations to discuss your vision
              and goals. This initial step allows us to understand your business
              and create a tailored plan for your website. New clients in{" "}
              {locationName} also receive a complimentary hero section
              redesign—a bold and impactful way to make a memorable first
              impression.
            </p>
          </div>
        </div>
      </PageSectionContainer>
      <PageSectionContainer className="py-16 text-slate-700">
        <div className="text-center mb-8 lg:text-left">
          <h2 className="text-2xl font-bold text-secondary-700 mb-2">
            Why Choose J Medrano Design for Web Design in {locationName}
          </h2>
          <p className="text-lg">
            When it comes to web design in {locationName}, J Medrano Design
            stands out. We understand the challenges small businesses face in
            today&apos;s digital world, and we&apos;re here to help you overcome
            them.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <HiCodeBracket className="text-4xl text-secondary-700" />
            <h3 className="text-xl font-bold text-secondary-700">
              Expertise in Modern Web Design
            </h3>
            <p className="text-lg">
              We use the latest tools and technologies to create visually
              appealing and high-performance websites that deliver results.
              Technologies like React and Next.js allow us to build fast,
              scalable, and user-friendly websites. By staying up-to-date with
              industry trends, we ensure your site is ahead of the curve and
              ready to impress.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <HiBriefcase className="text-4xl text-secondary-700" />
            <h3 className="text-xl font-bold text-secondary-700">
              Commitment to Local Businesses
            </h3>
            <p className="text-lg">
              As a company with roots in Southern California, we understand the
              importance of supporting small businesses in {locationName}. Our
              designs reflect the local culture and appeal directly to your
              target audience. By focusing on what makes {locationName} unique,
              we create websites that truly resonate with the community and set
              your business apart.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <HiWrench className="text-4xl text-secondary-700" />
            <h3 className="text-xl font-bold text-secondary-700">
              Reliable and Scalable Solutions
            </h3>
            <p className="text-lg">
              Our websites are built with growth in mind, ensuring they can
              adapt to your business&apos;s future needs while maintaining
              top-notch security. Whether you&apos;re just starting or looking
              to expand, our designs are created to scale seamlessly with your
              business. Plus, we prioritize security, giving you peace of mind
              knowing your site is protected against potential threats.
            </p>
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
        <p className="text-lg mb-4">
          Tell us about your business in {locationName}, and we&apos;ll handle
          the rest. Together, we&apos;ll create a website that sets your
          business apart. Your success in {locationName} starts with a strong
          online presence. At J Medrano Design, we&apos;re passionate about
          helping small businesses thrive with professional, locally-focused web
          design. Ready to take the next step? Contact us today and let&apos;s
          build a website that works as hard as you do.
        </p>
        <AnalyticLink
          href="/contact"
          label="Request a Quote"
          eventValue={`Request a Quote - ${locationName}`}
          eventCategory="CTA"
          className="bg-secondary-700 text-white px-4 py-2 rounded-md flex w-full lg:w-fit mt-8 font-bold justify-center items-center"
        />
      </PageSectionContainer>
    </div>
  );
};

export default LocationPage;

import Link from "next/link";
import PageSectionContainer from "../../../components/PageContainer/PageContainer";
import { PageHeader } from "../../../components/PageHeader/PageHeader";
import {
  HiFolder,
  HiMagnifyingGlass,
  HiNewspaper,
  HiPhone,
  HiUserGroup,
} from "react-icons/hi2";
import Image from "next/image";
import { Metadata } from "next";

const importantReasons = [
  {
    title: "Stand Out from the Competition",
    description: `The landscaping industry is competitive, and a generic, outdated website won’t do your business justice. Your website should reflect the quality and professionalism of your work. At J Medrano Design, we create custom websites tailored to your brand, helping you stand out from the crowd. A well-structured website not only looks great but also provides the information potential customers need to make an informed decision.`,
  },
  {
    title: "Improve Visibility with SEO Optimization",
    description: `Your website is only effective if people can find it. That’s why our website design for landscape businesses includes powerful search engine optimization (SEO) strategies. We use local SEO techniques, optimized keywords, and location-based content to help your site rank higher on search engines like Google. This means more visibility, more traffic, and ultimately more leads for your business.`,
  },
  {
    title: "Showcase Your Work with High-Quality Portfolios",
    description: `Landscaping is a visual business, and potential customers want to see examples of your work before hiring you. Our website designs feature high-quality image galleries and project showcases that let you highlight your best work. Whether it’s lush gardens, expertly designed hardscapes, or well-maintained lawns, your website will serve as a dynamic portfolio that impresses visitors and instills confidence in your expertise.`,
  },
  {
    title: "Convert Visitors into Clients with User-Friendly Design",
    description: `A beautiful website is great, but functionality is just as important. We design websites that are easy to navigate, with clear calls to action that guide visitors toward booking a consultation or requesting a quote. Whether on a desktop or mobile device, users will have a seamless experience, ensuring that they stay engaged and take the next step in hiring your services.`,
  },
];

const keyFeatures = [
  {
    title: "Mobile-Responsive and Fast-Loading",
    description: `With most users searching for services on their phones, it’s essential that your website is mobile-friendly. Our designs adapt seamlessly to any screen size, ensuring an optimal user experience. We also optimize for fast loading speeds so visitors don’t leave due to slow performance.`,
    icon: HiPhone,
  },
  {
    title: "Local SEO Integration",
    description: `We optimize your website with location-based keywords, Google My Business integration, and geo-targeted content. This means that when someone searches for “landscaping services near me” or “website design for landscape businesses,” your site will be among the top results.`,
    icon: HiMagnifyingGlass,
  },
  {
    title: "Engaging Content and Blog Integration",
    description: `Adding valuable content to your website helps establish your authority in the landscaping industry. We can integrate a blog section where you can share landscaping tips, seasonal maintenance advice, and industry trends. Regular content updates also boost SEO rankings and keep your website fresh.`,
    icon: HiNewspaper,
  },
  {
    title: "Contact and Lead Capture Forms",
    description: `Your website should make it easy for customers to get in touch. We design intuitive contact forms, click-to-call buttons, and even online booking options so potential clients can quickly reach out for a consultation or quote.`,
    icon: HiFolder,
  },
  {
    title: "Integration with Social Media",
    description: `A strong online presence includes more than just your website. We integrate your site with social media platforms like Facebook, Instagram, and LinkedIn, allowing you to connect with potential clients across different channels. Sharing project updates and client testimonials on social media helps drive traffic back to your site.`,
    icon: HiUserGroup,
  },
];

const processSteps = [
  {
    title: "Consultation and Strategy",
    description: `We start by understanding your business goals, target audience, and specific needs. Whether you need a brand-new site or a redesign, we tailor the website to fit your unique requirements.`,
  },
  {
    title: "Design and Development",
    description: `Our team creates a custom design that aligns with your brand’s aesthetics and industry standards. We focus on user experience, ensuring that your site is intuitive and visually compelling.`,
  },
  {
    title: "SEO and Performance Optimization",
    description: `We implement SEO best practices to help your website rank higher on search engines. From keyword optimization to site speed improvements, we ensure that your site performs well and attracts the right audience.`,
  },
  {
    title: "Launch and Ongoing Support",
    description: `Once your website is live, we provide ongoing support to ensure it stays updated, secure, and optimized. Whether you need content updates, security monitoring, or performance enhancements, we’re here to help.`,
  },
];

const keyBenefits = [
  {
    title: "Expertise in the Landscaping Industry",
    description: `We understand the unique challenges and needs of landscaping businesses. Our expertise ensures that we create a website that speaks directly to your target audience.`,
  },
  {
    title: "Custom Designs Tailored to Your Business",
    description: `We don’t use generic templates. Each website is custom-built to reflect your brand and showcase your services effectively.`,
  },
  {
    title: "Proven SEO Strategies",
    description: `We use data-driven SEO techniques to help your website rank higher and generate more leads for your business.`,
  },
  {
    title: "Affordable and Scalable Solutions",
    description: `Whether you’re a small landscaping company or a large enterprise, we offer cost-effective solutions that scale with your business growth.`,
  },
];

export const metadata: Metadata = {
  title: "Website Design for Landscape Businesses | Custom SEO-Optimized Sites",
  description:
    "Boost your landscaping business with a high-performing, SEO-optimized website. Our expert website design for landscape companies enhances visibility, attracts local clients, and generates more leads. Get a custom website today!",
  keywords:
    "website design for landscape, landscaping website design, landscaper website builder, SEO for landscaping companies, custom website for landscapers, local SEO for landscapers, landscaping business website, professional landscaping web design, landscaping company marketing, mobile-friendly website for landscapers, best website design for landscaping services, web development for landscape contractors, digital marketing for landscapers, lead generation for landscaping businesses, responsive websites for landscapers, landscape maintenance website, custom landscaping website, landscape design web services",
  category: "Landscaping Business Website Design",
  openGraph: {
    title:
      "Website Design for Landscape Businesses | Custom SEO-Optimized Sites",
    description:
      "Boost your landscaping business with a high-performing, SEO-optimized website. Our expert website design for landscape companies enhances visibility, attracts local clients, and generates more leads. Get a custom website today!",
    images: [
      {
        url: "https://www.jtamedrano.com/images/landscaping-business.webp",
        width: 800,
        height: 600,
        alt: "Landscaping Business in Action",
      },
    ],
  },
};

export default function LandscaperPage() {
  return (
    <>
      <PageHeader title="Website Design for Landscape Businesses" />
      <PageSectionContainer
        className="leading-7 py-20 flex flex-col lg:flex-row gap-20"
        bgClassName="bg-gray-100 dark:bg-slate-800"
      >
        <div className="relative lg:flex-1 h-96 lg:h-auto w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg shadow-black/25">
          <Image
            src="/images/landscaping-business.webp"
            alt="Landscaping Business in Action"
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-8 flex-1">
          <h2 className="text-3xl font-semibold text-secondary-400">
            Elevate Your Landscaping Business with a High-Performing Website
          </h2>
          <p>
            In today&apos;s digital age, having a strong online presence is
            crucial for any business, and landscaping companies are no
            exception. A well-designed website serves as a powerful marketing
            tool that helps attract local clients, showcase your past work, and
            generate leads that convert into paying customers. At J Medrano
            Design LLC, we specialize in website design for landscape
            businesses, creating stunning, user-friendly sites that enhance your
            brand and drive business growth.
          </p>
          <p>
            A professional website not only provides credibility but also acts
            as a 24/7 salesperson, helping potential customers find your
            services when they need them. Whether you offer lawn maintenance,
            garden design, tree services, or hardscaping, we build websites that
            highlight your expertise and make it easy for customers to choose
            your business.
          </p>
        </div>
      </PageSectionContainer>
      <PageSectionContainer
        className="space-y-8 leading-7 py-20"
        bgClassName="bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 from-gray-100 to-secondary-100"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          The Importance of a Custom Website for Your Landscaping Business
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {importantReasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary-400">
                {reason.title}
              </h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </PageSectionContainer>
      <PageSectionContainer
        bgClassName="bg-secondary-100 dark:bg-slate-900"
        className="space-y-8 leading-7 py-20"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          Key Features of Our Landscape Business Websites
        </h2>
        <p className="text-lg">
          Our team focuses on creating websites that are both visually appealing
          and functionally superior. Here’s what you can expect from our website
          design services for landscape companies:
        </p>
        <div className="grid grid-cols-1 gap-12">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-500 rounded-lg">
                  <feature.icon className="size-6 text-secondary-100 dark:text-slate-900" />
                </div>
                <h3 className=" text-2xl font-semibold text-secondary-400">
                  {feature.title}
                </h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </PageSectionContainer>
      <PageSectionContainer
        bgClassName="bg-gray-100 dark:bg-slate-900"
        className="space-y-8 leading-7 py-20"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          The Process: How We Build Your Website
        </h2>
        <p className="text-lg">
          Our website design process is straightforward, ensuring you get a
          high-quality website that meets your business needs. Here’s what to
          expect when working with J Medrano Design:
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="space-y-4 p-8 bg-secondary-300 dark:bg-slate-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold dark:text-secondary-400 text-secondary-700">
                {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </PageSectionContainer>
      <PageSectionContainer className="leading-7 py-20 flex flex-col-reverse lg:flex-row gap-20">
        <div className="space-y-8 flex-1">
          <h2 className="text-3xl font-semibold text-secondary-400">
            Why Choose J Medrano Design for Your Landscape Website?
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary-400">
                  {benefit.title}
                </h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:flex-1 h-96 lg:h-auto lg:w-1/2 rounded-lg overflow-hidden shadow-lg shadow-black/25">
          <Image
            src="/images/landscaper.webp"
            alt="Landscaper Working on a Project"
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </PageSectionContainer>
      <PageSectionContainer
        bgClassName="bg-gray-100 dark:bg-slate-800"
        className="space-y-8 leading-7 py-20"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          Get a Website That Helps Your Landscaping Business Thrive
        </h2>
        <p className="text-lg">
          Your website should be more than just an online presence—it should be
          a lead-generating machine that helps grow your landscaping business.
          At J Medrano Design, we specialize in website design for home service
          companies, ensuring you get a site that not only looks great but also
          drives results.
        </p>
        <p className="text-lg">
          If you&apos;re ready to elevate your online presence and attract more
          clients, contact us today for a free consultation. Let&apos;s build a
          website that turns visitors into customers and helps your landscaping
          business flourish.
        </p>
      </PageSectionContainer>
      <PageSectionContainer
        bgClassName="bg-secondary-400 dark:bg-slate-900"
        className="leading-7 py-20 flex flex-col lg:flex-row items-center gap-12"
      >
        <h2 className="text-3xl font-semibold dark:text-secondary-400 text-secondary-700 flex-1">
          Start growing your business today! Contact J Medrano Design to get
          started.
        </h2>
        <div className="w-max h-fit">
          <Link
            href="/contact"
            className="bg-yellow-500 text-slate-900 text-lg lg:text-base py-2 px-8 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 text-center border-2 border-yellow-500 flex justify-center w-full lg:w-fit"
          >
            Request a Free Consultation
          </Link>
        </div>
      </PageSectionContainer>
    </>
  );
}

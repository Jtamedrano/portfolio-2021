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
    title: "Get Found by Local Clients",
    description:
      "Most homeowners and businesses search online before hiring a contractor. Without a well-optimized website, you’re missing out on potential leads. Our SEO-driven websites ensure that your business ranks high in local searches so customers can find and contact you easily.",
  },
  {
    title: "Show Off Your Work with a Portfolio",
    description:
      "A picture is worth a thousand words, especially in the contracting industry. With a professionally designed portfolio section, you can highlight past projects, demonstrate your expertise, and build trust with potential clients before they even pick up the phone.",
  },
  {
    title: "Convert Visitors into Customers",
    description:
      "A well-structured website does more than just look good—it converts visitors into paying clients. We design contractor websites with clear calls to action, easy-to-use contact forms, and click-to-call buttons so you never miss an opportunity to book a new project.",
  },
  {
    title: "Build Trust with Customer Testimonials",
    description:
      "Your reputation matters. Adding real customer reviews and testimonials to your website helps establish credibility and shows potential clients why they should choose your business over the competition.",
  },
];

const keyFeatures = [
  {
    title: "Custom Website Design",
    description:
      "Tailored to your brand and business needs, ensuring a unique and professional look.",
    icon: HiFolder,
  },
  {
    title: "SEO Optimization",
    description:
      "Get higher rankings on Google and attract more local customers with keyword-rich content and smart SEO strategies.",
    icon: HiMagnifyingGlass,
  },
  {
    title: "Mobile-Friendly & Fast Loading",
    description:
      "Your website will look great and perform flawlessly on all devices, ensuring potential customers stay engaged.",
    icon: HiPhone,
  },
  {
    title: "Project Portfolio & Gallery",
    description:
      "Display high-quality images of your work to showcase your expertise and past projects.",
    icon: HiUserGroup,
  },
];

const contractorTypes = [
  {
    title: "General Contractors",
    description:
      "Showcase your full range of construction and remodeling services.",
  },
  {
    title: "Plumbers",
    description:
      "Attract more service calls with a website optimized for emergency and scheduled plumbing needs.",
  },
  {
    title: "Electricians",
    description:
      "Ensure homeowners and businesses can find you when they need electrical work done.",
  },
  {
    title: "Roofers",
    description:
      "Display completed projects, offer free estimates, and rank higher for roofing services in your area.",
  },
  {
    title: "HVAC Technicians",
    description:
      "Let clients easily book heating and cooling services directly from your website.",
  },
  {
    title: "Landscapers",
    description:
      "Promote your lawn care, hardscaping, and outdoor design services.",
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
    title: "Expertise in the Contracting Industry",
    description: `We understand the unique challenges and needs of contracting businesses. Our expertise ensures that we create a website that speaks directly to your target audience.`,
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
    description: `Whether you’re a small contracting company or a large enterprise, we offer cost-effective solutions that scale with your business growth.`,
  },
];

export const metadata: Metadata = {
  title:
    "Website Design for Contracting Businesses | Custom SEO-Optimized Sites",
  description:
    "Boost your contracting business with a high-performing, SEO-optimized website. Our expert website design for landscape companies enhances visibility, attracts local clients, and generates more leads. Get a custom website today!",
  keywords:
    "website design for landscape, contracting website design, landscaper website builder, SEO for contracting companies, custom website for landscapers, local SEO for landscapers, contracting business website, professional contracting web design, contracting company marketing, mobile-friendly website for landscapers, best website design for contracting services, web development for landscape contractors, digital marketing for landscapers, lead generation for contracting businesses, responsive websites for landscapers, landscape maintenance website, custom contracting website, landscape design web services",
  category: "contracting Business Website Design",
  openGraph: {
    title:
      "Website Design for Landscape Businesses | Custom SEO-Optimized Sites",
    description:
      "Boost your contracting business with a high-performing, SEO-optimized website. Our expert website design for landscape companies enhances visibility, attracts local clients, and generates more leads. Get a custom website today!",
    images: [
      {
        url: "https://www.jtamedrano.com/images/contracting-business.webp",
        width: 800,
        height: 600,
        alt: "contracting Business in Action",
      },
    ],
  },
};

export default function LandscaperPage() {
  return (
    <>
      <PageHeader title="Website Design for Contractors: Build Your Online Presence & Get More Clients" />
      <PageSectionContainer
        className="leading-7 py-20 flex flex-col lg:flex-row gap-20"
        bgClassName="bg-gray-100 dark:bg-slate-800"
      >
        <div className="relative lg:flex-1 h-96 w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg shadow-black/25">
          <Image
            src="/images/contractor-business.png"
            alt="contracting Business in Action"
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-8 flex-1 flex justify-center flex-col">
          <h2 className="text-3xl font-semibold text-secondary-400">
            A Custom Website That Works as Hard as You Do
          </h2>
          <p>
            As a contractor, your business thrives on reputation, reliability,
            and visibility. Whether you're a general contractor, electrician,
            plumber, roofer, or specialize in any other trade, having a strong
            online presence is essential for attracting more clients and growing
            your business. At J Medrano Design, we specialize in website design
            for contractors, creating custom, high-performing websites that
            generate leads, showcase your work, and establish credibility in
            your industry.
          </p>
        </div>
      </PageSectionContainer>
      <PageSectionContainer
        className="space-y-8 leading-7 py-20"
        bgClassName="bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 from-gray-100 to-secondary-100"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          Why Contractors Need a Professional Website
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
          Features of Our Contractor Website Design Services
        </h2>
        <p className="text-lg">
          At J Medrano Design, we don&apos;t just build websites—we create
          digital assets that drive business growth. Our website design for
          contractors includes:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
        bgClassName="bg-white dark:bg-slate-800"
        className="space-y-8 leading-7 py-20"
      >
        <h2 className="text-3xl font-semibold text-secondary-400">
          Website Design for All Types of Contractors
        </h2>
        <p className="text-lg">
          We build websites for contractors across various industries,
          including:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {contractorTypes.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
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
            src="/images/contractor.webp"
            alt="Contractor Working on a Project"
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
          Get a Website That Helps Your Contracting Business Thrive
        </h2>
        <p className="text-lg">
          Your website should be more than just an online presence—it should be
          a lead-generating machine that helps grow your contracting business.
          At J Medrano Design, we specialize in website design for home service
          companies, ensuring you get a site that not only looks great but also
          drives results.
        </p>
        <p className="text-lg">
          If you&apos;re ready to elevate your online presence and attract more
          clients, contact us today for a free consultation. Let&apos;s build a
          website that turns visitors into customers and helps your contracting
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

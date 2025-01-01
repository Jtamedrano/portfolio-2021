import cx from "classnames";

const SERVICES_LIST = [
  {
    title: "Consultations",
    description:
      "Get expert guidance on your web development needs. Whether you're unsure where to start or need advice on improving your online presence, I provide actionable insights to help you achieve your goals.",
    keyFeatures: [
      "One-on-one discussions to understand your business needs",
      "Tailored recommendations for website design, development, and strategy",
      "Expert advice on best practices and technology choices",
    ],
    benefits: [
      "Clarify your goals and roadmap for web development",
      "Receive professional advice tailored to your specific challenges",
      "Save time and resources by making informed decisions",
    ],
    image: "/consulting_example.png",
  },
  {
    title: "Custom Website Design and Development",
    description:
      "I design and build websites from scratch, tailored to your business needs. Whether you're launching a startup or revamping an outdated site, I create visually appealing, responsive, and user-friendly designs that reflect your brand identity.",
    keyFeatures: [
      "Modern layouts designed to engage your audience",
      "Mobile-first, responsive functionality for seamless browsing on all devices",
      "Engaging copy and visuals to attract and convert leads",
    ],
    benefits: [
      "Build credibility with a professional online presence",
      "Improve customer engagement and retention",
      "Attract more leads and drive conversions",
    ],
    image: "/developing_example.png",
  },
  {
    title: "Website Upgrades and Redesigns",
    description:
      "Give your existing website a new lease on life. I revamp outdated websites to improve user experience, align with modern branding standards, and enhance functionality.",
    keyFeatures: [
      "Content Management System (CMS) integration for easy updates",
      "Enhanced mobile responsiveness for better performance across devices",
      "Strategic redesigns to optimize user flow and engagement",
    ],
    benefits: [
      "Stay competitive with a modern, up-to-date website",
      "Reduce bounce rates and increase visitor retention",
      "Save time with easy-to-manage content updates",
    ],
    image: "/upgrading_example.png",
  },
  {
    title: "Landing Page Optimization",
    description:
      "I create or refine landing pages to maximize lead generation and conversion rates. From design to functionality, I ensure every element serves a purpose.",
    keyFeatures: [
      "Strategic call-to-action placement to drive conversions",
      "Fast-loading pages optimized for SEO and performance",
      "Engaging design tailored to your target audience",
    ],
    benefits: [
      "Increase leads and sales with a high-performing landing page",
      "Improve search engine rankings with optimized content",
      "Present a professional, polished first impression",
    ],
    image: "/Light-house-score-example.png",
  },
  {
    title: "Enterprise Application Development",
    description:
      "I develop robust, scalable web applications designed to support complex workflows and large user bases. Whether it’s for internal operations or external clients, I ensure functionality and security at every step.",
    keyFeatures: [
      "Scalable architecture tailored to your business growth",
      "Intuitive user interfaces for seamless user interaction",
      "Compliance with industry standards to ensure data security",
    ],
    benefits: [
      "Automate processes and improve efficiency",
      "Empower your team with user-friendly tools",
      "Scale your operations without compromising performance",
    ],
    image: "/enterprise-example.png",
  },
  {
    title: "CMS Integration and Customization",
    description:
      "Integrate and customize a Content Management System (CMS) like Strapi to give you control over your website content.",
    keyFeatures: [
      "Streamlined CMS integration for seamless content updates",
      "Custom configurations to fit your specific needs",
      "Secure, scalable solutions for ongoing growth",
    ],
    benefits: [
      "Update content without needing technical expertise",
      "Save time with an intuitive content management process",
      "Ensure consistency and security across your website",
    ],
    image: "/cms-example.png",
  },
  {
    title: "Deployment and Ongoing Support",
    description:
      "From development to live deployment, I ensure your website or application launches smoothly. I also provide ongoing maintenance and support to keep your platform running flawlessly.",
    keyFeatures: [
      "Comprehensive deployment solutions, including server setup",
      "Monitoring and troubleshooting for optimal performance",
      "Flexible support plans tailored to your needs",
    ],
    benefits: [
      "Launch with confidence knowing every detail is covered",
      "Avoid downtime with regular maintenance and updates",
      "Focus on your business while I handle the technical aspects",
    ],
    image: "/deployment-example.png",
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="py-8">
        <div className="container mx-auto flex flex-col gap-4 px-2 lg:px-0">
          <h1 className="text-5xl font-bold tracking-tight text-secondary-500">
            Services
          </h1>
          <p className="text-lg font-light text-slate-600">
            Explore the range of services I offer to help you achieve your web
            development goals.
          </p>
        </div>
      </div>
      <div className="bg-slate-200 py-4">
        <div className="flex flex-col divide-y divide-gray-400 container mx-auto px-2 lg:px-0">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={`service-${index}`}
              className="flex flex-col-reverse lg:flex-row gap-8 py-4"
            >
              <div className="lg:w-2/3 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl font-bold text-secondary-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-700">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-secondary-900">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside leading-6">
                    {service.keyFeatures.map((feature, idx) => (
                      <li key={`feature-${idx}`}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-secondary-900">
                      Benefits
                    </h3>
                    <ul className="list-disc list-inside leading-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={`benefit-${idx}`}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <button className="bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-lg font-semibold hover:bg-secondary-800 transition-colors duration-300">
                    Schedule
                  </button>
                </div>
              </div>
              <div className="min-h-[300px] flex-1 bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

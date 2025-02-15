import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ServiceItem } from "../../components/services/ServiceItem";

const SERVICES_LIST = [
  {
    title: "Custom Website Design and Development",
    description:
      "Custom websites designed from the ground up to meet unique business needs. Modern, responsive, and user-friendly designs that reflect your brand identity.",
    keyFeatures: [
      "Modern layouts designed to engage your audience",
      "Mobile-first, responsive functionality for seamless browsing on all devices",
      "Engaging copy and visuals to attract and convert leads",
    ],
    image: "/developing_example.png",
  },
  {
    title: "Website Upgrades and Redesigns",
    description:
      "Revamps of outdated websites to improve usability, align with branding, and enhance functionality.",
    keyFeatures: [
      "Content Management System (CMS) integration for easy updates",
      "Enhanced mobile responsiveness for better performance across devices",
      "Strategic redesigns to optimize user flow and engagement",
    ],
    image: "/upgrading_example.png",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Landing pages designed or refined to maximize lead generation and conversion rates with a focus on performance and user engagement.",
    keyFeatures: [
      "Strategic call-to-action placement to drive conversions",
      "Fast-loading pages optimized for SEO and performance",
      "Engaging design tailored to your target audience",
    ],
    image: "/Light-house-score-example.png",
  },
  {
    title: "Enterprise Application Development",
    description:
      "Scalable web applications designed for complex workflows, large user bases, and robust security requirements.",
    keyFeatures: [
      "Scalable architecture tailored to business growth",
      "Intuitive user interfaces for seamless interaction",
      "Compliance with industry standards to ensure data security",
    ],
    image: "/enterprise-example.png",
  },
  {
    title: "CMS Integration and Customization",
    description:
      "Content Management System (CMS) integrations and customizations that simplify content updates and enhance scalability.",
    keyFeatures: [
      "Streamlined CMS integration for seamless content updates",
      "Custom configurations to fit specific needs",
      "Secure, scalable solutions for ongoing growth",
    ],
    image: "/cms-example.png",
  },
  {
    title: "Deployment and Ongoing Support",
    description:
      "Comprehensive deployment services and ongoing support to ensure smooth operations and optimal performance.",
    keyFeatures: [
      "Comprehensive deployment solutions, including server setup",
      "Monitoring and troubleshooting for optimal performance",
      "Flexible support plans tailored to your needs",
    ],
    image: "/deployment-example.png",
  },
];

export const metadata = {
  title:
    "Website Design & SEO Services for Home Service Businesses | J Medrano Design LLC",
  description:
    "Boost your business with expert web design, SEO, and online branding services. J Medrano Design LLC helps home service businesses grow online. Get a free strategy session today!",
  keywords:
    "web design, web development, custom website design, website upgrades, landing page optimization, enterprise application development, CMS integration, deployment support, Home Service Businesses",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Services"
        description="Explore the range of services we offer to help you achieve your web development goals. From custom website design to enterprise application development, we have you covered."
      />
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto px-3">
          {SERVICES_LIST.map((service, index) => (
            <ServiceItem
              key={`service-${index}`}
              title={service.title}
              description={service.description}
              keyFeatures={service.keyFeatures}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

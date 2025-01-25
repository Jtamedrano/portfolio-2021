export interface ServiceBundle {
  id: string;
  title: string;
  description: string;
  points: { title: string; description: string }[];
  price: number;
  target: string;
  startingAt?: boolean;
}

const STARTER_BUNDLE = {
  id: "starter-bundle",
  title: "Starter Bundle",
  description: "Perfect for Small Businesses Ready to Shine",
  points: [
    {
      title: "Custom Landing Page",
      description:
        "Get a professionally designed landing page tailored to your brand.",
    },
    {
      title: "3 Months Basic Maintenance",
      description:
        "Enjoy peace of mind with our reliable support for ubg fixes and updates.",
    },
    {
      title: "Monthly Performance Report",
      description:
        "Stay informed with detailed insights into your website's performance.",
    },
  ],
  price: 750,
  target:
    "Ideal for small businesses looking to establish a strong online presence.",
};

const GROWTH_BUNDLE = {
  id: "growth-bundle",
  title: "Growth Bundle",
  description: "Empower Your Growing Business",
  points: [
    {
      title: "Custom Website (Up to 5 Pages)",
      description: "Elevate your brand with a fully customized website.",
    },
    {
      title: "6 Months Maintenance",
      description:
        "Benefit from extended support to keep your site running smoothly.",
    },
    {
      title: "Monthly SEO Optimization",
      description:
        "Enhance your visibility with ongoin search engine optimization",
    },
    {
      title: "Quarterly Design Updates",
      description:
        "Keep you site fresh and engaging with regular design enhancements.",
    },
    {
      title: "Priority Support",
      description: "Get fast, dedicated assistance whenever you need it.",
    },
  ],
  price: 1500,
  target:
    "Designed for businesses ready to expand and enhance their digital footprint.",
};

const PREMIUM_BUNDLE = {
  id: "enterprise-bundle",
  title: "Enterprise Bundle",
  description: "Comprehensive Solutions for Established Enterprises",
  points: [
    {
      title: "Custom Web Application",
      description:
        "Leverage our expertise in enterprise app development for a tailored solution.",
    },
    {
      title: "12 Months Maintenance",
      description: "Enjoy a full year of comprehensive support and updates.",
    },
    {
      title: "Monthly Performance Optimization",
      description: "Maximize efficiency with regular performance enhancements.",
    },
    {
      title: "Custom Automation Solution",
      description:
        "Streamline operations with bespoke automation tailored to your needs.",
    },
    {
      title: "24/7 Priority Support",
      description: "Access round-the-clock assistance for any urgent needs.",
    },
  ],
  price: 3000,
  startingAt: true,
  target:
    "Perfect for established businesses seeking advanced solutions and continuous growth.",
};

export const BUNDLES_MAP: Record<string, ServiceBundle> = {
  "starter-bundle": STARTER_BUNDLE,
  "growth-bundle": GROWTH_BUNDLE,
  "enterprise-bundle": PREMIUM_BUNDLE,
};

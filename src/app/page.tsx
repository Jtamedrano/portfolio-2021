import * as React from "react";
import HomePage from "../components/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Converting Websites for Small Businesses | J Medrano",

  // Description (~150–160 characters)
  // Showcases results (up to 15% conversions), emphasizes local region, ends with a CTA
  description:
    "Boost conversions by up to 15% with custom websites, SEO, and lead generation for small businesses in the Inland Empire. Book a free consultation!",

  // Keywords (optional: Google typically ignores these, but may help on other engines)
  keywords: [
    "small business website design services",
    "web development",
    "website dev",
    "design web design",
    "website design for small business",
    "web design for small businesses",
    "website development company",
    "web development services",
    "web design services",
    "web development agency",
    "Custom Websites",
    "Lead Generation",
    "SEO Services",
    "Small Business Marketing",
    "Digital Marketing",
    "CRM Integration",
    "high-converting websites",
    "web design",
    "SEO",
    "lead generation",
    "small businesses",
    "Inland Empire",
    "CRM integrations",
    "digital marketing",
  ],

  // Allows search engines to index and follow
  robots: "index, follow",
};

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;

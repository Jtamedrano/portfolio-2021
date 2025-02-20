import * as React from "react";
import HomePage from "../components/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Websites for Home Service Businesses | J Medrano Design LLC",

  description:
    "Custom-coded websites for home service businesses to boost local SEO and get more leads.",

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
    "cheap website design for small business",
    "i need a website for my small business",
    "free website design for small business",
    "i need a website built for my business",
    "website for my small business",
    "google website for small business",
    "start website for small business",
    "best way to build a website for a small business",
    "good website builders for small businesses",
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
  openGraph: {
    title: "Custom Websites for Home Service Businesses | J Medrano Design LLC",
    description:
      "Custom-coded websites for home service businesses to boost local SEO and get more leads.",
    images: [
      {
        url: "https://jmedrano.design/images/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Custom Websites for Home Service Businesses | J Medrano Design LLC",
      },
    ],
  },
};

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;

import * as React from "react";
import HomePage from "../components/home/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Websites for Small Businesses | J Medrano Design",
  description:
    "Get a high-performing, custom website tailored for your small business. J Medrano Design specializes in web design, development, and SEO for service-based businesses like real estate agents, pressure washers, and contractors. Get a free consultation today!",
  keywords:
    "web design, web development, digital marketing, web design agency, web development agency, web design company, web development company, web design services, web development services, digital marketing services, web design Inland Empire, web development Inland Empire",
  robots: "index, follow",
};

const IndexPage = () => {
  return <HomePage />;
};

export default IndexPage;

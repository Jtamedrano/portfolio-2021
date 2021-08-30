import * as React from "react";
import { Hero, Skills } from "../components/home";
import MainLayout from "../components/mainLayout";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Jesse Medrano</title>
      <MainLayout>
        <Hero />
        <Skills />
      </MainLayout>
    </main>
  );
};

export default IndexPage;

import * as React from "react";
import { Hero } from "../components/home";
import MainLayout from "../components/mainLayout";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Jesse Medrano</title>
      <MainLayout>
        <Hero />
      </MainLayout>
    </main>
  );
};

export default IndexPage;

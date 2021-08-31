import { DownOutlined } from "@ant-design/icons/lib/icons";
import * as React from "react";
import { Hero, About, Projects, Contact } from "../components/home";
import MainLayout from "../components/mainLayout";
import { Link } from "@reach/router";
import { BackTop } from "antd";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jesse Medrano</title>
        <meta
          name="description"
          content="Jesse Medrano, Software Engineer & Web Developer based out of Southern California"
        />
      </Helmet>
      <MainLayout>
        <Hero />
        <BackTop />
        <div className="show_scroll_down">
          <Link to="/#projects">
            <DownOutlined />
          </Link>
        </div>
        <Projects />
        <About />
        <Contact />
      </MainLayout>
    </main>
  );
};

export default IndexPage;

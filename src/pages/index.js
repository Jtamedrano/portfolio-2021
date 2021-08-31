import { DownOutlined } from "@ant-design/icons/lib/icons";
import * as React from "react";
import { Hero, About } from "../components/home";
import MainLayout from "../components/mainLayout";
import { Link } from "@reach/router";
import { BackTop } from "antd";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Jesse Medrano</title>
      <MainLayout>
        <Hero />
        <BackTop />
        <div className="show_scroll_down">
          <Link to="/#about">
            <DownOutlined />
          </Link>
        </div>
        <About />
      </MainLayout>
    </main>
  );
};

export default IndexPage;

import React from "react";
import { Layout } from "antd";
import NavMenu from "./nav";
import useMedia from "./hooks/useMedia";
import "../styles/index.scss";

const { Header, Content, Footer } = Layout;

const mainClass = "mainLayout";

const MainLayout = ({ children }) => {
  const isMobile = useMedia("max-width: 426px");

  return (
    <Layout className={mainClass}>
      <Header className={`${mainClass}__header max_content`}>
        <p>Jesse Medrano</p>
        {!isMobile && <NavMenu />}
      </Header>
      <Content className={`${mainClass}__content`}>{children}</Content>
      <Footer className={`${mainClass}__footer`}>Made By Jesse Medrano</Footer>
    </Layout>
  );
};

export default MainLayout;

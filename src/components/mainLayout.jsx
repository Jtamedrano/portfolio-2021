import React from "react";
import { Layout } from "antd";
import NavMenu from "./nav";
import "../styles/index.scss";

const { Header, Content, Footer } = Layout;

const mainClass = "mainLayout";

const MainLayout = ({ children }) => {
  return (
    <Layout className={mainClass}>
      <Header className={`${mainClass}__header max_content`}>
        <p>Jesse Medrano</p>
        <NavMenu />
      </Header>
      <Content className={`${mainClass}__content`}>{children}</Content>
      <Footer className={`${mainClass}__footer`}>Made By Jesse Medrano</Footer>
    </Layout>
  );
};

export default MainLayout;

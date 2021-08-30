import React from "react";
import { Col, Divider, PageHeader, Row, Tabs } from "antd";

const Skills = () => {
  return (
    <section className="skills">
      <PageHeader title="My Skills">
        <Tabs
          defaultActiveKey="1"
          mode="horizontal"
          type="card"
          className="skills__tabs"
        >
          <Tabs.TabPane tab="Languages" key="1">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={6}>
                <p>JavaScript</p>
                <Divider />
                <p>Javascript is one of the first languages I learned.</p>
                <a>Javascript Projects & Examples</a>
              </Col>
              <Col span={6}>
                <p>TypeScript</p>
                <Divider />
                <p>
                  Typescript is was learned within a month in order to aid in
                  several projects. It is by far one of my favorites languages.
                </p>
                <a>Typescript Projects & Examples</a>
              </Col>
              <Col span={6}>
                <p>Python</p>
                <Divider />
                <p>
                  Python is the main language I use when studying computer
                  science.
                </p>
                <a>Python Projects & Examples</a>
              </Col>
              <Col span={6}>
                <p>SQL/GraphQL</p>
                <Divider />
                <p>
                  Sql is used in a variety of projects whether I am using MySql
                  or PostgresQL. I also pair most of my typescript projects with
                  graphql for added type security.
                </p>
                <a>Projects & Examples including MySQl/GraphQl</a>
              </Col>
            </Row>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Libraries | Frameworks" key="2">
            <div className="frameworks">
              <p>React</p>
              <p>Next</p>
              <p>Gatsby</p>
              <p>Express</p>
              <p>Redux</p>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="UI/UX" key="3">
            <div className="ui">
              <p>CSS</p>
              <p>CSS Libraries</p>
              <p>SCSS/LESS</p>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Product Management" key="4">
            <div className="pr">
              <p>Agile Methodologies</p>
              <p>Scrum Framework</p>
              <p>Trello & Jira</p>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Other Tech" key="5">
            <div className="tech">
              <p>Github</p>
              <p>Visual Studio Code</p>
              <p>Windows</p>
              <p>Mac</p>
              <p>Linux</p>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </PageHeader>
    </section>
  );
};

export default Skills;

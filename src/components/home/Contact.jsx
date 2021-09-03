import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons/lib/icons";
import React from "react";
import ContactForm from "../contact/ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__content max_content">
        <h2>Contact Me</h2>
        <div className="contact__body">
          <div className="contact__form">
            <h3>Send A Message</h3>
            <ContactForm />
          </div>
          <div className="contact__links">
            <div className="contact__links__display">
              <a
                href="https://github.com/jtamedrano"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/jtamedrano"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinOutlined /> LinkedIn
              </a>
              <a href="mailto:jtamedrano@gmail.com">
                <MailOutlined /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

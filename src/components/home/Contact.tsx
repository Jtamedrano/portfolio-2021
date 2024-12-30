import React from "react";
import ContactForm from "../contact/ContactForm";
import { BiLogoGithub, BiLogoLinkedin, BiMailSend } from "react-icons/bi";

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
                <BiLogoGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/jtamedrano"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin /> LinkedIn
              </a>
              <a href="mailto:jtamedrano@gmail.com">
                <BiMailSend /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

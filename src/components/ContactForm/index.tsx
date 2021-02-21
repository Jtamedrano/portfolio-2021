import React from 'react';
import './style.scss';

interface Props {}

const ContactMe = (props: Props) => {
  return (
    <div id="contactMe" className="contactMe">
      <h1 className="contactMe__headText">Contact Me</h1>
      <div>
        <span>Email: </span>
        <a href="mailto:jtamedrano@gmail.com">Jtamedrano@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactMe;

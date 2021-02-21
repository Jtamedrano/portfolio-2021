import React from 'react';
import './style.scss';

interface Props {}

const ScrollReminderView = (props: Props) => {
  return (
    <div className="scroll-reminder flex-center-center">
      <p>Scroll Down</p>
    </div>
  );
};

export default ScrollReminderView;

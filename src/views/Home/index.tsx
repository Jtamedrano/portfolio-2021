import React, { useEffect, useState } from 'react';
import { Button, Space, Typography } from 'antd';

const { Text, Title } = Typography;

interface Props {}

const index = (props: Props) => {
  return (
    <div className="Home">
      <div className="Home_textContainer">
        <h2>
          Sales Driven Full Stack
          <br />
          Web Development
        </h2>
        <p>
          Whether it is a portfolio page or a full-stack SaaS application,{' '}
          <wbr />
          having someone <wbr />
          who <wbr />
          takes <wbr />
          the <wbr />
          user's experience and converts clicks to dollars is the only money
          making asset you need.
        </p>
        <div className="buttonContainer">
          <Button size="large" shape="round" type="primary">
            Schedule A Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;

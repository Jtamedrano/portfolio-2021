import React from 'react';
import styled from 'styled-components';

interface StyledCollapse {
  top?: number;
}

interface Props extends StyledCollapse {
  children: JSX.Element;
}

const StyledDiv = styled.div`
  position: absolute;

  ul {
    list-style: none;
  }
`;

const CollapseMenu = ({ children }: Props) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default CollapseMenu;

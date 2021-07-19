import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  width: 262px;
  position: relative;

  h1 {
    font-size: var(--extraLarge);
    font-weight: 900;
    color: var(--yellow);
  }
  span {
    position: absolute;
    left: 0;
    top: 56px;
    color: var(--text-primary);
  }
`;

const Logo = () => {
  return (
    <LogoStyles>
      <h1>
        ROBBY <span>WEBB</span>
      </h1>
    </LogoStyles>
  );
};

export default Logo;

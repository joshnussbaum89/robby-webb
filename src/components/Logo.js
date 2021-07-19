import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  position: relative;

  h1 {
    color: var(--yellow);
    font-size: var(--extraLarge);
    font-weight: 900;
  }

  span {
    position: absolute;
    color: var(--text-primary);
    left: 0;
    top: 54px;
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

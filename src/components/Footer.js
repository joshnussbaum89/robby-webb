import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  font-size: var(--extraSmall);
  text-align: center;
  margin: 1rem;
  padding-bottom: 1rem;
  font-weight: 200;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterStyles>
      &copy; Made with care by{' '}
      <a
        href='https://joshnussbaum.io'
        target='_blank'
        rel='noopener noreferrer'
      >
        Josh Nussbaum
      </a>
    </FooterStyles>
  );
};

export default Footer;

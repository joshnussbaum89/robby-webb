import styled from 'styled-components'

const FooterStyles = styled.footer`
  padding-bottom: 2rem;
  font-size: var(--extraSmall);
  text-align: center;
  font-weight: 200;
  opacity: 0.8;
`

const Footer = () => {
  return (
    <FooterStyles>
      &copy; Made by{' '}
      <a href="https://wavelandweb.com" target="_blank" rel="noopener noreferrer">
        Wave Land Web
      </a>
    </FooterStyles>
  )
}

export default Footer

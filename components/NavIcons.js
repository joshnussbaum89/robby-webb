import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram'

const NavIconsStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 0;
  z-index: 100;

  a {
    padding: 2rem 0;
  }

  svg {
    display: block;
    height: 100%;
  }
`

const NavIcons = () => {
  return (
    <NavIconsStyles className="nav-icons">
      <a
        href="https://www.instagram.com/rwebbdrums/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
    </NavIconsStyles>
  )
}

export default NavIcons

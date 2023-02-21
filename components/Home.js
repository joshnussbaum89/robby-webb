import styled from 'styled-components'
import Logo from './Logo'
import NavIcons from './NavIcons'
import EntryAndMainNavItems from './EntryAndMainNavItems'

const HomeStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .nav-items {
    text-transform: uppercase;
    padding: 4rem 0 0;
    height: auto;
  }

  .nav-items {
    display: flex;
    li {
      margin: 0rem 1rem;
    }
    a {
      margin: 0rem 1rem;
    }
  }

  .nav-icons {
    position: static;
    flex-direction: row;
    li {
      margin: 0rem 1rem;
    }
    a {
      margin: 0rem 1rem;
    }
  }
`

const Home = () => {
  return (
    <HomeStyles id="entry-nav">
      <Logo />
      <EntryAndMainNavItems />
      <NavIcons />
    </HomeStyles>
  )
}

export default Home

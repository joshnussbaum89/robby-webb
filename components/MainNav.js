import styled from 'styled-components'
import Logo from './Logo'
import NavIcons from './NavIcons'
import EntryAndMainNavItems from './EntryAndMainNavItems'
import MobileNav from './MobileNav'

const MainNavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`

const MainNav = () => {
  return (
    <MainNavStyles>
      <Logo />
      <EntryAndMainNavItems />
      <MobileNav />
      <NavIcons />
    </MainNavStyles>
  )
}

export default MainNav

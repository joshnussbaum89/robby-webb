import styled from 'styled-components'
import Footer from './Footer'
import MainNav from './MainNav'

const MainContainerStyles = styled.main`
  height: 100vh;
  margin: 1rem;

  @media (min-width: 820px) {
    margin: 4rem;
  }

  @media (min-width: 1020px) {
    width: 90%;
    max-width: 1800px;
    margin: 4rem auto;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <MainContainerStyles>
        <MainNav />
        {children}
        <Footer />
      </MainContainerStyles>
    </>
  )
}

export default Layout

import Link from 'next/link'
import styled from 'styled-components'

const LogoStyles = styled.div`
  position: relative;

  h1 {
    font-size: var(--extraLarge);
    font-weight: 900;
  }

  h1,
  a {
    color: var(--pink);
  }

  span {
    position: absolute;
    top: 54px;
    left: 3.77px;
    color: var(--text-primary);
  }
`

const Logo = () => {
  return (
    <LogoStyles className='logo'>
      <h1>
        <Link href="/">
          ROBBY <span>WEBB</span>
        </Link>
      </h1>
    </LogoStyles>
  )
}

export default Logo

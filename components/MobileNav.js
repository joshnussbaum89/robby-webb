import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const MobileNavStyles = styled.div`
  display: flex;
  align-items: flex-end;
  height: 5rem;

  .mobile-nav_overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    width: 100vw;
  }

  .mobile-nav_overlay.open {
    display: block;
    background: var(--bg-primary);
    a {
      font-size: var(--large);
    }
  }

  .mobile-nav_items {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      margin: 2rem 0;
    }
  }

  .mobile-nav_hamburger,
  .mobile-nav_close {
    font-size: 2rem;
    cursor: pointer;
  }

  .mobile-nav_close {
    position: absolute;
    top: 4.1rem;
    right: 16px;
  }

  @media (min-width: 820px) {
    display: none;
  }
`

const MobileNav = () => {
  const [open, toggleOpen] = useState(false)

  const openAndCloseNav = () => toggleOpen(!open)

  return (
    <MobileNavStyles>
      <MenuRoundedIcon
        className="mobile-nav_hamburger"
        onClick={openAndCloseNav}
      />
      <div className={open ? `mobile-nav_overlay open` : `mobile-nav_overlay`}>
        <CloseRoundedIcon
          className="mobile-nav_close"
          onClick={openAndCloseNav}
        />
        <div className="mobile-nav_items">
          <Link href="/discography">Discography</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </MobileNavStyles>
  )
}

export default MobileNav

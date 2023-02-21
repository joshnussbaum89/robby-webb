import Link from 'next/link'
import styled from 'styled-components'

const EntryAndMainNavItemsStyles = styled.ul`
  display: none;
  list-style-type: none;
  
  @media (min-width: 820px) {
    height: 50px;
    text-transform: uppercase;
    list-style: none;
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    li {
      margin: 0 0 0 2rem;
    }
    a {
      margin: 0 0 0 2rem;
    }
  }
`

const EntryAndMainNavItems = () => {
  return (
    <EntryAndMainNavItemsStyles className="nav-items">
      <li>
        <Link href="/discography">Discography</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </EntryAndMainNavItemsStyles>
  )
}

export default EntryAndMainNavItems

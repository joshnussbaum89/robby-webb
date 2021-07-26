import { createGlobalStyle } from 'styled-components';
import '@fontsource/nunito-sans';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/900.css';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #0c0d08;
        --text-primary: #ebebe1;
        --yellow: #c3ae69;
        --pink: #F0D7Da;
        --pinkFaded: #f0d7dabe;
        
        ${'' /* Font Sizes */}
        --extraSmall: 0.8rem;
        --small: 1.5rem;
        --medium: 1.8rem;
        --large: 2.25rem;
        --veryLarge: 3.5rem;
        --extraLarge: 4.5rem;
    }

    body {
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: 'Nunito Sans', sans-serif;
        letter-spacing: .01rem;
    }

    h1 {
        margin: 0;
    }

    h2 {
        font-size: var(--large);
    }

    .header-container {
      position: relative;
      display: inline-block;
      margin: auto;
    }

    @supports (-webkit-text-stroke: .8px var(--bg-primary)) {
      h2 {
        -webkit-text-stroke: .8px var(--bg-primary);
      }
    }

    h2::after {
      content: '';
      position: absolute;
      top: 57px;
      left: 12px;
      background-color: var(--pink);
      width: 100%;
      height: 1rem;
      border-radius: 2px;
      transform: rotate(-3deg);
      z-index: -1;
    }

    a {
      color: var(--text-primary);
      text-decoration: none;
      transition: .2s;
      :hover {
        color: var(--pink);
      }
    }

    @media (min-width: 820px) {
      h2 {
        font-size: var(--veryLarge);
      }
      h2::after {
      content: '';
      position: absolute;
      top: 90px;
      left: 16px;
      background-color: var(--pink);
      width: 100%;
      height: 1rem;
      border-radius: 2px;
      transform: rotate(-3deg);
      z-index: -1;
    }
    }
`;

export default GlobalStyles;

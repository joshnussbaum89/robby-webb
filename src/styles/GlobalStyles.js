import { createGlobalStyle } from 'styled-components';
import '@fontsource/nunito-sans';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/900.css';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #0c0d08;
        ${'' /* --bg-primary: #171216; */}
        ${'' /* --text-primary: #b8af9f; */}
        --text-primary: #ebebe1;
        ${'' /* --text-primary: #dfd3bf; */}
        ${'' /* --text-primary: #e7e7e7; */}
        --yellow: #c3ae69;
        ${'' /* --pink: #eed0d1; */}
        --pink: #F0D7Da;
        
        ${'' /* Font Sizes */}
        --extraSmall: 0.8rem;
        --small: 1.5rem;
        --medium: 1.8rem;
        --large: 2.25rem;
        --extraLarge: 4.5rem;
    }

    body {
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: 'Nunito Sans', sans-serif;
    }

    h1 {
        margin: 0;
    }

    .header-container {
      position: relative;
      display: inline-block;
      margin: auto;
    }

    h2 {
      font-size: var(--large);
    }

    h2::after {
      content: '';
      position: absolute;
      top: 60px;
      left: 16px;
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
`;

export default GlobalStyles;

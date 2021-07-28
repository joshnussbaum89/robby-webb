import { createGlobalStyle } from 'styled-components';
import '@fontsource/nunito-sans';
import '@fontsource/nunito-sans/200.css';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/900.css';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #0f0f0f;
        --text-primary: #fff;
        --yellow: #c3ae69;
        --pink: #f49ac2;
        --pinkFaded: #f49ac381;
        
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

    a {
      color: var(--text-primary);
      text-decoration: none;
      transition: .2s;
      :hover {
        color: var(--pink);
      }
    }

    h1 {
        margin: 0;
    }

    h2 {
        font-size: var(--large);
        font-weight: 400;
    }

    .header-container {
      display: inline-block;
      margin: auto;
    } 

    @media (min-width: 820px) {
        h2 {
          font-size: var(--veryLarge);
        }
      }
    
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
import '@fontsource/nunito-sans';
import '@fontsource/nunito-sans/900.css';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --bg-primary: #0c0d08;
        --text-primary: #b8af9f;
        ${'' /* --text-primary: #dfd3bf; */}
        ${'' /* --text-primary: #e7e7e7; */}
        --yellow: #c3ae69;
        --pink: #eed0d1;
        
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

import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

    :root {
        ${'' /* Colors */}
        --bg-primary: #0c0d08;
        --text-primary: #b8af9f;
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
        margin: 1rem;
    }

    h1 {
        margin: 0;
    }
`;

export default GlobalStyles;

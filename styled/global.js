import { createGlobalStyle } from 'styled-components';

import { colors, fonts } from './constants';

const global = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${fonts.fontFamily};
        background-color: ${colors.background};
        color: ${colors.text};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        color: inherit;
        font: inherit;
    }
`;

export default global;

import styled     from 'styled-components';

import { colors } from '../constants';

const LayoutStyled = styled.div`
    padding: 24px;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;

    .header {
        margin-bottom: 32px;
        
        .logo {
            font-size: 2rem;
            font-weight: 900;
            color: ${colors.textSecondary};
            user-select: none;

            span {
                color: ${colors.primary};
            }
        }
    }

    .count {
        margin: 12px 0;
        color: ${colors.textSecondary};
    }

    .footer {
        margin-top: 32px;
        text-align: center;
        font-size: 0.75rem;
    }
`;

export default LayoutStyled;

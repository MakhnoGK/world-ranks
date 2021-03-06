import styled     from 'styled-components';

import { colors } from '../constants';

const LayoutStyled = styled.div`
    padding: 24px;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 1100px;

    .header {
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .logo {
            font-size: 2rem;
            font-weight: 900;
            color: ${({ theme }) => theme.colors.textSecondary};
            user-select: none;

            span {
                color: ${({ theme }) => theme.colors.primary};
            }
        }

        .themeSwitcher {
            display: flex;
            align-items: center;
            border: none;
            background-color: transparent;
            outline: none;
            padding: 0;
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .count {
        margin: 12px 0;
        color: ${({ theme }) => theme.colors.textSecondary};
    }

    .footer {
        margin: 32px;
        padding-bottom: 16px;
        text-align: center;
        font-size: 0.75rem;
    }

    @media (min-width: 768px) {
        .main {
            .countsContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .count {
                    flex: 1;
                }

                .input {
                    flex: 2;
                }
            }
        }

        .container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 20px;

            .left {
                grid-column: 1 / span 4;
            }

            .right {
                grid-column: 5 / span 8;
            }
        }
    }
`;

export default LayoutStyled;

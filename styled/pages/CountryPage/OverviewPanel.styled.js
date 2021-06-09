import styled from 'styled-components';
import { colors, shadows } from '../../constants';

const CountryPageStyled = styled.div`
    padding: 20px;
    border-radius: 8px;
    box-shadow: ${shadows.main};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    margin-bottom: 20px;

    img {
        border-radius: 4px;
        width: 100%;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.07),
            0 0 12px 0 rgba(0, 0, 0, 0.04);
    }

    .name {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0;
    }

    .region {
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        margin: 4px 0 24px 0;
    }

    .stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        text-align: center;

        .label {
            font-size: 14px;
            color: ${({ theme }) => theme.colors.textSecondary};
        }
    }
`;

export default CountryPageStyled;

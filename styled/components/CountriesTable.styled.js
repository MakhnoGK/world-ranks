import styled              from 'styled-components';

import { colors, shadows } from '../constants';

const CountriesTableStyled = styled.div`
    .heading {
        display: flex;

        button {
            border: none;
            cursor: pointer;
            background-color: transparent;
        }

        .headingName,
        .headingPopulation {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 20px;
            color: ${colors.textSecondary};
            font-weight: 500;
        }

        .headingName {
            text-align: left;
        }

        .headingPopulation {
            justify-content: center;
        }
    }

    .row {
        display: flex;
        padding: 20px;
        margin-bottom: 16px;
        font-weight: 500;
        text-align: center;
        background-color: ${colors.backgroundLight};
        border-radius: 8px;
        box-shadow: ${shadows.main};
        transition: transform .2s ease-in-out, box-shadow .2s ease-in-out;
        user-select: none;

        &:hover {
            transform: translateY(-4px);
            box-shadow: ${shadows.hovered};
        }

        .name {
            flex: 1;
            text-align: left;
        }

        .population {
            flex: 1;
        }
    }
`;

export default CountriesTableStyled;

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

        .headingFlag {
            flex: 1;
        }

        .headingName,
        .headingPopulation,
        .headingArea,
        .headingGini {
            flex: 4;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: ${colors.textSecondary};
            font-weight: 500;
        }

        .headingName {
            text-align: left;
        }

        .headingName {
            justify-content: flex-start;
        }
    }

    .row {
        display: flex;
        align-items: center;
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
            flex: 4;
            text-align: left;
        }

        .population {
            flex: 4;
        }

        .area {
            flex: 4;
        }

        .gini {
            flex: 4;
        }

        .flag {
            flex: 1;
            margin-right: 8px;

            img {
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) {
        .heading {
            &Gini,
            &Area {
                display: none !important;
            }
        }

        .row {
            .area,
            .gini {
                display: none;
            }
        }
    }
`;

export default CountriesTableStyled;

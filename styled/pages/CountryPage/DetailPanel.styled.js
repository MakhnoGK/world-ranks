import styled from 'styled-components';
import { colors, shadows } from '../../constants';

const DetailPanelStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    box-shadow: ${shadows.main};
    border-radius: 8px;
    padding: 20px;

    .heading {
        font-size: 20px;
        font-weight: 500;
        padding: 20px 20px 0 20px;
    }

    .detailsRow {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #e0e0e0;
        font-size: 14px;

        &:last-child {
            border-bottom: none;
        }
    }

    .neighbourContainer {
        display: block;

        .detailsLabel {
            font-size: 20px;
            font-weight: 500;
            margin: 40px 0 20px 0;
        }

        .neighbours {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 24px;
        }
    }
`;

export default DetailPanelStyled;
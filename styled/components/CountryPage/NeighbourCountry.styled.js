import styled from 'styled-components';
import { colors } from '../../constants';

const NeighbourCountryStyled = styled.div`
    text-align: center;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.07),
            0 0 12px 0 rgba(0, 0, 0, 0.04);
    }

    .countryName {
        margin-bottom: 20px;
    }
`;

export default NeighbourCountryStyled;

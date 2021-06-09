import styled     from 'styled-components';

import { colors } from '../constants';

const SearchInputStyled = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    border-radius: 8px;
    padding-left: 16px;

    .input {
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.text};
        background-color: transparent;
        padding: 16px;
        width: 100%;
        height: 100%;

        &::placeholder {
            color: ${({ theme }) => theme.colors.textSecondary};
        }
    }
`;

export default SearchInputStyled;

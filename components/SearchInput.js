import React             from 'react';
import { SearchRounded } from '@material-ui/icons';

import SearchInputStyled from '../styled/components/SearchInput.styled';

const SearchInput = ({ ...rest }) => (
    <SearchInputStyled>
        <SearchRounded color='inherit' />
        <input className='input' {...rest} />
    </SearchInputStyled>
);

export default SearchInput;

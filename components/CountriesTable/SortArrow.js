import React           from 'react';
import PropTypes       from 'prop-types';
import {
    KeyboardArrowDownRounded,
    KeyboardArrowUpRounded
} from '@material-ui/icons';

import SortArrowStyled from '../../styled/components/CountiresTable/SortArrow.styled';

const SortArrow = ({ direction }) => {
    if (!direction) return <></>;

    if (direction === 'asc') {
        return (
            <SortArrowStyled>
                <KeyboardArrowDownRounded color="inherit" />
            </SortArrowStyled>
        );
    }

    if (direction === 'desc') {
        return (
            <SortArrowStyled>
                <KeyboardArrowUpRounded color="inherit" />
            </SortArrowStyled>
        );
    }
};

SortArrow.propTypes = {
    direction: PropTypes.oneOf(['asc', 'desc', null]),
};

export default SortArrow;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NeighbourCountryStyled from '../../styled/components/CountryPage/NeighbourCountry.styled';
import { getCountryByAlpha3Code } from '../../utils';

const NeighbourCountry = ({ alpha }) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        getCountryByAlpha3Code(alpha).then((data) => setCountry(data));

        return () => {
            setCountry(null);
        };
    }, []);

    return (
        <NeighbourCountryStyled>
            <img src={country?.flag} alt={country?.name} />
            <p className='countryName'>{country?.name}</p>
        </NeighbourCountryStyled>
    );
};

NeighbourCountry.propTypes = {
    alpha: PropTypes.string,
};

export default React.memo(NeighbourCountry);

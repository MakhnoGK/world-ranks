import React                from 'react';

import CountriesTableStyled from '../styled/components/CountriesTable.styled';

const CountriesTable = ({ countries }) => {
    const renderCountries = (country) => (
        <div className='row' key={country.alpha3Code}>
            <div className='name'>{country.name}</div>
            <div className='population'>{country.population}</div>
        </div>
    );

    return (
        <CountriesTableStyled>
            <div className='heading'>
                <button className='headingName'>
                    <div>Name</div>
                </button>
                <button className='headingPopulation'>
                    <div>Population</div>
                </button>
            </div>
            {countries.map(renderCountries)}
        </CountriesTableStyled>
    );
}

export default CountriesTable;

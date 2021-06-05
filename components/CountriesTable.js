import React, { useState }  from 'react';
import Link                 from 'next/link';

import SortArrow            from './CountriesTable/SortArrow';

import { orderCountries }   from '../utils';
import { COUNTRY_ROUTE }    from '../contants/routes';
import CountriesTableStyled from '../styled/components/CountriesTable.styled';

const CountriesTable = ({ countries }) => {
    const [direction, setDirection] = useState(null);
    const [value, setValue]         = useState();

    const orderedCountries = orderCountries(countries, value, direction);

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc');
        } else if (direction === 'desc') {
            setDirection('asc');
        } else {
            setDirection(null);
        }
    };

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };

    const renderCountries = (country) => (
        <Link
            key  = {country.alpha3Code}
            href = {`${COUNTRY_ROUTE}/${country.alpha3Code}`}
        >
            <div className='row'>
                <div className='name'>{country.name}</div>
                <div className='population'>{country.population}</div>
            </div>
        </Link>
    );

    return (
        <CountriesTableStyled>
            <div className='heading'>
                <button
                    className = 'headingName'
                    name      = 'name'
                    onClick   = {() => setValueAndDirection('name')}
                >
                    <div>Name</div>
                    {value === 'name' && (
                        <SortArrow direction={direction} />
                    )}
                </button>
                <button
                    className = 'headingPopulation'
                    name      = 'population'
                    onClick   = {() => setValueAndDirection('population')}
                >
                    <div>Population</div>
                    {value === 'population' && (
                        <SortArrow direction={direction} />
                    )}
                </button>
            </div>
            {orderedCountries.map(renderCountries)}
        </CountriesTableStyled>
    );
}

export default CountriesTable;

import React, { useState }  from 'react';
import Link                 from 'next/link';
import Image                from 'next/image';

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
                <div className='flag'>
                    <Image
                        src    = {country.flag}
                        alt    = {country.name}
                        width  = {59}
                        height = {39}
                    />
                </div>
                <div className='name'>{country.name}</div>
                <div className='population'>{country.population || '-'}</div>
                <div className='area'>{country.area || '-'}</div>
                <div className='gini'>
                    {
                        country.gini
                            ? `${country.gini}%`
                            : '-'
                    }
                </div>
            </div>
        </Link>
    );

    return (
        <CountriesTableStyled>
            <div className='heading'>
                <div className='headingFlag' />
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
                <button
                    className = 'headingArea'
                    name      = 'area'
                    onClick   = {() => setValueAndDirection('area')}
                >
                    <div>Area (km<sup>2</sup>)</div>
                    {value === 'area' && (
                        <SortArrow direction={direction} />
                    )}
                </button>
                <button
                    className = 'headingGini'
                    name      = 'gini'
                    onClick   = {() => setValueAndDirection('gini')}
                >
                    <div>Gini index</div>
                    {value === 'gini' && (
                        <SortArrow direction={direction} />
                    )}
                </button>
            </div>
            {orderedCountries?.map(renderCountries)}
        </CountriesTableStyled>
    );
}

export default CountriesTable;

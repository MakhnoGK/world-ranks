import React, { useState } from 'react';
import PropTypes           from 'prop-types';

import Layout              from '../components/Layout';
import SearchInput         from '../components/SearchInput';
import CountriesTable      from '../components/CountriesTable';

const Index = ({ countries }) => {
    const [keyword, setKeyword] = useState('');

    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(keyword)
            || country.region.toLowerCase().includes(keyword)
            || country.subregion.toLowerCase().includes(keyword)
    );

    const handleChange = (event) => {
        event.preventDefault();
        
        setKeyword(event.target.value.toLowerCase());
    };
    
    return (
        <Layout>
            <div className='countsContainer'>
                <div className='count'>
                    Found {countries.length} countries
                </div>
                <div className='input'>
                    <SearchInput
                        placeholder='Filter by name, region or subregion'
                        onChange={handleChange}
                    />
                </div>
            </div>
            <CountriesTable countries={filteredCountries} />
        </Layout>
    );
};

Index.propTypes = {
    countries: PropTypes.array
};

export const getStaticProps = async () => {
    const res       = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    return {
        props: {
            countries
        },
    };
};

export default Index; 

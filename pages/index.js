import React          from 'react';

import Layout         from '../components/Layout';
import SearchInput    from '../components/SearchInput';
import CountriesTable from '../components/CountriesTable';

const Index = ({ countries }) => (
    <Layout>
        <div className='count'>
            Found {countries.length} countries
        </div>
        <SearchInput placeholder='Filter by name, region or subregion' />
        <CountriesTable countries={countries} />
    </Layout>
);

export const getStaticProps = async () => {
    const res       = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();

    return {
        props: {
            countries,
        },
    };
};

export default Index; 

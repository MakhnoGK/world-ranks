import React             from 'react';

import CountryPageStyled from '../../styled/pages/CountryPage.styled';

const CountryPage = ({ country }) => {
    return (
        <CountryPageStyled>
            {JSON.stringify(country, null, 4)}
        </CountryPageStyled>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res     = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
    const country = await res.json();

    return {
        props: {
            country,
        },
    };
};

export default CountryPage;

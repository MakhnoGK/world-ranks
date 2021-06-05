import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import DetailPanelStyled from '../../styled/pages/CountryPage/DetailPanel.styled';
import OverviewPanelStyled from '../../styled/pages/CountryPage/OverviewPanel.styled';
import { getCountryByAlpha3Code } from '../../utils';
import { COUNTRY_ROUTE } from '../../contants/routes';
import NeighbourCountry from '../../components/CountryPage/NeighbourCountry';

const CountryPage = ({ country }) => {
    return (
        <Layout title={country.name}>
            <OverviewPanelStyled>
                <img src={country.flag} alt={country.name} />
                <h1 className='name'>{country.name}</h1>
                <p className='region'>{country.region}</p>

                <div className='stats'>
                    <div className='population'>
                        <div className='value'>{country.population}</div>
                        <div className='label'>Population</div>
                    </div>
                    <div className='area'>
                        <div className='value'>{country.area}</div>
                        <div className='label'>Area</div>
                    </div>
                </div>
            </OverviewPanelStyled>
            <DetailPanelStyled>
                <h4 className='heading'>Detail</h4>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Capital</div>
                    <div className='detailsValue'>{country.capital}</div>
                </div>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Subregion</div>
                    <div className='detailsValue'>{country.subregion}</div>
                </div>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Languages</div>
                    <div className='detailsValue'>{country.languages.map(({ name }) => name).join(', ')}</div>
                </div>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Currency</div>
                    <div className='detailsValue'>{country.currencies.map(({ name }) => name).join(', ')}</div>
                </div>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Native name</div>
                    <div className='detailsValue'>{country.nativeName}</div>
                </div>
                <div className='detailsRow'>
                    <div className='detailsLabel'>Gini index</div>
                    <div className='detailsValue'>{country.gini}%</div>
                </div> 

                <div className='detailsRow neighbourContainer'>
                    <div className='detailsLabel'>Neighbour countries</div>
                    <div className='neighbours'>
                        {country.borders.map((border) => (
                            <Link
                                key={border}
                                href={`${COUNTRY_ROUTE}/${border}`}
                                passHref
                            >
                                <NeighbourCountry alpha={border} />
                            </Link>
                        ))}
                    </div>
                </div>
            </DetailPanelStyled>
        </Layout>
    );
};

CountryPage.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.string,
        region: PropTypes.string
    })
};

export const getServerSideProps = async ({ params }) => {
    const country = await getCountryByAlpha3Code(params.id);

    return {
        props: {
            country,
        },
    };
};

export default CountryPage;

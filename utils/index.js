export const orderCountries = (countries, value, direction = 'asc') => {
    if (direction === 'asc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1);
    }

    if (direction === 'desc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? -1 : 1);
    }

    return countries;
}

export const getCountryByAlpha3Code = async (alphaCode) => {
    const res     = await fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`);
    const country = await res.json();

    return country;
};

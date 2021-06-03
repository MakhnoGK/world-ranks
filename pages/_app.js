import GlobalStyles from '../styled/global';

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
);

export default App;

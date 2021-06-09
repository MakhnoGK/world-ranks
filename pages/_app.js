import ThemeContext from '../context/ThemeContext';
import GlobalStyles from '../styled/global';

const App = ({ Component, pageProps }) => {
    return (
        <ThemeContext>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeContext>
    );
};

export default App;

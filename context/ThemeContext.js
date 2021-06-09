import {
    useState,
    createContext,
    useContext
} from 'react';
import { ThemeProvider } from 'styled-components';

import { theme }         from '../styled/theme';

const CustomThemeContext = createContext(null);

const ThemeContext = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const handleChangeTheme = () => {
        setCurrentTheme((state) => state === 'light' ? 'dark' : 'light');
    };

    const context = {
        handleChangeTheme
    };

    return (
        <CustomThemeContext.Provider value={context}>
            <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(CustomThemeContext);

export default ThemeContext;

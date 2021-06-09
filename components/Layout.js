import React               from 'react';
import Link                from 'next/link';
import Head                from 'next/head';
import { Brightness6Rounded } from '@material-ui/icons';

import { useThemeContext } from '../context/ThemeContext';

import { MAIN_ROUTE }      from '../contants/routes';
import LayoutStyled        from '../styled/components/Layout.styled';

const Layout = ({ children, title = 'World ranks' }) => {
    const { handleChangeTheme } = useThemeContext();
    
    return (
        <LayoutStyled>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className='header'>
                <Link href={MAIN_ROUTE}>
                    <h1 className='logo'>World<span>Ranks</span></h1>
                </Link>
                <button className='themeSwitcher' onClick={handleChangeTheme}>
                    <Brightness6Rounded color='inherit' />
                </button>
            </header>
            <main className='main'>{children}</main>
            <footer className='footer'>
                Hryhorii Khyzhniakov @ {' '}
                <a
                    href='https://axels.tech'
                    rel='_noreferrer'
                    target="_blank"
                >
                    axels.tech
                </a>
            </footer>
        </LayoutStyled>
    );
}

export default Layout;

import React        from 'react';
import Head         from 'next/head';

import LayoutStyled from '../styled/Layout.styled';

const Layout = ({ children, title = 'World ranks' }) => (
    <LayoutStyled>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='header'>
            <h1 className='logo'>World<span>Ranks</span></h1>
        </header>
        <main className='main'>{children}</main>
        <footer className='footer'>
            Hryhorii Khyzhniakov @ {' '}
            <a href='https://axels.tech' rel='_noreferrer'>axels.tech</a>
        </footer>
    </LayoutStyled>
);

export default Layout;

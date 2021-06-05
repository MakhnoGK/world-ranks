import React          from 'react';
import Link           from 'next/link';
import Head           from 'next/head';

import { MAIN_ROUTE } from '../contants/routes';
import LayoutStyled   from '../styled/components/Layout.styled';

const Layout = ({ children, title = 'World ranks' }) => (
    <LayoutStyled>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='header'>
            <Link href={MAIN_ROUTE}>
                <h1 className='logo'>World<span>Ranks</span></h1>
            </Link>
        </header>
        <main className='main'>{children}</main>
        <footer className='footer'>
            Hryhorii Khyzhniakov @ {' '}
            <a href='https://axels.tech' rel='_noreferrer'>axels.tech</a>
        </footer>
    </LayoutStyled>
);

export default Layout;

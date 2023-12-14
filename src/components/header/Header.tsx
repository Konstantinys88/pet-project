import React from 'react';
import Link from 'next/link';

import './header.scss';


const Header = () => {
    return (
        <header className='header'>
            <div className="header__navbar">
                <div className='header__logo'>
                    <Link href={'LOGO'}>Logo</Link>
                </div>
                <div className="header__links">
                    <Link href={'link'} className='header__links'>Главная</Link>
                    <Link href={'link'} className='header__links'>Погода</Link>
                    <Link href={'link'} className='header__links'>Тест</Link>
                    <Link href={'link'} className='header__links'>Тест</Link>
                    <Link href={'link'} className='header__links'>Тест</Link>
                    <Link href={'link'} className='header__links'>Тест</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
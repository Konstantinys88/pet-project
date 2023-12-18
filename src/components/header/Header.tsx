import React from 'react';
import { Pacifico } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import './header.scss';

const pacifico = Pacifico({ subsets: ['cyrillic'], weight: '400' });

const Header = () => {
    return (
        <header className='header'>
            <div className="header__navbar">
                <div className='header__logo'>
                    <Link href={'/'}>
                        <p className={`${pacifico.className} ${'header__logo_text'}`}>Pet-project</p>
                    </Link>
                </div>
                
                <div className="header__links">
                    <Link href={'/'} className='header__links'>
                        <Image
                            src="/home.svg"
                            width={40}
                            height={40}
                            alt="Picture of the author" />
                    </Link>
                    <Link href={'/weather'} className='header__links'>
                        <Image
                            src="/weather.svg"
                            width={40}
                            height={40}
                            alt="Picture of the author" />
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default Header
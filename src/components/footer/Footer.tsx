import './footer.scss';
import Link from 'next/link';
import { Pacifico } from 'next/font/google';




const pacifico = Pacifico({ subsets: ['cyrillic'], weight: '400' });

const Footer = () => {
    return (
        <footer className="footer">
                    <div className='header__logo'>
                    <Link href={'/'}>
                        <p className={`${pacifico.className} ${'header__logo_text'}`}>Pet-project</p>
                    </Link>
                </div>
        </footer>
    )
}

export default Footer;
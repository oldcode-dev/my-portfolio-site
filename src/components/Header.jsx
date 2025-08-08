import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>EarnestByDesign</h1>
            <nav className={styles.largeScreenNav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
                    <li className={styles.navItem}><Link to="/about-me" className={styles.navLink}>About Me</Link></li>
                    <li className={styles.navItem}><a className={styles.navLink} href="#services">Skills</a></li>
                    <li className={styles.navItem}><a className={styles.navLink} href="#portfolio">Portfolio</a></li>
                    {/* <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#blog">Blog</a></li> */}
                    {/* <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#testimonials">Testimonials</a></li> */}
                    <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            {isMenuOpen && (
                <nav>
                    <ul className={styles.footerNavList}>
                        <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#home">Home</a></li>
                        <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#about">About Me</a></li>
                        <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#services">Skills</a></li>
                        <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#portfolio">Portfolio</a></li>
                        {/* <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#blog">Blog</a></li> */}
                        {/* <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#testimonials">Testimonials</a></li> */}
                        <li className={styles.footernavItem}><a className={styles.footerNavLink} href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
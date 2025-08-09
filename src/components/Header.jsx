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
                    <li className={styles.navItem}><Link to="/my-portfolio" className={styles.navLink} href="#portfolio">Portfolio</Link></li>
                    <li className={styles.footernavItem}><Link to="/contact-me" className={styles.footerNavLink} href="#contact">Contact</Link></li>
                </ul>
            </nav>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            {isMenuOpen && (
                <nav>
                    <ul className={styles.footerNavList}>
                        <li className={styles.footernavItem}><Link to="/" className={styles.footerNavLink}>Home</Link></li>
                        <li className={styles.footernavItem}><Link to="/about-me" className={styles.footerNavLink}>About Me</Link></li>
                        <li className={styles.footernavItem}><Link to="/my-portfolio" className={styles.footerNavLink}>Portfolio</Link></li>
                        <li className={styles.footernavItem}><Link to="/contact-me" className={styles.footerNavLink} href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
import styles from './Header.module.css';
import { useState } from 'react';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>EarnestByDesign</h1>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            {isMenuOpen && (
                <nav>
                    <ul className={styles.footerNavList}>
                        <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#home">Home</a></li>
                        <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#about">About Me</a></li>
                        <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#services">Skills</a></li>
                        <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#portfolio">Portfolio</a></li>
                        {/* <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#blog">Blog</a></li> */}
                        {/* <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#testimonials">Testimonials</a></li> */}
                        <li className={styles.footerNavItem}><a className={styles.footerNavLink} href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
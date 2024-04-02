import React from 'react';
import styles from '../style.module.css'; 

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/" className={styles.logo}>
                    TOAN NGUYEN
                </a>
                <ul className={styles['nav-ul']}>
                    <li className={styles['nav-li']}><a href="#about" className={styles['nav-link']}>About Me</a></li>
                    <li className={styles['nav-li']}><a href="#work" className={styles['nav-link']}>Work</a></li>
                    <li className={styles['nav-li']}><a href="#contact" className={styles['nav-link']}>Contact Me</a></li>
                    <li className={styles['nav-li']}><a href="/" className={styles['nav-link']}>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

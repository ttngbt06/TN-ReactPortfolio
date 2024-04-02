import React from 'react';
import styles from '../style.module.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                &copy; Made by CSS 2023
            </div>
        </footer>
    );
};

export default Footer;

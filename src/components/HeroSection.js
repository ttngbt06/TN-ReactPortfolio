import React from 'react';
import styles from '../style.module.css';

const HeroSection = () => {
    return (
        <section className={styles['hero-section']}>
            <h1 className={styles.tagline}>
                Nothing is Impossible!
            </h1>
        </section>
    );
};

export default HeroSection;

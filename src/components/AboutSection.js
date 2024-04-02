import React from 'react';
import styles from '../style.module.css'; 

const AboutSection = () => {
    return (
        <section className={`${styles.section} ${styles['about-section']}`} id="about">
            <div className={styles['section-title']}>
                <h2>About Me</h2>
            </div>
            <div className={styles['section-content']}>
                <p>Yes! Nothing is impossible - my life perspection. I can become anything, any version of myself, as long as I always think "I WANT". I will try my best, using 100% of my energy, potentials, and abilities to get what I WANT (without harming any others).</p>
                <p>I am an immigrant. In my first days coming to this wonderful country, I failed job interviews 4 times, I was unemployed for 2 months, just because my English was so bad. I started learning English again from Youtube, and started working as a waiter at a restaurant to improve my shortcomings. After that, I worked many other jobs in different fields to further improve my knowledge and skills.</p>
                <p>"I must try to constantly learn, improve, and strive to become the best version of myself." That was, is, and will always be something I remember in life and work, especially the upcoming job in your company.</p>
            </div>
        </section>
    );
};

export default AboutSection;

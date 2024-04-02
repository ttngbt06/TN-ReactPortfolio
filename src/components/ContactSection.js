import React from 'react';
import styles from '../style.module.css'; 

const ContactSection = () => {
    return (
        <section className={`${styles.section} ${styles['contact-section']}`} id="contact">
            <div className={styles['section-title']}>
                <h2>Contact Me</h2>
            </div>
            <div className={styles['section-content']}>
                <ul className={styles['contact-ul']}>
                    <li className={styles['contact-li']}>
                        <a href="mailto:ttngbt06@gmail.com" className={styles['contact-link']}>ttngbt06@gmail.com</a>
                    </li>
                    <li className={styles['contact-li']}>
                        <a href="callto:9522975151" className={styles['contact-link']}>952-297-5151</a>
                    </li>
                    <li className={styles['contact-li']}>
                        <a href="https://github.com/ttngbt06" className={styles['contact-link']}>Github</a>
                    </li>
                    <li className={styles['contact-li']}>
                        <a href="https://www.linkedin.com/in/toan-nguyen-851a58155/" className={styles['contact-link']}>Linked In</a>
                    </li>
                    <li className={styles['contact-li']}>
                        <a href="/" className={styles['contact-link']}>Porfolio</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ContactSection;

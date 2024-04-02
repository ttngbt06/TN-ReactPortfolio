import React from 'react';
import styles from '../style.module.css'; 
const projects = [
    {
        name: "Work Day Scheduler",
        link: "https://github.com/ttngbt06/TN-Work-Day-Scheduler"
    },
    {
        name: "Note Taker",
        link: "https://github.com/ttngbt06/TN-Note-Taker"
    },
    {
        name: "Weather Dashboard",
        link: "https://github.com/ttngbt06/TN-Weather-Dashboard"
    },
    {
        name: "Tech Blog",
        link: "https://github.com/ttngbt06/TN-Tech-Blog"
    },
    {
        name: "PWA JATE",
        link: "https://github.com/ttngbt06/TN-PWA-JATE"
    },
    {
        name: "JS Code Quiz",
        link: "https://github.com/ttngbt06/TN-JS-Code-Quiz"
    }
];

const WorkSection = () => {
    return (
        <section className={`${styles.section} ${styles['work-section']}`} id="work">
            <div className={styles['section-title']}>
                <h2>Work</h2>
            </div>
            <div className={styles['section-content']}>
                <div className={styles.gallery}>
                    {projects.map((project, index) => (
                        <article className={styles['work-article']} key={index}>
                            <a href={project.link} target="_blank" rel="noreferrer" className={styles['work-link']}>
                                {/* <img src={`assets/${index + 1}.jpg`} className={styles['work-img']} alt={project.name} /> */}
                                <img src={`https://cdn.vietnambiz.vn/2020/3/24/project-planning-header2x-1585044567657817815413.png`} className={styles['work-img']} alt={project.name} />
                            </a>
                            <div className={styles['work-info']}>
                                <h3>{project.name}</h3>
                                {/* Project description */}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
import React from 'react';
import styles from './OpenSourceProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <a href={props.link} className={styles.openSoruceProjectCardLinkWrapper} target='_blank'>
            <div className={styles.projectCard}>
                <p className={styles.projectName}>{props.header}</p>
                <p className={styles.aboutProject}>{props.description}</p>
                <div className={styles.languageWrapper}>
                    <span>{props.language}</span>
                    <span className={styles.kb}>{props.size}</span>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <p className={styles.projectTitle}>{props.name}</p>
            <p className={styles.projectDescription}>{props.description}</p>
            <a href={props.websiteURL} target='_blank'>
                <button className={styles.visitButton}>Visit Website</button>
            </a>
        </div>
    );
}

export default ProjectCard;
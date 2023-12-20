import React from 'react';
import styles from './BigProjectCard.module.css';

const BigProjectCard = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <p className={styles.projectTitle}>{props.name}</p>
            <p className={styles.projectDescription}>{props.description}</p>
            <a href='#'>
                <button className={styles.visitButton}>Visit Website</button>
            </a>
        </div>
    );
}

export default BigProjectCard;
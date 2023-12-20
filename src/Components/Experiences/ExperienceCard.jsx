import React from 'react';
import styles from './Experiences.module.css';

const ExperiencesCard = (props) => {
    return (
        <div className={styles.experiencesCard}>
            <div className={styles.company}>
                <p className={styles.companyName}>{props.companyName}</p>
                <img className={styles.companyImg} src={props.companyImageSrc} alt={props.companyName} />
            </div>
            <div className={styles.aboutExperience}>
                <p className={styles.job}>{props.job}</p>
                <p className={styles.date}>{props.jobExperience}</p>
                <p className={styles.impressions}>{props.impressions}</p>
            </div>
        </div>
    );
}

export default ExperiencesCard;
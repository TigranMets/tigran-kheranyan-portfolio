import React from 'react';
import styles from './Experiences.module.css';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
    let cards = [{
        companyName: 'Global It',
        companyImageSrc: require('../../assets/images/globalItOldLogo.WebP').default,
        job: 'Frontend developer',
        jobExperience: '8 ամիս',
        impressions: "it's my first job. I am really excited where i am working."
    }];

    return (
        <div id='experiences' className={styles.experiences}>
            <p className={styles.headerExperiences}>Experiences</p>
            <div className={styles.cardsBlock}>
                {cards.map(card => <ExperienceCard key={card.companyName} companyName={card.companyName}
                    companyImageSrc={card.companyImageSrc}
                    job={card.job}
                    jobExperience={card.jobExperience}
                    impressions={card.impressions} />)}
            </div>
        </div>
    );
}


export default Experiences;
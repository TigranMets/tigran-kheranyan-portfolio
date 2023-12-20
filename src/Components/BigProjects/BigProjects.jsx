import React from 'react';
import styles from './BigProjects.module.css';
import BigProjectCard from './BigProjectCard/BigProjectCard';

const BigProjects = () => {
    const cards = [
        {
            imgSrc: require('../../assets/images/globalItOldLogo.WebP').default,
            imgAlt: "Global It website",
            name: 'Global It website',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            imgSrc: require('../../assets/images/teslaSemi.WebP').default,
            imgAlt: "avto's image",
            name: 'Project2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
    ];

    return (
        <div id='bigProjects' className={styles.bigProjectsWrapper}>
            <p className={styles.bigProjects}>Big Projects</p>
            <p className={styles.description}>SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH</p>
            <div className={styles.cards}>
                {cards.map(card => <BigProjectCard key={card.name} imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    name={card.name}
                    description={card.description} />)}
            </div>
        </div>
    );
}

export default BigProjects;
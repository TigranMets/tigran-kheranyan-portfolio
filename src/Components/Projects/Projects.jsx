import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
    const cards = [
        {
            imgSrc: require('../../assets/images/barbershopWebsite.png'),
            imgAlt: "barbershop website",
            name: 'Barbershop website',
            description: 'Website for barbershops.',
            websiteURL: 'https://tigranbarbershop.netlify.app/english'
        },
        {
            imgSrc: require('../../assets/images/carservicesWebsite.png'),
            imgAlt: "car services website",
            name: 'Car services website',
            description: 'Website for companies offering car services.',
            websiteURL: 'https://tigrancarservices.netlify.app/english'
        },
    ];

    return (
        <div id='Projects' className={styles.projectsWrapper}>
            <p className={styles.projects}>Projects</p>
            <p className={styles.description}>Highlighting some of the websites I've developed and designed.</p>
            <div className={styles.cards}>
                {cards.map(card => <ProjectCard key={card.name} imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    name={card.name}
                    description={card.description}
                    websiteURL={card.websiteURL} />)}
            </div>
        </div>
    );
}

export default Projects;
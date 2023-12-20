import React from 'react';
import OpenSourceProjectCard from './OpenSourceProjectCard/OpenSourceProjectCard';
import styles from './OpenSourceProjects.module.css';

const OpenSourceProjects = () => {

    const cards = [
        {
            header: 'TigranKheranyan-Portfolio',
            description: '🚀My portfolio website',
            language: '🔴 HTML',
            size: '42.9 MB',
            link: 'https://github.com/TigranMets/tigran-kheranyan-portfolio'
        },
        {
            header: 'Course-sorter',
            description: 'A program that classifies courses from low to high price and high price to low price.',
            language: '🟡 JavaScipt',
            size: '1 KB',
            link: 'https://github.com/TigranMets/Course-sorter'
        },

        {
            header: 'UlbiTv-react-hooks-course',
            description: "UlbiTv's react hooks course.",
            language: '🔴 HTML',
            size: '1.15 MB',
            link: 'https://github.com/TigranMets/UlbiTv-react-hooks-course'
        },
        {
            header: 'UlbiTv-social-network',
            description: "Ulbi Tv's react course social network.",
            language: '🔴 HTML',
            size: '1.65 MB',
            link: 'https://github.com/TigranMets/UlbiTv-social-network'
        },
        {
            header: 'Memory-game',
            description: 'Memory game.',
            language: '🔴 HTML',
            size: '874 KB',
            link: 'https://github.com/TigranMets/Memory-game'
        },
        {
            header: 'Tic-tac-toe',
            description: 'Tic tac toe game.',
            language: '🟡 JavaScipt',
            size: '8 KB',
            link: 'https://github.com/TigranMets/Tic-tac-toeo'
        },
        {
            header: 'Colour-changer ',
            description: 'Program that changes colour of the round when you hover your mouse over the colour.',
            language: '🟣 CSS',
            size: '1 KB',
            link: 'https://github.com/TigranMets/Colour-changer'
        },
        {
            header: 'no-meta-questions',
            description: 'Instruction how to communicate in chat correctly in Armenian.',
            language: '🟡 JavaScipt',
            size: '40 KB',
            link: 'https://github.com/TigranMets/no-meta-questions'
        },
    ];

    return (
        <div id='openSourceProjects' className={styles.projects}>
            <p className={styles.projectsHeader}>Open Source Projects</p>
            <div className={styles.cards}>
                {cards.map(card => <OpenSourceProjectCard key={card.header} header={card.header}
                    description={card.description}
                    language={card.language}
                    size={card.size}
                    link={card.link}
                />
                )}
            </div>
            <a className={styles.moreProjectsLinkWrapper} href='https://github.com/TigranMets'>
                <button className={styles.moreProjects}>MORE PROJECTS</button>
            </a>
        </div>
    );
}

export default OpenSourceProjects;
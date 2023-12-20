import React from 'react';
import styles from './Achievemtns.module.css';
import AchievemtnsCard from './AchievemtnsCard';

const Achievements = () => {
    const cards = [{
        imgSrc: 'https://developerfolio.js.org/static/media/codeInLogo.47a7a717.webp',
        achievementHeader: 'Google Assistant Action',
        achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciunt.',
        buttonText: 'View Google Assistant Actionbutton',
    },
    {
        imgSrc: 'https://developerfolio.js.org/static/media/googleAssistantLogo.e79c6392.webp',
        achievementHeader: 'Google Assistant Action',
        achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciunt.',
        buttonText: 'View Google Assistant Actionbutton',
    },
    {
        imgSrc: 'https://developerfolio.js.org/static/media/pwaLogo.ee62cb58.webp',
        achievementHeader: 'PWA Web App Developer',
        achievementDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi nobis, provident beatae sit nesciun.',
        buttonText: 'View Google Assistant Actionnbutton',
    }];

    return (
        <div id='achievements' className={styles.body}>
            <span className={styles.header}>Achieventns And Certifications 🏆</span>
            <span className={styles.description}>ACHIEVEMENTS, CERTIFICATIONS, AWARD LETTERS AND SOME COOL STUFF THAT I HAVE DONE !</span>
            <div className={styles.carts}>
                {cards.map(card => <AchievemtnsCard imgSrc={card.imgSrc}
                    achievementHeader={card.achievementHeader}
                    achievementDescription={card.achievementDescription}
                    buttonText={card.buttonText} />)}
            </div>
        </div>
    );
}

export default Achievements;
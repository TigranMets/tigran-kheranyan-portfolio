import React from 'react';
import styles from './Achievemtns.module.css';

const AchievemtnsCard = (props) => {
    return (
        <div className={styles.cart}>
            <div className={styles.achievementImg}>
                <img className={styles.achieventn__img} src={props.imgSrc} alt='' />
            </div>
            <span className={styles.achievemt_header}>{props.achievementHeader}</span>
            <span className={styles.achievemt_description}>{props.achievementDescription}</span>
            <div className={styles.buttons}>
                <button>{styles.buttonText}</button>
            </div>
        </div>
    );
}

export default AchievemtnsCard;
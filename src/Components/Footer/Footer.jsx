import React from 'react';
import styles from './Footer.module.css';
import meAtSystemProgrammingConferanceAtRAU from '../../assets/images/meAtSystemProgrammingConferanceAtRAU.WebP'
import SocialMedia from '../../CommonComponents/SocialMedia/SocialMedia';


function Footer() {
    return (
        <footer id='footer'>
            <p className={styles.header}>Reach Out to me!</p>
            <div className={styles.howToReachOutToMe}>
                <div className={styles.leftBlock}>
                    <p className={styles.inbox}>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <p className={styles.aboutMe}>"Iron man | Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ "</p>
                    <p className={styles.location}>📍Yerevan, Armenia</p>
                    <SocialMedia componentForUse='footer' />
                </div>
                <img className={styles.myImage} src={meAtSystemProgrammingConferanceAtRAU} alt='Me at system programming conferance at RAU' />
            </div>
        </footer>
    );
}

export default Footer
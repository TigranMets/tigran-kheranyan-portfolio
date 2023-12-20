import React from 'react';
import meAtTheSatelliteControlPanel from '../../assets/images/meAtTheSatelliteControlPanel.Webp';
import styles from './Greeting.module.css';
import { Link } from 'react-scroll';
import SocialMedia from '../../CommonComponents/SocialMedia/SocialMedia';

const Home = () => {
    return (
        <div className={styles.greetingWrapper}>
            <div className={styles.left_block}>
                <h1 className={styles.greeting}>Hi all, I'm TigranMets 👋</h1>
                <p className={styles.aboutMe}>Frontend developer 🚀 having an experience of creating web appliactions using JS, React Redux and some other cool libraries.</p>
                <SocialMedia />
                <div className={styles.buttons}>
                    <Link to='footer' spy={true} smooth={true}><button>CONTACT ME</button></Link>
                    <a className={styles.resume} href='https://staff.am/en/users/resume/create-pdf'><button>SEE MY RESUME</button></a>
                </div>
            </div >
            <img className={styles.myPhoto} src={meAtTheSatelliteControlPanel} alt='Me at the satellite control panel' />
        </div >
    );
}

export default Home;
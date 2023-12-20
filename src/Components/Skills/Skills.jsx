import React from 'react';
import styles from './Skills.module.css';
import Tikoit from '../../assets/images/Tikoit.WebP';
import Skill from './Skill/Skill';

const Skills = () => {
    const skills = [
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
            imgAlt: 'HTML',
            skillName: 'HTML',
        },
        {
            imgSrc: 'https://www.toolbox.am/img/trainings/icons//css3-logo.png',
            imgAlt: 'CSS',
            skillName: 'CSS',
        },
        {
            imgSrc: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
            imgAlt: 'JavaScript',
            skillName: 'JavaScript',
        },
        {
            imgSrc: 'https://avatars.githubusercontent.com/u/70142?s=200&v=4',
            imgAlt: 'jQuery',
            skillName: 'jQuery',
        },
        {
            imgSrc: 'https://sap.github.io/ui5-webcomponents/assets/images/react.svg',
            imgAlt: 'React',
            skillName: 'React',
        },
        {
            imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
            imgAlt: 'Redux',
            skillName: 'Redux',
        },
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
            imgAlt: 'Wordpress',
            skillName: 'Wordpress',
        },
        {
            imgSrc: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
            imgAlt: 'Git',
            skillName: 'Git',
        },
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968896.png',
            imgAlt: 'Github',
            skillName: 'Github',
        },
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/188/188802.png',
            imgAlt: 'Physics',
            skillName: 'Physics',
        },
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/746/746960.png',
            imgAlt: 'Math',
            skillName: 'Math',
        },
        {
            imgSrc: 'https://ensp.network/wp-content/uploads/2021/07/flag-round-250.png',
            imgAlt: 'Armenian',
            skillName: 'Armenian',
        },
        {
            imgSrc: 'https://cleandye.com/wp-content/uploads/2020/01/English-icon.png',
            imgAlt: 'English',
            skillName: 'English',
        },
        {
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/323/323300.png',
            imgAlt: 'Russian',
            skillName: 'Russian',
        },
        {
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/768px-Google_Chrome_icon_%28September_2014%29.svg.png',
            imgAlt: 'Google',
            skillName: 'Googling',
        },
    ];

    return (
        <div id='skills' className={styles.skills}>
            <img className={styles.Tigran_img} src={Tikoit} alt='Tigran Kheranyan programming in TUMO' />
            <div className={styles.whatIDo}>
                <span className={styles.header}>What I do</span>
                <p className={styles.aboutMe}>CRAZY FRONTEND DEVELOPER WHO WANTS TO MASTER IN ENGINEERING</p>
                <div className={styles.languages}>
                    {skills.map(skill => <Skill key={skill.skillName} imgSrc={skill.imgSrc} imgAlt={skill.imgAlt} skillName={skill.skillName} />)}
                </div>
                <div className={styles.mySkillsWrapper}>
                    <p>⚡Developing frontend for websites.</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
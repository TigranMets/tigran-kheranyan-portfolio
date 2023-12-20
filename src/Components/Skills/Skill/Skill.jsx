import React from "react";
import s from './Skill.module.css';

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <span className={s.skillName}>{props.skillName}</span>
        </div>
    );
}

export default Skill;
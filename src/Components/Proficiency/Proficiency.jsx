import React from 'react';
import jsConf from '../../assets/images/JsConf.WebP';
import s from './Proficiency.module.css';

const Proficiency = () => {
    return (
        <div id='profilciency' className={s.proficiencyWrapper}>
                <p className={s.header}>Proficiency</p>
                <div>
                    <p>HTML CSS</p>
                    <progress value='100' max='100'></progress>
                </div>
                <div>
                    <p>JavaScript</p>
                    <progress value='70' max='100'></progress>
                </div>
                <div>
                    <p>Jquery</p>
                    <progress value='30' max='100'></progress>
                </div>
                <div>
                    <p>React</p>
                    <progress value='30' max='100'></progress>
                </div>
                <div>
                    <p>Wordpress</p>
                    <progress value='30' max='100'></progress>
                </div>
                <div>
                    <p>Math</p>
                    <progress value='20' max='100'></progress>
                </div>
                <div>
                    <p>Physics</p>
                    <progress value='20' max='100'></progress>
                </div>
                <div>
                    <p>English</p>
                    <progress value='30' max='100'></progress>
                </div>
                <div>
                    <p>Russian</p>
                    <progress value='50' max='100'></progress>
                </div>
                <div>
                    <p>Armenian</p>
                    <progress value='70' max='100'></progress>
                </div>
                <div>
                    <p>Git and Github</p>
                    <progress value='80' max='100'></progress>
                </div>
                <div>
                    <p>Googling</p>
                    <progress value='100' max='100'></progress>
                </div>
        </div>
    );
}

export default Proficiency;
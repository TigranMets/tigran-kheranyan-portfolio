import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import hamburgerMenu from '../../assets/images/hamburgerMenu.WebP'
import styles from './Navbar.module.css';

const Navbar = ({ toggleTheme }) => {

    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    let currentScrollPos = window.pageYOffset;

    const navRef = useRef();

    const toggleHamburger = () => {
        setHamburgerToggle(!hamburgerToggle);
    }

    window.onscroll = function () {
        if (prevScrollpos > currentScrollPos) {
            navRef.current.style.top = '0';
        } else {
            navRef.current.style.top = '-500px';
        }
        setPrevScrollpos(currentScrollPos);
    }

    return (
        <nav ref={navRef}>
            <a className={styles.logo} href='https://tigranmets.github.io/tigran-kheranyan-portfolio/'>TigranMets </a>
            <div className={`${styles.menuItems} ${hamburgerToggle && styles.hamburgerActiveMenuItems}`}>
                <Link to='skills' spy={true} smooth={true} >Skills</Link>
                <Link to='experiences' spy={true} smooth={true}>Work Experiences</Link>
                <Link to='profilciency' spy={true} smooth={true}>Proficiency</Link>
                <Link to='openSourceProjects' spy={true} smooth={true}>Open Source</Link>
                <Link to='bigProjects' spy={true} smooth={true}>Big Projects</Link>
                <Link to='footer' spy={true} smooth={true}>Contact Me</Link>
                <div className={styles.themeToggle}>
                    <input id='toggle' className={styles.toggleControl} type='checkbox' />
                    <label htmlFor='toggle' onClick={toggleTheme}></label>
                </div>
            </div>
            <img className={styles.hamburgerMenu} src={hamburgerMenu} alt='hamburger menu' onClick={toggleHamburger} />
        </nav>
    );
}

export default Navbar;
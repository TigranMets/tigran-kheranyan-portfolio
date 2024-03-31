import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Greeting from './Components/Greeting/Greeting';
import Skills from './Components/Skills/Skills';
import Proficiency from './Components/Proficiency/Proficiency';
import Projects from './Components/Projects/Projects';
// import Achievements from './Components/Achievements/Achievements';
// import Blogs from './Components/Blogs/Blogs';
import Experiences from './Components/Experiences/Experiences';
import WebsiteAuthor from './Components/WebsiteAuthor/WebsiteAuthor';
import React, { useState } from 'react';
import OpenSourceProjects from './Components/OpenSourceProjects/OpenSourceProjects';
import './App.css';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = () => {
    darkTheme
      ?
      localStorage.removeItem('theme')
      :
      localStorage.setItem('theme', 'darkTheme')
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`${'app'} ${darkTheme && 'appDarkMode'}`}>
      <Navbar toggleTheme={toggleTheme} />
      <div className='appWrapper'>
        <Greeting />
        <Skills />
        <Proficiency />
        <Experiences />
        <OpenSourceProjects />
        <Projects />
        {/* <Achievements />
      <Blogs /> */}
        <Footer />
        <WebsiteAuthor />
      </div>
    </div >
  );
}

export default App;
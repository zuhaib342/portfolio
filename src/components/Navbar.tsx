import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';
import styles from '../styles/Home.module.css';
import { useMediaQuery } from '@mui/material'; // Correct import
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import Skills from './SKills';
import Work from './Work';
import Contact from './Contact';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const textItems = ['MERN-Stack-Developer','Web Developer', 'Web Designer', 'Problem Solver'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000); // Change every 2 seconds (adjust the interval as needed)
  
    return () => clearInterval(interval);
  }, []);
  
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  
  

  return (
    <div>
      {isMobile ? ( // Render BottomNavigation for mobile screens
        <React.Fragment>
        <AppBar
          position="static"
          className={styles.appBar}
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none', // Remove the border
            top: 0,
            width:'auto',
          }}
        >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              DevelopedByZM
            </Typography>
          </Toolbar>
        </AppBar>
        <BottomNavigation
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            zIndex: 1000,
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
  label="Info"
  value="info"
  icon={<InfoIcon />}
  onClick={() => scrollToTop()}
/>

          <BottomNavigationAction
            label="Skills"
            value="skills"
            icon={<EmojiObjectsIcon />}
            onClick={() => scrollTo('skills-section')}
          />
          <BottomNavigationAction
            label="Work"
            value="work"
            icon={<WorkIcon />}
            onClick={() => scrollTo('work-section')}
          />
          <BottomNavigationAction
            label="Contact"
            value="contact"
            icon={<CallIcon />}
            onClick={() => scrollTo('contact-section')}
          />
        </BottomNavigation>
      </React.Fragment>
      ) : ( // Render AppBar for larger screens
      <AppBar position="static" className={styles.appBar}style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none', // Remove the border
      }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1  }}>
         DevelopedByZM
          </Typography>
          <div className={styles.linkContainer}>
          
            <button onClick={() => scrollToTop()} className={styles.linkButton}>
              Info
            </button>
            <button onClick={() => scrollTo('skills-section')} className={styles.linkButton}>
              Skills
            </button>
            <button onClick={() => scrollTo('work-section')} className={styles.linkButton}>
              Work
            </button>
            <button onClick={() => scrollTo('contact-section')} className={styles.linkButton}>
              Contact
            </button>
          </div>
        </Toolbar>
      </AppBar>
      )}
      {/* Content Sections */}
      <Sidebar/>
      <div id="info-section" className={`${styles.content} ${isMobile ? styles.mobileText : ''}`}>
  <div >
    <br /><br /><br /> <br /><br />
    <br />
   
    <h1 className={styles.Zuhaib1}>Zuhaib Mudassar </h1>
    <h2 className={styles.Zuhaib} >{textItems[currentIndex]}</h2>
    <h4 className={styles.Zuhaib} >
    Freelancer providing services for programming and design 
    <br /> content needs. Join me down below and let's get cracking!
    </h4>
    
    <button onClick={() => scrollTo('contact-section')} className={styles.hire} >Hire Me</button>
  </div>
  <div className={styles.pictureSection}>
    <div className={styles.roundedPicture}>
      {/* Place your image here */}
      <img
        src="bg.webp" // Add the path to your image
        alt="Your Image"
        className={styles.image}
      />
    </div>
  </div>
</div>
<div id="skills-section" >
    <Skills/>
      </div>

      <div id="work-section">
      <Work/>
      </div>
      <div id="contact-section"   >
      <Contact/>
      </div>
    </div>
  );
}

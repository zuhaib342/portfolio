import React from 'react';
import styles from '../styles/Sidebar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="https://github.com/zuhaib342" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="large" />
      </a>
      <a href="https://instagram.com/zuhaib._.xhk?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/sheikh-zuhaib-09b300250" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Sidebar;

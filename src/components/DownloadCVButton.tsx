import React from 'react';
import styles from '../styles/Contact.module.css';

const DownloadCVButton = () => {
  // Replace 'your-cv-file.pdf' with the actual filename and extension of your CV file
  const cvFileName = 'MERN Resume.pdf';

  return (
    <a href={cvFileName} download={cvFileName}>
      <button className={styles.Buttons}>Resume</button>
    </a>
  );
};

export default DownloadCVButton;

import React from 'react';
import styles from '../styles/Contact.module.css';
import DownloadCVButton from './DownloadCVButton';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 >Contact Me</h2>
          <p>Email: sheikhzuhaib522@gmail.com</p>
          <p>Phone: +92 310 7895927 </p>
          <DownloadCVButton/>

        </div>
        <div className={styles.contactFormContainer}>
          <form action={"https://formspree.io/f/moqolnaw"} method='POST' className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" name='Name' placeholder="Name" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <input type="email" name='Email' placeholder="Email" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message" name='Message'
                rows="5"
                className={styles.textarea}
              ></textarea>
            </div>
            <button className={styles.Buttons}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

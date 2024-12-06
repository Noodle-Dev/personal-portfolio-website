import React from "react";
import styles from "./Contact.module.css"
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src='/assets/contact/emailIcon.png' alt='Email Icon' />
          <a href='mailto:NoodleHairDev@protonmail.com'>
            NoodleHairDev@protonmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src='/assets/contact/githubIcon.png' alt='Github Icon' />
          <a href='https://github.com/Noodle-Dev'>github.com/Noodle-Dev</a>
        </li>
        <li className={styles.link}>
          <img src='/assets/contact/linkedinIcon.png' alt='Email' />
          <a href='xd'>
            linkedin.com/NoodleAM.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

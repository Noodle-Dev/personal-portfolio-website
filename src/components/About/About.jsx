import React from "react";
import styles from "./About.module.css"


export const About = () =>{
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src="assets/about/aboutImage.png" alt="Noodle sitting on a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="assets/about/cursorIcon.png" alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>
                            I'm a game developer with more thatn 5 years of experience
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/serverIcon.png" alt="server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>
                            I'm a game developer with more thatn 5 years of experience
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/cursorIcon.png" alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>
                            I'm a game developer with more thatn 5 years of experience
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
}
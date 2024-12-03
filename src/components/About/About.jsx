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
                    <img src="assets/about/gameIcon.png" alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Game Developer</h3>
                        <p>
                            I'm a game developer since 2020.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/cursorIcon.png" alt="server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Ilustrator</h3>
                        <p>
                            Idk I like drawing shit
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/webIcon.png" alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Web developer</h3>
                        <p>
                            Beginner web developer
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
}
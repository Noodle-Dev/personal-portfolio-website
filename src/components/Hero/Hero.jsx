import React from "react"
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Noodle AM</h1>
            <p className={styles.description}>I'm a game and web developer since 2020</p>
            <a href="mailto:NoodleHairDev@protonmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src="assets/hero/heroImage.png" alt="hero image" className={styles.heroImg}/>
        <div className={StyleSheet.topBlur}/>
        <div className={StyleSheet.bottomBlur}/>
    </section>);
}
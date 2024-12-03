import React from "react";
import styles from "./Experience.module.css"

import skills from "../../data/skills.json"
export const Experience = () =>{
    return(
    <section id="experience">
        <h2>Experience</h2>
        <div>
            <div>{
                skills.map((skills, id) => {
                    return <div key={id}>
                        <div> <img src={skills.imageSrc} alt={skills.title} /></div>
                    </div>
                })
                }</div>
            <ul></ul>
        </div>
    </section>);
    /* 1:10:20 */
}
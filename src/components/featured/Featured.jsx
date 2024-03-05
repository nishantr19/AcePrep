import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
<div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to AcePrep!</b>-Your Ultimate Placement Interview Companion!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/ft.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>About AcePrep.</h1>
          <p className={styles.postDesc}>
          Welcome to AcePrep, your go-to destination for mastering placement interviews and unraveling the intricacies of the placement process across various companies. 
       AcePrep is here to guide you through every step with 
           insightful placement interview experiences and detailed 
           information about the placement processes of different 
           companies.Explore a vast collection of firsthand placement interview experiences shared by individuals who have successfully navigated the
            recruitment processes. Gain insights into the questions asked, the
             challenges faced, and the strategies employed to secure coveted positions.

          </p>
          <button className={styles.button}>Get Started with AcePrep !!</button>
        </div>
      </div>
    </div>
        );
    };
    
    export default Featured;
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src="/acp.png" alt="lama blog" width={150} height={60} />
            <h1 className={styles.logoText}>AcePrep</h1>
          </div>
          <p className={styles.desc}>
          Explore a vast collection of firsthand placement interview 
          experiences shared by individuals who have successfully navigated 
          the recruitment processes. Gain insights into the questions asked,
           the challenges 
          faced, and the strategies employed to secure coveted positions.Whether 
          you're targeting tech giants, financial institutions, healthcare
           providers, or startups, AcePrep caters to a diverse range of 
           industries. Access industry-specific insights to tailor your 
           preparation according
           to the unique expectations of your desired field.
 
          </p>
<div></div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">CTC: 15+</Link>
            <Link href="/">CTC: 10+</Link>
            <Link href="/">CTC: 8+</Link>
            <Link href="/">CTC: 6+</Link>
          </div>

        </div>
      </div>
        )
    };
    
    export default Footer;
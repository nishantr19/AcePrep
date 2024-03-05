import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"
const MenuPosts = () => {
  return (

       <div className={styles.items}>
            <Link href="/" className={styles.item}>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.culture}`}>
  CTC: 15+
          </span>
          <h3 className={styles.postTitle}>
          DEUTSCHE BANK INTERVIEW EXPERIENCE
          </h3>
          <div className={styles.detail}>
            {/* <span className={styles.username}>John D</span> */}
            <span className={styles.date}> - 10.02.2024</span>
          </div> 
     </div>
            </Link>

            <Link href="/" className={styles.item}>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.travel}`}>
CTC: 10+
          </span>
          <h3 className={styles.postTitle}>
          MASTERCARD INTERVIEW EXPERIENCE
          </h3>
          <div className={styles.detail}>
          <span className={styles.date}> - 14.02.2024</span>
          </div> 
     </div>
            </Link>


            <Link href="/" className={styles.item}>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.coding}`}>
            

CTC: 15+
          </span>
          <h3 className={styles.postTitle}>
          ORACLE INTERVIEW EXPERIENCE
          </h3>
          <div className={styles.detail}>
          <span className={styles.date}> - 18.11.2023</span>
          </div> 
     </div>
            </Link>


            <Link href="/" className={styles.item}>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.food}`}>
CTC: 6+
          </span>
          <h3 className={styles.postTitle}>
          DELOITTE INTERVIEW EXPERIENCE
          </h3>
          <div className={styles.detail}>
          <span className={styles.date}> - 05.01.2024</span>
          </div> 
     </div>
            </Link>

            <Link href="/" className={styles.item}>
<div className={styles.textContainer}>
<span className={`${styles.category} ${styles.fashion}`}>
           

CTC: 8+
          </span>
          <h3 className={styles.postTitle}>
          HelpShift Interview Experience
          </h3>
          <div className={styles.detail}>
          <span className={styles.date}> - 10.02.2024</span>
          </div> 
     </div>
            </Link>

           </div>

  )
}

export default MenuPosts;

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/authLinks";

const Navbar = () => {
    return (

<div className={styles.container}>
<div className={styles.social}>
<a href="/">
  <img src="/acp.png" alt="facebook" width="160" height="60" />
</a>
          
</div>
<div className="nw">   <ThemeToggle/></div>
<div className={styles.links}>
 
<Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>About</Link>
      <AuthLinks/>

</div>

</div>
        )
    }
    
    export default Navbar
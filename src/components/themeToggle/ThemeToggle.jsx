"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

  const { toggle, theme } = useContext(ThemeContext);



  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
     <div className={styles.ball} style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        } ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle;


import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";

import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
          <MenuPosts/>


      </div>
        )
    };
    
    export default Menu;
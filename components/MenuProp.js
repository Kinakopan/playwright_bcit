import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import Link from "next/link";

const MenuProp = ({ visible, setMenuVisible }) => {

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      {visible &&
        <div
          className={styles.menuPropWrapper}
          style={{backgroundImage: `url(/background-images/menuBackground.png)`}}>
          <h1
            className={styles.menuPopupX}
            onClick={closeMenu}>x</h1>
          <ul className={styles.memuPropList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default MenuProp;

import styles from '@/styles/Home.module.css';
import React, { useState } from "react";
import Image from 'next/image';
import MenuProp from '/components/MenuProp';

export default function Navbar() {

  const [menuProp, setMenuProp] = useState({
    popup: false,
  });

  const togglePopup = () => {
    setMenuProp({
      ...menuProp,
      popup: !menuProp.popup
    });
  };

  return (
    <nav className={styles.nav}>
      <Image
        className={styles.burgar}
        src='/icons/menu-icon.png'
        alt="Menu icon"
        width={50}
        height={50}
        onClick={togglePopup}/>

      <MenuProp popup={menuProp.popup} />

      <Image
        className={styles.hat}
        src='/icons/graduation-hat.png'
        alt="Graduation hat logo"
        width={50}
        height={50}/>
    </nav>
  )
}

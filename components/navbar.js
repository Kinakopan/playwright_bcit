import styles from '@/styles/Home.module.css';
import MenuProp from '@/components/MenuProp';
import React, { useState } from "react";
import Image from 'next/image';

export default function Navbar() {

  const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => {
    setMenuVisible(true);
  };

  return (
    <nav className={styles.nav}>
      <Image
        className={styles.burgar}
        src='/icons/menu-icon.png'
        alt="Menu icon"
        width={50}
        height={50}
        onClick={openMenu}/>

      <MenuProp
        visible={menuVisible}
        setMenuVisible={setMenuVisible}
      />

      <Image
        className={styles.hat}
        src='/icons/graduation-hat.png'
        alt="Graduation hat logo"
        width={50}
        height={50}/>
    </nav>
  )
}

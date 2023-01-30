import styles from '@/styles/Home.module.css';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuProp = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <h1 onClick={() => setPopup(!popup)}>x</h1>
      {popup ? (
        <div
          className={styles.memuPropBg}
          style={{backgroundImage: `url(/background-images/menuBackground.png)`}}>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MenuProp;

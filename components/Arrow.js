import React from "react";
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Arrow({ page, upHref = '/about', downHref = '/about' }) {
  const [showUp, showDown] = page === "index"
    ? [false, true]
    : page === "contact"
    ? [true, false]
    : [true, true];

  return (
    <div className={styles.arrowBox}>
      {showUp && (
        <a
          className={styles.arrowUp}
          href={upHref}
        >
          <span>
            <Image
              className={styles.arrowUp_img}
              src='/icons/upwardArrow.png'
              alt="Upward arrow icon"
              width={50}
              height={60}
            />
          </span>
        </a>
      )}
      {showDown && (
        <a
          className={styles.arrowDown}
          href={downHref}
        >
          <span>
            <Image
              className={styles.arrowDown_img}
              src='/icons/downwardArrow.png'
              alt="Downward arrow icon"
              width={50}
              height={60}
            />
          </span>
        </a>
      )}
    </div>
  );
}

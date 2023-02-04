import styles from '@/styles/Home.module.css';
import React from 'react';
// import Link from 'next/link';
import { setTitle } from '@/pages/_app';

const MyButton = ({hrefLink = '', linkText = ''}) => {
  const handleClick = () => {
    window.location.href = `http://localhost:3000/${hrefLink}`;
  };

  const title = setTitle(hrefLink);

  return (
    <a>
      <button
        className={styles.btn}
        aria-label={linkText}
        name={linkText}
        onClick={handleClick}
      >
        {linkText}
        {/* <span className={styles.btn_text}>{linkText}</span> */}
      </button>
    </a>
  );
};

export default MyButton;

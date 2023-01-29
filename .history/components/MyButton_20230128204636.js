import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'next/link';

const MyButton = ({ linkText, hrefLink }) => {
  return (
    <Link
      href={hrefLink}
      className={styles.btn}>
      <button>{linkText}</button>
    </Link>
  );
};

export default MyButton;

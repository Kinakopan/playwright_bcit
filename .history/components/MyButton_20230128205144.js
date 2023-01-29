import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'next/link';

const MyButton = ({ hrefLink, text }) => {
  return (
    <Link
      href={hrefLink}
      className={styles.btn}>
        {text}
    </Link>
  );
};

export default MyButton;

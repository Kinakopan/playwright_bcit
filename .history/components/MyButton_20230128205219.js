import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'next/link';

const MyButton = ({ link, text }) => {
  return (
    <Link
      href={link}
      className={styles.btn}>
        {text}
    </Link>
  );
};

export default MyButton;

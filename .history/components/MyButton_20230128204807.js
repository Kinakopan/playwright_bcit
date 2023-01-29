import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'next/link';

const MyButton = ({ hrefLink, linkText }) => {
  return (
    <Link
      href={hrefLink}
      className={styles.btn}>
      {linkText}
    </Link>
  );
};

export default MyButton;
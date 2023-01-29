import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'next/link';

const MyButton = ({link = '/'}) => {
  return (
    <Link
      href={link}
      className={styles.btn}>
        {/* <button>{text}</button> */}
    </Link>
  );
};

export default MyButton;
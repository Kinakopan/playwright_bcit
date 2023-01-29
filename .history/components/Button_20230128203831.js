import React from 'react';
import styles from '@/styles/Home.module.css';
import { Link } from 'react-router-dom';

const MyButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className={styles.btn}>
      <button>{text}</button>
    </Link>
  );
};

export default MyButton;

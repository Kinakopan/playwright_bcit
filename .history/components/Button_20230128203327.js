import React from 'react';
import Link from 'react';
import styles from '@/styles/Home.module.css';

const Button = ({btnLink = '/', btnTxt = ''}) => {
  return (
    <>
      {React.createElement(btnLink, {className: styles.btn}, btnTxt)}
    </>
  );
};

export default Button;

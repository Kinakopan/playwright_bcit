import React from 'react';
import styles from '@/styles/Home.module.css';

const HeadingLine = ({headingTag = 'h1', headingText = ''}) => {
  return (
    <>
      {React.createElement(headingTag, {className: styles.text_heading1}, headingText)}
    </>
  );
};

export default HeadingLine;

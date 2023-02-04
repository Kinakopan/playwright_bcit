import styles from '@/styles/Home.module.css';
import React from 'react';

const HeadingLine = ({headingTag = 'h1', headingText = ''}) => {
  return (
    <>
      {React.createElement(headingTag, {className: styles.text_heading1}, headingText)}
    </>
  );
};

export default HeadingLine;

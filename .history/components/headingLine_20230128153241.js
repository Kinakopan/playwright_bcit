import styles from '@/styles/Home.module.css';


// export default function HeadingLine({headingText}) {

//   return (
//     <h1 className={styles.text_heading1}>{headingText}</h1>
//   )
// }


import React from 'react';

const HeadingLine = ({headingTag = 'h1', headingText = ''}) => {
  return (
    <>
      {React.createElement(headingTag, {className: styles.text_heading1}, headingText)}
    </>
  );
};

export default HeadingLine;

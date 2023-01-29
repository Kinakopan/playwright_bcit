import styles from '@/styles/Home.module.css';


// export default function HeadingLine({headingText}) {

//   return (
//     <h1 className={styles.text_heading1}>{headingText}</h1>
//   )
// }


import React from 'react';

const HeadingLine = ({ headingText, headingTag = 'h1' }) => {
  return (
    <div>
      {React.createElement(headingTag, {className: `${styles.HeadingLine}` }, headingText)}
    </div>
  );
};

export default HeadingLine;

import styles from '@/styles/Home.module.css';


export default function HeadingLine({headingText}) {
let headingText = 'About';

  return (
    <h1 className={styles.text_heading1}>{headingText}</h1>
  )
}

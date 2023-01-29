import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Ttle_line(headtext) {
  return (
    <h1 className={styles.text_heading1}>{headtext}</h1>
  )
}

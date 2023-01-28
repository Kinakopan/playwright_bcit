import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Arrow() {
  return (
    <div className={styles.arrowBox}>
      <button
        className={styles.arrowDown}
        onClick={() => setUpArrowClicked(true)}
      >
        <Image
          src='/icons/upwardArrow.png'
          alt="Upward arrow icon"
          width={50}
          height={50}
        />
      </button>

      <button
        className={styles.arrowDown}
        onClick={() => setDownArrowClicked(true)}
      >
        <Image
          src='/icons/downwardArrow.png'
          alt="Downward arrow icon"
          width={50}
          height={50}
        />
      </button>
    </div>
  )
}

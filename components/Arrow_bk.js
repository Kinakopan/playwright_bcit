import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Arrow({upHref = '/about', downHref = '/about'}) {
  return (
    <div className={styles.arrowBox}>
      <a
        className={styles.arrowUp}
        style={{display: "none"}}
        href={upHref}
      >
        <span>
          <Image
            className={styles.arrowUp_img}
            src='/icons/upwardArrow.png'
            alt="Upward arrow icon"
            width={50}
            height={60}
          />
        </span>
      </a>

      <a
        className={styles.arrowDown}
        style={{display: "none"}}
        href={downHref}
      >
        <span>
          <Image
            className={styles.arrowDown_img}
            src='/icons/downwardArrow.png'
            alt="Downward arrow icon"
            width={50}
            height={60}
          />
        </span>
      </a>
    </div>
  )
}

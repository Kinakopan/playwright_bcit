import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Arrow({upHref = '/about', downHref = '/about'}) {
  return (
    <div className={styles.arrowBox}>
      <Link
        className={styles.arrowUp}
        href={upHref}
      >
        <Image
          className={styles.arrowUp_img}
          src='/icons/upwardArrow.png'
          alt="Upward arrow icon"
          width={50}
          height={60}
        />
      </Link>

      <Link
        className={styles.arrowDown}
        href={downHref}
      >
        <Image
          className={styles.arrowDown_img}
          src='/icons/downwardArrow.png'
          alt="Downward arrow icon"
          width={50}
          height={60}
        />
      </Link>
    </div>
  )
}

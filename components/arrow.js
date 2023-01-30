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
          src='/icons/upwardArrow.png'
          alt="Upward arrow icon"
          width={50}
          height={50}
        />
      </Link>

      <Link
        className={styles.arrowDown}
        href={downHref}
      >
        <Image
          src='/icons/downwardArrow.png'
          alt="Downward arrow icon"
          width={50}
          height={50}
        />
      </Link>
    </div>
  )
}

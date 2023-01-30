import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.burgar}
        src='/icons/menu-icon.png'
        alt="Menu icon"
        width={50}
        height={50}/>
      <Image
        className={styles.hat}
        src='/icons/graduation-hat.png'
        alt="Graduation hat logo"
        width={50}
        height={50}/>
    </nav>
  )
}

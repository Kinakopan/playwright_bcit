import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.burgar}
        src='/icons/menu-icon.png'
        alt="menu icon"
        width={50}
        height={50}
      />
      <Image
        className={styles.hat}
        src='/icons/graduation-hat.png'
        alt="Graduation hat icon"
        width={50}
        height={50}
      />
    </nav>
  )
}

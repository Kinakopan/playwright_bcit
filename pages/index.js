import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import Arrow from '@/components/Arrow';
import Navbar from '@/components/Navbar';
import MyButton from '@/components/MyButton';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div
        className={`${styles.body} ${styles.body_home}`}
        style={{backgroundImage: `url(/background-images/backgroundMountain.jpg)`}}
      >
        <div className={styles.wrapper}>

          <Navbar/>

          {/* Main contents under nav bar */}
          <main className={styles.main}>
            <div className={styles.cont_main}>
              <h2 className={styles.text_lead}>
                An investment in knowledge pays the best interest.
              </h2>
              <p className={styles.text_body}>
                Different than a college or university, the British Columbia Institute of Technology offers paractical, flexible, applied education with instructors who have direct, hands-on experience in their field.
              </p>
              <div className={styles.box_btn}>
                <MyButton
                  hrefLink="/about"
                  linkText="More About Us"
                />
                <MyButton
                  hrefLink="/contact"
                  linkText="Constact Us"
                />
              </div>
            </div>
          </main>

          <Arrow/>

        </div>
      </div>
    </>
  )
}

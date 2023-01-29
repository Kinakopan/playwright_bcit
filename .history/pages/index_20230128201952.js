import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Arrow from '/components/arrow';
import Navbar from '/components/navbar';
import { Inter } from '@next/font/google';
import { Route, Switch } from "react-router-dom";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div
        className={`${styles.body} ${styles.body_home}`}
        // style={{backgroundImage: `url(${bgImg})`}}
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
                <Link
                  className={styles.btn_about}
                  href="/about">More About Us</Link>
                <Link
                  className={styles.btn_contact}
                  href="/contact">Constact Us</Link>
              </div>
            </div>
          </main>

          <Arrow/>

        </div>
      </div>
    </>
  )
}

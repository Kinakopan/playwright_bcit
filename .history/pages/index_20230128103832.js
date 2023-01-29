// import axios from 'axios'
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Arrow from '/components/arrow';
import Navbar from '/components/navbar';
import { Inter } from '@next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [bgImg, setBgImg] = useState('/background-images/backgroundMountain.jpg');
  // const [upArrowClicked, setUpArrowClicked] = useState(false);
  // const [downArrowClicked, setDownArrowClicked] = useState(false);

  // useEffect(() => {
  //   if (upArrowClicked) {
  //     if (bgImg==='/background-images/backgroundMountainUpsideDown.jpg') {
  //       setBgImg('/background-images/backgroundMountain.jpg');
  //     }
  //   }
  // });

  // useEffect(() => {
  //   if (downArrowClicked) {
  //     if (bgImg===('/background-images/backgroundMountain.jpg')) {
  //       setBgImg('/background-images/backgroundMountainUpsideDown.jpg');
  //     }
  //   }
  // });

  return (
    <>
      <div
        className={styles.homeBody}
        // style={{backgroundImage: `url(${bgImg})`}}
        style={{backgroundImage: `url(/background-images/backgroundMountain.jpg)`}}
        >
        <div className={styles.wrapper}>

          <Navbar/>

          {/* Main contents under nav bar */}
          <main className={styles.main}>
            <div className={styles.textBox}>
              <h2 className={styles.heading}>
                An investment in knowledge pays the best interest.
              </h2>
              <p className={styles.text_body}>
                Different than a college or university, the British Columbia Institute of Technology offers paractical, flexible, applied education with instructors who have direct, hands-on experience in their field.
              </p>
              <div className={styles.text_btnBox}>
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

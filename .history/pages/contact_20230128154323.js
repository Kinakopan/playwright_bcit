import styles from "@/styles/Home.module.css";
import Arrow from "/components/arrow";
import Navbar from "/components/navbar";
import HeadingLine from "/components/headingLine";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <div
        className={`${styles.body} ${styles.body_contact}`}
        style={{backgroundImage: `url(/background-images/backgroundMountainUpsideDown.jpg)`}}
      >
        <div className={styles.wrapper}>
          <Navbar />

          {/* Main contents under nav bar */}
          <main className={styles.main}>

            <HeadingLine headingText="Contact Us"/>

            <div className={`${styles.cont_section} ${styles.cont_section1}`}>
              <p className={styles.text_body}>
                We are proud to deliver an education that goes beyond textbooks
                and classrooms.
              </p>

              <h3 className={styles.text_heading2}>Information Sessions</h3>

            </div>
          </main>

          <Arrow/>
        </div>
      </div>
    </>
  );
}

import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Arrow from "@/components/Arrow";
import Navbar from "@/components/Navbar";
import HeadingLine from "@/components/HeadingLine";
import ContactForm from "@/components/ContactForm";

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

            <p className={styles.text_body}>
              What to discuss? Let's chat!
            </p>

            <ContactForm/>
          </main>

          <Arrow/>
        </div>
      </div>
    </>
  );
}

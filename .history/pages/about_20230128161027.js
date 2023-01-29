import styles from "@/styles/Home.module.css";
import Arrow from "/components/Arrow";
import Navbar from "/components/Navbar";
import HeadingLine from "/components/HeadingLine";
import Carousel from "/components/Carousel";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <div className={`${styles.body} ${styles.body_about}`}>
        <div className={styles.wrapper}>
          <Navbar />

          {/* Main contents under nav bar */}
          <main className={styles.main}>
            {/* About Us */}
            {/* <h1 className={styles.text_heading1}>About Us</h1> */}

            <HeadingLine headingText="About Us"/>

            <div className={`${styles.cont_section} ${styles.cont_section1}`}>
              <p className={styles.text_body}>
                We are proud to deliver an education that goes beyond textbooks
                and classrooms.
              </p>

              <p className={styles.text_body}>
                Our students gain the technical skills, real-world experience,
                and problem-solving ability needed to embrace complexity and
                lead innovation in a rapidly changing workforce.
              </p>

              <p className={styles.text_body}>
                Through close collaboration with industry, our network of alumni
                and partners continue to achieve global success.
              </p>

              <h3 className={styles.text_heading2}>Information Sessions</h3>

              <p className={styles.text_body}>
                Information Sessions are a simple way to figure out the next
                step along your career path. Learn more about the programs that
                interest you.
              </p>

              <h3 className={styles.text_heading2}>Big Info</h3>

              <p className={styles.text_body}>
                Big Info is the largest program expo and information session at
                BCIT. It’s your chance to find out about all our programs – from
                business and media, computing and health to engineering, trades
                and applied sciences.
                <br />
                If you missed our fall event the next Big Info is scheduled to
                return on February 15, 2023.
              </p>

              <h3 className={styles.text_heading2}>Campus Tours</h3>

              <p className={styles.text_body}>
                Tours run weekdays September to May, on our Burnaby campus. See
                BCIT in person and get a taste of campus life.
              </p>

              <Carousel/>
            </div>

            {/* DEPARTMENTS */}
            <HeadingLine headingTag="h2" headingText="DEPARTMENTS"/>

            <div className={`${styles.cont_section} ${styles.cont_section2}`}>
              <ul className={styles.box_list}>
                <li>Applied & Natural Sciences</li>
                <li>Business & Media</li>
                <li>Computing & IT</li>
                <li>Engineering</li>
                <li>Health Sciences</li>
                <li>Trades & Aprenticeships</li>
              </ul>
            </div>
          </main>

          <Arrow/>
        </div>
      </div>
    </>
  );
}

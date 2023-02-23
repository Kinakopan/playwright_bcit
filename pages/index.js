import styles from '@/styles/Home.module.css';
import Arrow from '@/components/Arrow';
import Navbar from '@/components/Navbar';
import MyButton from '@/components/MyButton';

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
              <h1 className={styles.text_lead}>
                An investment in knowledge pays the best interest.
              </h1>
              <p className={styles.text_body}>
                Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
              </p>
              <div className={styles.box_btn}>
                <MyButton
                  hrefLink="about"
                  linkText="More About Us"
                />
                <MyButton
                  hrefLink="contact"
                  linkText="Contact Us"
                />
              </div>
            </div>
          </main>

          <Arrow page="index"/>

        </div>
      </div>
    </>
  )
}

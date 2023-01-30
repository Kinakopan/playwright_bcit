import styles from "@/styles/Home.module.css";
import React, { useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
      '/carousel-images/0.jpg',
      '/carousel-images/1.jpg',
      '/carousel-images/2.jpg',
      '/carousel-images/3.jpg',
      '/carousel-images/4.jpg',
  ]
  const texts = [
      'Achieve Excellence',
      'Embrace Innovation',
      'Champion Diversity',
      'Pursue Collaboration',
      'Engage With Respect',
  ]

  return (
      <div className={styles.carousel_cont}>
        <div className={styles.carousel_wrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carousel_slide} ${currentSlide === index ? styles.carousel_active : ''}`}
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}

          {texts.map((text, index) => (
            <p
              key={index}
              className={`${styles.carousel_text} ${styles.carousel_position} ${currentSlide === index ? styles.carousel_active : ''}`}
            >{text}</p>
          ))}

          <button
            className={`${styles.carousel_prevBtn} ${styles.carousel_position}`}
            onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)}
            >
            <Image
              src="/icons/leftArrow.png"
              alt="Arrow icon to show the previous slide"
              width={60}
              height={60}
            />
          </button>
          <button
            className={`${styles.carousel_nextBtn} ${styles.carousel_position}`}
            onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
            >
            <Image
              src="/icons/rightArrow.png"
              alt="Arrow icon to show the next slide"
              width={60}
              height={60}
            />
          </button>
        </div>
      </div>
  )
}

export default Carousel

import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";
import Image from 'next/image'

const MyCarousel = () => {
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
      <div className={styles.cont_carousel}>
        <div className={styles.image_carousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          ))}
          <button
            className={styles.prevBtn}
            onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)}
            >
            <Image
              src="/icons/leftArrow.png"
              alt="Arrow icon to show the previous slide"
              width={80}
              height={80}
            />
          </button>
          <button
            className={styles.nextBtn}
            onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
            >
            <Image
              src="/icons/rightArrow.png"
              alt="Arrow icon to show the next slide"
              width={80}
              height={80}
            />
          </button>
        </div>
      </div>
  )
}

export default MyCarousel

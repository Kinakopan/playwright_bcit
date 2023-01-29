import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
      '/carousel-images/0.jpg',
      '/carousel-images/1.jpg',
      '/carousel-images/2.jpg',
      '/carousel-images/3.jpg',
      '/carousel-images/4.jpg',
      '/carousel-images/5.jpg'
  ]

  return (
      <div className={styles.image_carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              minWidth: "100%",
              width: "100%",
            }}
          />
        ))}
        <button
          className={styles.prevBtn}
          // onClick={() => setCurrentSlide(currentSlide - 1)}
          onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)}
          >
            <i className={[styles.fas, styles.fa_chevron_right]}></i>
        </button>
        <button
          className={styles.nextBtn}
          // onClick={() => setCurrentSlide(currentSlide + 1)}
          onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
          >
            <i className={[styles.fas, styles.fa_chevron_right]}></i>
        </button>
      </div>
  )
}

export default MyCarousel

import React, { useState } from 'react'
import styles from "@/styles/Home.module.css";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
      '/public/carousel-images/0.jpg',
      '/public/carousel-images/1.jpg',
      '/public/carousel-images/2.jpg',
      '/public/carousel-images/3.jpg',
      '/public/carousel-images/4.jpg',
      '/public/carousel-images/5.jpg'
  ]

  return (
    <div className={styles.box_carousel}>
      <div className={styles.image_carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`styles.slide ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <button
          className={styles.prevBtn}
          onClick={() => setCurrentSlide(currentSlide - 1)}>
            <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={styles.nextBtn}
          onClick={() => setCurrentSlide(currentSlide + 1)}>
            <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default MyCarousel

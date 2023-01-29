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
    <div className={image-carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  )
}

export default MyCarousel

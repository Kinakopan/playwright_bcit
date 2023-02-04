import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const words = [
  { id: 0, value: 'Achieve Excellence' },
  { id: 1, value: 'Embrace Innovation' },
  { id: 2, value: 'Champion Diversity' },
  { id: 3, value: 'Pursue Collaboration' },
  { id: 4, value: 'Engage With Respect' }
]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // As using useEffect was written as one of the requirements, I added the function that changes the slide every 3seconds.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % words.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [currentSlide])

  return (
    <div className={styles.carousel_cont}>
      <div className={styles.carousel_wrapper}>
        {words.map(word => (
          <div
            key={word.id}
            className={`${styles.carousel_slide} ${currentSlide === word.id ? styles.carousel_active : ''}`}
            style={{
              backgroundImage: `url(/carousel-images/${word.id}.jpg)`
            }}
          />
        ))}

        {words.map(word => (
          <p
            key={word.id}
            className={`${styles.carousel_text} ${styles.carousel_position} ${currentSlide === word.id ? styles.carousel_active : ''}`}
          >{word.value}</p>
        ))}

        <button
          className={`${styles.carousel_prevBtn} ${styles.carousel_position}`}
          onClick={() => setCurrentSlide((currentSlide - 1 + words.length) % words.length)}
        >
          <Image
            className={styles.carousel_arrow}
            src="/icons/leftArrow.png"
            alt="Arrow icon to show the previous slide"
            width={60}
            height={60}
          />
        </button>
        <button
          className={`${styles.carousel_nextBtn} ${styles.carousel_position}`}
          onClick={() => setCurrentSlide((currentSlide + 1) % words.length)}
        >
          <Image
            className={styles.carousel_arrow}
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

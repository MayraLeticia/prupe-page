"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from './style.module.scss';

const images = [
  "/images/aniversario.png",
  "/images/aniversario.png",
  "/images/aniversario.png"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.carouselImageWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images[index]} alt="Carousel" className={styles.carouselImage} />
        </motion.div>
      </AnimatePresence>

      <button className={`${styles.carouselButton} ${styles.left}`} onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <button className={`${styles.carouselButton} ${styles.right}`} onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from './style.module.scss';

const images = [
  "/images/aniversario.png",
  "/images/exemplo1.png",
  "/images/exemplo2.png"
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
    <div className="carousel-container">
      <motion.img
        key={index}
        src={images[index]}
        alt="Carousel"
        className="carousel-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      />
      <button className="carousel-button left" onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <button className="carousel-button right" onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}

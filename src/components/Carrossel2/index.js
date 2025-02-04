"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from './style.module.scss';

const images = [
  "/images/aniversario.png",
  "/images/noticia2.png",
  "/images/noticia3.png"
];

const links = [
  "https://www.instagram.com/prupepodologia/",  // Link da primeira imagem
  "https://g1.globo.com/ce/ceara/especial-publicitario/sistema-fecomercio/radar-do-comercio/noticia/2020/02/28/cuidado-com-os-pes-mais-do-que-beleza-uma-questao-de-saude.ghtml",  // Link da segunda imagem
  "https://blogs.opovo.com.br/radardocomercio/2020/02/24/podologia-o-que-seus-pes-dizem-sobre-sua-saude/"   // Link da terceira imagem
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    window.open(links[index], "_blank"); // Abre o link em uma nova aba
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
          <img
            src={images[index]}
            alt="Carousel"
            className={styles.carouselImage}
            onClick={handleImageClick} // Adiciona a função de clique
            style={{ cursor: "pointer" }} // Garante que o cursor mude para indicar um link
          />
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

"use client";
import useCarousel from '../../hooks/useCarousel';
import styles from './style.module.scss';

const AboutUs = () => {
  const {
    professionals,
    currentIndex,
    isTransitioning,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentIndex,
  } = useCarousel();

  return (
    <div id= "aboutus" className={styles.container}>
      <div className={styles.description}>
        <label>Quem somos?</label>
        <p>
          Nossos Profissionais não apenas tratam, eles entendem o funcionamento dos membros inferiores, identificam as patologias, indicam o melhor tratamento, informam os cuidados e acompanham.
        </p>
      </div>
      
      <div className={styles.carousel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <img src="/assets/icons/arrow_left.svg" alt="Previous" className={styles.arrow} onClick={prevSlide} />
        <div className={`${styles.slide} ${isTransitioning ? styles['fade-exit'] : styles['fade-enter-active']}`}>
          <img src={professionals[currentIndex].image} alt={professionals[currentIndex].name} className={styles.photo} />
          <div className={styles.info}>
            <label>{professionals[currentIndex].name}</label>
            <p>{professionals[currentIndex].info}</p>
          </div>
        </div>
        <img src="/assets/icons/arrow_right.svg" alt="Next" className={styles.arrow} onClick={nextSlide} />
      </div>
      <div className={styles.dots}>
        {professionals.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

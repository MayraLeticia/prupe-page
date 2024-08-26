'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

const Story = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progressBars, setProgressBars] = useState(Array(images.length).fill(0));
    const slideInterval = useRef(null);
    const progressInterval = useRef(null);

    useEffect(() => {
        startSlideShow();

        return () => {
            clearInterval(slideInterval.current);
            clearInterval(progressInterval.current);
        };
    }, [currentSlide]);

    useEffect(() => {
        // Reinicializar o estado quando o número de imagens mudar
        setCurrentSlide(0);
        setProgressBars(Array(images.length).fill(0));
        clearInterval(slideInterval.current);
        clearInterval(progressInterval.current);
        startSlideShow();
        
        return () => {
            clearInterval(slideInterval.current);
            clearInterval(progressInterval.current);
        };
    }, [images]);

    const startSlideShow = () => {
        clearInterval(slideInterval.current);
        clearInterval(progressInterval.current);

        slideInterval.current = setInterval(() => {
            setCurrentSlide(prev => {
                if (prev === images.length - 1) {
                    setProgressBars(Array(images.length).fill(0));
                    return 0;
                }
                return prev + 1;
            });
        }, 5000);

        progressInterval.current = setInterval(() => {
            setProgressBars(prevBars => {
                const newBars = [...prevBars];
                newBars[currentSlide] = Math.min(newBars[currentSlide] + 2, 100); // Incrementa o progresso do slide atual
                if (currentSlide > 0) {
                    for (let i = 0; i < currentSlide; i++) {
                        newBars[i] = 100; // Mantém todos os barras anteriores preenchidas
                    }
                }
                return newBars;
            });
        }, 100);
    };

    const handleNext = () => {
        clearInterval(slideInterval.current);
        clearInterval(progressInterval.current);
        setProgressBars(prevBars => {
            const newBars = Array(images.length).fill(0);
            newBars[(currentSlide + 1) % images.length] = 0;
            return newBars;
        });
        setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
        startSlideShow();
    };

    const handlePrev = () => {
        clearInterval(slideInterval.current);
        clearInterval(progressInterval.current);
        setProgressBars(Array(images.length).fill(0));
        setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));
        startSlideShow();
    };

    return (
        <div className={styles.SliderWrapper}>
            {images.map((image, index) => (
                <div key={index} className={`${styles.Slide} ${index === currentSlide ? styles.active : styles.inactive}`}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
            ))}
            <div className={styles.progressWrapper}>
                {images.map((_, index) => (
                    <div key={index} className={styles.progressBar} 
                    style={{ '--progress-width': `${progressBars[index]}%` }} />
                ))}
            </div>
            <button onClick={handlePrev} className={styles.prevButton}></button>
            <button onClick={handleNext} className={styles.nextButton}></button>
        </div>
    );
};

export default Story;

'use client';

import React, { useState, useEffect, useRef } from 'react';
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

    const startSlideShow = () => {
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
                newBars[currentSlide] = Math.min(newBars[currentSlide] + 2, 100); // Increment progress bar of current slide
                if (currentSlide > 0) {
                    for (let i = 0; i < currentSlide; i++) {
                        newBars[i] = 100; // Keep all previous bars filled
                    }
                }
                return newBars;
            });
        }, 100);
    };

    const handleNext = () => {
        clearInterval(slideInterval.current);
        clearInterval(progressInterval.current);
        setProgressBars(Array(images.length).fill(0));
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

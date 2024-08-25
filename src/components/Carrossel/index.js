"use client";

import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from '../CustomPagination';
import { NextButton, PrevButton } from '../NavigationButton';
import styles from './style.module.scss';
register();

const Carrossel = ({ breakpoints, children, spaceBetween, arrows, navigators, autoplay }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);
    const [slideNavigator, setSlideNavigator] = useState(null);
    const [negativeNavigator, setNegativeNavigator] = useState(null);
    const [totalSlides, setTotalSlides] = useState(React.Children.count(children));

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            console.log(swiperRef.current);  // Deve exibir o objeto Swiper com todas as propriedades.
        }
    }, []);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            console.log("Autoplay is active:", swiperRef.current.autoplay.running);
        }
    }, []);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleMouseEnter = () => {
        if (autoplay && swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
            swiperRef.current.allowTouchMove = false;
            swiperRef.current.allowSlideNext = false;
            swiperRef.current.allowSlidePrev = false;
            console.log("Autoplay stopped and interaction disabled");
        }
    };

    const handleMouseLeave = () => {
        if (autoplay && swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.allowTouchMove = true;
            swiperRef.current.allowSlideNext = true;
            swiperRef.current.allowSlidePrev = true;
            swiperRef.current.autoplay.start();
            console.log("Autoplay started and interaction enabled");
        }
    };

    useEffect(() => {
        const updateNavigators = () => {
            if (swiperRef.current) {
                const currentSlidesPerView = swiperRef.current.params.slidesPerView;
                setCurrentSlidesPerView(currentSlidesPerView);

                // Cálculo automático para slideNavigator e negativeNavigator
                setSlideNavigator(totalSlides - currentSlidesPerView);
                setNegativeNavigator(currentSlidesPerView > 1 ? currentSlidesPerView - 1 : 0);
            }
        };

        updateNavigators();

        if (swiperRef.current) {
            swiperRef.current.on('breakpoint', updateNavigators);
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.off('breakpoint', updateNavigators);
            }
        };
    }, [breakpoints, totalSlides]);

    useEffect(() => {
        if (swiperRef.current) {
            setTotalSlides(React.Children.count(children));
        }
    }, [children]);

    const getSlidesToSkip = () => {
        return currentSlidesPerView > 3 ? 1 : currentSlidesPerView;
    };

    return (
        <div
            className={styles.container_carrossel}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Captura a instância do Swiper aqui
                }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={spaceBetween}
                pagination={{ clickable: false, el: '.swiper-pagination' }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSlideChange={handleSlideChange}
                onInit={handleSlideChange}
                breakpoints={breakpoints}
                autoplay={autoplay}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} className={styles.container_slide}>
                        {child}
                    </SwiperSlide>
                ))}
                {arrows && (!isBeginning && <PrevButton slidesToSkip={getSlidesToSkip()} />)}
                {arrows && (!isEnd && <NextButton slidesToSkip={getSlidesToSkip()} />)}
                {navigators && <CustomPagination slideNavigator={slideNavigator} negativeNavigator={negativeNavigator} />}
            </Swiper>
        </div>
    );
};

export default Carrossel;

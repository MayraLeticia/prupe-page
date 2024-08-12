"use client";

import React, { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomPagination from '../CustomPagination';
import { NextButton, PrevButton } from '../NavigationButton';
import styles from './style.module.scss';
register();

const Carrossel = ({ breakpoints, children, slidesPerView, spaceBetween, arrows, navigators, autoplay }) => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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
            swiperRef.current.allowTouchMove = false; // Desabilitar interação ao passar o mouse
            swiperRef.current.allowSlideNext = false; // Bloqueia a ação de ir para o próximo slide
            swiperRef.current.allowSlidePrev = false; // Bloqueia a ação de ir para o slide anterior
            console.log("Autoplay stopped and interaction disabled");
        }
    };

    const handleMouseLeave = () => {
        if (autoplay && swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.allowTouchMove = true; // Habilitar novamente interação ao sair do mouse
            swiperRef.current.allowSlideNext = true; // Reabilita a ação de ir para o próximo slide
            swiperRef.current.allowSlidePrev = true; // Reabilita a ação de ir para o slide anterior
            swiperRef.current.autoplay.start();
            console.log("Autoplay started and interaction enabled");
        }
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
                slidesPerView={slidesPerView}
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
                {arrows && (!isBeginning && <PrevButton></PrevButton>)}
                {arrows && (!isEnd && <NextButton></NextButton>)}
                {navigators && <CustomPagination></CustomPagination>}
            </Swiper>
        </div>
    );
};

export default Carrossel;
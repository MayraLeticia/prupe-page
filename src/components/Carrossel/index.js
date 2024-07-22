"use client";

import React, { useState } from 'react';
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

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className={styles.container_carrossel}>
            <Swiper
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
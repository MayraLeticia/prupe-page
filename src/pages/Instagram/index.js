"use client"

import Carrossel from '@/components/Carrossel';
import Collapse from '@/components/Collapse';
import { useState } from 'react';
import styles from "./style.module.scss";


const itens = [
    {
        image: '/assets/instagram/image1instagram.svg',
    },
    {
        image: '/assets/instagram/image2instagram.svg',
    },
    {
        image: '/assets/instagram/image3instagram.svg',
    },
    {
        image: '/assets/instagram/image4instagram.svg',
    },
    {
        image: '/assets/instagram/image5instagram.svg',
    },
    {
        image: '/assets/instagram/image6instagram.svg',
    },
    {
        image: '/assets/instagram/image7instagram.svg',
    },
];

const breakpoints = {

    480: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 10
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 10
    },
    1920: {
        slidesPerView: 5,
        spaceBetween: 10
    }
};

const Instagram = () => {
    
    return (
        <div id="instagram" className={styles.container}> 
            <label>Instagram</label>
            <div className={styles.carousel}>
                <Carrossel breakpoints={breakpoints} slidesPerView={7} spaceBetween={10} arrows={true} navigators={false}>
                    {itens.map((item, index) => (
                        <div key={index} className={styles.image_container}>
                            <a>
                                <img
                                    src={item.image}
                                    alt='slider'
                                    className={`${styles.slide}`}
                                    
                                />
                                <p className={styles.image_title}>{item.title}</p>
                            </a>
                        </div>
                    ))}
                </Carrossel>
            </div>

        </div>
    );
}


export default Instagram;
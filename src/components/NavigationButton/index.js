import { useSwiper } from 'swiper/react';
import styles from './style.module.scss';

const NextButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()} className={styles.next_button}>
        </button>
    );
};

const PrevButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()} className={styles.prev_button}>
        </button>
    );
};

export { NextButton, PrevButton };

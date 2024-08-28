import { useSwiper } from 'swiper/react';
import styles from './style.module.scss';

const NextButton = ({ slidesToSkip }) => {
    const swiper = useSwiper();

    const handleClick = () => {
        swiper.slideTo(swiper.activeIndex + slidesToSkip);
    };

    return (
        <button onClick={handleClick} className={styles.next_button}>
        </button>
    );
};

const PrevButton = ({ slidesToSkip }) => {
    const swiper = useSwiper();

    const handleClick = () => {
        swiper.slideTo(swiper.activeIndex - slidesToSkip);
    };

    return (
        <button onClick={handleClick} className={styles.prev_button}>
        </button>
    );
};

export { NextButton, PrevButton };


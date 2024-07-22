import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './style.module.scss';

const CustomPagination = () => {
    const swiper = useSwiper();
    const totalSlides = swiper.slides.length - 2; // Ajuste por causa dos elementos duplicados do Swiper
    const slidesPerButton = 5;
    const totalButtons = Math.ceil(totalSlides / slidesPerButton);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const updatePagination = () => {
            const newPage = Math.min(Math.floor(swiper.realIndex / slidesPerButton), totalButtons - 1);
            setCurrentPage(newPage);
        };

        swiper.on('slideChange', updatePagination);

        return () => {
            swiper.off('slideChange', updatePagination);
        };
    }, [swiper, totalButtons]);

    const handlePaginationClick = (pageIndex) => {
        swiper.slideTo(pageIndex * slidesPerButton);
    };

    return (
        <div className={styles.pagination}>
            {Array.from({ length: totalButtons }, (_, index) => (
                <button
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className={`${styles.pagination_button} ${index === currentPage ? styles.active : ''}`}
                />
            ))}
        </div>
    );
};

export default CustomPagination;

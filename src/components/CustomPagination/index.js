import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from './style.module.scss';

const CustomPagination = ({ slideNavigator = 1 }) => {
    const swiper = useSwiper();
    const slidesPerView = swiper.params.slidesPerView || 1;
    const totalSlides = swiper.slides.length || 1; // Garantir que tenha pelo menos 1 slide
    console.log("Total: " + totalSlides)
    const slidesPerButton = Math.max(1, slideNavigator); // Garantir que seja pelo menos 1
    const totalButtons = 2; // Sempre fixado em 2 botões de navegação
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (!swiper) return;

        const updatePagination = () => {
            const newPage = Math.min(Math.floor(swiper.realIndex / slidesPerButton), totalButtons - 1);
            setCurrentPage(newPage);
        };

        swiper.on('slideChange', updatePagination);

        return () => {
            swiper.off('slideChange', updatePagination);
        };
    }, [swiper, slidesPerButton, totalButtons]);

    const handlePaginationClick = (pageIndex) => {
        // Calcula o slide target baseado na posição do botão
        const targetIndex = pageIndex * Math.floor(totalSlides / totalButtons) * slidesPerButton;
        swiper.slideTo(targetIndex);
    };

    // Condicional para esconder a navegação se houver 3 ou mais itens
    if (slidesPerView <= 3) {
        return null;
    }

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

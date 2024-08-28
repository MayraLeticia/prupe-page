import React from "react";
import styles from "./style.module.scss";
import ReviewCard from "../../components/ReviewCard/index";
import Carrossel from "../../components/Carrossel/index";

const reviews = [
    {
        name: "Kassinha",
        platform: "Google reviews",
        review: "Acho um absurdo ter apenas 5 estrelas porque merecem mais de mil, famílias, clinica perfeita, me sinto acolhida desde a abertura do portão! Maze é um anjo que cuidou maravilhosamente do meu bebê! Isso mesmo um bebê! 7 meses e ela com todo amor do mundo o tratou de uma forma impecável! Recepção perfeita, super limpa, ambiente agradável e acolhedor, recomendo de olhos fechados",
        icon: "/assets/icons/user_1.svg"
    },
    {
        name: "Elaine Aguiar",
        platform: "Google reviews",
        review: "Antes de conhecer o trabalho ofertado pelo próprio podologia, extrair as unhas encravadas era muito desconforto e um processo muito doloroso... Enfim! Soube do serviço, experimentei e desde então nunca mais precisei extrair minhas unhas e super indico o trabalho dessa equipe maravilhosa! Sou super cliente mesmo!",
        icon: "/assets/icons/user_2.svg"
    },
    {
        name: "Tarcy Martins",
        platform: "Google reviews",
        review: "Atendimento perfeito!!!! Acolhimento, estrutura e evolução do tratamento. Realmente faz toda diferença e elimina a dor de forma que surpreende-se... muito bom mesmo e Maze Brandão é uma profissional excelente, merece muito mais que 5 estrelas!!!",
        icon: "/assets/icons/user_3.svg"
    },
    {
        name: "Matheus Pereira",
        platform: "Google reviews",
        review: "Fui muito bem recebido pela senhora da recepção. E tive um atendimento maravilhoso feito pela Mazé, com muito cuidado (processo quase indolor) e passou muita segurança durante o procedimento muito bem feito com toda higienização.",
        icon: "/assets/icons/user_4.svg"
    },
];

const Contato = () => {
    return (
        <div id="contato" className={styles.container}>
            <div className={styles.description}>
                <label>Entre em contato</label>
                <div className={styles.contacts}>
                    <p>Contatos</p>
                    <label>(85) 3257-2106</label>
                    <label>(85) 9 8778-7914</label>
                    <label>prupeglaucia@hotmail.com</label>
                </div>
                <p>Venha conhecer os benefícios de ser cliente Prupé. Entre em contato com nosso atendimento especializado.</p>
            </div>

            <div className={styles.carousel_container}>
                <Carrossel
                    slidesPerView={1}
                    spaceBetween={50}
                    navigators={false}
                    arrows={false} 
                    autoplay={{ delay: 5000, disableOnInteraction: false }}>
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            name={review.name}
                            platform={review.platform}
                            review={review.review}
                            icon={review.icon}
                        />
                    ))}
                </Carrossel>
            </div>
        </div>
    );
};

export default Contato;

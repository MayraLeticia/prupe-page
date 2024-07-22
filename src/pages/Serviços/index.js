"use client"

import Carrossel from '@/components/Carrossel';
import Collapse from '@/components/Collapse';
import { useState } from 'react';
import styles from "./style.module.scss";

const itens = [
    {
        title: 'Podogeriatria',
        image: '/assets/pagina_serviços/podogeriatria/img_podogeriatria_1.svg',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'A Gerontologia, o estudo do envelhecimento, amplia o olhar para todos os fatores que envolvem essa fase da vida onde as mudanças acontecem em todo o organismo e os pés, por se tratarem de estruturas (base) que suportam todo o peso do corpo, suportam a pressão dos calçados, traumas frequentes, pedem atenção especial. É nessa etapa da vida que os cuidados com pés devem ser maiores, pois dependem deles a locomoção, a independência e a qualidade de vida.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/img_podogeriatria_1.svg',
            '/assets/pagina_serviços/podogeriatria/img_podogeriatria_2.svg',
            '/assets/pagina_serviços/podogeriatria/img_podogeriatria_3.svg',
            '/assets/pagina_serviços/podogeriatria/img_podogeriatria_4.svg',
            '/assets/pagina_serviços/podogeriatria/img_podogeriatria_5.svg',
        ]
    },
    {
        title: 'Podologia Esportiva',
        image: '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_2.svg',
        collapseTitle: 'Podologia Esportiva',
        collapseContent: 'No cotidiano das pessoas que praticam algum tipo de atividade, como caminhada, corrida, dança, vôlei ou mesmo frequentam a academia, é comum surgirem lesões ou algum tipo de desconforto, muscular, traumas nas unhas, calos, dentre outros.\n Na Podologia esportiva é necessário entender a biomecânica e a cinesiologia dos movimentos de cada atividade e todos os riscos que podem causar lesões, para atuarmos tanto na prevenção como no tratamento destas lesões.Na Podologia Esportiva tratamos e estudamos as causas de lesões de pele, como calos, calosidades e ferimentos, traumas nas unhas, nas lesões musculares utilizamos bandagens neuromusculares(prevenção e tratamento), Acupuntura, ventosaterapia, laserterapia, moxaterapia, com produtos de qualidade e dentro dos nossos limites de atuação.',
        collapseImages: [
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_1.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_2.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_3.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_4.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_5.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_6.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_7.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_8.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_9.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_10.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_11.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_12.svg',
            '/assets/pagina_serviços/podologia_esportiva/img_podologia_esportiva_13.svg',
        ]
    },
    {
        title: 'Podopediatria',
        image: '/assets/pagina_serviços/podopediatria/img_podopediatria_1.svg',
        collapseTitle: 'Podologia Infantil',
        collapseContent: 'São muitas as alterações que pedem atenção especial nos pés das crianças. Os problemas nas unhas são os mais comuns, visto que em muitos casos o formato das unhas e dos dedos é uma herança genética, predispondo encravamentos e deformidades nas unhas.Os cuidados podológicos incluem o corte correto das unhas, tratamento de verrugas, que também são comuns em crianças e muita informação (orientação) quanto ao uso de calçados, meias, cuidados com a higiene dos pés e dos calçados, os hábitos, principalmente o de roer as unhas. Tudo isso aliado a um atendimento onde a criança se sinta bem, pois é imprescindível passar para a criança que ela está em um ambiente seguro e confiável.',
        collapseImages: [
            '/assets/pagina_serviços/podopediatria/img_podopediatria_1.svg',
            '/assets/pagina_serviços/podopediatria/img_podopediatria_2.svg',
            '/assets/pagina_serviços/podopediatria/img_podopediatria_3.svg',
            '/assets/pagina_serviços/podopediatria/img_podopediatria_4.svg',
            '/assets/pagina_serviços/podopediatria/img_podopediatria_5.svg',
        ]
    },
    {
        title: 'Unha Encravada',
        image: '/assets/pagina_serviços/unha_encravada/img_unha_encravada_1.svg',
        collapseTitle: 'Unha Encravada',
        collapseContent: 'Com o nome científico (técnico) de onicocriptose, a unha encravada é um dos problemas mais comuns nos consultórios podológicos.\n Com técnicas e instrumentais específicos, a Podologia exerce um papel importante na prevenção e no tratamento da unha encravada.\n Nosso maior diferencial é o estudo da causa, que vai do calçado inapropriados, o corte inadequado, a anatomia, alterações posturais, entre outros. O podólogo devidamente qualificado, além de associar o conhecimento da causa com a técnica exclusiva da Podologia, acompanha e orienta para que não haja recidiva.\n Para o alívio da dor utilizamos:\n • Anestésico tópico\n • Laser terapêutico\n • Eletroterapia\n • Acupuntura',
        collapseImages: [
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_1.svg',
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_2.svg',
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_3.svg',
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_4.svg',
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_5.svg',
            '/assets/pagina_serviços/unha_encravada/img_unha_encravada_6.svg',
        ]
    },
    {
        title: 'Calos',
        image: '/assets/pagina_serviços/calos/img_calos_2.svg',
        collapseTitle: 'Calos',
        collapseContent: 'CalosMas, é só um calo!\n Não é só um calo, é um problema que altera o deambular, o andar, que altera a postura, causam dores, que podem evoluir para o joelho, quadril e coluna, limitando os movimentos.\n São vários os tipos de calos, com causas e tratamentos diferentes. A descoberta da causa é fundamental para sua eliminação.',
        collapseImages: [
            '/assets/pagina_serviços/calos/img_calos_2.svg',
            '/assets/pagina_serviços/calos/img_calos_3.svg',
            '/assets/pagina_serviços/calos/img_calos_1.svg',
        ]
    },
    {
        title: 'Verrugas',
        image: '/assets/pagina_serviços/verrugas/img_verrugas_1.svg',
        collapseTitle: 'Verrugas',
        collapseContent: 'A verruga plantar ou olho de peixe como é conhecida, é uma dermatovirose, causada por vírus HPV. Muito confundida com calo, por ser comum na planta do pé, mas facilmente diagnosticada pelo podólogo qualificado.\n São dolorosas por conta da pressão exercida sobre elas.\n Temos métodos de avaliação simples e rápido. Os tratamentos são bem definidos e contamos com tecnologia avançada, como o uso do laser de baixa potência e a eletroterapia.',
        collapseImages: [
            '/assets/pagina_serviços/verrugas/img_verrugas_1.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_2.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_3.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_4.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_5.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_6.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_7.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_8.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_9.svg',
            '/assets/pagina_serviços/verrugas/img_verrugas_10.svg',
        ]
    },
    {
        title: 'Ortoplastia',
        image: '/assets/pagina_serviços/ortoplastia/img_ortoplastia_4.svg',
        collapseTitle: 'Ortoplastia',
        collapseContent: 'Confeccionamos órteses de silicone personalizadas, que previnem e amenizam deformidades nos dedos, como: dedo em martelo, em garra, em malho, joanetes. Protegem áreas de maior atrito evitando calos, trazem alívio da dor e conforto ao andar, melhorando as funções de nervos, músculos e tendões. Temos atendimento especializado para idosos e diabéticos',
        collapseImages: [
            '/assets/pagina_serviços/ortoplastia/img_ortoplastia_1.svg',
            '/assets/pagina_serviços/ortoplastia/img_ortoplastia_2.svg',
            '/assets/pagina_serviços/ortoplastia/img_ortoplastia_3.svg',
            '/assets/pagina_serviços/ortoplastia/img_ortoplastia_4.svg',
        ]
    },
    {
        title: '8',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '9',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '10',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '11',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '13',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '14',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '15',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '16',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '17',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
    {
        title: '18',
        image: '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
        collapseTitle: 'Podologia Geriatrica',
        collapseContent: 'Descrição detalhada do tratamento 1.',
        collapseImages: [
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-1.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-2.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-3.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-4.png',
            '/assets/pagina_serviços/podogeriatria/Prupe-Podologia-atendimentos-podogeriatria-5.png'
        ]
    },
];

const breakpoints = {
    250: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    600: {
        slidesPerView: 3,
        spaceBetween: 10
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 10
    },
    992: {
        slidesPerView: 5,
        spaceBetween: 10
    },
    1200: {
        slidesPerView: 6,
        spaceBetween: 10
    },
    1920: {
        slidesPerView: 7,
        spaceBetween: 10
    }
};




export default function Serviços() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleCollapse = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        // container principal
        <div id= "servicos" className={styles.container}>
            {/* Title and Description */}
            <div className={styles.container_header}>
                <div className={styles.container_title}>
                    <label>Serviços</label>
                </div>
                <div className={styles.description}>
                    <p>O <strong>Centro de Podologia Prupé®</strong> está preparado, em alto nível estrutural, para realizar atendimentos nas mais diversas necessidades de nossos clientes. Nossos profissionais são qualificados especialistas, com formação profissional nacional e internacional.
                        <br /><br />
                        Temos a mais completa infraestrutura da cidade de Fortaleza – CE, com equipamentos ultra modernos e utilização de práticas integradas às mais rígidas exigências de higienização, cuidados com a saúde e prevenção. Plenamente adequada a todas as medidas sanitárias.</p>
                </div>
            </div>
            {/* carrosel com colapse */}
            <div className={styles.container_carousel}>

                <label>Podologia & Acupuntura</label>

                <div>
                    <Carrossel breakpoints={breakpoints} slidesPerView={7} spaceBetween={10} arrows={true} navigators={true}>
                        {itens.map((item, index) => (
                            <div key={index} className={styles.image_container}>
                                <img
                                    src={item.image}
                                    alt='slider'
                                    className={`${styles.slide} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => handleToggleCollapse(index)}
                                />
                                <p className={styles.image_title}>{item.title}</p>
                            </div>
                        ))}
                    </Carrossel>
                    <div className={styles.container_collapse}>
                        {activeIndex !== null && (
                            <Collapse
                                className={styles.collapse}
                                collapseTitle={itens[activeIndex].collapseTitle}
                                collapseContent={itens[activeIndex].collapseContent}
                                collapseImages={itens[activeIndex].collapseImages}
                                isOpen={activeIndex !== null}
                                onToggle={() => setActiveIndex(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

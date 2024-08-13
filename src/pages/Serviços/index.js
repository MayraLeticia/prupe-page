"use client"

import Carrossel from '@/components/Carrossel';
import Collapse from '@/components/Collapse';
import { useState } from 'react';
import styles from "./style.module.scss";

const itens1 = [
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
        title: 'Doenças de Unha',
        image: '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_1.svg',
        collapseTitle: 'Doenças de Unha',
        collapseContent: 'Doenças de UnhaDentre as doenças de unha a mais comum é a onicomicose, infecção causada por fungos. As unhas dos pés são mais afetadas por oferecem aos fungos um ambiente propício para sua proliferação.\n São muitos os antifúngicos utilizados hoje para combater esta infecção, mas juntamente com a medicação, o trabalho do Podólogo se torna imprescindível para o sucesso do tratamento.\n Para combater este problema, além do procedimento de remoção da área afetada, oferecemos tratamentos com fototerapia, com o uso do laser de baixa potência, ozônio através do aparelho de alta frequência e produtos fitoterápicos.',
        collapseImages: [
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_1.svg',
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_2.svg',
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_3.svg',
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_4.svg',
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_5.svg',
            '/assets/pagina_serviços/doencas_de_unha/img_doencas_de_unha_6.svg'
        ]
    },
    {
        title: 'Órteses',
        image: '/assets/pagina_serviços/orteses/img_orteses_1.svg',
        collapseTitle: 'Órteses',
        collapseContent: 'Fazemos correção de unha com vários tipos de órteses.\n As deformidades nas unhas podem ser congênitas ou adquiridas. As causas mais comuns são cortes errados, calçados inadequados e alterações posturais.\n Trabalhamos com órteses de resina, com fibra de memória molecular, órteses elásticas e muitas outras técnicas para aperfeiçoar a anatomia da unha, melhorando as deformidades e desconfortos.',
        collapseImages: [
            '/assets/pagina_serviços/orteses/img_orteses_1.svg',
            '/assets/pagina_serviços/orteses/img_orteses_2.svg',
            '/assets/pagina_serviços/orteses/img_orteses_3.svg',
        ]
    },
];

const itens2 = [
    {
        title: 'Acupuntura Agragada à Podologia',
        image: '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_2.svg',
        collapseTitle: 'Acupuntura Agragada à Podologia',
        collapseContent: 'Quando resolvemos agregar a Acupuntura à Podologia, não imaginávamos a dimensão, o leque de benefícios que nos traria esta associação. Hoje utilizamos as técnicas da Medicina Tradicional Chinesa (MTC) em vários procedimentos podológicos, como, para o alívio da dor nos tratamentos de unha encravada, remoção de calos, para a diminuição do processo inflamatório em fascite plantar e esporão de calcâneo, lesões esportivas, nas onicomicoses, para acelerar o processo de cicatrização em casos de feridas complexas.\n Por isso criamos uma página inteirinha com todas as terapias da MTC que aplicamos.',
        collapseImages: [
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_1.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_2.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_3.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_4.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_5.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_6.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_7.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_8.svg',
            '/assets/pagina_serviços/acupuntura_agregada_a_podologia/img_acupuntura_agragada_a_podologia_9.svg',


        ]
    },
    {
        title: 'Acupuntura Sistemica',
        image: '/assets/pagina_serviços/acupuntura_sistemica/img_acupuntura_sistemica_1.svg',
        collapseTitle: 'Acupuntura Sistemica',
        collapseContent: 'Baseia-se no uso de agulhas em pontos específicos do corpo por onde passam os canais de energia vital, chamados de meridianos, promovendo o equilíbrio físico e mental.',
        collapseImages: [
            '/assets/pagina_serviços/acupuntura_sistemica/img_acupuntura_sistemica_1.svg',
            '/assets/pagina_serviços/acupuntura_sistemica/img_acupuntura_sistemica_2.svg',
        ]
    },
    {
        title: 'Acupuntura Auricular',
        image: '/assets/pagina_serviços/acupuntura_auricular/img_acupuntura_auricular_1.svg',
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
];

const breakpoints = {
    250: {
        slidesPerView: 1
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 24
    },
    600: {
        slidesPerView: 3,
        spaceBetween: 24
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 24
    },
    992: {
        slidesPerView: 5,
        spaceBetween: 24
    },
    1200: {
        slidesPerView: 5,
        spaceBetween: 24
    },
    1600: {
        slidesPerView: 6,
        spaceBetween: 24
    },
    1920: {
        slidesPerView: 6,
        spaceBetween: 24
    }
};




export default function Serviços() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const handleToggleCollapse = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleToggleCollapse2 = (index) => {
        setActiveIndex2((prevIndex) => (prevIndex === index ? null : index));
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

                <label>Podologia</label>

                <div>
                    <Carrossel breakpoints={breakpoints} slidesPerView={5} spaceBetween={24} arrows={true} navigators={true}>
                        {itens1.map((item, index) => (
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
                                collapseTitle={itens1[activeIndex].collapseTitle}
                                collapseContent={itens1[activeIndex].collapseContent}
                                collapseImages={itens1[activeIndex].collapseImages}
                                isOpen={activeIndex !== null}
                                onToggle={() => setActiveIndex(null)}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.container_carousel}>

                <label>Acupuntura</label>

                <div>
                    <Carrossel breakpoints={breakpoints} slidesPerView={5} spaceBetween={24} arrows={true} navigators={false}>
                        {itens2.map((item, index) => (
                            <div key={index} className={styles.image_container}>
                                <img
                                    src={item.image}
                                    alt='slider'
                                    className={`${styles.slide} ${activeIndex2 === index ? styles.active : ''}`}
                                    onClick={() => handleToggleCollapse2(index)}
                                />
                                <p className={styles.image_title}>{item.title}</p>
                            </div>
                        ))}
                    </Carrossel>
                    <div className={styles.container_collapse}>
                        {activeIndex2 !== null && (
                            <Collapse
                                className={styles.collapse}
                                collapseTitle={itens2[activeIndex2].collapseTitle}
                                collapseContent={itens2[activeIndex2].collapseContent}
                                collapseImages={itens2[activeIndex2].collapseImages}
                                isOpen={activeIndex2 !== null}
                                onToggle={() => setActiveIndex2(null)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

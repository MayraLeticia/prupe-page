import { useState, useEffect } from 'react';

const useCarousel = () => {
  const professionals = [
    {
      name: 'Gláucia Alves',
      image: '/assets/images/glaucia.png',
      info: 'Graduada em Podologia (universidade Anhembi Morumbi-SP), Pós graduada em Gerontologia. Pedagoga, Graduanda em Biomedicina. Docente no curso de Podologia do Senac Ce. Acupunturista formada pela Associação Brasileira de Acupuntura (ABA), com aperfeiçoamento na University of Traditional Chinese Medicine, Tianjin – China e World Federativo of Acupuncture – Moxibustion Societies, Beijing – China.',
    },
    {
      name: 'Mazé Brandão',
      image: '/assets/images/maze.png',
      info: 'Técnica em Podologia com formação no Senac-CE, com diversos cursos de especialização em feridas e curativos, pés diabéticos e também ventosaterapia. Acupunturista formada pela ABA – Associação Brasileira de Acupuntura, com aperfeiçoamento na University of traditional Chinese Medicine –  Tianjin – China e World Federativo of Acupunctura – Moxibustion Societies – Beijing – China.',
    },
    {
      name: 'Fátima Brandão',
      image: '/assets/images/fatima.png',
      info: 'Técnica em Podologia com formação no Senac-CE e secretária executiva. Especialização em Segurança Alimentar e Segurança do Trabalho pela STDS – Secretaria do Trabalho e Desenvolvimento Social. Treinamentos em tratamento dedicado a podologia infantil, atendimento dedicado a idosos, utilização de equipamentos para tratamentos, correções de unhas e patologias dos pés.'
    },
    {
      name: 'Atrine Carvalho',
      image: '/assets/images/atrine.png',
      info: 'Recepcionista e Assistente da Clínica Prupé Podologia, responsável por recepcionar pacientes, gerenciar agendamentos e apoiar os podólogos na preparação de salas e materiais. Sua organização e habilidade de comunicação garantem um atendimento eficiente e de qualidade, contribuindo para o bom funcionamento da clínica.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Função para pré-carregar as imagens
  useEffect(() => {
    professionals.forEach((professional) => {
      const img = new Image();
      img.src = professional.image;
    });
  }, [professionals]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professionals.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + professionals.length) % professionals.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      nextSlide();
    } else if (endX - startX > 50) {
      prevSlide();
    }
  };

  return {
    professionals,
    currentIndex,
    isTransitioning,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentIndex,
  };
};

export default useCarousel;
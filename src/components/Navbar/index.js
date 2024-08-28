"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);

    if (!isOpen) {  // Somente esconder a navbar se o menu não estiver aberto
      if (scrollDifference > 20) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      }
    }


    setPrevScrollPos(currentScrollPos);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);  // Fechar a navbar ao clicar em um item
    }
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, prevScrollPos]);


  return (
    <nav ref={navRef} className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <img src="/assets/logo/nova_logo.svg" alt="Logo" />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Início</a></li>

        <li><a href="#instagram" onClick={(e) => { e.preventDefault(); scrollToSection('instagram'); }}>Instagram</a></li>
        <li><a href="#servicos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos'); }}>Serviços</a></li>
        <li><a href="#espaco" onClick={(e) => { e.preventDefault(); scrollToSection('espaco'); }}>Espaço</a></li>
        <li><a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a></li>

        <li className={styles.closeMenu} onClick={toggleMenu}>X</li>
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};

export default Navbar;

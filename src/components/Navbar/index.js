"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import do Link do Next.js
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

    // Somente esconder a navbar se o menu não estiver aberto
    if (!isOpen) {
      if (scrollDifference > 20) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      }
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleClickOutside = (event) => {
    // Fecha o menu se clicar fora
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (isOpen) {
      // Quando o menu estiver aberto, bloqueia rolagem da página
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
        {/* Exemplo: Leva para a página inicial */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <img src="/assets/logo/nova_logo.svg" alt="Logo" />
        </Link>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {/* Aqui cada Link leva a uma página distinta */}
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Início
          </Link>
        </li>
        
        <li>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Serviços
          </Link>
        </li>
        <li>
          <Link href="/space" onClick={() => setIsOpen(false)}>
            Espaço
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/prupepodologia/" onClick={() => setIsOpen(false)}>
            Instagram
          </Link>
        </li>
        {/* Botão para fechar o menu no mobile */}
        <li className={styles.closeMenu} onClick={toggleMenu}>
          X
        </li>
      </ul>

      {/* Ícone do menu hamburger */}
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};

export default Navbar;

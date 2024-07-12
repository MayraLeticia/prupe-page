"use client";
import { useState } from 'react';
import styles from './style.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Espaço</a></li>
        <li><a href="#">Contato</a></li>
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

import Navbar from '@/components/Navbar';
import styles from './style.module.scss';

const Home = () => {
  return (
    <header id="home" className={styles.header}>
      <Navbar></Navbar>
      <div className={styles.overlay}>
        <img src="/assets/logo/nova_logo.svg" alt="Logo" className={styles.logo} />
        <label>Podologia e Acupuntura</label>
        <p>
          Profissionais Graduados e Técnicos em Podologia com uma visão totalmente voltada para saúde (prevenção e tratamento), sempre respeitando os limites de atuação, por isso trabalhamos de forma multiprofissional, temos parcerias com Dermatologistas, Fisioterapeutas, Enfermeiros, Estomaterapeutas e Médicos.
        </p>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/prupepodologia/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5585987787914&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Home;

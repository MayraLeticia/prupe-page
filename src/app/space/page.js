import AboutUs from "@/pages/AboutUs";
import Aniversario from "@/pages/Aniversario";
import Rodape from "@/pages/Rodape";
import Serviços from "@/pages/Serviços";
import Contato from "@/pages/Contato";
import Espaco from "@/pages/Espaco";
import Header from "@/pages/Home";
import styles from "@/styles/page.module.css";
import Navbar from '@/components/Navbar';

import "@/styles/global.scss";



const Space = () => {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Espaco/>
      <Rodape/>
    </main>
  );
}

export default Space;
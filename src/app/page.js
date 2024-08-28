import AboutUs from "@/pages/AboutUs";
import Instagram from "@/pages/Instagram";
import Aniversario from "@/pages/Aniversario";
import Rodape from "@/pages/Rodape";
import Serviços from "@/pages/Serviços";
import Contato from "../pages/Contato/index";
import Espaco from "../pages/Espaco/index";
import Header from "../pages/Home/index";
import styles from "../styles/page.module.css";

import "../styles/global.scss";



const Home = () => {
  return (
    <main className={styles.main}>
      <Header/>
      <AboutUs/>
      <Instagram/>
      <Serviços/>
      <Espaco/>
      <Contato/>
      <Aniversario/>
      <Rodape/>
    </main>
  );
}

export default Home;
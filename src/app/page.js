import styles from "../styles/page.module.css";
import Espaco  from "../pages/Espaco/index";
import Contato  from "../pages/Contato/index";
import Serviços from "@/pages/Serviços";
import Rodape from "@/pages/Rodape";
import Header from "../pages/Home/index"
import AboutUs from "@/pages/AboutUs";
import Instagram from "@/pages/Instagram";


const Home = () => {
  return (
    <main className={styles.main}>
      <Header/>
      <AboutUs/>
      <Instagram/>
      <Serviços/>
      <Espaco/>
      <Contato/>
      <Rodape/>
    </main>
  );
}

export default Home;
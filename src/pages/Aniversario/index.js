import React from "react";
import styles from "./style.module.scss";

const Aniversario = () => {
  return (
    <div id="aniversario" className={styles.aniversario}>
        <div className={styles.image}>
            <img src="/assets/aniversario/glaucia20anos.svg" alt="Imagem Gláucia" />
        </div>
        <div className={styles.mensagem}>
            <div className={styles.label}>
                <label>São vinte anos do Prupé.</label>
                <p><i>Durante todo esse período foram muitos os desafios. Mas, continuamos acreditando que a qualidade nos nossos serviços e produtos, nos manterá em constante crescimento, sem o perder foco, que é oferecer sempre o melhor!</i>  [Glaucia Alves]</p>
            </div>
            <img src="/assets/logo/nova_logo.svg" alt="Logo 20 anos" className={styles.logo} />
        </div>
    </div>
  );
};

export default Aniversario;

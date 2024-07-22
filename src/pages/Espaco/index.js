import React from "react";
import styles from "./style.module.scss";
import Story from "../../components/Story/index";

const images = [
    '/assets/espaco/img_espaco1.png',
    '/assets/espaco/img_espaco2.png',
    '/assets/espaco/img_espaco3.png',
    '/assets/espaco/img_espaco4.png',
    '/assets/espaco/img_espaco5.png',
    '/assets/espaco/img_espaco6.png',
    '/assets/espaco/img_espaco7.png',
    '/assets/espaco/img_espaco8.png',
    '/assets/espaco/img_espaco9.png',
    '/assets/espaco/img_espaco10.png',
];

const Espaco = () => {
    return (
        //flex center, column
        <div id="espaco" className={styles.container}> 
            <label>Espaço</label>
            {/* //flex center, row */}
            <div className={styles.description}>
                <p>Na <strong>Clínica de Podologia Prupé®</strong> nossos clientes encontram o ambiente ideal para a realização dos serviços altamente qualificados e especializados, num espaço confortável, moderno, com estrutura e equipamentos sempre atualizados.
                <br/><br/>
                Cada área da clínica foi projetada para alcançar o máximo de resultados, além de tornar envolvente o atendimento dedicado por nossos profissionais.</p>
                <div className={styles.description_story}>
                    <Story images={images} />
                </div>
            </div>
            <p><i>"O Centro de Podologia Prupé é um espaço onde o cliente recebe tratamento diferenciado, com tudo que há de mais moderno nos procedimentos podológicos."</i> - [Glaucia Alves]</p>

        </div>
    );
}


export default Espaco;
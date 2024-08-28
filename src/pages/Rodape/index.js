import styles from './style.module.scss';

export default function Rodape() {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_container}>
                <div className={styles.content_container}>
                    <div className={styles.content}>
                        <img className={styles.logo} src='/assets/logo/logo.svg' alt='Logo' />
                        <p className={styles.content_text}>
                            Rua Costa Sousa, 197<br />
                            Benfica - Fortaleza - CE<br />
                            (Ao lado do estádio Pres. Vargas)
                        </p>
                        <div className={styles.link}>
                        <a href="https://www.facebook.com/prupepodologia" target="_blank" rel="noopener noreferrer">
                                <img className={styles.facebook} src='/assets/icons/Link_Facebook.svg' alt='Link Facebook' />
                            </a>
                            <a href="https://www.instagram.com/prupepodologia" target="_blank" rel="noopener noreferrer">
                                <img className={styles.instagram} src='/assets/icons/Link_Instagram.svg' alt='Link Instagram' />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=5585987787914&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                <img className={styles.whatsapp} src='/assets/icons/Link_WhatsApp.svg' alt='Link Whatsapp' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.container_localizacao}>
                        {/*<p className={styles.text_localizacao}>Localização</p>*/}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2913546493!2d-38.54010528867896!3d-3.74658599621158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748bfdd03c9d1%3A0x1d9559f7cb5acd52!2sPrup%C3%A9%20Podologia!5e0!3m2!1spt-BR!2sbr!4v1721396124894!5m2!1spt-BR!2sbr"
                            width="780"
                            height="200"
                            style={{ borderRadius: 10, border: 0 }}
                            aria-hidden="false"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className={styles.copyright_container}>
                    <p className={styles.copyright_text}>
                        Centro de Podologia Prupe LTDA | 06.349.258/0001-84
                        <br />
                        Copyright 2023 © Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};
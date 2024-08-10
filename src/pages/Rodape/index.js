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
                            <img className={styles.facebook} src='/assets/icons/Link_Facebook.svg' alt='Link Facebook' />
                            <img className={styles.instagram} src='/assets/icons/Link_Instagram.svg' alt='Link Instagram' />
                            <img className={styles.x} src='/assets/icons/Link_X.svg' alt='Link X' />
                            <img className={styles.whatsapp} src='/assets/icons/Link_WhatsApp.svg' alt='Link Whatsapp' />
                        </div>
                    </div>
                    <div className={styles.container_localizacao}>
                        <p className={styles.text_localizacao}>Localização</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2913546493!2d-38.54010528867896!3d-3.74658599621158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748bfdd03c9d1%3A0x1d9559f7cb5acd52!2sPrup%C3%A9%20Podologia!5e0!3m2!1spt-BR!2sbr!4v1721396124894!5m2!1spt-BR!2sbr"
                            width="250"
                            height="150"
                            style={{ borderRadius: 10, border: 0 }}
                            aria-hidden="false"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className={styles.copyright_container}>
                    <p className={styles.copyright_text}>© 2100 Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};
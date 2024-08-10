import Story from '../Story';
import styles from './style.module.scss';

const Collapse = ({ collapseTitle, collapseContent, collapseImages, isOpen, onToggle }) => {
    return (
        <div className={`${styles.collapse} ${isOpen ? styles.open : ''}`}>
            {isOpen &&
                <div className={styles.collapse_container}>
                    <div className={styles.collapse_description}>
                        <p className={styles.title}>{collapseTitle}</p>
                        <p className={styles.content}>{collapseContent}</p>
                    </div>
                    <div className={styles.collapse_story}>
                        <Story className={styles.story} images={collapseImages} />
                    </div>
                </div>}
        </div>
    );
};

export default Collapse;
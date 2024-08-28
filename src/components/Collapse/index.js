import Story from '../Story';
import styles from './style.module.scss';

const Collapse = ({ collapseTitle, collapseContent, collapseImages, isOpen, onToggle }) => {
    const lines = collapseContent.split('\n')

    return (
        <div className={`${styles.collapse} ${isOpen ? styles.open : ''}`}>
            {isOpen &&
                <div className={styles.collapse_container}>
                    <div className={styles.collapse_description}>
                        <p className={styles.title}>{collapseTitle}</p>
                        {lines.map((line, index) => (
                            <p className={styles.content} key={index}>
                                {line}
                                <br/>
                            </p>    
                        ))}
                        
                    </div>
                    <div className={styles.collapse_story}>
                        <Story className={styles.story} images={collapseImages} />
                    </div>
                </div>}
        </div>
    );
};

export default Collapse;
import React from "react";
import styles from "./style.module.scss";

const ReviewCard = ({ name, platform, review }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}></div>
                <div className={styles.header_title}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.platform}>via {platform}</span>
                </div>
            </div>
            <p className={styles.review}>{review}</p>
        </div>
    );
};

export default ReviewCard;

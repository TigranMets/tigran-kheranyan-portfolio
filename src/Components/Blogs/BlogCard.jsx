import React from 'react';
import styles from './Blogs.module.css';

const BlogCard = (props) => {
    return (
        <div className={styles.cart}>
            <button className={styles.strelka}>→</button>
            <div className={styles.cart_content}>
                <span className={styles.title}>
                    {props.title}
                </span>
                <span className={styles.cart_description}>
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default BlogCard;
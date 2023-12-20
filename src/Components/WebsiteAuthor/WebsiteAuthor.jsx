import React from 'react';
import styles from './WebsiteAuthor.module.css';

const WebsiteAuthor = () => {
    return (
        <div className={styles.websiteAuthor}>
            <p className={styles.made}>Made with ❤️ by Tigran Kheranyan</p>
            <p className={styles.themeBy}>Theme by <a className={styles.myPortfolio} href='https://github.com/TigranMets/tigran-kheranyan-portfolio'> TigranKheranyan-portflolio</a></p>
        </div>
    );
}

export default WebsiteAuthor;
import React from 'react';
import styles from './styles.module.css';

function FooterBar() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.content_grid}>
                    <img className={styles.content_grid_logo}/>
                    <ul className={styles.content_grid_socialIcons}>
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li> 
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li>
                    </ul>
                    <ul className={styles.content_grid_navLinks}>
                        <li className={styles.content_grid_navLink}></li>
                        <li className={styles.content_grid_navLink}></li>
                        <li className={styles.content_grid_navLink}></li> 
                        <li className={styles.content_grid_navLink}></li>
                        <li className={styles.content_grid_navLink}></li>
                    </ul>
                </div>
                <div className={styles.content_other}>
                    <button className={styles.inviteButton}>
                        get an invite
                    </button>
                    <p className={styles.copyright}>
                        Copyright 2019 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterBar;
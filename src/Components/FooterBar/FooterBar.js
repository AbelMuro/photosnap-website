import React from 'react';
import styles from './styles.module.css';
import icons from '../../Assets/icons';

function FooterBar() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.content_grid}>
                    <img src={icons['logoFooter']} className={styles.content_grid_logo}/>
                    <ul className={styles.content_grid_navLinks}>
                        <li className={styles.content_grid_navLink}>
                            home
                        </li>
                        <li className={styles.content_grid_navLink}>
                            stories
                        </li>
                        <li className={styles.content_grid_navLink}>
                            features    
                        </li> 
                        <li className={styles.content_grid_navLink}>
                            pricing
                        </li>
                    </ul>
                    <ul className={styles.content_grid_socialIcons}>
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li> 
                        <li className={styles.content_grid_socialIcon}></li>
                        <li className={styles.content_grid_socialIcon}></li>
                    </ul>

                </div>
                <div className={styles.content_other}>
                    <a className={styles.inviteLink}>
                        <span>get an invite </span>
                        <img src={icons['arrow']} className={styles.arrow} alt='arrow'/>
                    </a>
                    <p className={styles.copyright}>
                        Copyright 2019 All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterBar;
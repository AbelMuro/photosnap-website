import React from 'react';
import styles from './styles.module.css';
import icons from '../../Assets/icons';

function NavBar() {
    return(
        <nav className={styles.navBar}>
            <div className={styles.content}>
                <img src={icons['logoNav']} className={styles.logo}/>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        stories
                    </li>
                    <li className={styles.navLink}>
                        features
                    </li>
                    <li className={styles.navLink}>
                        pricing
                    </li>
                </ul>
                <button className={styles.inviteButton}>
                    get an invite
                </button>
            </div>
        </nav>
    )
}

export default NavBar;
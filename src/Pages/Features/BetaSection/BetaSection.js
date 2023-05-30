import React from 'react';
import styles from './styles.module.css';
import icons from '../../../Assets/icons';

function BetaSection () {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    We’re in beta. Get your invite today!
                </h1>
                <a className={styles.link}>
                    get an invite
                    <img className={styles.arrow} src={icons['arrow']}/>
                </a>                
            </div>
        </section>
    )
}

export default BetaSection;
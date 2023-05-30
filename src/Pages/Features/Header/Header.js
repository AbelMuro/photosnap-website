import React from 'react';
import styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.container}>     
            <section className={styles.blackBox}>
                <div className={styles.line}></div>
                <div className={styles.blackBox_content}>
                    <h1 className={styles.blackBox_title}>
                        features
                    </h1>
                    <p className={styles.blackBox_desc}>
                        We make sure all of our features are designed 
                        to be loved by every aspiring and even professional 
                        photograpers who wanted to share their stories.
                    </p>                    
                </div>

            </section>
            <img className={styles.image}/>
        </header>
    )
}

export default Header;
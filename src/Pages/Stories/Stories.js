import React from 'react';
import styles from './styles.module.css';
import Header from './Header';
import AllStories from './AllStories';

function Stories () {
    return(
        <main className={styles.container}>
            <Header/>
            <AllStories/>
        </main>
    )
}

export default Stories;
import React from 'react';
import Header from './Header';
import AllFeatures from './AllFeatures';
import BetaSection from './BetaSection';
import styles from './styles.module.css';

function Features() {
    return(
        <main>
            <Header/>
            <AllFeatures/>
            <BetaSection/>
        </main>
    )
}

export default Features;
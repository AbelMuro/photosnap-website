import React from 'react';
import Header from '../../Components/Header';
import AllFeatures from './AllFeatures';
import BetaSection from '../../Components/BetaSection';
import images from './images';

function Features() {
    return(
        <main>
            <Header                 
                title='FEATURES' 
                desc='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
                imageDesktop={images['hero']}
                imageTablet={images['heroTablet']}
                imageMobile={images['heroMobile']}/>
            <AllFeatures/>
            <BetaSection />
        </main>
    )
}

export default Features;
import React from 'react';
import Header from '../../Components/Header';
import Subscriptions from './Subscriptions';
import BetaSection from '../../Components/BetaSection';
import images from './images';

function Pricing () {
    return (
        <main>
            <Header
                title='pricing'
                desc="Create your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
                imageDesktop={images['hero']}
                imageTablet={images['heroTablet']}
                imageMobile={images['heroMobile']}
            />
            <Subscriptions/>
            <BetaSection/>
        </main>
    )
}

export default Pricing;
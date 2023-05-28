import React from 'react';
import TextAndImage from '../../Components/TextAndImage';
import styles from './styles.module.css';
import images from './images'
import icons from '../../Assets/icons';
import FeaturedStories from '../../Components/FeaturedStories'
import Features from '../../Components/Features';


function Home() {
    return(
            <main className={styles.container}>
                <TextAndImage 
                    title='Create and share your photo stories.'
                    desc='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
                    textBoxBGColor='black'
                    textBoxColor='white'
                    flexDirection='row'
                    arrow={icons['arrow']}
                    displayBar={true}
                    imageDesktop={images['createShareDesktop']}
                    imageTablet={images['createShareTablet']}
                    imageMobile={images['createShareMobile']}
                    />
                <TextAndImage 
                    title='Beautiful stories every time'
                    desc='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
                    textBoxBGColor='white'
                    textBoxColor='black'
                    flexDirection='row-reverse'
                    arrow={icons['arrowDark']}
                    displayBar={false}
                    imageDesktop={images['beatifulStoriesDesktop']}
                    imageTablet={images['beatifulStoriesTablet']}
                    imageMobile={images['beatifulStoriesMobile']}
                    />
                <TextAndImage 
                    title='DESIGNED FOR EVERYONE.'
                    desc='Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'
                    textBoxBGColor='white'
                    textBoxColor='black'
                    flexDirection='row'
                    arrow={icons['arrowDark']}
                    displayBar={false}
                    imageDesktop={images['designedForEveryoneDesktop']}
                    imageTablet={images['designedForEveryoneTablet']}
                    imageMobile={images['designedForEveryoneMobile']}
                    />
                    <FeaturedStories/>
                    <Features/>
            </main>
        )
}

export default Home;

import React from 'react';
import styles from './styles.module.css';
import icons from '../../../Assets/icons';
import useMediaQuery from '../../../Hooks/useMediaQuery';

function Header () {
    const mobile = useMediaQuery('(max-width: 600px)');

    return mobile ? 
        (<header className={styles.mobileContainer}>
            <img className={styles.mobile_image}/>
            <section className={styles.mobile_blackBox}>
                <h2 className={styles.mobile_secondTitle}>
                    last month's featured story
                </h2>
                <h1 className={styles.mobile_title}>
                    HAZY FULL MOON OF APPALACHIA
                </h1>
                <p className={styles.mobile_author}>
                    March 2nd 2020 <span>by John Appleseed</span>
                </p>                
                <p className={styles.mobile_desc}>
                    The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged.
                </p>
                <a className={styles.mobile_link}>
                    read the story
                    <img className={styles.arrow} src={icons['arrow']}/>
                </a>
            </section>
        </header>)
        : 
        (<header className={styles.container}>
            <section className={styles.featuredStory}>
                <h2 className={styles.featuresStory_secondTitle}>
                    last month's featured story
                </h2>
                <h1 className={styles.featuresStory_title}>
                    HAZY FULL MOON OF APPALACHIA
                </h1>
                <p className={styles.featuredStory_author}>
                    March 2nd 2020 <span>by John Appleseed</span>
                </p>                
                <p className={styles.featuredStory_desc}>
                    The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged.
                </p>
                <a className={styles.link}>
                    read the story
                    <img className={styles.arrow} src={icons['arrow']}/>
                </a>
            </section>
        </header>) 
}

export default Header;
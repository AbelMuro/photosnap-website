import React from 'react';
import styles from './styles.module.css';
import icons from '../../Assets/icons';

function Features () {

    return (
        <section className={styles.container}>
            <div className={styles.detail}>
                <div className={styles.detail_imageContainer}>
                    <img className={styles.detail_image} src={icons['responsive']}/>                    
                </div>

                <h1 className={styles.detail_title}>
                    100% Responsive
                </h1>
                <p className={styles.detail_desc}>
                    No matter which the device you’re on, 
                    our site is fully responsive and stories 
                    look beautiful on any screen.
                </p>
            </div>
            <div className={styles.detail}>
                <div className={styles.detail_imageContainer}>
                    <img className={styles.detail_image} src={icons['noLimit']}/>
                </div>
                <h1 className={styles.detail_title}>
                    No Photo Upload Limit
                </h1>
                <p className={styles.detail_desc}>
                    Our tool has no limits on uploads or bandwidth. 
                    Freely upload in bulk and share all of your stories in one go.
                </p>
            </div>
            <div className={styles.detail}>
                <div className={styles.detail_imageContainer}>
                    <img className={styles.detail_image} src={icons['embed']}/>
                </div>
                <h1 className={styles.detail_title}>
                    Available to Embed
                </h1>
                <p className={styles.detail_desc}>
                    Embed Tweets, Facebook posts, Instagram media, 
                    Vimeo or YouTube videos, Google Maps, and more.
                </p>
            </div>
        </section>
    )
}

export default Features;
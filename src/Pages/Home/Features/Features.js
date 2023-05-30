import React from 'react';
import styles from './styles.module.css';
import features from '../../../Data/Features';

function Features () {

    return (
        <section className={styles.container}>
            {
                features.map((feature) => {
                    if(feature.title === '100% Responsive' || feature.title === 'No Photo Upload Limit' || feature.title === 'Available to Embed')
                        return(
                            <div className={styles.detail}>
                                <div className={styles.detail_imageContainer}>
                                    <img className={styles.detail_image} src={feature.image}/>                    
                                </div>
                                <h1 className={styles.detail_title}>
                                    {feature.title}
                                </h1>
                                <p className={styles.detail_desc}>
                                    {feature.desc}
                                </p>
                            </div> 
                        )
                })
            }
        </section>
    )
}

export default Features;
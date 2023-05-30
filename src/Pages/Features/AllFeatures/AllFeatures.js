import React from 'react';
import features from '../../../Data/Features';
import styles from './styles.module.css';

function AllFeatures() {
    return(
        <section className={styles.container}>
            {features.map((feature) => {
                return (
                    <div className={styles.feature}>
                        <div className={styles.feature_imageContainer}>
                            <img className={styles.feature_image} src={feature.image}/>                    
                        </div>
                        <h1 className={styles.feature_title}>
                            {feature.title}
                        </h1>
                        <p className={styles.feature_desc}>
                            {feature.desc}
                        </p>
                    </div> 
                )
            })}
        </section>
    )
}

export default AllFeatures;
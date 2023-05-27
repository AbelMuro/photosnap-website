import React from 'react';
import styles from './styles.module.css';
import StoryData from '../../Data';

function FeaturedStories() {
    return(
        <section className={styles.container}>
            {StoryData.map((story) => {
                return(<></>)
            })}
        </section>
    )
}

export default FeaturedStories;
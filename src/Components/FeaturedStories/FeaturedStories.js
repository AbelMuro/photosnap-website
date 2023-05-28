import React from 'react';
import styles from './styles.module.css';
import StoryData from '../../Data';
import DisplayStory from '../DisplayStory';

function FeaturedStories() {
    return(
        <section className={styles.container}>
            {StoryData.map((story) => {
                return(<DisplayStory story={story} key={story.title}/>)
            })}
        </section>
    )
}

export default FeaturedStories;
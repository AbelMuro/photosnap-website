import React from 'react';
import styles from './styles.module.css';
import StoryData from '../../Data/Stories';
import DisplayStory from '../DisplayStory';

function FeaturedStories() {
    return(
        <section className={styles.container}>
            {StoryData.map((story) => {
                if(story.title === 'The Mountains' || story.title === 'Subset Cityscapes' || story.title === '18 Days Voyage' || story.title === 'Architecturals')
                    return(<DisplayStory story={story} key={story.title}/>)
            })}
        </section>
    )
}

export default FeaturedStories;
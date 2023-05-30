import React from 'react';
import styles from './styles.module.css';
import allStories from '../../../Data/Stories';
import DisplayStory from '../../../Components/DisplayStory';

function AllStories() {
    return(
        <section className={styles.container}>
            {allStories.map((story) => {
                return(
                    <DisplayStory story={story} displayDate={true}/>
                )
            })}
        </section>
    )
}

export default AllStories;
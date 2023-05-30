import React from 'react';
import styles from './styles.module.css';
import icons from '../../Assets/icons'
import useMediaQuery from '../../Hooks/useMediaQuery';

function DisplayStory({story, displayDate}) {
    const {title, author, image, imageMobile, datePosted} = story;
    const mobile = useMediaQuery('(max-width: 550px)')


    const handleImage = (ref) => {
        if(!ref) return;

        if(mobile)
            ref.src = imageMobile;
        else  
            ref.src = image;

    }

    return(
        <div className={styles.container}>
            <img className={styles.storyImage} ref={handleImage}/>
            
            <div className={styles.storyData}>
                {displayDate ? 
                    <h2 className={styles.datePosted}>
                        {datePosted}
                    </h2> : <></>}
                <h1 className={styles.storyTitle}>
                    {title}
                </h1>
                <p className={styles.storyAuthor}>
                    by {author}
                </p>
                <hr className={styles.whiteLine}/>
                <a className={styles.storyLink}>
                    read story
                    <img src={icons['arrow']} className={styles.arrow}/>
                </a>
            </div>
            <hr className={styles.rainbowLine}/>
        </div>
    )
}

export default DisplayStory;
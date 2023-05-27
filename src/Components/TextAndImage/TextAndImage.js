import React from 'react';
import styles from './styles.module.css';
import useMediaQuery from '../../Hooks/useMediaQuery';

function TextAndImage ({title, desc, imageDesktop, imageTablet, imageMobile, textBoxBGColor, textBoxColor, flexDirection, arrow, displayBar}) {
    const tablet = useMediaQuery('(max-width: 780px)');
    const mobile = useMediaQuery('(max-width: 600px)');

    const handleImage = (ref) => {
        if(!ref) return;

        if(mobile)
            ref.src = imageMobile;
        else if(tablet)
            ref.src = imageTablet;
        else
            ref.src = imageDesktop;
    }

    const handleTextBox = (ref) => {
        if(!ref) return;

        ref.style.backgroundColor = textBoxBGColor;
    }

    const handleTextColor = (ref) => {
        if(!ref) return;

        ref.style.color = textBoxColor;
    }

    const handleFlexDirection = (ref) => {
        if(!ref) return;

        if(!mobile)
            ref.style.flexDirection = flexDirection;
        else
            ref.style.flexDirection = '';
    }

    return(
        <section className={styles.flex} ref={handleFlexDirection}>
            <div className={styles.textBox} ref={handleTextBox}>
                {displayBar ? <div className={styles.line}></div> : <></>} 
                <div className={styles.content}>
                    <h1 className={styles.textBox_title} ref={handleTextColor}>
                        {title}
                    </h1>
                    <p className={styles.textBox_desc} style={{opacity: '0.6'}}  ref={handleTextColor}>
                        {desc}
                    </p>
                    <a className={styles.link} ref={handleTextColor}>
                        Get an invite
                        <img src={arrow} className={styles.arrow}/>
                    </a>
                </div>
            </div>
            <img className={styles.image} ref={handleImage}/>
        </section>
    )
}

export default TextAndImage;
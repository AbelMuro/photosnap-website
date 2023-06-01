import React from 'react';
import styles from './styles.module.css';
import useMediaQuery from '../../Hooks/useMediaQuery';

function Header({title, desc, imageDesktop, imageTablet, imageMobile}) {
    const tablet = useMediaQuery('(max-width: 800px)');
    const mobile = useMediaQuery('(max-width: 600px)');

    const handleImage = (ref) => {
        if(!ref) return;
    
        if(mobile)
            ref.style.content = `url(${imageMobile})`;
        else if(tablet)
            ref.style.content = `url(${imageTablet})`;
        else
            ref.style.content = `url(${imageDesktop})`;
    }   

    return (
        <header className={styles.container}>     
            <section className={styles.blackBox}>
                <div className={styles.line}></div>
                <div className={styles.blackBox_content}>
                    <h1 className={styles.blackBox_title}>
                        {title}
                    </h1>
                    <p className={styles.blackBox_desc}>
                        {desc}
                    </p>                    
                </div>
            </section>
            <img className={styles.image} ref={handleImage} alt={title}/>
        </header>
    )
}

export default Header;
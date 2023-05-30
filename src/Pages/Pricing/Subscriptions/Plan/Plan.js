import React from 'react';
import styles from './styles.module.css';


//this is where i left off, i will need to style the elements below
function Plan ({title, desc, price, monthlyOrYearly}) {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.desc}> 
                    {desc}
                </p>
                <h1 className={styles.price}>
                    ${price.toFixed(2)}
                </h1>
                <p className={styles.monthlyOrYearly}>
                    {monthlyOrYearly}
                </p>
                <button className={styles.selectButton}>
                    pick plan
                </button>                
            </div>

        </div>
    )
}

export default Plan
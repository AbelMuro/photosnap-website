import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';


function Plan ({title, desc, price, monthlyOrYearly, emphasize}) {
    const plan = useRef();

    useEffect(() => {
        if(emphasize)
            plan.current.classList.add(styles.emphasizePlan)   /* keep in mind that .emphasizePlan has a bunch of other selectors (.emphasizePlan .content h1)*/
    }, [])

    return(
        <div className={styles.container} ref={plan}>
            {title === 'Pro' ? <div className={styles.line}></div> : <></>}
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.desc}> 
                    {desc}
                </p>
                <div className={styles.price_MonthlyOrYearly}>
                    <h1 className={styles.price}>${price.toFixed(2)}</h1>
                    <p className={styles.monthlyOrYearly}>{monthlyOrYearly}</p>
                </div>
                <button className={styles.selectButton}>
                    pick plan
                </button>                
            </div>

        </div>
    )
}

export default Plan
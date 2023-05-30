import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css'

function Switch({pricing, setPricing}){
    const monthly = useRef();
    const yearly = useRef();
    const handle = useRef();

    const handlePricing = () => {
        if(pricing === 'Monthly')
            setPricing('Yearly')
        else
            setPricing('Monthly');
    }

    useEffect(() => {
        if(pricing === 'Monthly'){
            monthly.current.style.color = 'black';
            yearly.current.style.color = '';
        }
        else{
            monthly.current.style.color = '';
            yearly.current.style.color = 'black';
        }

    }, [pricing]);

    useEffect(() => {
        if(pricing === 'Monthly')
            handle.current.style.left = '';
        else
            handle.current.style.left = '36px';
        
    }, [pricing])

    return(
        <section className={styles.container}>
            <h2 className={styles.pricing} ref={monthly}>
                Monthly
            </h2>
            <div className={styles.switch} onClick={handlePricing}>
                <div className={styles.handle} ref={handle}></div>
            </div>
            <h2 className={styles.pricing} ref={yearly}>
                Yearly
            </h2>
        </section>
    )
}

export default Switch;
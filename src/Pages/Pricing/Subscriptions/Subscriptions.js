import React, {useState} from 'react';
import Switch from './Switch';
import Plan from './Plan';
import Plans from '../../../Data/Plans'
import styles from './styles.module.css';

function Subscriptions() {
    const [pricing, setPricing] = useState('Monthly');

    return(
        <section className={styles.container}>
            <Switch pricing={pricing} setPricing={setPricing}/>
            {Plans.map((plan) => {
                return(
                    <Plan 
                        key={plan.name}
                        title={plan.name}
                        desc={plan.desc}
                        price={pricing === 'Monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        monthlyOrYearly={pricing === 'Monthly' ?  'per month' : 'per year' }
                        emphasize={plan.emphasize}
                    />                    
                )
            })}

        </section>
    )
}

export default Subscriptions;

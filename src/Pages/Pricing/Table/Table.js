import React from 'react';
import styles from './styles.module.css';
import check from './icons';
import PlanFeatures from '../../../Data/PlanFeatures';
import useMediaQuery from '../../../Hooks/useMediaQuery';

function Table() {
    const mobile = useMediaQuery('(max-width: 600px)');

    return mobile ? (
        <table className={styles.tableMobile}>
            <caption className={styles.tableMobileTitle}>the features</caption>
                {
                    PlanFeatures.map((feature) => {
                        return(
                            <tbody key={feature.name}>
                                <tr>
                                    <th colSpan='3'className={styles.tableMobileFeature}>
                                        {feature.name}
                                    </th>                                
                                </tr>
                                <tr>
                                    <td className={styles.tableMobilePlan}>
                                        basic
                                    </td>
                                    <td className={styles.tableMobilePlan}>
                                        pro
                                    </td>
                                    <td className={styles.tableMobilePlan}>
                                        business
                                    </td>
                                </tr>
                                <tr className={styles.tableMobileCheckRow}>
                                    <td className={styles.tableMobileCheck}>
                                        {feature.basic ? <img src={check} className={styles.checkMarkMobile}/> : <></>}
                                    </td>
                                    <td className={styles.tableMobileCheck}>
                                        {feature.pro ? <img src={check} className={styles.checkMarkMobile}/> : <></>}
                                    </td>
                                    <td className={styles.tableMobileCheck}>
                                        {feature.business ? <img src={check} className={styles.checkMarkMobile}/> : <></>}
                                    </td>
                                </tr>                               
                            </tbody>
                        )
                    })
                }

        </table>
        ) 
           : 
        (
            <table className={styles.table}>
                <caption className={styles.tableTitle}>Compare</caption>
                <tbody>
                    <tr className={styles.columnTitles}>
                        <th className={styles.columnTitle}>
                            the features
                        </th>
                        <th className={styles.columnTitle}>
                            basic
                        </th>
                        <th className={styles.columnTitle}>
                            pro
                        </th>
                        <th className={styles.columnTitle}>
                            business
                        </th>
                    </tr>
                    {
                        PlanFeatures.map((feature) => {
                            return (
                                <tr className={styles.rowData} key={feature.name}>
                                    <td className={styles.feature}>
                                        {feature.name}
                                    </td>
                                    <td>
                                        {feature.basic ? <img src={check} className={styles.checkMark}/> : <></>}
                                    </td>
                                    <td>
                                        {feature.pro ? <img src={check} className={styles.checkMark}/> : <></>}
                                    </td>
                                    <td>
                                        {feature.business ? <img src={check} className={styles.checkMark}/> : <></>}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        ) 
    

}

export default Table;
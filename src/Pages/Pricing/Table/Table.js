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
            <tbody>

                <h1 className={styles.tableMobileFeature}>
                    unlimited story posting
                </h1>
                    
                <tr>
                    <td className={styles.tableMobilePlan}>
                        Basic
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
                        <img src={check} className={styles.checkMark}/>
                    </td>
                    <td className={styles.tableMobileCheck}>
                        <img src={check} className={styles.checkMark}/>
                    </td>
                    <td className={styles.tableMobileCheck}>
                        <img src={check} className={styles.checkMark}/>
                    </td>
                </tr>

            </tbody>
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
                            return(
                                <tr className={styles.rowData} key={feature.name}>
                                    <td className={styles.feature}>
                                        {feature.name}
                                    </td>
                                    <td className={styles.check}>
                                        {feature.basic ? <img src={check} className={styles.checkMark}/> : <></>}
                                    </td>
                                    <td className={styles.check}>
                                        {feature.pro ? <img src={check} className={styles.checkMark}/> : <></>}
                                    </td>
                                    <td className={styles.check}>
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
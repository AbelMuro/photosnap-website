import React from 'react';
import styles from './styles.module.css';
import check from './icons'

function Table() {
    return(
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
                <tr className={styles.rowData}>
                    <td className={styles.feature}>
                        unlimited story posting
                    </td>
                    <td className={styles.check}>
                        <img src={check} className={styles.checkMark}/>
                    </td>
                    <td className={styles.check}>
                        <img src={check} className={styles.checkMark}/>
                    </td>
                    <td className={styles.check}>
                        <img src={check} className={styles.checkMark}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;
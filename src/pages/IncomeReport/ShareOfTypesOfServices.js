import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import styles from './IncomeReport.module.scss';
function ShareOfTypesOfServices(props) {
    return (
        <div className={styles.decTabel}>
            <div className={styles.mainTable}>
                <table style={{ width: '100%' }}>
                    <tr >
                        <th>№</th>
                        <th style={{ width: 150 }}>
                            Xizmat turlari
                        </th>
                        <th  >
                            Soni
                        </th>
                        <th >
                            Tushgan summa
                        </th>
                        <th >
                            Jami tushumga nisbati (%)
                        </th>
                    </tr>
                    {props.serviceList?.map((item, key) =>
                        <tr key={key}>

                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}

export default ShareOfTypesOfServices
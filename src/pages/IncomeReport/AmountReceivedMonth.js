import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import styles from './IncomeReport.module.scss';
function AmountReceivedMonth(props) {

    const dates = {
        date: "2022 йил 1 апрель ҳолатига тушган маблағ",
        month: [
            {
                id: 1,
                name: "Yanvar",
                proceeds: 20,
            },
            {
                id: 2,
                name: "Fevral",
                proceeds: 20,
            },
            {
                id: 3,
                name: "Mart",
                proceeds: 20,
            },
            {
                id: 4,
                name: "Aprel",
                proceeds: 20,
            },
            {
                id: 5,
                name: "May",
                proceeds: 20,
            },
            {
                id: 6,
                name: "Iyun",
                proceeds: 20,
            },
            {
                id: 7,
                name: "Iyul",
                proceeds: 20,
            },
            {
                id: 8,
                name: "Avgust",
                proceeds: 20,
            },
            {
                id: 9,
                name: "Sentabr",
                proceeds: 20,
            },
            {
                id: 10,
                name: "Oktabr",
                proceeds: 20,
            },
            {
                id: 11,
                name: "Noyabr",
                proceeds: 20,
            },
            {
                id: 12,
                name: "Dekabr",
                proceeds: 20,
            },
        ]
    }
    const regions = [
        {
            id: 1,
            name: "Toshkent",
            dates,
            district: [
                {
                    name: "Mirzo ulug'bek",
                    dates,
                },
                {
                    name: "Yunusobod",
                    dates,
                },
            ],
        }
    ]
    return (
        <div className={styles.decTabel}>
            <div className={styles.mainTable}>
                <table style={{ width: 2000 }}>
                    <tr>
                        <th rowSpan={2} style={{ width: 150 }}>
                            Xudud nomi
                        </th>
                        <th rowSpan={2}>
                            Jami ko'rsatilgan xizmatlar
                        </th>

                        <th colSpan={12}>
                            {dates.date}
                        </th>
                    </tr>
                    <tr>
                        {
                            dates.month.map((month, index) =>
                                <th key={index}>{month.name}</th>
                            )
                        }
                    </tr>
                    {regions?.map((item, key) =>
                        <span key={key}>
                            <tr >
                                <th style={{ position: 'relative' }}>{item.name}<div style={{ position: 'absolute' }} className={styles.fromDistrict}>+</div></th>
                                <th>20000</th>
                                {
                                    item.dates.month.map((month, index2) =>
                                        <th key={index2}>{month.proceeds}</th>
                                    )
                                }
                            </tr>
                            {
                                item.district.map((district, index4) =>
                                    <tr key={index4}>
                                        <th>{district.name}</th>
                                        {
                                            district.dates.month.map((month, key) =>
                                                <th>{month.proceeds}</th>
                                            )
                                        }
                                    </tr>
                                )
                            }
                        </span>
                    )}
                </table>
            </div>
        </div>
    )
}

export default AmountReceivedMonth
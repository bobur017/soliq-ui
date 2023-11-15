import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import styles from './IncomeReport.module.scss';
function ByTypeOfService(props) {
    return (
        <div className={styles.decTabel}>
            <div className={styles.mainTable}>
                <table style={{ width: 2000 }}>
                    <tr >
                        <th rowSpan={3} style={{ width: 150 }}>
                            Xudud nomi
                        </th>
                        <th rowSpan={2} colSpan={2}>
                            Jami ko'rsatilgan xizmatlar
                        </th>
                        <th colSpan={12}>Shundan</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            Kompyuter xizmatlari va texnik yordam
                        </th>
                        <th colSpan={2}>
                            Axborot xizmati
                        </th>
                        <th colSpan={2}>
                            Elektron soliq hisobotlarini tayyorlash va yuborish
                        </th>
                        <th colSpan={2}>
                            Interaktiv xizmatlar
                        </th>
                        <th colSpan={2}>
                            Yuridik va jismoniy shaxslarning yozma murojaatlariga (yozma) tushuntirishlar berish
                        </th>
                        <th colSpan={2}>
                            Boshqa xizmatlar
                        </th>

                    </tr>
                    <tr>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
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

export default ByTypeOfService
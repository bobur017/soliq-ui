import React, { useState } from 'react'
import Select from 'react-select';
import styles from './WorkingDays.module.scss';
import { daysStatusContents, daysStatuse, getDays, userList } from './Dates';

function MonthTabel(props) {
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }]
    const [days, setDays] = useState(getDays());
    const hoursWorked = (hour) => {
        if (hour < 8) {
            return { color: 'red' }
        }
    }
    return (
        <div className={styles.decTabel}>

            <div className={styles.page}>
                <div className={styles.fil}>
                    <p>Записей на странице:</p>
                    <Select options={options3} className="select-sm" placeholder="10" />
                </div>
                <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                    className="icon icon-upload" /> Yuklab olish
                </button>
            </div>
            <div className={`${styles.tabelsMain}   mt-30`}>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th className="font-roboto-bold">
                            </th>
                            <th className="font-roboto-bold" style={{ width: 380 }}>
                                F.I.O
                            </th>
                            {days?.map((item, index) =>
                                <th key={index} >{item.toString().substring(0, 10)}</th>
                            )}
                        </tr>
                        {userList?.map((item, key) =>
                            <tr key={key}>
                                <td>
                                </td>
                                <td >
                                    <span style={{ width: 380 }} className='d-flex'>{item.fio}</span>
                                    <span style={{ color: '#777B82' }}>{item.inn}</span>
                                </td>

                                {item?.dayList?.map((day, index2) =>
                                    <td key={index2} style={hoursWorked(day.workedHours)}>
                                        {day.workedHours == null ? daysStatuse(day.statusId) : day.workedHours}
                                    </td>
                                )
                                }
                            </tr>
                        )}
                    </table>
                </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
                {daysStatusContents.map((item) =>
                    <div className='d-flex' key={item.id}>{item.style}<span style={{ marginLeft: 5, fontSize: 14, marginTop: 20 }}>{item.name}</span></div>
                )}
            </div>
        </div>
    )
}

export default MonthTabel
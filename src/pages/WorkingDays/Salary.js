import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import styles from './WorkingDays.module.scss';
import { daysStatusContents, daysStatuse, getDays, userList } from './Dates';

function Salary(props) {
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }]
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }]
    const [days, setDays] = useState(getDays());
    const hoursWorked = (hour) => {
        if (hour < 8) {
            return { color: 'red' }
        }
    }
    useEffect(() => {
        console.log(userList);
    }, [])


    return (
        <div className={styles.decTabel}>
            <div className={styles.page}>
                <div className={styles.fil}>
                    <p>Записей на странице:</p>
                    <Select options={options3} className="select-sm" placeholder="10" />
                </div>
                <div className='d-flex'>
                    <Select options={fileTypes} className="select-sm" placeholder="PDF" />
                    <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                        className="icon icon-upload" /> Yuklab olish
                    </button>
                </div>
            </div>
            <div className={`${styles.tabelsMain} mt-30`}>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th className="font-roboto-bold">
                            </th>
                            <th className="font-roboto-bold" style={{ width: 380 }}>
                                F.I.O
                            </th>
                            {/* {days?.map((item, index) =>
                                <th key={index} >{item.toString().substring(0, 10)}</th>
                            )} */}
                            <th>Ish haqi
                                (yo’l puli, ovqat puli)
                            </th>
                            <th>Reja</th>
                            <th>Amalda reja</th>
                            <th>Ustama haq %</th>
                            <th>Samaradorlik ko’rsatkichi</th>
                            <th>Ustama haq</th>
                            <th>Qo’lga oladigan summa</th>
                        </tr>
                        {userList?.map((item, key) =>
                            <tr key={key}>
                                <td>
                                </td>
                                <td >
                                    <span style={{ width: 380 }} className='d-flex'>{item.fio}</span>
                                    <span style={{ color: '#777B82' }}>{item.inn}</span>
                                </td>
                                <td>{item.salary.salary}</td>
                                <td>{item.salary.surcharge_percentage}</td>
                                <td>{item.salary.plan}</td>
                                <td>{item.salary.actual_plan}</td>
                                <td>{item.salary.efficiency}</td>
                                <td>{item.salary.surcharge}</td>
                                <td>{item.salary.remaining_amount}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Salary
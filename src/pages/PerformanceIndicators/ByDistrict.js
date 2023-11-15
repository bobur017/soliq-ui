import React from 'react'
import styles from './PerformanceIndicators.module.scss'


function ByDistrict(props) {

    console.log(props, "props");
    return (
        <div className={styles.decTabel}>
            <div className={`${styles.tabelsMain} mt-30`}>
                <div className={styles.mainTable}>
                    <table style={{ width: 2000 }}>
                        <tr>
                            <th className="font-roboto-bold">
                            </th>
                            <th className="font-roboto-bold" style={{ width: 380 }}>
                                Hodim
                                F.I.O
                            </th>
                            <th>
                                <div>
                                    <span>Viloyat</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Tuman</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Reja</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Amalda bajarilgan</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Amalda bajarilishi (%)</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Davomat</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Kelish-ketish
                                        intizomi</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Mijozlarning bahosi</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Xizmatlarni
                                        yakunlashi (%)</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <span>Xodim umumiy bali
                                        (KPI)</span>
                                    <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                </div>
                            </th>
                        </tr>
                        {/* {props?.userList?.map((item, key) =>
                            <tr key={key}>
                                <td>
                                </td>
                                <td>
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
                        )} */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ByDistrict
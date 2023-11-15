import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Attendance from './Attendance';
import { daysStatusContents, daysStatuse, getDays, userList } from './Dates';
import MonthTabel from './MonthTabel';
import Salary from './Salary';
import styles from './WorkingDays.module.scss';
import left from '../News/icons/arrowLeft.svg';
import right from '../News/icons/arrowRight.svg';

function WorkingDays(props) {
    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const [contracts, setContracts] = useState([])
    const [days, setDays] = useState(getDays())
    useEffect(() => {

    }, [])


    const options = [{ value: "2022", label: "2022" }, { value: "2023", label: "2023" }]
    const options2 = [{ value: "May", label: "May" }, { value: "Iyun", label: "Iyun" }]
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }]
    const hoursWorked = (hour) => {
        if (hour < 8) {
            return { color: 'red' }
        }
    }

    return (
        <div>
            <div className={styles.main}>
                <p className={styles.path}>
                    <span>Asosiy</span>
                    <img src="/assets/arrow-right.png" alt="" />
                    <span>Ma'lumotlar</span>
                    <img src="/assets/arrow-right.png" alt="" />
                    <span>Ishga kelganlik bo’yicha oylik tabel</span>
                </p>
                <div className={styles.MainHeader}>
                    <div className={styles.header}>
                        <div className="d-flex justify-content-between">
                            <h1 className="font-roboto-bold">Ishga kelganlik bo’yicha oylik tabel</h1>
                            <div className="d-flex mt-10">
                                <button onClick={() => setFilterActive(!filterActive)} style={filterActive ? { backgroundColor: '#282F38' } : { backgroundColor: '#F6F6F7' }}>
                                    <span className="icon icon-filter" style={filterActive ? { backgroundColor: 'white' } : null} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.body} style={filterActive ? { display: 'block' } : { display: 'none' }}>
                        <div className="d-flex justify-content-between">
                            <div className="inputs w-75">
                                <label>F.I.O</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 ml-5 font-roboto-light"
                                        placeholder="F.I.O" />
                                </div>
                            </div>
                            <div className="inputs w-20 mr-20">
                                <label> Yil:</label>
                                <Select options={options} placeholder="Yilni tanlang" />
                            </div>
                            <div className="inputs w-20 mr-20">
                                <label> Oy:</label>
                                <Select options={options2} placeholder="Oyni tanlang" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className='d-flex w-100 justify-content-center'>
                        <div style={{ position: 'relative' }}>
                            <div className={activeTabs == 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(1)}>Oylik table</div>
                            <div style={{ position: 'absolute' }} className={activeTabs == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className={activeTabs == 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(2)}>Davomat</div>
                            <div style={{ position: 'absolute' }} className={activeTabs == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className={activeTabs == 3 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(3)}>Ish haqi</div>
                            <div style={{ position: 'absolute' }} className={activeTabs == 3 ? styles.tabsLine : styles.tabsLineInActive}></div>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <div style={activeTabs == 1 ? { display: 'block' } : { display: 'none' }}>
                            <MonthTabel />
                        </div>
                        <div style={activeTabs == 2 ? { display: 'block' } : { display: 'none' }}>
                            <Attendance />
                        </div>
                        <div style={activeTabs == 3 ? { display: 'block' } : { display: 'none' }}>
                            <Salary />
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-20'>
                    <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}><img src={left} alt="" width={20} style={{ marginRight: 5 }} /> Oldingi </button></div>
                    <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}> Keyingi <img src={right} alt="" width={20} style={{ marginLeft: 5 }} /></button></div>
                </div>
            </div>
        </div>
    )
}

export default WorkingDays
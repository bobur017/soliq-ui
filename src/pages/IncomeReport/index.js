import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import AmountReceivedMonth from './AmountReceivedMonth';
import ByCount from './ByCount';
import ByNumberAndAmount from './ByNumberAndAmount';
import ByPrice from './ByPrice';
import ByTypeOfService from './ByTypeOfService';
import styles from './IncomeReport.module.scss';
import ShareOfTypesOfServices from './ShareOfTypesOfServices';
function IncomeReport() {

    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const options = [{ value: "2022", label: "2022" }, { value: "2023", label: "2023" }];
    const options2 = [{ value: "May", label: "May" }, { value: "Iyun", label: "Iyun" }];
    const serviceList = [];

    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Tushumlar bo’yicha xisobot</span>
            </p>
            <div className={styles.MainHeader}>
                <div className={styles.header}>
                    <div className='font-roboto-bold' style={{ fontSize: 28 }}>Hisobotlar</div>
                    <div className="d-flex">
                        <div className='pr-20 w-30'>
                            <input type="date" />
                        </div>
                        <div className='pr-20 w-30'>
                            <input type="date" />
                        </div>
                        <button className={styles.printBtn}>
                            <span className="icon icon-print" />
                        </button>
                        <button className={`${styles.uploadBtn}  font-roboto-bold`} style={{ height: 50 }}><span
                            className="icon icon-upload" style={{ backgroundColor: '#174aa4' }} /> Yuklab olish
                        </button>
                    </div>

                </div>
            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-center'>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(1)}>Xizmat turlari bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(2)}>Soni va summasi bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 3 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(3)}>Soni bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 3 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 4 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(4)}>Summasi bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 4 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 5 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(5)}>Xizmat turlarining ulushi (%)</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 5 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs == 6 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(6)}>Tushgan mablag’ (oy kesimida)</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 6 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div style={activeTabs == 1 ? { display: 'block' } : { display: 'none' }}>
                        <ByTypeOfService />
                    </div>
                    <div style={activeTabs == 2 ? { display: 'block' } : { display: 'none' }}>
                        <ByNumberAndAmount serviceList={serviceList} />
                    </div>
                    <div style={activeTabs == 3 ? { display: 'block' } : { display: 'none' }}>
                        <ByPrice />
                    </div>
                    <div style={activeTabs == 4 ? { display: 'block' } : { display: 'none' }}>
                        <ByCount />
                    </div>
                    <div style={activeTabs == 5 ? { display: 'block' } : { display: 'none' }}>
                        <ShareOfTypesOfServices />
                    </div>
                    <div style={activeTabs == 6 ? { display: 'block' } : { display: 'none' }}>
                        <AmountReceivedMonth />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IncomeReport
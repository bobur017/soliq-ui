import React, { useState } from 'react'
import Select from 'react-select'
import ByDistrict from './ByDistrict';
import ByRegion from './ByRegion';
import styles from './PerformanceIndicators.module.scss'

function PerformanceIndicators(props) {
    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const userList = [
        {
            id: 1,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
            doingPlan: 9560000.00,
            doingPlanPercent: 95,
            doingPlanPercent: 95,
            attendance: 95,
            comingAndGoing: 95,
            customerRating: 95,
            servicesCompletion: 95,
            EmployeeTotalScore: 95,

        }
    ];
    const regionList = [];
    return (
        <div className={styles.performanceIndicators}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Samaradorlik ko’rsatkichlari</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex justify-content-between">
                            <>Samaradorlik ko’rsatkichlari</>
                            <div className='d-flex'>
                                <button className="createBtn w-80 d-flex mr-20"
                                    onClick={() => props.history.push("/main/info/attaching-plan")}
                                >
                                    <span className="icon icon-plus-circle" />
                                    Reja shakllantirish
                                </button>
                                {activeTabs == 2 ? <button className={styles.filterBtn} onClick={() => setFilterActive(!filterActive)} style={filterActive ? { backgroundColor: '#282F38' } : { backgroundColor: '#F6F6F7' }}>
                                    <span className="icon icon-filter" style={!filterActive ? { backgroundColor: 'black' } : null} />
                                </button> : null}
                            </div>
                        </h3>
                    </div>
                    <div className="d-flex w-100 mt-30 pb-20" style={activeTabs == 2 && filterActive ? null : { display: 'none' }}>
                        <div className="inputs w-100 pr-20">
                            <label >Viloyat</label>
                            <Select options={options} placeholder="Viloyat" />
                        </div>
                        <div className="inputs w-100 pr-20">
                            <label >Tuman</label>
                            <Select options={options} placeholder="Viloyat" />
                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label>STIR</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="STIR" />
                                </div>
                            </div>

                        </div>
                        <div className="w-100">
                            <div className="inputs w-100">
                                <label>F.I.O</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={activeTabs == 2 && filterActive ? null : { display: 'none' }}>
                        <button className={styles.footerBtn}>
                            <span className="icon icon-clear" />
                            Tozalash
                        </button>
                        <button className={styles.footerBtn} type='submit'>
                            <span className="icon icon-search" />
                            Qidirish
                        </button>
                    </div>
                </div>
                {/* <div className="btnGroup">
                    <button className="closeBtn font-roboto-bold mr-20">
                        <span className="icon icon-close" />
                        Tozalash
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-search" />
                        QIdirish
                    </button>
                </div> */}
            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    <div className='d-flex'>
                        <div style={{ position: 'relative' }}>
                            <div className={activeTabs == 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(1)}>Viloyat kesimida</div>
                            <div style={{ position: 'absolute' }} className={activeTabs == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div className={activeTabs == 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(2)}>Tuman kesimida</div>
                            <div style={{ position: 'absolute' }} className={activeTabs == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <Select options={fileTypes} className="select-sm" placeholder="PDF" />
                        <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                            className="icon icon-upload" style={{ backgroundColor: '#174aa4' }} /> Yuklab olish
                        </button>
                    </div>
                </div>
                <div className='mt-20'>
                    <div style={activeTabs == 1 ? { display: 'block' } : { display: 'none' }}>
                        <ByRegion regionList={regionList} />
                    </div>
                    <div style={activeTabs == 2 ? { display: 'block' } : { display: 'none' }}>
                        <ByDistrict userList={userList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerformanceIndicators
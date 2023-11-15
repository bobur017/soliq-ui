import React, { useState } from 'react'
import Select from 'react-select'
import styles from './ServicesProvided.module.scss'
import left from '../News/icons/arrowLeft.svg';
import right from '../News/icons/arrowRight.svg';


function ServicesProvided(props) {
    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }]
    const serviceList = [];
    return (
        <div className={styles.performanceIndicators}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ko’rsatilgan xizmatlar</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex justify-content-between">
                            <>Ko’rsatilgan xizmatlar</>
                            <div className='d-flex'>

                                <button className={styles.filterBtn} onClick={() => setFilterActive(!filterActive)} style={filterActive ? { backgroundColor: '#282F38' } : { backgroundColor: '#F6F6F7' }}>
                                    <span className="icon icon-filter" style={!filterActive ? { backgroundColor: 'black' } : null} />
                                </button>
                            </div>
                        </h3>
                    </div>
                    <div className="d-flex w-100 mt-30 pb-20" style={filterActive ? null : { display: 'none' }}>
                        <div className="inputs w-100 pr-20">
                            <label >Hizmatlar turi:</label>
                            <Select options={options} placeholder="Hizmatlar turi:" />
                        </div>
                        <div className="inputs w-100 pr-20">
                            <label >To'lov turi:</label>
                            <Select options={options} placeholder="Tolov turi:" />
                        </div>
                        <div className="inputs w-100 pr-20">
                            <label >To'lov holati</label>
                            <Select options={options} placeholder="To'lov holati" />
                        </div>
                    </div>
                    <div className="d-flex w-100 mt-30 pb-20" style={filterActive ? null : { display: 'none' }}>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label>Malumotlar:</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="STIR" />
                                </div>
                            </div>

                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label style={{ color: 'white' }}>.</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex pr-20">
                            <div className="inputs w-100 pr-20">
                                <label >Xizmat ko’rsatilgan vaqt oralig’i</label>
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                            <div className="inputs w-100">
                                <label style={{ color: 'white' }}>.</label>
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={filterActive ? null : { display: 'none' }}>
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

            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    <div className='d-flex'>
                        <p style={{ marginRight: 20 }}>Записей на странице:</p>
                        <Select options={options3} className="select-sm" placeholder="10" />
                    </div>
                    <div className='d-flex'>
                        <Select options={fileTypes} className="select-sm" placeholder="PDF" />
                        <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                            className="icon icon-upload" style={{ backgroundColor: '#174aa4' }} /> Yuklab olish
                        </button>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className={styles.decTabel}>
                        <div className={`${styles.tabelsMain} mt-30`}>
                            <div className={styles.mainTable}>
                                <table style={{ width: 2000 }}>
                                    <tr>
                                        <th >
                                            ID
                                        </th>
                                        <th className="font-roboto-bold" style={{ width: 380 }}>
                                            Ko’rsatilgan xizmat nomi
                                        </th>
                                        <th>
                                            Xizmat korsatgan hodim F.I.O
                                        </th>
                                        <th>
                                            F.I.O
                                        </th>
                                        <th>
                                            Vaqti
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                        <th>
                                            To`lov turi
                                        </th>
                                        <th>
                                            Summa (so’m)
                                        </th>
                                    </tr>
                                    {serviceList?.map((item, key) =>
                                        <tr key={key}>

                                        </tr>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex mt-20'>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}><img src={left} alt="" width={20} style={{ marginRight: 5 }} /> Oldingi </button></div>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}> Keyingi <img src={right} alt="" width={20} style={{ marginLeft: 5 }} /></button></div>
            </div>
            <div style={{ height: 225 }}></div>
        </div>
    )
}

export default ServicesProvided
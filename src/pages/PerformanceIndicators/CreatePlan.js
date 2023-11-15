import React, { useState } from 'react'
import Select from 'react-select';
import styles from './PerformanceIndicators.module.scss'

function CreatePlan(props) {
    const [activeTabs, setactiveTabs] = useState(1);
    const [userId, setUserId] = useState(null);
    const [filterActive, setFilterActive] = useState(false);
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
        },
        {
            id: 2,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
        },
        {
            id: 3,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
        },
        {
            id: 4,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
        },
        {
            id: 5,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
        },
        {
            id: 6,
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            plan: 10000000.00,
        },
    ];
    return (
        <div className={styles.performanceIndicators}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Samaradorlik ko’rsatkichlari</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Reja shakllantirish</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex justify-content-between">
                            <>Samaradorlik ko’rsatkichlari</>
                            <div className='d-flex'>

                                <button className={styles.filterBtn} onClick={() => setFilterActive(!filterActive)} style={filterActive ? { backgroundColor: '#282F38' } : { backgroundColor: '#F6F6F7' }}>
                                    <span className="icon icon-filter" style={!filterActive ? { backgroundColor: 'black' } : null} />
                                </button>
                            </div>
                        </h3>
                    </div>
                    <div className="d-flex w-100 mt-30 pb-20" style={filterActive ? null : { display: 'none' }}>
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
                    <span style={{ fontSize: 28 }} className='font-roboto-bold'>Hodimlar ro'yxati</span>
                    <div className='d-flex'>
                        <button className={`${styles.uploadBtn}  font-roboto-bold`} style={userId !== null ? { backgroundColor: '#8CC152', color: 'white' } : { display: 'none' }} onClick={() => setUserId(null)}><span
                            className="icon icon-bird" style={{ backgroundColor: 'white' }} /> Saqlash
                        </button>
                    </div>
                </div>
                <div className={styles.decTabel}>
                    <div className={`${styles.tabelsMain} mt-30`}>
                        <div className={styles.mainTable}>
                            <table style={{ width: '100%' }}>
                                <tr>
                                    <th className="font-roboto-bold">
                                    </th>
                                    <th className="font-roboto-bold" style={{ width: 380 }}>
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
                                            <span>Berilgan reaj</span>
                                            <span className='icon icon-down-up' style={{ backgroundColor: 'black', width: 15 }}></span>
                                        </div>
                                    </th>
                                    <th>
                                        Jeja biriktirish
                                    </th>
                                </tr>
                                {userList?.map((item, key) =>
                                    <tr key={key}>
                                        <td>
                                        </td>
                                        <td>
                                            <span style={{ width: 380 }} className='d-flex'>{item.fullName}</span>
                                            <span style={{ color: '#777B82' }}>{item.inn}</span>
                                        </td>
                                        <td>{item.region}</td>
                                        <td>{item.district}</td>
                                        <td>{item.id !== userId ? item.plan : <div className="inputs w-50">
                                            <input type="text" className="w-100 font-roboto-light" placeholder=" " />
                                        </div>}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {item.id !== userId ?
                                                <span className='icon icon-edit' style={{ backgroundColor: 'black', cursor: 'pointer' }} onClick={() => setUserId(item.id)}></span> : null
                                            }
                                        </td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePlan
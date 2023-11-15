import React, { useState } from 'react'
import Select from 'react-select'
import left from '../News/icons/arrowLeft.svg';
import right from '../News/icons/arrowRight.svg';

import styles from './InformationAboutEnterprises.module.scss'

function InformationAboutEnterprises(props) {
    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const options2 = [
        { value: 'Yakka tartibdagi tadbirkorlar', label: 'Yakka tartibdagi tadbirkorlar' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const serviceList = [
        {
            id: 1,
            name: "“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ",
            fullName: "Axmadjonov ilhomjon inomjonovich",
            inn: 123456789,
            region: "Toshkent",
            district: "Toshkent",
            type: "Yakka tartibdagi tadbirkor",
            phone: "+998 33 408 28 08",

        }
    ];
    const regionList = [];
    return (
        <div className={styles.InformationAboutEnterprises}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Korxonalar haqida ma’lumot</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex justify-content-between">
                            <>Korxonalar haqida ma’lumot</>
                            <div className='d-flex'>
                                <div style={{ position: 'relative' }}>
                                    <div className={activeTabs == 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(1)}>Yangi tashkil etilgan korxonalar</div>
                                    <div style={{ position: 'absolute' }} className={activeTabs == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <div className={activeTabs == 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(2)}>Xisobot taqdim etmagan korxonalar</div>
                                    <div style={{ position: 'absolute' }} className={activeTabs == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                                </div>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    <div className='d-flex'>
                        <p style={{ marginRight: 20 }}>Записей на странице:</p>
                        <Select options={options} className="select-sm" placeholder="10" />
                    </div>
                    <div className='d-flex'>
                        <Select options={options2} className="select-sm" placeholder="Yakka tartibdagi tadbirkorlar" />
                    </div>
                </div>
                <div>
                    <div style={activeTabs == 1 ? { display: 'block' } : { display: 'none' }}>
                        <div className={styles.decTabel}>
                            <div className={`${styles.tabelsMain} mt-30`}>
                                <div className={styles.mainTable}>
                                    <table style={{ width: '100%' }}>
                                        <tr>
                                            <th >
                                                №
                                            </th>
                                            <th >
                                                Korxona
                                            </th>
                                            <th >
                                                Rahbar F.I.SH
                                            </th>
                                            <th>
                                                Yuridik manzili
                                            </th>
                                            <th>
                                                Tadbirkorlik shakli
                                            </th>
                                            <th>
                                                Telefon raqami
                                            </th>
                                        </tr>
                                        {serviceList?.map((item, key) =>
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.fullName}</td>
                                                <td>{item.region}  {item.district}</td>
                                                <td>{item.type}</td>
                                                <td>{item.phone}</td>
                                            </tr>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={activeTabs == 2 ? { display: 'block' } : { display: 'none' }}>
                        Salom2
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

export default InformationAboutEnterprises
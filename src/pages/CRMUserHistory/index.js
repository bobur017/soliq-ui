import React, { useState } from 'react'
import Select from 'react-select'
import styles from './CrmUserHistory.module.scss'
import left from '../News/icons/arrowLeft.svg';
import right from '../News/icons/arrowRight.svg';


function CrmUserHistory(props) {
    const fakeUser = {
        fio: 'Ahmadjanov Bobur Aliyevich',
        tel: '+998 88 800 08 08',
        stir: '256263456',
    }
    const [activeTabs, setactiveTabs] = useState(1);
    const [user, setUser] = useState(fakeUser);
    const [currentService, setCurrentService] = useState(null);
    const [filterActive, setFilterActive] = useState(false);
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }];
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }];
    const serviceList = [
        {
            id: 1,
            createDate: "18.09.2021",
            serviceName: "Ijara shartnomasini ro’yxatdan o’tkazish",
            status: "Tugallangan",
            serviceEmployee: "Axmadjonov Ilhomjon Inomjonovich",
            stir: "123456789",
            price: 800000,
        },
        {
            id: 2,
            createDate: "18.09.2021",
            serviceName: "Ijara shartnomasini ro’yxatdan o’tkazish",
            status: "Yangi",
            serviceEmployee: "Axmadjonov Ilhomjon Inomjonovich",
            stir: "123456789",
            price: 800000,
        },
        {
            id: 3,
            createDate: "18.09.2021",
            serviceName: "Ijara shartnomasini ro’yxatdan o’tkazish",
            status: "Jarayonda",
            serviceEmployee: "Axmadjonov Ilhomjon Inomjonovich",
            stir: "123456789",
            price: 800000,
        },
        {
            id: 4,
            createDate: "18.09.2021",
            serviceName: "Ijara shartnomasini ro’yxatdan o’tkazish",
            status: "Tugallanmagan",
            serviceEmployee: "Axmadjonov Ilhomjon Inomjonovich",
            stir: "123456789",
            price: 800000,
        },
    ];

    const statusFunc = (str) => {
        if (str == "Tugallangan") {
            return <button style={{ padding: 8, backgroundColor: '#E5F9CF', color: '#5F8B2E' }}>Tugallangan</button>
        } else if (str == "Jarayonda") {
            return <button style={{ padding: 8, backgroundColor: '#DDEAFF', color: '#284CA9' }}>Jarayonda</button>
        } else if (str == "Yangi") {
            return <button style={{ padding: 8, backgroundColor: '#DFBE4A38', color: '#988235' }}>Yangi</button>
        } else {
            return <button style={{ padding: 8, backgroundColor: '#E9573F38', color: '#AE4231' }}>Tugallanmagan</button>
        }
    }
    const onClickService = (data) => {
        setCurrentService(data);
    }
    const onHover = () => {
        setCurrentService(null);
    }



    return (
        <div className={styles.crmUserHistory}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>CRM Mijozlar tarixi</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex justify-content-between">
                            <>{user === null ? "CRM mijozlar tarixi" :
                                <div>{user.fio} <br /><div style={{ fontSize: 18 }}> <span className='icon icon-phone' style={{ backgroundColor: '#174AA4' }}></span> <span style={{ color: '#174AA4' }}>{user.tel}</span> <span style={{ marginLeft: 40 }}>STIR:  {user.stir}</span></div></div>
                            }</>
                            <div className='d-flex'>
                                <button className={styles.filterBtn} onClick={() => setFilterActive(!filterActive)} style={filterActive ? { backgroundColor: '#282F38' } : { backgroundColor: '#F6F6F7' }}>
                                    <span className="icon icon-filter" style={!filterActive ? { backgroundColor: 'black' } : null} />
                                </button>
                            </div>
                        </h3>
                    </div>
                    <div className="d-flex w-100 mt-30 pb-20 justify-content-center" style={filterActive ? null : { display: 'none' }}>
                        <div className="w-25">
                            <label className="labels font-roboto-regular inputLabel" >STIR yoki JShShIRni kiriting *<span
                                className="withStar">*</span></label>
                            <div className="d-flex">
                                <input type="text" className="input-style font-roboto-light w-100" />
                                <button className={styles.searchBtn}>
                                    <span className="icon icon-search" />
                                </button>
                            </div>
                        </div>
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

                        <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                            className="icon icon-upload" style={{ backgroundColor: '#174aa4' }} /> Yuklab olish
                        </button>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className={styles.decTabel}>
                        <div className={`${styles.tabelsMain} mt-30`}>
                            <div className={styles.mainTable}>
                                <table style={{ width: '100%' }}>
                                    <tr>
                                        <th >
                                            №
                                        </th>
                                        <th >
                                            Yaratilgan sana
                                        </th>
                                        <th className="font-roboto-bold" style={{ width: 380 }}>
                                            Hizmat nomi
                                        </th>
                                        <th>
                                            Status
                                        </th>
                                        <th>
                                            Xizmat ko’rsatgan hodim
                                        </th>
                                        <th>
                                            Narxi
                                        </th>
                                        <th>
                                            Ko'rish
                                        </th>
                                    </tr>
                                    {serviceList?.map((item, key) =>
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{item.createDate}</td>
                                            <td className="font-roboto-bold" style={{ width: 380 }}>{item.serviceName}</td>
                                            <td>{statusFunc(item.status)}</td>
                                            <td>{item.serviceEmployee} <br /><span>STIR: {item.stir}</span></td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div style={{ display: 'inline', cursor: 'pointer' }} onClick={() => onClickService(item)} onMouseLeave={() => onHover()}>
                                                    <div style={{ margin: 5, width: 10, height: 10, backgroundColor: '#777B82', borderRadius: 8 }}></div>
                                                    <div style={{ margin: 5, width: 10, height: 10, backgroundColor: '#777B82', borderRadius: 8 }}></div>
                                                    <div style={{ margin: 5, width: 10, height: 10, backgroundColor: '#777B82', borderRadius: 8 }}></div>
                                                    <div className={styles.viewOrDownload} style={currentService?.id == item.id ? { display: 'block' } : { display: 'none' }}>
                                                        <div className={styles.viewOrDownloadItem} style={{ marginTop: 0 }}><span className="icon icon-upload"></span><span>Ko'rish</span></div>
                                                        <div className={styles.viewOrDownloadItem} style={{ marginTop: 0 }}><span className="icon icon-eye"></span><span>Yuklash</span></div>
                                                    </div>
                                                </div>
                                            </td>
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

export default CrmUserHistory
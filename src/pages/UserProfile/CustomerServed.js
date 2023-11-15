import React, { useState } from 'react'
import styles2 from './UserProfile.module.scss';
import styles from './Transactions.module.scss'
import styles3 from './CrmUserHistory.module.scss'
import Select from 'react-select';

function CustomerServed() {
    const [activeTabs, setactiveTabs] = useState(1);
    const [filterActive, setFilterActive] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const fileTypes = [{ value: "PDF", label: "PDF" }, { value: "EXCEL", label: "EXCEL" }]
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
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
        <div>
            <div className={`${styles.dupTitleBox}  titleBox  mt-20`}>
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
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label >Mijoz ma’lumotlari bo’yicha</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="ID" />
                                </div>
                            </div>

                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label >Mijoz to’lagan summa bo’yicha</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="STIR" />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex pr-20">
                            <div className="inputs w-100 pr-20">
                                <label >Xizmat korsatilgan vaqt oralig’i</label>
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <label >Mijoz qarzdorligi bo’yicha</label>
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="To’lovchi nomi" />
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="d-flex w-100 pb-20" style={filterActive ? null : { display: 'none' }}>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="ID" />
                                </div>
                            </div>

                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="STIR" />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex pr-20">
                            <div className="inputs w-100 pr-20">
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 pr-20">
                            <div className="inputs w-100">
                                <div className="d-flex">
                                    <input type="text" className="w-100 font-roboto-light" placeholder="To’lovchi nomi" />
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className={styles3.crmUserHistory}>
                        <div >
                            <div className='d-flex w-100 justify-content-between mt-20'>
                                <div className='d-flex'>
                                    <p style={{ marginRight: 20 }}>Записей на странице:</p>
                                    <Select options={options3} className="select-sm" placeholder="10" />
                                </div>
                                <div className='d-flex'>

                                    <button className={`${styles3.uploadBtn}  font-roboto-bold`}><span
                                        className="icon icon-upload" style={{ backgroundColor: '#174aa4' }} /> Yuklab olish
                                    </button>
                                </div>
                            </div>
                            <div className='mt-20'>
                                <div className={styles3.decTabel}>
                                    <div className={`${styles3.tabelsMain} mt-30`}>
                                        <div className={styles3.mainTable}>
                                            <table style={{ width: '100%' }}>
                                                <tr>
                                                    <th>№</th>
                                                    <th className="font-roboto-bold" style={{ width: 380 }}>
                                                        Mijoz F.I.O
                                                    </th>
                                                    <th>
                                                        Passport
                                                    </th>
                                                    <th >
                                                        Ko’rsatilgan
                                                        xizmatlar soni
                                                    </th>
                                                    <th>
                                                        Ushbu hodim tomonidan <br /> ko’rsatilgan xizmatlar soni
                                                    </th>
                                                    <th>
                                                        Mijoz to’lagan summa
                                                    </th>
                                                    <th>
                                                        Mijoz qarzdorligi
                                                    </th>
                                                </tr>
                                                {serviceList?.map((item, key) =>
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td className="font-roboto-bold" style={{ width: 380 }}>{item.serviceEmployee}</td>
                                                        <td>AA 2563262</td>
                                                        <td>56</td>
                                                        <td>23</td>
                                                        <td>856 000 UZS</td>
                                                        <td style={{ color: 'red' }}>{item.price}</td>

                                                    </tr>
                                                )}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerServed
import React from 'react'
import Select from 'react-select';
import styles from './UserProfile.module.scss';
import styles2 from './Transactions.module.scss'

function UserInfo() {
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }];
    return (
        <div className={`${styles.card2} w-100 mt-20`}>
            <div className='d-flex justify-content-between'>
                <span className='font-roboto-bold' style={{ fontSize: 28 }}>Hodim haqida ma’lumotlar</span>
                <div className='d-flex'>
                    <span className='icon icon-phone' style={{ backgroundColor: '#174AA4' }}></span>
                    <span style={{ color: '#174AA4' }}>+998 88 800 08 08</span>
                </div>
            </div>
            <div className='d-flex mt-20'>
                <div className={`${styles.card2} w-50 p-20`}>
                    <div>
                        <span className='font-roboto-bold' style={{ fontSize: 18, color: '#174AA4', paddingBottom: 20 }}>Shaxshiy ma’lumotlar</span>
                        <br />
                        <br />
                    </div>

                    <div className={`${styles.borderStyle} d-flex mb-10 mt-20 justify-content-between`}>
                        <div>F.I.O</div>
                        <div>Abdurasulov Javohir Dilshod o’g’li</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>JShShIR</div>
                        <div>22632652781456</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>STIR</div>
                        <div>589781456</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>Tug’ilgan sanasi</div>
                        <div>02.04.1996</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>Jinsi</div>
                        <div>Erkak</div>
                    </div>
                </div>
                <div className={`${styles.card2} w-50 p-20 pl-20`}>
                    <div>
                        <span className='font-roboto-bold' style={{ fontSize: 18, color: '#174AA4', paddingBottom: 20 }}>Pasport ma’lumotlari</span>
                        <br />
                        <br />
                    </div>

                    <div className={`${styles.borderStyle} d-flex mb-10 mt-20 justify-content-between`}>
                        <div>Pasport raqami</div>
                        <div>AD1565802</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>Berilgan</div>
                        <div>Davlat Xizmatlari Markazi
                            Toshkent shahri Chilonzor tumani</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>Berilgan sana</div>
                        <div>08.07.2022</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div>Amal qilish muddati</div>
                        <div>02.04.1996</div>
                    </div>

                </div>
            </div>
            <div className={`${styles.card2} w-100 p-20 mt-20`}>
                <div>
                    <span className='font-roboto-bold' style={{ fontSize: 18, color: '#174AA4', paddingBottom: 20 }}>Boshqa ma’lumotlar</span>
                    <br />
                    <br />
                </div>

                <div className={`${styles.borderStyle} d-flex mb-10 mt-20 justify-content-between`}>
                    <div>Malumoti</div>
                    <div>Oliy</div>
                </div>
                <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                    <div>Mutahasisligi</div>
                    <div>5330220-Informatika va axborot texnologiyalari (tarmorqlar va sohalar bo’yicha)</div>
                </div>
                <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                    <div>“Soliq Servis” DUK da ish tajribasi</div>
                    <div>2 yil 1 oy</div>
                </div>

            </div>
            <div className={`${styles.card2} w-100 p-20 mt-20`}>
                <div className='d-flex justify-content-between'>
                    <span className='font-roboto-bold' style={{ color: '#174AA4' }}>Hodim haqida ma’lumotlar</span>
                    <Select options={options3} className="select-sm" placeholder="Iyun" />
                </div>
                <div className={styles2.transactions}>
                    <div className={styles2.decTabel}>
                        <div className={`${styles2.tabelsMain} mt-20`}>
                            <div className={styles2.mainTable}>
                                <table style={{ width: 2000 }}>
                                    <tr>
                                        <th >
                                            Oklad
                                        </th>
                                        <th >
                                            Yo’l puli (eng kam ish haqining x2 baravari)
                                        </th>
                                        <th>
                                            Ovqat puli (eng kam ish haqining x2 baravari)
                                        </th>
                                        <th>
                                            Reja
                                        </th>
                                        <th>
                                            Amalda bajarilgan reja
                                        </th>
                                        <th>
                                            Ustama haq %
                                        </th>
                                        <th>
                                            Ustama haq
                                        </th>
                                        <th>
                                            KPI Ko’rsatkichi
                                        </th>
                                        <th>
                                            Qo’lga oladigan summa
                                        </th>

                                    </tr>
                                    <tr>
                                        <td>4 905 760.0</td>
                                        <td>10 000 000.0</td>
                                        <td>11 000 000.0</td>
                                        <td>45%</td>
                                        <td>-10%</td>
                                        <td>2 850 876.00 UZS</td>
                                        <td>5 856 235.00 UZS</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserInfo
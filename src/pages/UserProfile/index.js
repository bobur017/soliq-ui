import React, { useState } from 'react'
import styles from './UserProfile.module.scss';
import ReactApexCharts from 'react-apexcharts';
import user from '../UserProfile/user.png'
import StarRatings from 'react-star-ratings';
import KPIindicators from './KPIindicators';
import Calendar from './Calendar';
import ServicesProvided from './ServicesProvided';
import CustomerServed from './CustomerServed';
import Transactions from './Transactions';
import UserInfo from './UserInfo';
export const numberWithSpaces = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
function UserProfile() {

    const [activeState, setActiveState] = useState(1)
    const currentService = {
        name: "O’z ozini band qilishni royxatdan o’tkazish",
        service_price: 13000.00,
        services_provided: 45605,
        regions: [
            {
                name: "Toshkent viloyati",
                numberOfServices: 14,
            },
            {
                name: "Qoraqalpog’iston Res",
                numberOfServices: 544,
            },
            {
                name: "Toshkent shahri",
                numberOfServices: 114,
            },
            {
                name: "Jizzah viloyati",
                numberOfServices: 214,
            },
            {
                name: "Sirdaryo viloyati",
                numberOfServices: 14,
            },
            {
                name: "Samarqand viloyati",
                numberOfServices: 144,
            },
            {
                name: "Andijon viloyati",
                numberOfServices: 214,
            },
            {
                name: "Buxoro viloyati",
                numberOfServices: 94,
            },
            {
                name: "Surxondayo viloyati",
                numberOfServices: 54,
            },
            {
                name: "Fargona viloyati",
                numberOfServices: 114,
            },
            {
                name: "Navoiy viloyati",
                numberOfServices: 14,
            },
            {
                name: "Qashqadaryo viloyati",
                numberOfServices: 4,
            },
        ],
        services_new: 3215,
        unfinished_services: 2560,
        finished_services: 1840
    }
    const lastActs = [
        {
            date: "Bugun",
            lastActs: [
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
            ]
        },
        {
            date: "20-iyun, 2022",
            lastActs: [
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
                {
                    fullName: "Abdurasulov Javohir Dilshodovich",
                    ipAddress: " 152.563.985",
                    time: '9:45'
                },
            ]
        },
    ]

    // let fromApexData = currentService.regions.map(item => item.numberOfServices);
    // let fromApexCategories = currentService.regions.map(item => item.name);
    // var series = [
    //     {
    //         name: 'Xizmatlar soni',
    //         data: currentService.regions.map(item => item.numberOfServices)
    //     }
    // ];
    // var series2 = [currentService.unfinished_services, currentService.services_new, currentService.finished_services];
    // var options = {
    //     dounut: {
    //         size: '70%'
    //     },
    //     chart: {
    //         type: 'bar'
    //     },
    //     plotOptions: {
    //         bar: {
    //             horizontal: true,
    //         }
    //     },
    //     colors: ['#25AE7D'],
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     xaxis: {
    //         categories: currentService.regions.map(item => item.name)
    //     },

    // }
    // var options2 = {
    //     plotOptions: {
    //         pie: {
    //             donut: {
    //                 size: "45%"
    //             }
    //         }
    //     },
    //     colors: ['#F14949', '#4D79E5', '#A2DF5F'],
    //     labels: ["Tugallanmagan", "Yangi", "Tugallangan"],
    //     legend: {
    //         show: false,
    //     }



    //     // dataLabels: {
    //     //     enabled: true,
    //     //     style: {
    //     //         colors: ['#4D79E5', '#A2DF5F', '#F14949']
    //     //     }
    //     // }
    // }

    var fromUserRating = {
        series: [91, 9],
        options: {
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "65%",
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '10px',
                            },
                            total: {
                                label: '',
                                fontSize: '12px',
                                showAlways: true,
                                show: true,
                                color: '#174AA4',
                                formatter: function (w) {
                                    return 7
                                }
                            },
                            value: {
                                offsetY: -10,
                                fontSize: '22px',
                                show: true,
                            }
                        }
                    }
                }
            },
            colors: ['#8CC152', '#BABDC6'],
            labels: ["Reja bajarilgan", "Bajarilmagan"],
            legend: {
                show: false,
                position: 'center'
            }
        }
    }

    var fromUserCard = {
        series: [91, 34],
        options: {
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "65%",
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '10px',
                                offsetY: 33
                            },
                            total: {
                                label: '',
                                fontSize: '12px',
                                showAlways: true,
                                show: true,
                                color: '#174AA4',
                                formatter: function (w) {
                                    return 91
                                }
                            },
                            value: {
                                offsetY: -10,
                                fontSize: '22px',
                                show: true,
                            }
                        }
                    }
                }
            },
            colors: ['#174AA4', '#BABDC6'],
            labels: ["Reja bajarilgan", "Bajarilmagan"],
            legend: {
                show: false,
            }
        }
    }




    return (
        <div className={styles.main}>
            <div className={styles.MainHeader}>
                <div className={styles.header}>
                    <div className="d-flex justify-content-start">
                        <h1 className="font-roboto-bold">{currentService.name}</h1>
                    </div>
                </div>
            </div>
            <div className='d-flex w-100'>
                <div className={styles.userCard}>
                    <div className='d-block' style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ backgroundImage: `url(${user})` }} className={styles.mainUserImage}></div>
                            {/* <img src={user} alt="" /> */}
                        </div>
                        <br />
                        <span style={{ textAlign: 'center', fontSize: 24 }} className="font-roboto-bold">Abdurasulov <br /> Javohir
                            <br /> Dilshod o’gli</span>
                        <br />
                        <br />
                        <span>Jizzax viloyati, G’allaorol tumani</span>
                        <br />
                        <div >
                            <div className='d-flex justify-content-between p-20'>
                                <div>

                                    <br />
                                    <span>4.5</span>
                                    <br />
                                    <StarRatings
                                        rating={4.5}
                                        starDimension="23px"
                                        starSpacing="2px"
                                        starRatedColor="#FF9C36"
                                    />
                                </div>
                                <div>
                                    <br />
                                    <ReactApexCharts
                                        options={fromUserRating.options} series={fromUserRating.series} type="donut" width={'70%'} />
                                </div>
                            </div>
                        </div>
                        <div className={activeState === 1 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(1)} >
                            <div className='d-flex'>
                                <span className={`icon icon-analiys ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>KPI ko’rsatgichlari</span>
                            </div>
                        </div>
                        <div className={activeState === 2 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(2)} >
                            <div className='d-flex'>
                                <span className={`icon icon-calendar ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>Davomat</span>
                            </div>
                        </div>
                        <div className={activeState === 3 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(3)} >
                            <div className='d-flex'>
                                <span className={`icon icon-analiys ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>Ko’rsatilgan xizmatlar</span>
                            </div>
                        </div>
                        <div className={activeState === 4 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(4)} >
                            <div className='d-flex'>
                                <span className={`icon icon-group ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>Mijozlar</span>
                            </div>
                        </div>
                        <div className={activeState === 5 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(5)} >
                            <div className='d-flex'>
                                <span className={`icon icon-bordi-keldi ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>Tushumlar</span>
                            </div>
                        </div>
                        <div className={activeState === 6 ? styles.bottomLine : styles.inActiveLine} onClick={() => setActiveState(6)} >
                            <div className='d-flex'>
                                <span className={`icon icon-info ${styles.myIcon}`}></span><span className='font-roboto' style={{ color: '#174AA4', fontSize: 18 }}>Umumiy ma’lumotlar</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80' style={{ paddingLeft: 20 }}>
                    <div className='d-flex w-100 justify-content-between'>
                        <div className={styles.infoCard}>
                            <div className={styles.line} style={{ backgroundColor: '#174AA4' }}>
                            </div>
                            <div >
                                <span className="font-roboto-bold">{numberWithSpaces(currentService.services_provided)} UZS</span>
                                <br />
                                <span>Amalda bajarilgan</span>
                                <br />
                                <br />
                                <br />
                                <span>{numberWithSpaces(currentService.service_price)} xizmatlar soni</span>
                            </div>
                            <div>
                                <ReactApexCharts
                                    options={fromUserCard.options} series={fromUserCard.series} type="donut" width={'100%'} />
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.line} style={{ backgroundColor: '#8CC152' }}>
                            </div>
                            <div >
                                <span>{numberWithSpaces(currentService.services_provided)}</span>
                                <br />
                                <span>Tushimlar</span>
                                <br />
                                <br />
                                <br />
                                <span>{numberWithSpaces(currentService.service_price)} xizmat soni</span>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.line} style={{ backgroundColor: '#E9573F' }}>
                            </div>
                            <div >
                                <span>{numberWithSpaces(currentService.services_provided)}</span>
                                <br />
                                <span>Tugallanmagan xizmatlar</span>
                                <br />
                                <br />
                                <br />
                                <span>{numberWithSpaces(currentService.service_price)} UZS</span>
                            </div>
                        </div>
                    </div>
                    <div >
                        {activeState === 1 ? <div style={{ width: '99%' }}> <KPIindicators /></div> : null}
                        {activeState === 2 ? <div style={{ width: '99%' }}> <Calendar /></div> : null}
                        {activeState === 3 ? <div style={{ width: '99%' }}> <ServicesProvided /></div> : null}
                        {activeState === 4 ? <div style={{ width: '99%' }}> <CustomerServed /></div> : null}
                        {activeState === 5 ? <div style={{ width: '99%' }}> <Transactions /></div> : null}
                        {activeState === 6 ? <div style={{ width: '99%' }}> <UserInfo /></div> : null}
                    </div>
                </div>
            </div>


            {/* <div className={styles.fromModal}>
                <div>
                    <span>Xizmat narxini o’zgartirish</span>
                    <br />
                    <br /><br />
                    <span>Xizmat nomi: O’z ozini band qilishni royxatdan o’tkazish</span>
                </div>
                <div className='d-flex w-100 justify-content-center mt-20'>
                    <div className='inputs w-10 mr-20' style={{ textAlign: 'start' }}>
                        <label htmlFor="cityPrice">Narxi (Toshkent sh.)</label>
                        <input type="number" id='cityPrice' className="w-100 font-roboto-light" placeholder="-" />
                    </div>
                    <div className='inputs w-10' style={{ textAlign: 'start' }}>
                        <label htmlFor="regionPrice" >Narxi (Viloyat va tumanlarda)</label>
                        <input type="number" id='regionPrice' className="w-100 font-roboto-light" placeholder="-" />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className={styles.footerBtn}>
                        Bekor qilish
                    </button>
                    <button className={styles.footerBtn} type='submit'>
                        Ok
                    </button>
                </div>
            </div> */}
        </div >
    )
}

export default UserProfile
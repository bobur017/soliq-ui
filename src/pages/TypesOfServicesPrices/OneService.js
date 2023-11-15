import React from 'react'
import styles from './TypesOfServicesPrices.module.scss';
import ReactApexCharts from 'react-apexcharts';

export const numberWithSpaces = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
function OneService() {
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

    let fromApexData = currentService.regions.map(item => item.numberOfServices);
    let fromApexCategories = currentService.regions.map(item => item.name);
    var series = [
        {
            name: 'Xizmatlar soni',
            data: currentService.regions.map(item => item.numberOfServices)
        }
    ];
    var series2 = [currentService.unfinished_services, currentService.services_new, currentService.finished_services];
    var options = {
        dounut: {
            size: '70%'
        },
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        colors: ['#25AE7D'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: currentService.regions.map(item => item.name)
        },

    }
    var options2 = {
        plotOptions: {
            pie: {
                donut: {
                    size: "45%"
                }
            }
        },
        colors: ['#F14949', '#4D79E5', '#A2DF5F'],
        labels: ["Tugallanmagan", "Yangi", "Tugallangan"],
        legend: {
            show: false,
        }



        // dataLabels: {
        //     enabled: true,
        //     style: {
        //         colors: ['#4D79E5', '#A2DF5F', '#F14949']
        //     }
        // }
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
            <div className='d-flex w-100 justify-content-between'>
                <div className={styles.infoCard}>
                    <div className={styles.line} style={{ backgroundColor: '#C99C29' }}>

                    </div>
                    <div style={{ color: '#C99C29' }}>
                        <span>{numberWithSpaces(currentService.service_price)} UZS</span>
                        <br />
                        <span>Xizmat narxi</span>
                    </div>
                    <div style={{ backgroundColor: '#F6F6F7', marginTop: 100, padding: 10, borderRadius: 8, cursor: 'pointer' }} >
                        <span className='icon icon-edit' style={{ width: 20, backgroundColor: 'black' }} ></span>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.line} style={{ backgroundColor: '#174AA4' }}>
                    </div>
                    <div style={{ color: '#174AA4' }}>
                        <span>{numberWithSpaces(currentService.services_provided)}</span>
                        <br />
                        <span>Ko'rsatilgan xizmatlar</span>
                        <br />
                        <br />
                        <span>{numberWithSpaces(currentService.service_price)} UZS</span>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.line} style={{ backgroundColor: '#8CC152' }}>
                    </div>
                    <div style={{ color: '#8CC152' }}>
                        <span>{numberWithSpaces(currentService.services_provided)}</span>
                        <br />
                        <span>Tushimlar</span>
                        <br />
                        <br />
                        <span>{numberWithSpaces(currentService.service_price)} xizmat soni</span>
                    </div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.line} style={{ backgroundColor: '#E9573F' }}>
                    </div>
                    <div style={{ color: '#E9573F' }}>
                        <span>{numberWithSpaces(currentService.services_provided)}</span>
                        <br />
                        <span>Tugallanmagan xizmatlar</span>
                        <br />
                        <br />
                        <span>{numberWithSpaces(currentService.service_price)} UZS</span>
                    </div>
                </div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
                <div className={styles.bar}>
                    <div className="d-flex justify-content-between" style={{ height: 60 }}>
                        <div >
                            <h3 style={{ fontSize: 28 }} className="font-roboto-bold">Xizmatlar soni</h3>
                        </div>
                        <div className='d-flex'>
                            <div className='inputs w-10 mr-20'>
                                <input type="date" className="w-100 font-roboto-light" placeholder="-" />
                            </div>
                            <div className='inputs w-10'>
                                <input type="date" className="w-100 font-roboto-light" placeholder="-" />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <ReactApexCharts
                            options={options} series={series} type="bar" height={450}
                        />
                    </div>
                </div>
                <div className={styles.donut}>
                    <div>
                        <div className='font-roboto-bold' style={{ fontSize: 28, marginBottom: 20 }}>Xizmat statuslari</div>
                        <ReactApexCharts
                            options={options2} series={series2} type="donut" width={'100%'}
                        />
                        <div>
                            <div className={`${styles.donutLabels} d-flex w-100 justify-content-between`}>
                                <div className='d-flex'>
                                    <div className={styles.donutLabelsIcons} style={{ backgroundColor: '#F14949', marginRight: 10 }}></div>
                                    <div>Tugallanmagan</div>
                                </div>
                                <div>{currentService.unfinished_services}</div>
                            </div>
                            <div className={`${styles.donutLabels} d-flex w-100 justify-content-between`}>
                                <div className='d-flex'>
                                    <div className={styles.donutLabelsIcons} style={{ backgroundColor: '#A2DF5F', marginRight: 10 }}></div>
                                    <div>Tugallangan</div>
                                </div>
                                <div>{currentService.finished_services}</div>
                            </div>
                            <div className={`${styles.donutLabels} d-flex w-100 justify-content-between`}>
                                <div className='d-flex'>
                                    <div className={styles.donutLabelsIcons} style={{ backgroundColor: '#4D79E5', marginRight: 10 }}></div>
                                    <div>Yangi</div>
                                </div>
                                <div>{currentService.services_new}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.fromModal}>
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
            </div>
        </div>
    )
}

export default OneService
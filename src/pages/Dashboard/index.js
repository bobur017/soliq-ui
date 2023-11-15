import React, { useState } from 'react'
import ReactToPrint from 'react-to-print';
import styles from './TypesOfServicesPrices.module.scss';
import ReactApexCharts from 'react-apexcharts';
import Select from 'react-select';

function Dashboard() {
    const [activeTabs, setactiveTabs] = useState(1);
    const [activeTabs2, setactiveTabs2] = useState(1);
    const [activeTabs3, setactiveTabs3] = useState(1);
    const [activeTabs4, setactiveTabs4] = useState(1);
    var areaDashboard = {

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            colors: ['#C99C29'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    };
    var barDashboard = {
        series: [{
            name: 'Reja',
            data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
            name: 'Reja bajarilgan',
            data: [53, 32, 33, 52, 13, 44, 32]
        },
        {
            name: 'Reja bajarilmagan',
            data: [53, 32, 33, 52, 13, 44, 32]
        },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
        },
    }
    var columnDashboard = {
        series: [{
            name: 'Berilgan plan',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Ishlangan mablag’',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },],
        options: {
            chart: {
                type: 'bar',
                height: 200
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false

            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            colors: ['#C99C29', '#8CC152'],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    }
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
                                show: false,
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
    const options3 = [{ value: "10", label: "10" }, { value: "15", label: "15" }];

    return (
        <div className={styles.main}>
            <div className={styles.MainHeader}>
                <div className={styles.header}>
                    <div className="d-flex justify-content-between">
                        <h1 className="font-roboto-bold">Xizmatlar turlari va narxlari</h1>
                        <div className="d-flex align-items-center">

                            <div className="inputs2 w-100 pr-20">
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                            <div className="inputs2 w-100 pr-20">
                                <div className="d-flex">
                                    <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                                </div>
                            </div>
                            <div style={{ padding: 15, backgroundColor: '#F6F6F7', borderRadius: 8 }}>
                                <span className="icon icon-upload" style={{ backgroundColor: 'black' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100 d-flex justify-content-between'>
                <div className={styles.infoCard}>
                    <div className={styles.subInfoCard}>
                        <div>
                            <span className="font-roboto-bold">56 265 000 UZS UZS</span>
                            <br />
                            <span>Amalda bajarilgan</span>
                            <br />
                            <br />
                            <br />
                            <span>45 265 xizmat soni</span>
                        </div>
                        <div>
                            < ReactApexCharts
                                options={{
                                    ...fromUserRating.options,
                                    colors: ['#8CC152', '#BABDC6'],
                                    dataLabels: {
                                        enabled: false
                                    },
                                    plotOptions: {
                                        ...fromUserRating.options.plotOptions,
                                        pie: {
                                            ...fromUserRating.options.plotOptions.pie,
                                            donut: {
                                                ...fromUserRating.options.plotOptions.pie.donut,
                                                labels: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                    total: {
                                                        ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                        formatter: function (w) {
                                                            return 10
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }} series={fromUserRating.series} type="donut" width={'80%'} />
                        </div>
                    </div>

                </div>
                <div className={styles.infoCard}>
                    <div className={styles.subInfoCard}>
                        <div>
                            <span className="font-roboto-bold">56 265 000 UZS UZS</span>
                            <br />
                            <span>Amalda bajarilgan</span>
                            <br />
                            <br />
                            <br />
                            <span>45 265 xizmat soni</span>
                        </div>
                        <div>
                            < ReactApexCharts
                                options={{
                                    ...fromUserRating.options,
                                    colors: ['#8CC152', '#BABDC6'],
                                    dataLabels: {
                                        enabled: false
                                    },
                                    plotOptions: {
                                        ...fromUserRating.options.plotOptions,
                                        pie: {
                                            ...fromUserRating.options.plotOptions.pie,
                                            donut: {
                                                ...fromUserRating.options.plotOptions.pie.donut,
                                                labels: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                    total: {
                                                        ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                        formatter: function (w) {
                                                            return 10
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }} series={fromUserRating.series} type="donut" width={'80%'} />
                        </div>
                    </div>

                </div>
                <div className={styles.infoCard}>
                    <div className={styles.subInfoCard}>
                        <div>
                            <span className="font-roboto-bold">56 265 000 UZS UZS</span>
                            <br />
                            <span>Amalda bajarilgan</span>
                            <br />
                            <br />
                            <br />
                            <span>45 265 xizmat soni</span>
                        </div>
                        <div>
                            < ReactApexCharts
                                options={{
                                    ...fromUserRating.options,
                                    colors: ['#8CC152', '#BABDC6'],
                                    dataLabels: {
                                        enabled: false
                                    },
                                    plotOptions: {
                                        ...fromUserRating.options.plotOptions,
                                        pie: {
                                            ...fromUserRating.options.plotOptions.pie,
                                            donut: {
                                                ...fromUserRating.options.plotOptions.pie.donut,
                                                labels: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                    total: {
                                                        ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                        formatter: function (w) {
                                                            return 10
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }} series={fromUserRating.series} type="donut" width={'80%'} />
                        </div>
                    </div>

                </div>

            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    <span className='font-roboto-bold' style={{ fontSize: 28 }}>Tushgan mablag’lar</span>
                    <div className='d-flex'>
                        {/* <div > */}
                        {/* <p style={{ marginRight: 20 }}>Записей на странице:</p> */}
                        <Select options={options3} className="select-sm mr-10" placeholder="  Tuman  " />
                        {/* </div> */}
                        {/* <div className='d-flex'> */}
                        {/* <p style={{ marginRight: 20 }}>Записей на странице:</p> */}
                        <Select options={options3} className="select-sm mr-10" placeholder="  2022  " />
                        <Select options={options3} className="select-sm " placeholder="  iyun" />
                        {/* </div> */}
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-end mt-20'>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs === 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(1)}>Reja</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs === 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(2)}>Oy kesimida</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs === 3 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs(3)}>Kun kesimida</div>
                        <div style={{ position: 'absolute' }} className={activeTabs == 3 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div style={activeTabs == 1 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={areaDashboard.options} series={areaDashboard.series} type="area" height={350} />
                        </div>
                    </div>
                    <div style={activeTabs == 2 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...areaDashboard.options, colors: ['#8CC152'], xaxis: { ...areaDashboard.options.xaxis, type: 'category', categories: ["Yanvar", "Yanvar", "Fevral", "Fevral", "Fevral", "Fevral", "Fevral"] } }} series={areaDashboard.series} type="area" height={350} />
                        </div>
                    </div>
                    <div style={activeTabs == 3 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={columnDashboard.options} series={columnDashboard.series} type="bar" height={200} />
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-100 d-flex justify-content-between'>
                <div className={styles.card}>
                    <span className='font-roboto-bold' style={{ fontSize: 28 }}>Rejaning bajarilishi</span>
                    <div style={{ marginTop: 20 }}>
                        < ReactApexCharts
                            options={{
                                ...fromUserRating.options,
                                colors: ['#174AA4', '#E9573F', '#8CC152'],
                                labels: ["Reja bajarilgan", "Bajarilmagan", "Ortig’i bilan bajarilgan"],
                                legend: {
                                    show: true,
                                    position: 'bottom'
                                },
                                dataLabels: {
                                    enabled: true
                                },
                                plotOptions: {
                                    ...fromUserRating.options.plotOptions,
                                    pie: {
                                        ...fromUserRating.options.plotOptions.pie,
                                        donut: {
                                            ...fromUserRating.options.plotOptions.pie.donut,
                                            labels: {
                                                ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                name: {
                                                    show: true,
                                                    fontSize: '10px',
                                                },
                                                total: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                    label: 'Tuman',
                                                    fontSize: '22px',
                                                    showAlways: true,
                                                    show: true,
                                                    fontWeight: 600,
                                                    color: '#282F38',
                                                    formatter: function (w) {
                                                        return 10
                                                    }
                                                },
                                                value: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.value,
                                                    offsetY: 0,
                                                    fontSize: '22px',
                                                    show: true,
                                                }
                                            }
                                        }
                                    }
                                }
                            }} series={{ ...fromUserRating, series: [50, 35, 15] }.series} type="donut" width={'100%'} />
                    </div>
                </div>
                <div className={styles.card} style={{ marginLeft: 20 }}>
                    <span className='font-roboto-bold' style={{ fontSize: 28 }}>Xodimlar faolligi</span>
                    <div style={{ marginTop: 20 }}>
                        < ReactApexCharts
                            options={{
                                ...fromUserRating.options,
                                colors: ['#8CC152', '#E9573F'],
                                labels: ["Ishlayotgan hodimlar", "Ish joyida bolmagan hodimlar"],
                                legend: {
                                    show: false,
                                    width: 0,
                                    height: 0,
                                    position: 'top',
                                },
                                dataLabels: {
                                    enabled: true
                                },

                                plotOptions: {
                                    ...fromUserRating.options.plotOptions,
                                    pie: {
                                        ...fromUserRating.options.plotOptions.pie,
                                        startAngle: -90,
                                        endAngle: 90,
                                        offsetY: 10,
                                        donut: {
                                            ...fromUserRating.options.plotOptions.pie.donut,
                                            labels: {
                                                ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                name: {
                                                    show: true,
                                                    fontSize: '10px',
                                                },
                                                total: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                    label: 'Xodim',
                                                    fontSize: '22px',
                                                    showAlways: true,
                                                    show: true,
                                                    fontWeight: 600,
                                                    color: '#282F38',
                                                    formatter: function (w) {
                                                        return 10
                                                    }
                                                },
                                                value: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.value,
                                                    offsetY: 0,
                                                    fontSize: '22px',
                                                    show: true,
                                                }
                                            }
                                        }
                                    }
                                }
                            }} series={{ ...fromUserRating, series: [50, 35] }.series} type="donut" width={'100%'} />
                    </div>
                    <div className={`${styles.borderStyle} d-flex mb-10 justify-content-between`}>
                        <div className='d-flex'>
                            <div style={{ width: 20, height: 20, backgroundColor: '#8CC152', borderRadius: 8, marginRight: 20 }}></div>
                            <div>Ishlayotgan hodimlar</div>
                        </div>
                        <div>22632652781456</div>
                    </div>
                    <div className={`${styles.borderStyle} d-flex justify-content-between`}>
                        <div className='d-flex'>
                            <div style={{ width: 20, height: 20, backgroundColor: '#8CC152', borderRadius: 8, marginRight: 20 }}></div>
                            <div>Ishlayotgan hodimlar</div>
                        </div>
                        <div>22632652781456</div>
                    </div>
                </div>
                <div className={styles.card} style={{ marginLeft: 20 }}>
                    <span className='font-roboto-bold' style={{ fontSize: 28 }}>Rejaning bajarilishi</span>
                    <div style={{ marginTop: 20 }}>
                        < ReactApexCharts
                            options={{
                                ...fromUserRating.options,
                                colors: ['#174AA4', '#E9573F', '#8CC152'],
                                labels: ["Reja bajarilgan", "Bajarilmagan", "Ortig’i bilan bajarilgan"],
                                legend: {
                                    show: true,
                                    position: 'bottom'
                                },
                                dataLabels: {
                                    enabled: true
                                },
                                plotOptions: {
                                    ...fromUserRating.options.plotOptions,
                                    pie: {
                                        ...fromUserRating.options.plotOptions.pie,
                                        donut: {
                                            ...fromUserRating.options.plotOptions.pie.donut,
                                            labels: {
                                                ...fromUserRating.options.plotOptions.pie.donut.labels,
                                                name: {
                                                    show: true,
                                                    fontSize: '10px',
                                                },
                                                total: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.total,
                                                    label: 'Tuman',
                                                    fontSize: '22px',
                                                    showAlways: true,
                                                    show: true,
                                                    fontWeight: 600,
                                                    color: '#282F38',
                                                    formatter: function (w) {
                                                        return 10
                                                    }
                                                },
                                                value: {
                                                    ...fromUserRating.options.plotOptions.pie.donut.labels.value,
                                                    offsetY: 0,
                                                    fontSize: '22px',
                                                    show: true,
                                                }
                                            }
                                        }
                                    }
                                }
                            }} series={{ ...fromUserRating, series: [50, 35, 15] }.series} type="donut" width={'100%'} />
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    <span className='font-roboto-bold' style={{ fontSize: 28 }}>Ko’rsatilgan xizmatlar</span>
                    <div className='d-flex'>
                        {/* <div > */}
                        {/* <p style={{ marginRight: 20 }}>Записей на странице:</p> */}
                        <Select options={options3} className="select-sm mr-10" placeholder="  Tuman  " />
                        {/* </div> */}
                        {/* <div className='d-flex'> */}
                        {/* <p style={{ marginRight: 20 }}>Записей на странице:</p> */}
                        <Select options={options3} className="select-sm mr-10" placeholder="  2022  " />
                        <Select options={options3} className="select-sm " placeholder="  iyun" />
                        {/* </div> */}
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-end mt-20'>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs2 === 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs2(1)}>Oy kesimida</div>
                        <div style={{ position: 'absolute' }} className={activeTabs2 == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs2 === 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs2(2)}>Kun kesimida</div>
                        <div style={{ position: 'absolute' }} className={activeTabs2 == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>

                </div>
                <div className='mt-20'>
                    <div style={activeTabs2 === 1 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...areaDashboard.options, colors: ['#7595CC'], xaxis: { ...areaDashboard.options.xaxis, type: 'category', categories: [1, 2, 3, 4, 5, 6, 7] } }} series={areaDashboard.series} type="area" height={350} />
                        </div>
                    </div>
                    <div style={activeTabs2 === 2 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...areaDashboard.options, colors: ['#8CC152'], xaxis: { ...areaDashboard.options.xaxis, type: 'category', categories: ["Yanvar", "Yanvar", "Yanvar", "Fevral", "Fevral", "Fevral", "Fevral", "Fevral"] } }} series={areaDashboard.series} type="area" height={350} />
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>

                    <h1 className="font-roboto-bold">Rejaning bajarilishi</h1>
                    <div className="d-flex align-items-center">

                        <div className="inputs2 w-100 pr-20">
                            <div className="d-flex">
                                <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                            </div>
                        </div>
                        <div className="inputs2 w-100 pr-20">
                            <div className="d-flex">
                                <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                            </div>
                        </div>
                        <div style={{ padding: 15, backgroundColor: '#F6F6F7', borderRadius: 8, marginRight: 10 }}>
                            <span className="icon icon-upload" style={{ backgroundColor: 'black' }}></span>
                        </div>
                        <div style={{ padding: 15, backgroundColor: '#F6F6F7', borderRadius: 8 }}>
                            <span className="icon icon-arrow-mini" style={{ backgroundColor: 'black' }}></span>
                        </div>
                    </div>

                </div>
                <div className='d-flex w-100 justify-content-center mt-20'>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs3 === 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs3(1)}>Rejaning bajarilishi</div>
                        <div style={{ position: 'absolute' }} className={activeTabs3 == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs3 === 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs3(2)}>Xizmat sonlari</div>
                        <div style={{ position: 'absolute' }} className={activeTabs3 == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>

                </div>
                <div className='mt-20'>
                    <div style={activeTabs3 === 1 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...barDashboard.options, colors: ['#174AA4', '#8CC152', '#E9573F'], xaxis: { ...barDashboard.options.xaxis, type: 'category', categories: ["Toshkent shahri", "Toshkent viloyat", "Qoraqalpog’iston Res", "Jizzax viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Namangan viloyati", "Andijon viloyati"] } }} series={barDashboard.series} type="bar" height={350} />
                        </div>
                    </div>
                    <div style={activeTabs3 === 2 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...barDashboard.options, colors: ['#174AA4', '#8CC152'], xaxis: { ...barDashboard.options.xaxis, type: 'category', categories: ["Toshkent shahri", "Toshkent viloyat", "Qoraqalpog’iston Res", "Jizzax viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Namangan viloyati", "Andijon viloyati"] } }} series={[{ data: [3, 6, 9, 2, 6, 0, 3, 5] }]} type="bar" height={350} />

                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>

                    <h1 className="font-roboto-bold">Xizmatlar statistikasi</h1>
                    <div className="d-flex align-items-center">

                        <div className="inputs2 w-100 pr-20">
                            <div className="d-flex">
                                <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                            </div>
                        </div>
                        <div className="inputs2 w-100 pr-20">
                            <div className="d-flex">
                                <input type="date" className="w-100 font-roboto-light" placeholder="F.I.O" />
                            </div>
                        </div>
                        <div style={{ padding: 15, backgroundColor: '#F6F6F7', borderRadius: 8, marginRight: 10 }}>
                            <span className="icon icon-upload" style={{ backgroundColor: 'black' }}></span>
                        </div>
                        <div style={{ padding: 15, backgroundColor: '#F6F6F7', borderRadius: 8 }}>
                            <span className="icon icon-arrow-mini" style={{ backgroundColor: 'black' }}></span>
                        </div>
                    </div>

                </div>
                <div className='d-flex w-100 justify-content-center mt-20'>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs4 === 1 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs4(1)}>Tushumlar bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs4 == 1 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className={activeTabs4 === 2 ? styles.tabs : styles.tabsInActive} onClick={() => setactiveTabs4(2)}>Soni bo’yicha</div>
                        <div style={{ position: 'absolute' }} className={activeTabs4 == 2 ? styles.tabsLine : styles.tabsLineInActive}></div>
                    </div>

                </div>
                <div className='mt-20'>
                    <div style={activeTabs4 === 1 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...barDashboard.options, colors: ['#174AA4', '#8CC152'], xaxis: { ...barDashboard.options.xaxis, type: 'category', categories: ["Toshkent shahri", "Toshkent viloyat", "Qoraqalpog’iston Res", "Jizzax viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Namangan viloyati", "Andijon viloyati"] } }} series={columnDashboard.series} type="bar" height={350} />
                        </div>
                    </div>
                    <div style={activeTabs4 === 2 ? { display: 'block' } : { display: 'none' }}>
                        <div>
                            <ReactApexCharts
                                options={{ ...barDashboard.options, colors: ['#174AA4', '#E9573F'], xaxis: { ...barDashboard.options.xaxis, type: 'category', categories: ["Toshkent shahri", "Toshkent viloyat", "Qoraqalpog’iston Res", "Jizzax viloyati", "Samarqand viloyati", "Sirdaryo viloyati", "Namangan viloyati", "Andijon viloyati"] } }} series={columnDashboard.series} type="bar" height={350} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
import React, { useState } from 'react'
import styles from './UserProfile.module.scss';
import ReactApexCharts from 'react-apexcharts';
import user from '../UserProfile/user.png'
import StarRatings from 'react-star-ratings';

function KPIindicators() {
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

    return (
        <div className='d-flex'>
            <div className={`${styles.leftCard}`} style={{ width: '70%', padding: 20 }}>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                    <span style={{ fontSize: 28 }} className="font-roboto-bold">Hodimning samaradorlik ko’rsatkichi</span>
                    <div className='d-flex align-items-center'>
                        <span>Umumiy baho</span>
                        <div>
                            <span>
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
                                    }} series={fromUserRating.series} type="donut" width={'100px'} />

                            </span>
                        </div>
                    </div>
                </div>
                <div style={{ overflowY: 'auto', height: 700 }}>

                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards} style={{ padding: 0, paddingTop: 20 }}><span style={{ fontSize: 24 }}><div className='d-flex w-100'>
                            <span>4.5</span>
                            <StarRatings
                                rating={4.5}
                                starDimension="18px"
                                starSpacing="1px"
                                starRatedColor="#FF9C36"
                            />
                        </div></span> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.card} w-100 d-flex justify-content-between`} style={{ height: 120 }}>
                        <div className={styles.line2} style={{ backgroundColor: '#8CC152' }}></div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ish kunlari</span> </div>
                        <div className={styles.cardInCards}><span style={{ fontSize: 24 }}>22 kun</span> <br /> <span style={{ fontSize: 16 }}>Ishlagan kunlari</span> </div>
                        <div className={`${styles.cardInCards} font-roboto-bold`} style={{ fontSize: 40 }} >94%</div>
                        <div className={styles.line2} style={{ backgroundColor: '#B6BCCD', marginLeft: 20 }}></div>
                        <div className={styles.cardInCards} style={{ paddingTop: 0, paddingBottom: 20 }}>
                            <div className='w-100 d-flex justify-content-center'>
                                <span>
                                    < ReactApexCharts
                                        options={{
                                            ...fromUserRating.options,
                                            colors: ['#E9573F', '#BABDC6'],
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
                                        }} series={fromUserRating.series} type="donut" width={'100px'} />
                                    Berilgan baho
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${styles.rightCard}`} style={{ width: '30%', overflowY: 'auto', height: 760, padding: 20 }}>
                <div className='w-100 d-flex justify-content-center'>

                    <span style={{ textAlign: 'center' }}>Oxirgi amallar</span>
                </div>
                {
                    lastActs.map((date, key) =>
                        <div key={key} className={`w-100 p-20`}>
                            <div className='d-flex justify-content-center'><span className={styles.dateStyle}>{date.date}</span></div>
                            {
                                date.lastActs.map((acts, index) => {
                                    return (
                                        <div key={index} className={`d-flex`} style={{ alignItems: 'center', height: 140 }}>
                                            <div className={index === 0 ? styles.start : index + 1 === date.lastActs.length ? styles.end : styles.center}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div style={{ marginLeft: 10 }}>{acts.time}</div>
                                            <div style={{ marginLeft: 10 }}><span className='font-roboto-bold'>{acts.fullName}</span> <span style={{ color: '#174AA4' }}>{acts.ipAddress}</span><br /><span>Ushbu IP orqali tizimga kirish amalga oshirildi</span></div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default KPIindicators
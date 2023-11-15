import React, { useState } from 'react'
import styles from './UserProfile.module.scss';

function Calendar() {
    const calendar = {
        month: "Iyun",
        monthNumber: 6,
        week: [
            {
                days: [
                    {
                        weekName: "Dushanba",
                        day: 26,
                        came: {
                            positive: false,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        weekName: "Seshanba",
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "CHorshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: false,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Payshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        day: 26,
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Juma",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },

                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Shanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Yakshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                ]
            },
            {
                days: [
                    {
                        weekName: "Dushanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        weekName: "Seshanba",
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "CHorshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Payshanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Juma",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Shanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                ]
            },
            {
                days: [
                    {
                        weekName: "Dushanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        weekName: "Seshanba",
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "CHorshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Payshanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Juma",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Shanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                ]
            },
            {
                days: [
                    {
                        weekName: "Dushanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        weekName: "Seshanba",
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "CHorshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Payshanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Juma",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Shanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                ]
            },
            {
                days: [
                    {
                        weekName: "Dushanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        weekName: "Seshanba",
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "CHorshanba",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Payshanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        weekName: "Juma",
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            weekName: "Shanba",
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                    {
                        day: 26,
                        came: {
                            positive: true,
                            time: "08:55 keldi"
                        },
                        went: {
                            positive: true,
                            time: "18:02 ketdi"
                        }
                    },
                ]
            },

        ]

    }
    const icons = [
        {
            id: 1,
            item: <div className={`${styles.rightIcon} d-flex justify-content-center`} style={{ backgroundColor: '#8CC152' }}>
                <span style={{ backgroundColor: 'white' }} className='icon icon-login'></span>
            </div>,
            color: '#8CC152'

        },
        {
            id: 2,
            item: <div className={`${styles.rightIcon} d-flex justify-content-center`} style={{ backgroundColor: '#C99C29' }}>
                <span style={{ backgroundColor: 'white' }} className='icon icon-food'></span>
            </div>,
            color: '#C99C29'
        },
        {
            id: 3,
            item: <div className={`${styles.rightIcon} d-flex justify-content-center`} style={{ backgroundColor: '#174AA4' }}>
                <span style={{ backgroundColor: 'white' }} className='icon icon-money'></span>
            </div>,
            color: '#174AA4'
        },
        {
            id: 4,
            item: <div className={`${styles.rightIcon} d-flex justify-content-center`} style={{ backgroundColor: '#174AA4' }}>
                <span style={{ backgroundColor: 'white' }} className='icon icon-help'></span>
            </div>,
            color: '#174AA4'
        },
        {
            id: 5,
            item: <div className={`${styles.rightIcon} d-flex justify-content-center`} style={{ backgroundColor: '#E9573F' }}>
                <span style={{ backgroundColor: 'white' }} className='icon icon-hous'></span>
            </div>,
            color: '#E9573F'
        },
    ]

    return (
        <div className='d-flex w-100'>
            <div className={`w-75 ${styles.card}`}>
                <div className='d-flex w-100 justify-content-between'>
                    <div style={{ padding: 10, backgroundColor: '#F6F6F7', borderRadius: 8 }}><span className='icon icon-vector' style={{ backgroundColor: 'black' }}></span></div>
                    <div className='w-25 d-flex justify-content-between align-items-center'>
                        <div style={{ padding: 10, backgroundColor: '#F6F6F7', borderRadius: 8, paddingLeft: 15, paddingRight: 15 }}>
                            <span className='icon icon-arrow-left-mini' style={{ backgroundColor: 'black', width: 15 }}></span>
                        </div>
                        <div>Iyun 2022</div>
                        <div style={{ padding: 10, backgroundColor: '#F6F6F7', borderRadius: 8, paddingLeft: 15, paddingRight: 15 }}>
                            <span className='icon icon-arrow-right-mini' style={{ backgroundColor: 'black', width: 15 }}></span>
                        </div>
                    </div>
                    <div style={{ padding: 10, backgroundColor: '#F6F6F7', borderRadius: 8 }}><span className='icon icon-download' style={{ backgroundColor: 'black' }}></span></div>
                </div>
                <div className={styles.decTabel}>
                    <div className={styles.mainTable}>
                        <table style={{ width: '100%' }}>
                            <tr>
                                {
                                    calendar.week[0].days.map((item, index) =>
                                        <th>{item.weekName}</th>
                                    )
                                }

                            </tr>
                            {calendar.week?.map((item, key) =>
                                <tr key={key}>
                                    {
                                        item.days.map((day, index2) =>
                                            <td key={index2} style={{ position: 'relative' }}>
                                                <div className={styles.day}> {day.day}</div>
                                                <div className={styles.cameAndWent}>
                                                    <div className='d-flex justify-content-center' style={{ marginTop: 10 }}>
                                                        <span style={day.came.positive ? { backgroundColor: '#8CC152' } : { backgroundColor: '#E9573F' }}></span>
                                                        <span style={day.came.positive ? { color: '#174AA4' } : { color: '#E9573F' }}>{day?.came.time}</span>
                                                    </div>
                                                    <div className='d-flex justify-content-center' style={{ paddingTop: 5 }}>
                                                        <span style={day.went.positive ? { backgroundColor: '#8CC152' } : { backgroundColor: '#E9573F' }}></span>
                                                        <span style={day.went.positive ? { color: '#174AA4' } : { color: '#E9573F' }}>{day?.went.time}</span>
                                                    </div>
                                                </div>

                                            </td>
                                        )
                                    }
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
            <div className={`${styles.card} w-25`} style={{ marginLeft: 20 }}>
                <div className='w-100'>
                    <span style={{ color: '#1A376A', fontSize: 28 }} className='font-roboto-bold'>18 - Iyun, Seshanba</span><br /><br />
                    <span className='font-roboto'>Hodim ish joyida bo’lgan:</span><br />
                    <span style={{ color: '#B02929' }}> 7 soat 55 minut</span>
                </div>
                <div className={`${styles.card} `}>
                    <div className='d-flex justify-content-between w-100 align-items-center' style={{ height: 60, borderLeft: `4px solid ${icons[0].color}` }}>
                        <div className='d-flex justify-content-start align-items-center'>

                            <div style={{ paddingLeft: 5 }}>{icons[0].item}</div>
                            <div style={{ paddingLeft: 10 }}>Kirdi</div>
                        </div>
                        <div style={{ textAlign: 'end' }}>09:45</div>
                    </div>
                </div>
                <div className={`${styles.card} `}>
                    <div className='d-flex justify-content-between w-100 align-items-center' style={{ height: 60, borderLeft: `4px solid ${icons[1].color}` }}>
                        <div className='d-flex justify-content-start align-items-center'>
                            <div style={{ paddingLeft: 5 }}>{icons[1].item}</div>
                            <div style={{ paddingLeft: 10 }}>Ovqatlanishga chiqdi</div>
                        </div>
                        <div style={{ textAlign: 'end' }}>09:45</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar
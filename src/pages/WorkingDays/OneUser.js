import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { allHours, daysStatusContents, daysStatuse, userList } from './Dates';
import lunch from './lunch.svg'
import service from './service.svg'
import technical_problem from './technical_problem.svg'
import styles from './WorkingDays.module.scss';
function OneUser() {
    const options = [{ value: "2022", label: "2022" }, { value: "2023", label: "2023" }]
    const options2 = [{ value: "May", label: "May" }, { value: "Iyun", label: "Iyun" }]
    const [user, setuser] = useState()
    const [iconId, setIconId] = useState('')
    const [hoursId, setHoursId] = useState('')
    const id = useParams("id");
    let hoursList = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    const icons = [
        {
            id: 1,
            value: <div> <div className={styles.lunch} style={{ backgroundColor: '#8cc152' }}> <img src={lunch} width={20} /></div> <span>Tushlik</span></div>
        },
        {
            id: 4,
            value: <div> <div className={styles.lunch} style={{ backgroundColor: '#8cc152' }}> <img src={lunch} width={20} /></div> <span>Qisqa tanaffus</span></div>
        },
        {
            id: 2,
            value: <div> <div className={styles.lunch} style={{ backgroundColor: '#E9573F' }}> <img src={technical_problem} width={20} /></div> <span>Texnik muommo</span></div>
        },
        {
            id: 3,
            value: <div> <div className={styles.lunch} style={{ backgroundColor: '#E9573F' }}> <img src={service} width={20} /></div> <span>Xizmat ko’rsatish</span></div>
        },
        {
            id: 5,
            value: <div> <div className={styles.lunch} style={{ backgroundColor: '#E9573F' }}> <img src={service} width={20} /></div> <span>Besabab</span></div>
        },
    ]

    useEffect(() => {
        let list = userList
        setuser(list.filter((item) => item.id == id.id)[0]);
        console.log(hoursId, "id");

    }, [hoursId]);

    const getIcon = (id) => {
        return icons.filter((item) => item.id == id)[0];
    }



    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ishga kelganlik bo’yicha oylik tabel</span>
            </p>
            <div className={styles.MainHeader}>
                <div className={styles.header}>
                    <div className="d-flex justify-content-between">
                        <h1 className="font-roboto-bold mt-10">{user?.fio}</h1>
                        <div className="d-flex">
                            <div className="w-20 mr-20">
                                {/* <label> Yil:</label> */}
                                <Select options={options} placeholder="Yilni tanlang" />
                            </div>
                            <div className=" w-20 mr-20">
                                {/* <label> Oy:</label> */}
                                <Select options={options2} placeholder="Oyni tanlang" />
                            </div>
                            <button>
                                <span className="icon icon-print" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className='d-flex w-100 justify-content-between'>
                    {daysStatusContents.map((item, index) =>
                        <div className='d-flex' key={index}>{item.style}<span style={{ marginLeft: 5, fontSize: 14, marginTop: 20 }}>{item.name}</span></div>
                    )}
                </div>
                <div className='d-flex w-100 justify-content-between' style={{ overflowX: 'auto' }}>
                    {user?.dayList?.map((day, index) =>
                        <div key={index} style={{ marginBottom: 10, marginLeft: 5 }}>
                            <div className={styles.userMonth}>{day.date.toString().substring(7, 10)}</div>
                            <div style={day.workedHours == null ? { paddingLeft: 15, top: 0 } : null} className={styles.userHours}>{day.workedHours == null ? daysStatuse(day.statusId) : day.workedHours}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.card} style={{ overflowX: 'auto' }}>
                <div className='d-flex w-100' >
                    <div style={{ marginRight: 10 }}>6:00</div>
                    <div >
                        <div className='d-flex'>
                            {
                                allHours.map((item, index) =>
                                    <div key={index} className={item.active ? styles.activeTime : styles.inActiveTime} style={{ width: (item.minutes * 1.3) }} onMouseEnter={() => setHoursId(item.id)} onMouseLeave={() => setHoursId('')} onClick={() => setIconId(item.id)}>
                                        <div className={item.id == hoursId ? styles.hoursHover : null} style={item.id == hoursId ? { display: 'block' } : { display: 'none' }}>
                                            <span>{getIcon(item.satusId)?.value}</span>
                                            <span style={{ fontSize: 12 }}>{item.came}-{item.went}</span>
                                            <div className={styles.boxIconsWiev} onMouseLeave={() => setIconId('')} >
                                                {icons.map((icon, index) =>
                                                    <div style={item.id === iconId ? { display: 'block' } : { display: 'none' }} className={styles.iconsWiev} key={index} ><span>{icon.value}</span></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='d-flex w-100 justify-content-between mt-10' >
                            {
                                hoursList?.map((item) =>
                                    <div key={item}>{item}</div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>23:59</div>
                </div>
            </div>

        </div>
    )
}

export default OneUser
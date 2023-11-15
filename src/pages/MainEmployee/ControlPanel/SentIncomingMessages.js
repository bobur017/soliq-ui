import React from 'react';
import styles from "./ControlPanel.module.scss"
import Select from "react-select";
import {Link} from "react-router-dom";

const SentIncomingMessages = () => {
    const options = [
        {value: 'chocolate', label: '2222'},
        {value: 'strawberry', label: '2222'},
        {value: 'vanilla', label: '2222'}
    ]
    const title = "А ещё тщательные исследования конкурентов и по сей день остаются уделом либералов, которые жаждут быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложившаяся структура организации, в своём классическом представлении, допускает внедрение дальнейших направлений развития. Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий прекрасно подходит "
    return (
        <div className={styles.SentIncomingMessages}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Kelgan xabarlar</span>
            </p>
            <div className={`${styles.mainCard} z-index-main`}>
                <h1>Kelgan xabarlar</h1>
                <div className="d-flex">
                    <Link>
                        <span className="icon icon-plus-circle "/>
                        Xabar jo'natish
                    </Link>
                    <Select options={options} placeholder="yil" className={`${styles.month} `}/>
                    <Select options={options} placeholder="oy" className={styles.month}/>
                </div>
            </div>
            <div className={styles.mainTable}>
                <div className={styles.interval}>
                    <div className="d-flex ">
                        <div className="d-flex align-items-center">
                            <label className="font-roboto-light">Yil:</label>
                            <Select options={options} placeholder="-" className={styles.month}/>
                        </div>
                        <div className="d-flex align-items-center">
                            <label className="font-roboto-light">Oy:</label>
                            <Select options={options} placeholder="-" className={styles.month}/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="font-roboto-light">Har bir sahifadagi yozuvlar:</label>
                        <Select options={options} placeholder="-" className={styles.zpstr}/>
                    </div>
                </div>
                <div className={`${styles.items} `}>
                   <div className="d-flex">
                       <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                       <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                   </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <div className="d-flex">
                        <h4 className="font-roboto-bold ">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ - </h4>
                        <p className="font-roboto-light m-0   ">{title.slice(0, 60)}</p>
                    </div>
                    <div className={styles.status}>
                        <span className={`${styles.birdCircle} icon icon-bird-circle`}/>
                        <p>32</p>
                        <span className="icon icon-caution"/>
                        <p>132</p>
                        <p className={styles.date}>14:20 сегодня</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentIncomingMessages;

import React from 'react';
import styles from "./ControlPanel.module.scss"
import Select from "react-select";
import {Link} from "react-router-dom";
const IncomingMessages = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.IncomingMessages}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Kelgan xabarlar</span>
            </p>
            <div className={styles.mainCard}>
                <h1>Kelgan xabarlar</h1>
               <div className="d-flex">
                   <Link>
                       <span className="icon icon-plus-circle"/>
                       Xabar jo'natish
                   </Link>
                   <Select options={options} placeholder="yil" className={styles.month}/>
                   <Select options={options} placeholder="oy" className={styles.month}/>
               </div>
            </div>
            <div className={styles.mainTable}>
                <div className={`${styles.items} `}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-caution"/>
                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-caution"/>
                    </div>
                </div>
                <div className={`${styles.items} `}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-caution"/>
                    </div>
                </div>
                <div className={`${styles.items} ${styles.active}`}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-bird-circle"/>
                    </div>
                </div>
                <div className={`${styles.items} ${styles.active}`}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-bird-circle"/>
                    </div>
                </div>
                <div className={`${styles.items} ${styles.active}`}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-bird-circle"/>
                    </div>
                </div>
                <div className={`${styles.items} ${styles.active}`}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-bird-circle"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomingMessages;

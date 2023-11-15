import React from 'react';
import styles from './RegistrationOfTheLeaseAgreement.module.scss'
const AccessToPersonalCabinet = () => {
    return (
        <div className={styles.accessToPersonalCabinet}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>  Shaxsiy kabinetga kirish</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Shaxsiy kabinetga kirish
                </h3>
            </div>
            <div className={styles.persons}>
                <div className="w-100 mr-30">
                    <img src="/assets/persons1.png" alt=""/>
                    <h2>Yuridik shaxs</h2>
                    <button>Kirish</button>
                </div>
                <div className="w-100 mr-30">
                    <img src="/assets/persons2.png" alt=""/>
                    <h2>Yakka tartibdagi tadbirkor</h2>
                    <button>Kirish</button>
                </div>
                <div className="w-100">
                    <img src="/assets/persons3.png" alt=""/>
                    <h2>Jismoniy shaxs</h2>
                    <button>Kirish</button>
                </div>

            </div>
        </div>
    );
};

export default AccessToPersonalCabinet;

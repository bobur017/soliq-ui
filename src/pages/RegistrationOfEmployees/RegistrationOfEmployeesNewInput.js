
import React, {useState} from 'react';
import styles from "./RegistrationOfEmployees.module.scss"
import EnterComponent from "../../component/EnterComponent";
const RegistrationOfEmployeesNewInput = () => {

    return (
        <div className={styles.getSalaryRefrence}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yonlangan xodimlarni ro’yxatdan o’tkazish</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Yonlangan xodimlarni ro’yxatdan o’tkazish
                </h3>
            </div>
            <EnterComponent/>
        </div>
    );
};

export default RegistrationOfEmployeesNewInput;

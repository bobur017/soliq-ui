import React from 'react';
import GetInfo from "../../component/GetInfo";
import styles from "./RegistrationOfEmployees.module.scss";
import Select from "react-select";
import SelfEmploymentForms2 from "../SelfEmployment/SelfEmploymentForms2";

const RegistrationOfEmployeesNewComp = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];
    return (
        <div className={styles.informationAboutPhysicalPerson}>

        <GetInfo type={"YXRU1"} />
            <div className={`${styles.regTitleMain} titleBox`}>
                <div>
                    <h3 className="titleMain font-roboto-bold">
                        Yuridik shaxs nomi
                    </h3>
                    <p>INN: 256263456</p>
                </div>
                <button className="font-roboto-bold">
                    <span className="icon icon-upload" />
                    Shartnoma blankasi
                </button>

            </div>

            <SelfEmploymentForms2 />

        </div>
    );
};

export default RegistrationOfEmployeesNewComp;
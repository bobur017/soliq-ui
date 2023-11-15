import React from 'react';
import styles from "./RegistrationOfEmployees.module.scss"
import Select from "react-select";
import GetInfo from "../../component/GetInfo";
import RegistrationOfEmployeesNewInput from "./RegistrationOfEmployeesNewInput";
import RegistrationOfEmployeesNewTabel from "./RegistrationOfEmployeesNewTabel";
import RegistrationOfEmployeesNewComp from "./RegistrationOfEmployeesNewComp";
import YurTaxView from "../InteractiveServices/YurTaxInfo/YurTaxView";

const RegistrationOfEmployeesNew = () => {

    return (
        <div>
            <RegistrationOfEmployeesNewInput />
            <RegistrationOfEmployeesNewTabel />
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yonlangan xodimlarni ro’yxatdan o’tkazish</span>
            </p>

            {/*<div className="titleBox ">*/}
            {/*    <div className="w-100">*/}
            {/*        <h3 className="titleMain font-roboto-bold">*/}
            {/*            Ijara shartnomasini ro’yxatdan o’tkazish*/}
            {/*        </h3>*/}
            {/*        <div className={styles.progressMain}>*/}
            {/*            <div className={`${styles.dot} ${styles.activeDot}`}><div><span className={styles.activeDot}></span></div></div>*/}
            {/*            <div className={styles.dot}><div><span className={styles.activeDot}></span></div><h1 className={`m-0 font-roboto-regular ${styles.blueTitle}`}>Kerakli ma’lumotlar kiritish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>Mehnat shartnomasini yuklab olish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>  Hizmat uchun to’lovni amalga oshirish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span><span className="icon icon-bird"></span></span></div><h1 className={` m-0 font-roboto-regular`}>Hizmat yakunlandi</h1></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <RegistrationOfEmployeesNewComp />
            <YurTaxView src="/assets/MyHome.pdf#toolbar=0&scrollbar=0" print={true} pdfDownload = {true}/>

        </div>
    );
};

export default RegistrationOfEmployeesNew;

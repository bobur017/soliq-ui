import React from 'react';
import styles from './SendingInvoices.module.scss'
const SendingInvoices = () => {
    return (
        <div className={styles.sendingInvoices}>
            <div className={`${styles.dwnTitle} d-flex`}>
                <h2 className="font-roboto-bold page-main-title">
                    Ҳисоб-фактураларни қоғоздан електрон шаклга ўтказиш ва уларни мижозларга юборишни осонлаштириш
                </h2>
            </div>
            <button className={`${styles.mainBtn} w-100`}>
                Шакилантириш
            </button>
            <div className={styles.taxReport}>
                <div className={`${styles.taxReportTabelHeader} d-flex w-100`}>
                    <p className="w-100 mr-20">Филиал номи</p>
                    <p className="w-100 mr-20">ИНН</p>
                    <p className="w-100">Хисоб-фактура санаси</p>
                </div>

                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>
                    <p className="w-100 mr-20 font-roboto-light">123 456 798</p>
                    <p className="w-100 font-roboto-light">12.12.2020</p>
                </div>
            </div>
        </div>
    );
};

export default SendingInvoices;

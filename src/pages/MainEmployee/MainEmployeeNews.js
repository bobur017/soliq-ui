import React from 'react';
import styles from './MainEmployee.module.scss'
import Select from "react-select";

const MainEmployeeNews = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={styles.MainEmployeeNews}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yangiliklar</span>
            </p>
            <div className={` ${styles.mainCard}`}>
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <h3 className="titleMain font-roboto-bold">
                        Yangiliklar
                    </h3>
                    <div className="d-flex">
                        <button className="font-roboto-bold mr-30">
                            <span className="icon icon-plus-circle"/>
                            Yangilik yaratish
                        </button>
                        <Select options={options} className={styles.selects} placeholder="-"/>
                        <Select options={options} className={styles.selects} placeholder="-"/>

                    </div>
                </div>
            </div>
            <div className={styles.newList}>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
                <div className={styles.newsItem}>
                    <img src="/assets/Backdrop.png" alt="..."/>
                    <h3 className="font-roboto-bold">Xizmatlar narxlari yangilandi</h3>
                    <p>Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish
                        qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak!</p>
                    <div className="d-flex justify-content-between">
                        <span>14:20<span>/</span>01.01.2022 </span>
                        <a className="font-roboto-bold" href="#!">Batafsil...</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainEmployeeNews;

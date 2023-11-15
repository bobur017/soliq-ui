import React from 'react';
import styles from "./MainEmployee.module.scss";

const MainEmployeeNewsDetail = () => {
    return (
        <div className={styles.mainEmployeeNewsDetail}>

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yangiliklar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xizmatlar narxlari yangilandi</span>
            </p>

            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        Xizmatlar narxlari yangilandi
                    </h3>
                </div>
            </div>
            <div className={styles.newsDetailItem}>
                <div className="d-flex">
                    <p>
                        Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul
                        qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan,
                        pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil
                        usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini
                        ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan
                        boshqa iloj yo‘q. Xorijiy manbalardan olingan.

                        Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va
                        ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul
                        qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan,
                        pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil
                        usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini
                        ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan
                        boshqa iloj yo‘q. Xorijiy manbalardan olingan. Biz tashqi qarama-qarshiliklarning semantik
                        tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan
                        eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab
                        berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati
                        rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan,
                        ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga
                        bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan
                        olingan.
                    </p>
                    <img src="/assets/Backdrop.png" alt="..."/>
                </div>
                <div className="d-flex justify-content-between">
                    <span>14:20<span>/</span>01.01.2022 </span>
                    <span>Toshkent viloyati bo’yicha jo’natilgan</span>
                </div>
            </div>

        </div>
    );
};

export default MainEmployeeNewsDetail;

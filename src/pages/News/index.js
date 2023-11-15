import React from 'react'
import styles from './News.module.scss';
import icons from './icons/calendar.svg';
import left from './icons/arrowLeft.svg';
import right from './icons/arrowRight.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const News = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => {
        setNewsId('');
        setIsOpen(true);
    };

    let fakeNews = [
        {
            id: 1,
            title: "Xizmatlar narxlari yangilandi",
            text: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 2,
            title: "Xizmatlar narxlari yangilandi",
            text: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 3,
            title: "Xizmatlar narxlari yangilandi",
            text: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 4,
            title: "Xizmatlar narxlari yangilandi",
            text: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 5,
            title: "Xizmatlar narxlari yangilandi",
            text: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
    ]
    const [newsId, setNewsId] = useState('');

    const popoverService = (e, id) => {
        if (newsId === id) {
            setNewsId('');
        } else {
            setNewsId(id);
        }

    }

    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Yangiliklar</span>
            </p>
            <div className={styles.dashboard}>
                <div className="d-flex align-items-center">
                    <h3>Yangiliklar</h3>
                </div>
                <div className='d-flex w-30'>
                    <button className="createBtn w-50 d-flex"
                        onClick={() => props.history.push("/main/news/service")}
                    >
                        <span className="icon icon-plus-circle" />
                        Yangilik yaratish
                    </button>
                    <input type="date" className="w-100 font-roboto-light" placeholder="-" />
                    <input type="date" className="w-100 font-roboto-light" placeholder="-" />
                </div>
            </div>
            <div className={styles.row} style={{ width: '100%' }}>
                {
                    fakeNews.map((item, index) =>
                        <div key={index} className={styles.col}>
                            <div className={styles.card}>
                                <div className={newsId === item.id ? styles.popoverActive : styles.popoverInActive}>
                                    <div className='d-flex'><span className='icon icon-edit' style={{ width: 16, marginLeft: 25 }} /> O'zgartirish</div>
                                    <div className='d-flex' onClick={openModal} style={{ cursor: 'pointer' }} ><span className='icon icon-delete-btn' style={{ marginLeft: 25 }} /> O'chirish</div>
                                </div>
                                <div style={{ backgroundImage: `url(${item.imagePath})` }} className={styles.image}>
                                    <div>
                                        <div>
                                            <span className='icon icon-settings' onClick={(e) => popoverService(e, item.id)}></span>
                                            <span className="icon icon-arrow-down" onClick={(e) => popoverService(e, item.id)} style={{ marginLeft: 30, width: 13 }}></span>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='font-roboto-bold'>{item.title}</h1>
                                <div>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className={styles.newsFooter}>
                                    <div className='d-flex justlify-content-between'>
                                        <div style={{ color: "#777B82" }}>
                                            <img src={icons} width={16} />
                                        </div>
                                        <div style={{ marginRight: 5, marginLeft: 5 }}>{item.time}</div>  /
                                        <div>{item.date}</div>
                                        <span className={`${styles.icons} icon icon-eye ml-10`}></span>
                                        <div style={{ marginLeft: 5 }}>{item.view}</div>
                                    </div>
                                    <div>
                                        <Link to={"/main/news/" + item.id}>
                                            Batafsil...
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='d-flex'>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}><img src={left} alt="" width={20} style={{ marginRight: 5 }} /> Oldingi </button></div>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}> Keyingi <img src={right} alt="" width={20} style={{ marginLeft: 5 }} /></button></div>
            </div>
            <div className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModalRec}`}>
                <button className={styles.closeBtn} onClick={closeModal}><span className="icon icon-close" />
                </button>
                <h3 className="font-roboto-bold">Yangilikni o'chirish</h3>
                <div className="d-flex justify-content-center">
                    <button onClick={closeModal}>Bekor qilish</button>
                    <button>OK</button>
                </div>
            </div>
        </div>
    )
}

export default News
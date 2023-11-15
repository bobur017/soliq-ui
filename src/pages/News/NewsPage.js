import React, { useEffect } from 'react'
import styles from './News.module.scss';
import image from './icons/54975.png';
import { Link, useParams } from 'react-router-dom';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import left from './icons/arrowLeft.svg';
import right from './icons/arrowRight.svg';
import icons from './icons/calendar.svg';
import FooterFromPage from '../FooterFromPage';


const NewsPage = (props) => {
    const id = useParams("id");
    useEffect(() => {
        console.log(id.id, "iiiiiiddddddd", fakeNews);
        let listNews = fakeNews.filter(item => item.id == id.id);
        setMainNews(listNews[0]);
        console.log(listNews);
    }, [id])


    var fakeNews = [
        {
            id: 1,
            title: "Xizmatlar narxlari yangilandi",
            description: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 2,
            title: "Xizmatlar narxlari yangilandi",
            description: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 3,
            title: "Xizmatlar narxlari yangilandi",
            description: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 4,
            title: "Xizmatlar narxlari yangilandi",
            description: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
        {
            id: 5,
            title: "Xizmatlar narxlari yangilandi",
            description: "Biz tashqi qarama-qarshiliklarning semantik tahlili har bir ishtirokchini o'z miqyosi va ulug'vorligi bilan hayratlanarli bo'lgan eksperimentlar bo'yicha o'z qarorlarini qabul qilish qobiliyatiga ega ekanligini aniqlab berishidan boshlashimiz kerak! Boshqa tomondan, pozitsion tadqiqotlarning yuqori sifati rivojlanish modelini amalga oshirishning mustaqil usullarini taklif qiladi. Xususan, ijtimoiy-iqtisodiy taraqqiyot bizga ham o‘z-o‘zini ta’minlash, ham tashqi ko‘rinishga bog‘liq bo‘lgan konseptual yechimlarni belgilashdan boshqa iloj yo‘q. Xorijiy manbalardan olingan.",
            date: "2022-10-18",
            view: 45,
            time: "12:00",
            imagePath: "https://img1.goodfon.com/original/2560x1600/8/84/peyzazhi-priroda-trava-holmy.jpg"
        },
    ]
    const [newsId, setNewsId] = useState(useParams("id"));
    const [mainNews, setMainNews] = useState(
        {
            id: '',
            description: '',
            startDate: '',
            startTime: '',
            title: '',
            view: 45,
            imagePath: '',
        });
    // const [mainNews, setmainNews] = useState();



    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Yangiliklar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Yangilik sahifasi</span>
            </p>
            <div className={styles.dashboard}>
                <div className="d-flex align-items-center">
                    <h3>Yangiliklar</h3>
                </div>
                <div className='d-flex w-30'>
                    <button className="createBtn w-10 d-flex"
                        onClick={() => props.history.push("/main/news")}
                    >
                        <span className="icon icon-back" />
                        Barchasini ko'rish
                    </button>
                </div>
            </div>
            <div className='d-flex'>
                <div className={styles.mainNews}>

                    <div className={styles.card} style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <div className={styles.newsFooter} style={{ justifyContent: 'end' }}>
                            <div className='d-flex justify-content-end'>
                                <div style={{ color: "#777B82" }}>
                                    <img src={icons} width={16} />
                                </div>
                                <div style={{ marginRight: 5, marginLeft: 5 }}>{mainNews?.time}</div>  /
                                <div>{mainNews?.date}</div>
                                <span className={`${styles.icons} icon icon-eye ml-10`}></span>
                                <div style={{ marginLeft: 5 }}>{mainNews?.view}</div>
                            </div>
                        </div>
                        <h1 style={{ marginTop: 34, fontSize: 28 }} className='font-roboto-bold'>{mainNews?.title}</h1>
                        <br />
                        <img src={mainNews?.imagePath} alt="" width={'100%'} />
                        <div>
                            <p style={{ fontSize: 16 }} dangerouslySetInnerHTML={{ __html: `${mainNews?.description}` }}></p>
                        </div>

                    </div>

                    <div />

                </div>
                <div className={styles.colNews}>
                    {
                        fakeNews.map((item, index) =>
                            <div key={index}>
                                <div className={styles.card} style={{ marginBottom: 20 }}>
                                    <div style={{ backgroundImage: `url(${item.imagePath})` }} className={styles.image}>
                                    </div>
                                    <h1 className='font-roboto-bold'>{item.title}</h1>
                                    <div>
                                        <p>Some quick example description to build on the card title and make up the bulk of the card's content.</p>
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

            </div>
            <div className='d-flex'>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}><img src={left} alt="" width={20} style={{ marginRight: 5 }} /> Oldingi </button></div>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}> Keyingi <img src={right} alt="" width={20} style={{ marginLeft: 5 }} /></button></div>
            </div>
            {/* <FooterFromPage /> */}
        </div>
    )
}
export default NewsPage
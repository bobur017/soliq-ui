import React, {useState} from 'react';
import styles from './SignIn.module.scss'
const FirstKey = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.FirstKey}>
            <div className={styles.leftPart}>
                 <h1 className="font-roboto-bold">
                     “Soliq Servis” DUK tomonidan ko’rsatilgan xizmatlar yuritish
                     axborot tizimi
                 </h1>
            </div>
            <div className={styles.rightPart}>
               <div className={styles.logo}>
                   <h3 className="font-roboto-bold ">Soliq Servis</h3>
                   <img src="./assets/icons/logo.svg" />
               </div>
                <h2 className={`${styles.enterTitle} font-roboto-bold`}>Tizimga kirish</h2>
                {
                    open
                        ?
                        <div className={styles.eriMdoal}>
                            <div className={styles.title}>
                                <h2 className="font-roboto-bold">Topilgan USB kalitlari</h2>
                                <button>
                                    <span className="icon icon-return"/>
                                </button>
                            </div>
                            <div className={styles.eriModalScroll}>
                                <div className={styles.eriMdoalContent}>
                                    <h4 className="font-roboto-bold">Xamdamov Xusniddin Mirxusan o’g’li</h4>
                                    <p className="m-0">INN: <span className="font-roboto-light">456256369</span></p>
                                    <div className="d-flex justify-content-between">
                                        <p>Sertifikat №: <span className="font-roboto-light">77a3f03b</span></p>
                                        <p>Sertifikatni amal qilish muddati: <span className="font-roboto-light">01.02.2022 - 01.02.2024</span></p>
                                    </div>
                                    <div className={styles.pin}>
                                        <div className={styles.pinInput}>
                                            <label>PIN Code <span className="withStar">*</span></label>
                                            <input type="password" />
                                        </div>
                                        <button className="font-roboto-bold">Kirish <span className="icon icon-enter"/></button>
                                    </div>
                                </div>
                                <div className={styles.eriMdoalContent}>
                                    <h4 className="font-roboto-bold">Xamdamov Xusniddin Mirxusan o’g’li</h4>
                                    <p className="m-0">INN: <span className="font-roboto-light">456256369</span></p>
                                    <div className="d-flex justify-content-between">
                                        <p>Sertifikat №: <span className="font-roboto-light">77a3f03b</span></p>
                                        <p>Sertifikatni amal qilish muddati: <span className="font-roboto-light">01.02.2022 - 01.02.2024</span></p>
                                    </div>
                                    <div className={styles.pin}>
                                        <div className={styles.pinInput}>
                                            <label>PIN Code <span className="withStar">*</span></label>
                                            <input type="password" />
                                        </div>
                                        <button className="font-roboto-bold">Kirish <span className="icon icon-enter"/></button>
                                    </div>
                                </div>
                                <div className={styles.eriMdoalContent}>
                                    <h4 className="font-roboto-bold">Xamdamov Xusniddin Mirxusan o’g’li</h4>
                                    <p className="m-0">INN: <span className="font-roboto-light">456256369</span></p>
                                    <div className="d-flex justify-content-between">
                                        <p>Sertifikat №: <span className="font-roboto-light">77a3f03b</span></p>
                                        <p>Sertifikatni amal qilish muddati: <span className="font-roboto-light">01.02.2022 - 01.02.2024</span></p>
                                    </div>
                                    <div className={styles.pin}>
                                        <div className={styles.pinInput}>
                                            <label>PIN Code <span className="withStar">*</span></label>
                                            <input type="password" />
                                        </div>
                                        <button className="font-roboto-bold">Kirish <span className="icon icon-enter"/></button>
                                    </div>
                                </div>
                                <div className={styles.eriMdoalContent}>
                                    <h4 className="font-roboto-bold">Xamdamov Xusniddin Mirxusan o’g’li</h4>
                                    <p className="m-0">INN: <span className="font-roboto-light">456256369</span></p>
                                    <div className="d-flex justify-content-between">
                                        <p>Sertifikat №: <span className="font-roboto-light">77a3f03b</span></p>
                                        <p>Sertifikatni amal qilish muddati: <span className="font-roboto-light">01.02.2022 - 01.02.2024</span></p>
                                    </div>
                                    <div className={styles.pin}>
                                        <div className={styles.pinInput}>
                                            <label>PIN Code <span className="withStar">*</span></label>
                                            <input type="password" />
                                        </div>
                                        <button className="font-roboto-bold">Kirish <span className="icon icon-enter"/></button>
                                    </div>
                                </div>
                            </div>
                            <p className={`${styles.bottomTitle} font-roboto-medium`}>
                                <label>
                                    <input type="checkbox"/>
                                    <span className={styles.fill}></span>
                                </label>
                                <span>Men</span> {" "}<a href="#!"> ma’muriyat shartlari </a><span>ni qabul qilaman</span></p>
                        </div>

                        :
                        <button onClick={() => setOpen(!open)} className={`${styles.mainButton} font-roboto-bold`}>
                            <span className="icon icon-usb" />
                            USB Token orqali kirish
                        </button>
                }

                <img className={styles.rightBackFon}   src="./assets/rightBackFon.png"/>


            </div>
        </div>
    );
};

export default FirstKey;
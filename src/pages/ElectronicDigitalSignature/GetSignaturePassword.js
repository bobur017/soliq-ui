import React, {useState}  from 'react';
import styles from './ElectronicDigitalSignature.module.scss'
import Select from "react-select";
const GetSignaturePassword = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={styles.GetSignaturePassword}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Elektron raqamli imzo muddatini uzaytirib berishga ariza jo’natishatish</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Elektron raqamli imzo parolini olish
                </h3>
            </div>
            <div className={`${styles.forBottom} upBox justify-content-center d-flex`}>
                <div className="inputs m-0 w-50 ">
                    <label>ERI kalitini tanlash  <span className="withStar">*</span></label>
                    <Select className={styles.select} options={options} placeholder="-"/>
                </div>
                <div className={styles.footerBtn}>
                    <button className={styles.back}>
                        <span className="icon icon-arrow-left" />
                        Ortga qaytish
                    </button>
                    <button className={styles.save}  onClick={toggleModal}>
                        Davom etish
                        <span className="icon icon-arrow-left" />
                    </button>
                </div>
            </div>
            <div  className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModal}`}>
                <button className={styles.closeBtn} onClick={toggleModal}> <span className="icon icon-close" /></button>
                    <img src="/assets/birdcircle.png" alt=""/>
                    <h2 className="font-roboto-bold">Parol +998******3133 raqamiga yuborildi!</h2>
            </div>
        </div>
    );
};

export default GetSignaturePassword;
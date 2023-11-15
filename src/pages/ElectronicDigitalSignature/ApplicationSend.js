import React, {useState} from 'react';
import styles from "./ElectronicDigitalSignature.module.scss";
import Select from "react-select";

const ApplicationSend = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [userPassword, setUserPassword] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const toggleModalSecond = () => {
        setIsOpen2(!isOpen2)
    }
    const success = () => {
        setIsOpen2(true)
        setIsOpen(false)
        setTimeout(() =>setIsOpen2(false), 5000);
    }

    const options = [
        { value: '12', label: '1' },
        { value: '24', label: '2' },
        { value: '36', label: '2' }
    ]
    return (
        <div className={styles.YurTaxView}>
            <div className="d-flex justify-content-center align-items-center">
                 <Select options={options} className="select-sm" placeholder="PDF" />
                <button className={`${styles.uploadBtn}  font-roboto-bold ml-10 mr-20`} >
                    <span className="icon icon-upload font-roboto-bold"/>
                    PDF Yuklab olish
                </button>
                <button className={`${styles.printBtn} font-roboto-bold`}>
                    <span className={` icon icon-print`}/>
                    Chop etish
                </button>
            </div>

            <div className={styles.mainPdfReader}>
                <embed frameBorder="0" src="/assets/MyHome.pdf#toolbar=0&scrollbar=0"   type="application/pdf" width="640"
                       height="600"/>


                <div className="btnGroup">
                    <button className="closeBtn mr-30 font-roboto-bold">
                        <span className="icon icon-arrow-left"/>
                        Orqaga
                    </button>
                    <button onClick={toggleModal} className="paidBtn font-roboto-bold">
                        Arizani yuborish
                    </button>
                </div>

            </div>

            <div  className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModal}`}>
                <button className={styles.closeBtn} onClick={toggleModal}> <span className="icon icon-close" /></button>
                <h3 className="font-roboto-bold">Kalit paroli</h3>
                <p>
                    Ushbu fayl uchun kalit parolini kiriting:
                </p>
                <p>
                    C:\DSKEYS\DS5694099020001.pfx
                </p>

                <div className={`${styles.password} inputs w-75  `}>
                    <label htmlFor="password">Parol yarating <span className="withStar">*</span></label>
                    <input className="w-100" type={userPassword ? 'password' : 'text'} id="password"/>
                    <span onClick={() => setUserPassword(!userPassword)}
                          className={`${styles.eyeIcon} icon icon-eye-img`}/>
                </div>
                <div>
                    <button onClick={toggleModal}>Bekor qilish</button>
                    <button onClick={success}>Tasdiqlash</button>
                </div>
                <p className={styles.timeTitle}>
                    57 soniyadan so’ng operatsiya bekor qilinadi
                </p>
            </div>


            <div  className={`${isOpen2 ? "d-block" : "d-none"} ${styles.mainModalSecond}`}>
                <button className={styles.closeBtn} onClick={toggleModalSecond}> <span className="icon icon-close" /></button>
                <div className={styles.bird}>
                    <span className="icon icon-bird"/>
                    <h2 className="font-roboto-bold">Arizangiz qabul qilindi</h2>
                    <p>Arizangiz raqamingiz</p>
                    <h1 className="font-roboto-bold">469968</h1>
                    <button className="font-roboto-bold"  onClick={toggleModalSecond}>OK</button>
                </div>
            </div>

        </div>

    );
};

export default ApplicationSend;
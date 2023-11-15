import React from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss"
import Select from "react-select";
const AmendmentOfTheLeaseAgreement = (props) => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];

    return (
        <div className={styles.amendmentOfTheLeaseAgreement}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomasiga o'zgartirish kiritish</span>
            </p>
            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">Ijara shartnomasiga o'zgartirish kiritish</h3>
            </div>
            <div className={styles.amendmentOfTheLeaseAgreementContent}>
                <h2>Ijara shartnomasini o’zgartirish (shartnoma № 791584)</h2>
            <div className="d-flex">
                <div className="inputs w-100 mr-20">
                    <label >Kadastr kodi</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
                <div className="inputs w-100 mr-20">
                    <label >Hudud nomi</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
                <div className="inputs w-100 mr-20">
                    <label >Tuman nomi</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
                <div className="inputs w-100">
                    <label >Manzil</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
            </div>
            <div className="d-flex">
                <div className="inputs w-100 mr-20">
                    <label >Umumiy maydon (kv.m)</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
                <div className="inputs w-100 mr-20">
                    <label >Jami ijaraga berilgan maydon (kv.m)</label>
                    <input type="text" className="w-100"  placeholder="-" />
                </div>
                <div className="inputs w-100 mr-20">
                    <label >Ijara berilgan maydon (kv.m)</label>
                    <input type="text" className={styles.kvm1}  placeholder="-" />
                </div>
                <div className="inputs w-100">
                    <label >Bo’sh maydon (kv.m)</label>
                    <input type="text" className={styles.kvm2}  placeholder="-" />
                </div>
            </div>
                <h2>O’zgartirilayotgan maydon</h2>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >Ijara sanasini boshlamishi</label>
                        <input type="date" className="w-100"  placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Ijara sanasini tugashi</label>
                        <input type="date" className="w-100"  placeholder="-" />
                    </div>
                    <div className="inputs w-100">
                        <label >Ijara beriladigan maydon</label>
                        <input type="text" className="w-100"  placeholder="-" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20  z-index-main">
                        <label>Hudud nomi</label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Bir oylik to’lovlar</label>
                        <input type="text" className="w-100"  placeholder="-" />
                    </div>
                    <div className="inputs w-100">
                        <label >To’lovning umumiy summasi</label>
                        <input type="text" className="w-100"  placeholder="-" />
                    </div>
                </div>
                <div className={styles.residentialAddress3}>
                    <input type="checkbox" id="residentialAddress1"  />
                    <h2>Yashash manzili</h2>
                </div>
                <div className={styles.forComment}>
                    <label >Izoh</label>
                    <textarea >

                    </textarea>
                </div>
                <div className={styles.btnGroup}>
                    <button className={styles.backBtn} onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement/info")}>
                        <span className="icon icon-arrow-left" />
                        Ortga qaytish
                    </button>
                    <button className={styles.paidBtn}>
                        Tasdiqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AmendmentOfTheLeaseAgreement;

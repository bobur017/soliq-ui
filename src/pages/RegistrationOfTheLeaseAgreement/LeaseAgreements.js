import React from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss"
import Select from "react-select";

const LeaseAgreements = (props) => {
    const options = [
        { value: 'pdf', label: 'PDF' },
        // { value: 'word', label: 'Word' },
    ];
    return (
        <div className={styles.leaseAgreements}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Shartnoma sahifasi</span>
            </p>


            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Shartnoma sahifasi
                </h3>
            </div>
            <div className={styles.leaseAgreementsContent}>
                <div className={styles.viewPdf}>
                    <div className={styles.pdfHeader}>
                        <div className={styles.btnUpload2}>

                            <Select options={options} defaultValue={options[0]} placeholder="-" className="select-sm"/>
                            <button>
                                <span className="icon icon-upload"/>
                                Yuklab olish
                            </button>
                            <button>
                                <span className="icon icon-print"/>
                                Chop etish
                            </button>
                        </div>
                        <embed frameBorder="0" src="/assets/MyHome.pdf#toolbar=0&scrollbar=0" className="mr-20"
                               type="application/pdf" width="640" height="600"/>

                    </div>
                </div>
                <div className={styles.fileHistory}>
                    <h2>Hujjat tarixi</h2>
                    <p>16.06.2022 15:51:46</p>
                    <div>
                        <div className={styles.gray}></div>
                        <span>Yuborilgan</span>
                    </div>
                    <img src="/assets/Line7.png"/>
                    <p>16.06.2022 15:51:46</p>
                    <div>
                        <div className={styles.green}></div>
                        <span>Tasdiqlangan</span>
                    </div>
                    <img src="/assets/Line7.png"/>

                    <p>16.06.2022 15:51:46</p>
                    <div>
                        <div className={styles.white}></div>
                        <span>Bekor qilish uchun yuborilgan</span>
                    </div>
                    <img src="/assets/Line7.png"/>

                    <p>16.06.2022 15:51:46</p>
                    <div>
                        <div className={styles.red}></div>
                        <span>Rad qilingan</span>
                    </div>
                </div>

                <div className={styles.btnGroup}>
                    <button className={styles.backBtn}
                            onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement")}>
                        <span className="icon icon-arrow-left"/>
                        Ortga qaytish
                    </button>
                    <button className={styles.paidBtn}
                            onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement/edit")}>
                        <span className="icon icon-edit-btn"/>
                        Tahrirlash
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LeaseAgreements;

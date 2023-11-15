import React from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss"
import Select from "react-select";
import GetInfo from "../../component/GetInfo";
const LeaseAgreements2 = () => {
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
            </p>
            {/*<div className="titleBox">*/}
            {/*    <h3 className="titleMain font-roboto-bold">*/}
            {/*        Ijara shartnomalari*/}
            {/*    </h3>*/}
            {/*</div>*/}
            <GetInfo type={"IJSH4"} />
            <div className={styles.leaseAgreementsContent}>
                <div className={styles.viewPdf}>

                    <div className={styles.btnUpload2}>

                            <Select options={options} defaultValue={options[0]} placeholder="-" />
                            <button>
                                <span className="icon icon-upload"/>
                                Yuklab olish
                            </button>
                        <button>
                            <span className="icon icon-print"/>
                            Chop etish
                        </button>
                    </div>
                    <div className={styles.pdfHeader}>
                        {/*<div className={styles.header}>*/}
                        {/*    <p>*/}
                        {/*        Shartnoma <span>№791584</span>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <div>*/}

                        {/*        </div>*/}
                        {/*        Tasdiqlanishi kutilayotgan*/}
                        {/*        <button>*/}
                        {/*            <span className="icon icon-target-pdf"></span>*/}
                        {/*        </button>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <embed frameBorder="0" src= "/assets/MyHome.pdf#toolbar=0&scrollbar=0"  className="mr-20" type="application/pdf" width= "640" height= "600" />

                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <button className={styles.paidBtn}>
                        <span className="icon icon-payment" />
                        To'lovga o'tish
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LeaseAgreements2;

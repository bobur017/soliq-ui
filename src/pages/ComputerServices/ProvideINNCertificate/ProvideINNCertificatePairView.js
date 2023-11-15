import React from 'react';
import styles from "./ProvideINNCertificate.module.scss";
import Select from "react-select";

const ProvideInnCertificatePairView = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.provideInnCertificatePair}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>INN sertifikat taqdim etish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        INN sertifikat taqdim etish
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label >Hujjat turi:</label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Pasport seriyasi va Raqami<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Eʼlon qilingan sana <span className="withStar">*</span></label>
                        <input type="date" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.uploadBtn}>
                        <button className="font-roboto-bold">
                            <span className="icon icon-upload" />
                            PDF
                        </button>
                        <button className="font-roboto-bold">
                            <span className="icon icon-eye" />
                            Ko'rish
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProvideInnCertificatePairView;

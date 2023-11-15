import React from 'react';
import styles from "./ProvideINNCertificate.module.scss"
import Select from "react-select";
const ProvideINNCertificatePair = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className={styles.provideInnCertificatePair}>
            {/*<h2 className="page-main-title">ИНН сертификат тақдим етиш</h2>*/}
            {/*<div className="d-flex">*/}
            {/*    <div className="w-100 pr-20">*/}
            {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Вид документа<span*/}
            {/*            className="withStar">*</span></label>*/}
            {/*        <Select className={`${styles.p20} custom-select`} placeholder="Вид документа" options={options} />*/}
            {/*    </div>*/}
            {/*    <div className={` w-100 leftInput`}>*/}
            {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="passportSeria">Паспорт серияси ва номери<span*/}
            {/*            className="withStar">*</span></label>*/}
            {/*        <input type="text" id="passportSeria" className="input-style font-roboto-light w-100"*/}
            {/*               placeholder="АА 1234567" />*/}
            {/*        <button className="input-clear-btn">*/}
            {/*            <span className="icon icon-input-clear" />*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    <div className={` w-100 leftInput`}>*/}
            {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="date">Тугилган сана<span*/}
            {/*            className="withStar">*</span></label>*/}
            {/*        <input type="date" id="date" className="input-style font-roboto-light w-100"/>*/}
            {/*    </div>*/}
            {/*    <div className={"mt-auto ml-auto rightBtn"}>*/}
            {/*        <button className="main-btn font-roboto-regular " onClick={() => props.history.push("/main/provide/register-modify-data")}>*/}
            {/*            <span className="icon icon-search"/>*/}
            {/*            Излаш*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="info-box">*/}
            {/*    <h2 className="font-roboto-bold">ИНН сертификат</h2>*/}
            {/*    <div className=" viewDownload d-flex w-100">*/}
            {/*        <button className="viewBtn w-100"><span className="icon icon-eye" />Курсатиш</button>*/}
            {/*        <button className="pdfBtn w-100"><span className="icon icon-download" />PDF юклаб олиш</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>STIR yoki JShShIR taqdim etish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        STIR yoki JShShIR taqdim etish
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main mt-0">
                        <label >Hujjat turi:</label>
                        <Select options={options} placeholder="-" />
                    </div>

                    <div className="inputs w-100 mr-20 mt-0">
                        <label >Pasport seriyasi va Raqami<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mt-0">
                        <label >Eʼlon qilingan sana <span className="withStar">*</span></label>
                        <input type="date" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>

                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        Hujjatni shaklantirish
                    </button>
                </div>
            </div>

        </div>

    );
};

export default ProvideINNCertificatePair;

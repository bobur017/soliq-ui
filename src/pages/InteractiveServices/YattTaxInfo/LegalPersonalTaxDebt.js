import React from 'react';
import styles from './YattTaxInfo.module.scss'
import axios from "axios";
import GetInfo from '../../../component/GetInfo';
import {toast} from "react-toastify";

const LegalPersonalTaxDebt = (props) => {
    axios.defaults.withCredentials = true;

    return (
        <div className={styles.legalPersonalTaxDebt}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yakka tartibdagi tadbirkorlarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</span>
            </p>

            <GetInfo type={'YTT'}/>

            {props.selectedRegionDocument?"":<div className={styles.forms}>
                <form onSubmit={props.submit}>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="w-100 inputs mr-20">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">
                                    INN yoki PINFL kiriting<span className="withStar">*</span>
                                </label>
                                <div className="d-flex">
                                    <input type="text" name="inn" id="innInput"
                                           className="input-style font-roboto-light w-100"
                                           onChange={(e) => {
                                               props.setInfo(null);
                                               props.setTaxInfo(null)
                                           }}/>
                                    <button type="submit">
                                        <span className="icon icon-search"/>
                                    </button>
                                </div>

                            </div>
                            <div className="w-100 inputs">
                                <label htmlFor="name" className="labels font-roboto-regular inputLabel">
                                    Yakka tartibdagi tadbirkor nomi <span
                                    className="withStar">*</span>
                                </label>
                                <input type="text" id="name" disabled
                                       className="input-style font-roboto-light w-100"
                                       value={props.info ? (props.info.surName + " " + props.info.firstName + " " + props.info.middleName) : ""}/>
                            </div>


                        </div>

                    </div>

                </form>
            </div>}




           {/* <h1 className={"font-roboto-bold title-services "}>ЯТТлар солик карзи мавжуд эмаслиги</h1>
            <form onSubmit={submit} noValidate>
                <div className="d-flex">
                    <div className="d-flex w-100">
                        <div className="w-100 leftInput">
                            <label className="labels font-roboto-regular inputLabel" htmlFor="inn">ИНН еки ПИНФЛ киритинг <span
                                className="withStar">*</span></label>
                            <input type="text" required className="input-style font-roboto-light w-100"
                                   placeholder="xxx xxx xxx xxx xx"  onChange={(e) => props.updateState({inn: e.target.value})}/>
                            <button className="input-clear-btn">
                                <span className="icon icon-input-clear" />
                            </button>
                        </div>
                        <div className="w-100 leftInput">
                            <label htmlFor="yurPersonName" className="labels font-roboto-regular inputLabel">
                                ЯТТ номи
                            </label>
                            <input type="text" id="yurPersonName" disabled={true} className="input-style font-roboto-light w-100" value={props.yattInfo ? props.yattInfo?.surName + " " + props.yattInfo?.firstName + " " + props.yattInfo?.middleName : ""}/>
                        </div>
                    </div>
                    <div className={"mt-auto rightBtn"}>
                        <button className="main-btn font-roboto-regular " type="submit">
                            <span className="icon icon-search"/>
                            Излаш
                        </button>
                    </div>
                </div>
            </form>*/}
        </div>
    );
};


export default LegalPersonalTaxDebt;

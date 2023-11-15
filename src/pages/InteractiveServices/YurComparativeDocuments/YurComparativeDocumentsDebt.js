import React from 'react';
import styles from "./YurComparativeDocuments.module.scss";
import {getYurInfo, updateState} from "../../../redux/actions/yurTaxInfoAction";
import {connect} from "react-redux";
import GetInfo from '../../../component/GetInfo';

const YurComparativeDocumentsDebt = (props) => {

    return (
        <div className={styles.yurComparativeDocumentsDebt}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yuridik shaxslarning solishtirma dalolatnomalari</span>
            </p>

            <GetInfo type={'YURShD'}/>

            {!props.show &&
                <div className={styles.forms}>
                    <h1 className="font-roboto-bold m-0">Yuridik shaxs to’g’risida ma'lumotlar</h1>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="w-100 inputs mr-20">
                                <form onSubmit={props.submit}>
                                    <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">
                                        INN kiriting <span className="withStar">*</span></label>
                                    <div className="d-flex">
                                        <input type="text" id="innInput" className={`${styles.loupe}  font-roboto-light w-100`}
                                               onChange={(e) => {
                                                   props.setInn(e.target.value);
                                                   props.setInfo(null);
                                                   props.setRegions(null)
                                               }} name="inn"/>
                                        <button type="submit">
                                            <span className="icon icon-search"/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-100 inputs">
                                <label htmlFor="fullName" className="labels font-roboto-regular inputLabel">
                                    Yuridik shaxsning nomi
                                </label>
                                <input type="text" id="fullName" className="font-roboto-light w-100" disabled value={props.info? props.info.name : ""}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="w-100 inputs mr-20">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="address">
                                    Ro'yxatga olingan hudud nomi </label>
                                <div className="d-flex">
                                    <input type="text" id="address" className="  font-roboto-light w-100"
                                           disabled value={props.info? props.info.ns10Name : ""}/>
                                </div>
                            </div>
                            <div className="w-100 inputs">
                                <label htmlFor="region" className="labels font-roboto-regular inputLabel">
                                    Ro'yxatga olingan tuman/shahar nomi
                                </label>
                                <input type="text" id="region" className="  font-roboto-light w-100" disabled value={props.info? props.info.ns11Name : ""}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default YurComparativeDocumentsDebt;

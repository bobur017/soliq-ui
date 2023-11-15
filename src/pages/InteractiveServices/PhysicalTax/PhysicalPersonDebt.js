import React from 'react';
import styles from "./PhysicalPerson.module.scss";
import {updateState} from "../../../redux/actions/physicTaxInfoAction";
import {connect} from "react-redux";
import GetInfo from '../../../component/GetInfo';
import {getPhysicInfo} from "../../../utils/request";

const PhysicalPersonDebt = (props) => {
    return (

        <div className={styles.physicalPerson}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Jismoniy shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</span>
            </p>
            <GetInfo type={'JSh'}/>
            {props.download?"":<div className={styles.forms}>
                <h1 className="font-roboto-bold">Jismoniy shaxs to’g’risida malumot</h1>
                <form onSubmit={props.submit}>
                    <div className="d-flex">
                        <div className="d-flex inputs w-100">
                            <div className="w-100 mr-20 ">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">
                                    INN yoki PINFL kiriting <span className="withStar">*</span>
                                </label>
                                <div className="d-flex">
                                    <input type="text" id="innInput" placeholder="-" name="tin" className={`${styles.loupe} font-roboto-light w-100`} onChange={() => {props.setInfo(null); props.setTaxInfo(null)}}/>
                                    <button type="submit">
                                        <span className="icon icon-search"/>
                                    </button>
                                </div>
                            </div>
                            <div className="w-100  ">
                                <label htmlFor="fullName" className="labels font-roboto-regular inputLabel">
                                    F.I.SH
                                </label>
                                <input type="text" id="fullName" placeholder="-"
                                       className="  font-roboto-light w-100" disabled value={props.info ? (props.info.surName + " " + props.info.firstName + " " + props.info.middleName) : ""}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex ">
                        <div className="d-flex w-100">
                            <div className="w-100 inputs mr-20">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="address">
                                    Doimiy yashash hududining nomi </label>
                                <div className="d-flex">
                                    <input type="text" id="address" placeholder="-"
                                           className="  font-roboto-light w-100" disabled  value={props.info? props.info.ns10Name : ""}/>
                                </div>

                            </div>
                            <div className="w-100 inputs ">
                                <label htmlFor="region" className="labels font-roboto-regular inputLabel">
                                    Doimiy yashaydigan tuman/shahar nomi
                                </label>
                                <input type="text" id="region"  placeholder="-"
                                       className="  font-roboto-light w-100" value={props.info? props.info.ns11Name : ""} disabled/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            }
        </div>
    );
};
export default PhysicalPersonDebt;

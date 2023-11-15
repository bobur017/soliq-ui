/**
 * Created by Watson on 04.05.2022.
 */
import React from 'react';
import styles from './YurTaxInfo.module.scss';
import { connect } from 'react-redux';
import { getYurInfo, updateState } from '../../../redux/actions/yurTaxInfoAction';
import axios from 'axios';
import GetInfo from '../../../component/GetInfo';
import {toast} from "react-toastify";

const YurTaxDebt = (props) => {
    axios.defaults.withCredentials = true;

    const submit = (e) => {
        e.preventDefault();

        if (props.inn.length === 9) {
            props.getYurInfo(props.inn);
        } else {
            toast.error("STIR noto'g'ri kiritilgan")
        }
    };
    return (
        <div className={styles.yurTaxInfo}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yuridik shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</span>
            </p>
            <GetInfo type={'YSh'}/>

            {props.selectedRegionDocument?"":<div className={styles.forms}>
                <form onSubmit={submit}>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="w-100 inputs mr-20">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">INN  tering <span
                                        className="withStar">*</span></label>
                                <div className="d-flex">
                                    <input type="text" id="innInput" className="input-style font-roboto-light w-100"
                                           onChange={(e) => props.updateState({
                                               inn: e.target.value,
                                               yurInfo: null,
                                               selectedRegionDocument:undefined,
                                               taxObjects: [],
                                               repoFiles: {},
                                           })}/>
                                    <button>
                                        <span className="icon icon-search"/>
                                    </button>
                                </div>

                            </div>
                            <div className="w-100 inputs">
                                <label htmlFor="yattName" className="labels font-roboto-regular inputLabel">
                                    Yuridik shaxsning nomi
                                </label>
                                <input type="text" id="yattName"
                                       disabled
                                       className="input-style font-roboto-light w-100"
                                       value={props.yurInfo ? props.yurInfo?.name : ''}/>
                            </div>
                        </div>

                    </div>
                </form>
            </div>}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        inn: state.yur.inn,
        yurInfo: state.yur.yurInfo,
        selectedRegionDocument: state.yur.selectedRegionDocument
    };
};

export default connect(mapStateToProps, { getYurInfo, updateState })(YurTaxDebt);

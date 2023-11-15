import React from 'react';
import styles from "./PinflStirAttach.module.scss"
import Select from "react-select";
import GetInfo from "../../../component/GetInfo";
const PinflStirAttachDebt = () => {
    return (
        <div className={styles.pinflStirAttachDebt}>
            {/*<h2>ПИНФЛни СТИРга бириктириш</h2>*/}

            {/*<div className="d-flex">*/}
            {/*    <div className="d-flex w-100">*/}
            {/*        <div className="w-50 leftInput">*/}
            {/*            <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">ПИНФЛ/ИНН теринг<span*/}
            {/*                className="withStar">*</span></label>*/}
            {/*            <input type="text" id="innpinflinput" className="input-style font-roboto-light w-100"*/}
            {/*                   placeholder="xxx xxx xxx xxx xx" />*/}
            {/*            <button className="input-clear-btn">*/}
            {/*                <span className="icon icon-input-clear" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-auto rightBtn"}>*/}
            {/*            <button className="main-btn font-roboto-regular ">*/}
            {/*                <span className="icon icon-search"/>*/}
            {/*                Излаш*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>STIR yoki JShShIR kiriting *</span>
            </p>

            <GetInfo type={'pinflStirAttach'}/>

            <div className="upBox">
                <div className="w-100">
                    <label className="labels font-roboto-regular inputLabel" >INN
                        tering <span
                            className="withStar">*</span></label>
                    <div className="d-flex">
                        <input type="text"  className="input-style font-roboto-light w-33"/>
                        <button className={styles.searchBtn}>
                            <span className="icon icon-search"/>
                        </button>
                    </div>

                </div>
            </div>
            </div>
    );
};

export default PinflStirAttachDebt;

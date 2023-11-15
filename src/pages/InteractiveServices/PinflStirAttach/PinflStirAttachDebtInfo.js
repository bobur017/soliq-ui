import React from 'react';
import styles from './PinflStirAttach.module.scss'
import Select from "react-select";
const PinflStirAttachDebtInfo = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={`${styles.pinflStirAttachDebtInfo}`}>
            {/*<h2 className="font-roboto-bold">Сўров натижаси</h2>*/}
            {/*<div className="d-flex">*/}
            {/*    <div className="inputMarginBottom w-100 leftInput">*/}
            {/*        <label className="labels font-roboto-regular inputLabel" >ПИНФЛ<span*/}
            {/*            className="withStar">*</span></label>*/}
            {/*        <input type="text" className="input-style font-roboto-light w-100"*/}
            {/*               placeholder="xxx xxx xxx" />*/}
            {/*        <button className="input-clear-btn">*/}
            {/*            <span className="icon icon-input-clear" />*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <div className="inputMarginBottom w-100 leftInput p-0">*/}
            {/*        <label className="labels font-roboto-regular inputLabel" >ИНН<span*/}
            {/*            className="withStar">*</span></label>*/}
            {/*        <input type="text" className="input-style font-roboto-light w-100"*/}
            {/*               placeholder="xxx xxx xxx" />*/}
            {/*        <button className="input-clear-btn">*/}
            {/*            <span className="icon icon-input-clear" />*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="d-flex inputMarginBottom">*/}
            {/*    <div className="w-100 leftInput">*/}
            {/*        <label htmlFor="fio" className="labels font-roboto-regular inputLabel">*/}
            {/*            Ф.И.О*/}
            {/*        </label>*/}
            {/*        <input id="fio" type="text" disabled={true} className="input-style font-roboto-light w-100"/>*/}
            {/*    </div>*/}
            {/*    <div className={"w-100 leftInput p-0"}>*/}
            {/*        <label htmlFor="city" className="labels font-roboto-regular inputLabel">*/}
            {/*            Вилоят*/}
            {/*        </label>*/}
            {/*        <input id="city" type="text" disabled={true} className="input-style font-roboto-light w-100"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="d-flex inputMarginBottom">*/}
            {/*    <div className="w-100 leftInput">*/}
            {/*        <label htmlFor="address" className="labels font-roboto-regular inputLabel">*/}
            {/*            Манзил*/}
            {/*        </label>*/}
            {/*        <input id="address" type="text" disabled={true} className="input-style font-roboto-light w-100"/>*/}
            {/*    </div>*/}
            {/*    <div className={"w-100 leftInput p-0"}>*/}
            {/*        <label htmlFor="region" className="labels font-roboto-regular inputLabel">*/}
            {/*            Туман*/}
            {/*        </label>*/}
            {/*        <input id="region" type="text" disabled={true} className="input-style font-roboto-light w-100"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="d-flex w-100 justify-content-end">*/}
            {/*    <div className=" rightBtn">*/}
            {/*        <button className="main-btn font-roboto-regular ">*/}
            {/*            Саклаш*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="upBox">
                <h2 className="font-roboto-bold">So'rov natijasi</h2>
                <div className="d-flex">
                    <div className="inputs w-75 mr-20">
                        <label >PINFL <span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-75 mr-20">
                        <label >INN <span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100">
                        <label >F.I.O</label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="d-flex">

                    <div className="inputs w-75 mr-20 z-index-main">
                        <label >Viloyat </label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-75 mr-20 z-index-main">
                        <label >Tuman </label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100">
                        <label >Manzil </label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-bird" />
                        Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PinflStirAttachDebtInfo;

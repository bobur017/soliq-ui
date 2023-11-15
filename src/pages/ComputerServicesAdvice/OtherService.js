import React from 'react';
import styles from "./ComputerServicesAdvice.module.scss"
import Select from "react-select";
const OtherService = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={styles.yurAndPhysicalAppeal}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>O’tkazilgan o’quv kurslari va seminarlar</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                       Boshqa xizmatlar
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-auto">
                        <label >Xizmat turi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>

                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Bajarilgan ish <span className="withStar">*</span></label>
                        <input type="text"  className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-33 mr-20">
                        <label >Narxi<span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.plusBtn}>
                        <button><span className="icon icon-plus-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-auto">
                        <label >Xizmat turi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>

                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Bajarilgan ish <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-33 mr-20">
                        <label >Narxi<span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.deleteBtn}>
                        <button><span className="icon icon-delete-btn"/></button>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-coin" />
                        To'lovga o'tish
                    </button>
                </div>
            </div>

        </div>

    );
};

export default OtherService;

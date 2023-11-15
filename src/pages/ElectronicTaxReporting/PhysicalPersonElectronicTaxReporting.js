import React from 'react';
import styles from "./ElectronicTaxReporting.module.scss"
import Select from "react-select";

const PhysicalPersonElectronicTaxReporting = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={styles.physicalPersonElectronicTaxReporting}>

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>JSH jami yillik daromadi to’g’risidagi deklaratsiyani tuzish va elektron shaklga o’tkazib soliq organlariga yuborish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        JSH jami yillik daromadi to’g’risidagi deklaratsiyani tuzish va elektron shaklga o’tkazib soliq organlariga yuborish
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >INN kiriting<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Jismoniy shaxsning F.I.O</label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-50 mr-20 z-index-main">
                        <label >Daromat davri <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>

                    <div className="inputs w-50 mr-20">
                        <label >Eʼlon qilingan sana <span className="withStar">*</span></label>
                        <input type="date" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.plusBtn}>
                        <button><span className="icon icon-plus-btn"/></button>
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

export default PhysicalPersonElectronicTaxReporting;

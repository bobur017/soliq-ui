import React from 'react';
import styles from "./ComputerServicesAdvice.module.scss"
import Select from "react-select";
const TrainingSeminars = () => {
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
                        O’tkazilgan o’quv kurslari va seminarlar
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >O’tkazilgan tadbir turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >O'tkazilgan joy manzili <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Qatnashgan solik tulovchilar soni <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.plusBtn}>
                        <button><span className="icon icon-plus-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >O’tkazilgan tadbir turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >O'tkazilgan joy manzili <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Qatnashgan solik tulovchilar soni <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.deleteBtn}>
                        <button><span className="icon icon-delete-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >O’tkazilgan tadbir turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >O'tkazilgan joy manzili <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Qatnashgan solik tulovchilar soni <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.deleteBtn}>
                        <button><span className="icon icon-delete-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >O’tkazilgan tadbir turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >O'tkazilgan joy manzili <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Qatnashgan solik tulovchilar soni <span className="withStar">*</span></label>
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

export default TrainingSeminars;

import React from 'react';
import styles from "./ComputerServicesAdvice.module.scss"
import Select from "react-select";
const IssuesMedia = () => {
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
                <span>Ommaviy axborot vositalarida chiqarish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        Ommaviy axborot vositalarida chiqarish
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >OAV turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Omaviy axborot vositalarni nomi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Eshittirish, kursatuv yoki efir nomi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.plusBtn}>
                        <button><span className="icon icon-plus-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >OAV turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Omaviy axborot vositalarni nomi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Eshittirish, kursatuv yoki efir nomi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className={styles.deleteBtn}>
                        <button><span className="icon icon-delete-btn"/></button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-50 mr-20 z-index-auto">
                        <label >OAV turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Omaviy axborot vositalarni nomi <span className="withStar">*</span></label>
                        <input type="text" className="w-100  font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Eshittirish, kursatuv yoki efir nomi <span className="withStar">*</span></label>
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

export default IssuesMedia;

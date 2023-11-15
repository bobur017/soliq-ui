import React from 'react';
import styles from "./SelfEmployment.module.scss"
import Select from "react-select";
const SelfEmploymentSearch = () => {
    return (
        <div className={styles.SelfEmploymentSearch}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yonlangan xodimlarni ro’yxatdan o’tkazish</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Yonlangan xodimlarni ro’yxatdan o’tkazish
                </h3>
            </div>
            <div className="upBox">
                <div className="d-flex justify-content-center">
                    <div className={styles.inputs}>
                        <label >JShShIR ni kiriting <span className="withStar ">*</span></label>
                        <div className="d-flex">
                            <input type="text" placeholder="-"  className="input-style font-roboto-light w-100"  />
                        </div>
                        <div className={styles.footerBtn}>
                            <button className={styles.back}>
                                <span className="icon icon-back"/>
                                Ortga
                            </button>
                            <button className={styles.save}  >
                                <span className="icon icon-search"/>
                                Qidirish
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SelfEmploymentSearch;

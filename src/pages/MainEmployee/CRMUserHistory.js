import React, { useState } from 'react';
import styles from "./MainEmployee.module.scss"
const CrmUserHistory = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.CRMUserHistory}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>CRM Mijozlar tarixi</span>

            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        CRM foydalanuvchilar tarixi
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <div className="w-100">
                    <label className="labels font-roboto-regular inputLabel" >PINFL/INN tering<span
                        className="withStar">*</span></label>
                    <div className="d-flex">
                        <input type="text" className="input-style font-roboto-light w-100" />
                        <button className={styles.searchBtn}>
                            <span className="icon icon-search" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CrmUserHistory;

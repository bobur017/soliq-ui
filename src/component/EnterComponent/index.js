import React from 'react';
import styles from "./EnterComponent.module.scss";
const EnterComponent = (props) => {
    return (
        <div className={`upBox ${styles.enterComponent}`}>
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
                        <button className={styles.save} >
                            <span className="icon icon-search"/>
                            Qidirish
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default EnterComponent;
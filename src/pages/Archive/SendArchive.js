import React from 'react';
import styles from "./Archive.module.scss"

const SendArchive = () => {
    return (
        <div className={styles.sendArchive}>
            <div className={styles.tableHeader}>
                <div className={`${styles.sendArchiveHeader1} w-50 mr-20`}>ID</div>
                <div className={`${styles.sendArchiveHeader2} w-50 mr-20`}>Сертификати</div>
                <div className={`${styles.sendArchiveHeader3} w-50 mr-20`}>СТИР</div>
                <div className={`${styles.sendArchiveHeader4} w-50 mr-20`}>Вилоят</div>
                <div className={`${styles.sendArchiveHeader5} w-50 mr-20`}>Туман</div>
                <div className={`${styles.sendArchiveHeader6} w-100 mr-20`}>Яратилган вахти</div>
                <div className={`${styles.sendArchiveHeader7} w-100`}>
                    <div className={`${styles.terminationBtn} d-flex w-100`}>
                        <button className="w-100">
                            <span className="icon icon-add"></span>
                        </button>
                        <button className="w-100">
                            <span className="icon icon-download"></span>
                        </button>
                        <button className="w-100">
                            <span className="icon icon-return"></span>
                        </button>
                    </div>
                </div>

            </div>
            <div className={styles.tableSearch}>
                <div className="w-50 mr-20">
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="xxxx"/>
                </div>
                <div className="w-50 mr-20">
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="xxxx"/>
                </div>
                <div className="w-50 mr-20">
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="ххх ххх ххх"/>
                </div>
                <div className="w-50 mr-20">
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="xx"/>
                </div>
                <div className="w-50 mr-20">
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="xx"/>
                </div>
                <div className="w-100 mr-20">
                    <input type="date"  className="input-style font-roboto-light w-100  " placeholder="xxxx"/>
                </div>
                <button className="w-100">
                   Кидирув
                </button>
            </div>
            <div className={styles.tableBodytableBody}>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>15</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123 456 789</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>12</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>5</div>
                <div className={`${styles.sendArchiveBody} w-100 mr-20`}>12.12.2020</div>
                <div className={`${styles.sendArchiveBody} w-100`}>
                    <div className={styles.terminationBtn}>
                         <span className="icon icon-bird"></span>
                    </div>
                </div>
            </div>
            <div className={styles.tableBodytableBody}>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>15</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123 456 789</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>12</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>5</div>
                <div className={`${styles.sendArchiveBody} w-100 mr-20`}>12.12.2020</div>
                <div className={`${styles.sendArchiveBody} w-100`}>
                    <div className={styles.terminationBtn}>
                         <span className="icon icon-bird"></span>
                    </div>
                </div>
            </div>
            <div className={styles.tableBodytableBody}>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>15</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>123 456 789</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>12</div>
                <div className={`${styles.sendArchiveBody} w-50 mr-20`}>5</div>
                <div className={`${styles.sendArchiveBody} w-100 mr-20`}>12.12.2020</div>
                <button className={`${styles.sendArchiveBody} w-100`}>
                    Юбориш
                </button>
            </div>
        </div>
    );
};

export default SendArchive;

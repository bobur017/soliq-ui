import React from 'react';
import styles from "./ControlPanel.module.scss";
import Select from "react-select";

const AnswerMessage = () => {
    return (
        <div className={styles.IncomingMessages}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yuborilgan xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Javob yozish</span>
            </p>
            <div className={styles.sendAnswer}>
                <div className={`${styles.leftPair} w-100`}>
                    <h3 className="font-roboto-bold">
                        Javob yozish
                    </h3>
                    <div className="inputs w-100  ">
                        <label >Sarlavha<span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100  ">
                        <label >Matn<span className="withStar">*</span></label>
                        <textarea type="text" className="w-100"  placeholder="-"/>
                    </div>
                    <div className={styles.fileFormats}>
                        <label htmlFor="forFile12" className={styles.forFileLabel}>Fayl yuklash</label>
                        <input type="file" id="forFile12" className={styles.forFile}/>
                        <div>
                            <span className="icon icon-close"/>
                            PDF
                        </div>
                        <div>
                            <span className="icon icon-close"/>
                            PDF
                        </div>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="closeBtn font-roboto-bold mr-20">
                        <span className="icon icon-close" />
                        Bekor qilish
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-bird" />
                        Yuborish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnswerMessage;

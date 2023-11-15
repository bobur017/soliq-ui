import React from 'react';
import styles from "./ControlPanel.module.scss";
import Select from "react-select";

const SendMessage = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.IncomingMessages}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yuborilgan xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar jo’natish</span>
            </p>
            <div className={styles.sendMessage}>
                <div className={styles.leftPair}>
                    <h3 className="font-roboto-bold">
                        Xabarlar jonatish
                    </h3>
                    <div className="inputs w-100 mr-20">
                        <label >Sarlavha<span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
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
                <div className={styles.rightPair}>
                    <h3 className="font-roboto-bold">
                        Qabul qiluvchi malumotlari
                    </h3>

                    <div className="inputs w-100  ">
                        <label >F.I.O yoki Inn kiriting</label>
                        <input type="text" className="w-100"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100  ">
                        <label >Viloyat<span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" className={styles.month}/>

                    </div>
                    <div className="inputs w-100  ">
                        <label >Tuman<span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" className={styles.month}/>

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
        </div>
    );
};

export default SendMessage;

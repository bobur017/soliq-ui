import React from 'react';
import styles from './HiredStaff.module.scss'
import Select from "react-select";

const HiredStaff = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.hiredStaff}>
            <h2 className="page-main-title">Ёлланган ходимларни рўйхатдан ўтказиш</h2>
            <div className="d-flex w-100">
                <div className="d-flex w-100">
                    <div className="leftInput w-100 d-flex">
                        <div className="leftInput w-100">

                            <label className="labels font-roboto-regular inputLabel">СТИР
                                <span className="withStar">*</span>
                            </label>
                            <input type="text" className="input-style font-roboto-light w-100"
                                   placeholder="ххх ххх ххх"/>
                            <button className="input-clear-btn">
                                <span className="icon icon-input-clear"/>
                            </button>
                        </div>

                        <div className="w-100">

                            <label className="labels font-roboto-regular inputLabel">ЖШШИР<span
                                className="withStar">*</span></label>
                            <input type="text" className="input-style font-roboto-light w-100"
                                   placeholder="ххх ххх ххх"/>

                        </div>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="w-100">
                        <div className="w-100">

                            <label className="labels font-roboto-regular inputLabel">Шахснинг Ф.И.О</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100"
                                   placeholder="ххх ххх ххх"/>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`${styles.inputsGroup} d-flex w-100`}>
                <div className="d-flex w-100">
                    <div className="leftInput w-100 d-flex">
                        <div className=" w-100">
                            <label className="labels font-roboto-regular inputLabel">Паспорт серияси ва номери </label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                            <button className="input-clear-btn">
                                <span className="icon icon-input-clear"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="w-100">
                        <div className="w-100">
                            <label className="labels font-roboto-regular inputLabel">Ким томонидан берилган
                                ИИБ</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.inputsGroup} d-flex w-100`}>
                <div className="d-flex w-100">
                    <div className="leftInput w-100 d-flex">
                        <div className=" w-100">
                            <label className="labels font-roboto-regular inputLabel">Уй манзили
                                <span className="withStar">*</span>
                            </label>
                            <input type="text" placeholder="Манзил"  className="input-style font-roboto-light w-100" />
                            <button className="input-clear-btn">
                                <span className="icon icon-input-clear"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-33">
                    <div className="leftInput w-100 d-flex">
                        <div className=" w-100">
                            <label className="labels font-roboto-regular inputLabel">Телефон рақамингиз
                                <span className="withStar">*</span>
                            </label>
                            <input type="text" placeholder="+998 ( 99 ) 999 - 99 - 99"  className="input-style font-roboto-light w-100" />

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.inputsGroup} d-flex w-100`}>
                <div className="d-flex w-100">
                    <div className="leftInput w-100 d-flex">
                        <div className="w-100 ">
                            <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Амалга оширилган фаолият турлари<span
                                className="withStar">*</span></label>
                            <Select className={`${styles.p20} custom-select`} placeholder="Танланг" options={options} />
                        </div>
                    </div>
                    <div className="leftInput w-100">
                        <label className="labels font-roboto-regular inputLabel">Фаолиятни амалга ошириш жойи
                            <span className="withStar">*</span>
                        </label>
                        <input type="text" disabled={true}  className="input-style font-roboto-light w-100" />

                    </div>
                </div>
                <div className="d-flex w-33">
                    <div className="leftInput w-100 d-flex">
                        <div className=" w-100">
                            <label className="labels font-roboto-regular inputLabel">Шарнома муддати
                                <span className="withStar">*</span>
                            </label>
                            <input type="date"  className="input-style font-roboto-light w-100" />

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.inputsGroup} d-flex w-100 `}>
                <div className="  w-100 d-flex justify-content-end">
                    <div className={`${styles.viewDownload} viewDownload d-flex w-50  justify-content-end`}>
                        <button className="pdfBtn w-75">Мехнат шартномаси PDF <span className="icon icon-download" /></button>
                    </div>
                </div>
                <div className=" w-33 d-flex">
                    <div className={`${styles.viewDownload} viewDownload d-flex w-100`}>
                        <button className="viewBtn w-100">Аризани жонатиш</button>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default HiredStaff;

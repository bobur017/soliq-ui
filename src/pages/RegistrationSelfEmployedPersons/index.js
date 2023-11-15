import React from 'react';
import styles from './RegistrationSelfEmployedPersons.module.scss'
import Select from "react-select";
const RegistrationSelfEmployedPersons = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.RegistrationSelfEmployedPersons}>
            <h2 className="page-main-title font-roboto-regular">Ўз ўзини банд қилган шахсларни рўйхатдан ўтказиш</h2>
            <div className="info-box">
                <h2>Жисмоний шахс тўғрисида маълумотлар</h2>
                <div className="d-flex w-100">
                    <div className="leftInput w-75">
                        <div className={`leftInput w-100 p-0`}>

                        <label className="labels font-roboto-regular inputLabel">ЖШШИР<span
                            className="withStar">*</span></label>
                        <input type="text" className="input-style font-roboto-light w-100"
                               placeholder="ххх ххх ххх"/>
                        <button className="input-clear-btn">
                            <span className="icon icon-input-clear" />
                        </button>
                        </div>

                    </div>
                   <div className="w-75 d-flex">
                       <div className="leftInput w-75">
                           <label className="labels font-roboto-regular inputLabel">Расмдаги матнни киритинг<span
                               className="withStar">*</span></label>
                           <input type="text" className="input-style font-roboto-light w-100"
                                  placeholder="ххх ххх ххх"/>
                           <button className="input-clear-btn">
                               <span className="icon icon-input-clear" />
                           </button>
                       </div>
                       <div className="w-100 d-flex">
                           <div className="leftInput w-100">
                               <div className={styles.imgCode}>
                                   <img src="/assets/Frame.png" alt="thumbs"/>
                                   <button>
                                       <span className="icon icon-return-code" />

                                   </button>
                               </div>
                           </div>
                           <div className={"mt-auto rightBtn"}>
                               <button className="main-btn font-roboto-regular ">
                                   <span className="icon icon-search"/>
                                   Излаш
                               </button>
                           </div>
                       </div>
                   </div>
                </div>
                <div className={`${styles.inputs} d-flex w-100`}>
                        <div className= "w-75 d-flex">
                            <div className="leftInput w-100">
                                <label className="labels font-roboto-regular inputLabel">Фамилия</label>
                                <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                            </div>
                            <div className="leftInput w-100">
                                <label className="labels font-roboto-regular inputLabel">Исм</label>
                                <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                            </div>
                     </div>
                    <div className= "w-75 d-flex">
                        <div className={`leftInput w-50`}>
                            <label className="labels font-roboto-regular inputLabel">Шариф</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                        <div className={`w-100`}>
                            <label className="labels font-roboto-regular inputLabel">Туғилган сана</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.inputs} d-flex w-100`}>
                    <div className= "w-75 d-flex">
                        <div className="leftInput w-100">
                            <label className="labels font-roboto-regular inputLabel">Вилоят</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                        <div className="leftInput w-100">
                            <label className="labels font-roboto-regular inputLabel">Туман</label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                    </div>
                    <div className= "w-75 d-flex">
                        <div className={`w-100`}>
                            <label className="labels font-roboto-regular inputLabel">Манзил<span
                                className="withStar">*</span></label>
                            <input type="text" disabled={true} className="input-style font-roboto-light w-100" />
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <button className={`${styles.UpdateAddress} font-roboto-regular`}>Манзилни янгилаш</button>
                </div>
                <div className="">

                </div>
                <div className={`${styles.TypeOfActivity} w-100 pr-20`}>
                    <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Фаолият тури<span
                        className="withStar">*</span></label>
                    <Select className={`${styles.p20} custom-select`} placeholder="Танланг" options={options} />
                </div>
            </div>
            <div className="info-box">
                <h2>
                    Фаолият юритиладиган ҳудуд
                </h2>
                <div className="w-100 d-flex">
                    <div className="w-100 pr-20">
                        <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Вилоятни танланг<span
                            className="withStar">*</span></label>
                        <Select className={`${styles.p20} custom-select`} placeholder="Танланг" options={options} />
                    </div>

                    <div className="w-100 ">
                        <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Туманни танланг<span
                            className="withStar">*</span></label>
                        <Select className={`${styles.p20} custom-select`} placeholder="Танланг" options={options} />
                    </div>

                </div>
            </div>
            <div className="info-box">
                <h2>
                    Тасдиқлаш кодини юбориш
                </h2>
                <div className="d-flex w-100">
                    <div className="leftInput w-75">
                        <label className="labels font-roboto-regular inputLabel">Тасдиқлаш кодини теринг</label>
                        <input type="text" placeholder="+998 ( 99 ) 999 - 99 - 99" className="input-style font-roboto-light w-100" />
                        <button className="input-clear-btn">
                            <span className="icon icon-input-clear" />
                        </button>
                    </div>
                    <div className="leftInput w-75 mt-auto">
                        <button className={`${styles.sendCode} w-100`}>Тасдиқлаш кодини юбориш</button>
                    </div>

                    <div className="leftInput w-75">
                        <label className="labels font-roboto-regular inputLabel">Тасдиқлаш кодини теринг</label>
                        <input type="text" placeholder="хххх" className="input-style font-roboto-light w-100" />
                        <button className="input-clear-btn">
                            <span className="icon icon-input-clear" />
                        </button>
                    </div>
                    <div className=" w-33 mt-auto">
                        <button className={`${styles.confirmation} w-100`}>Тасдиқлаш</button>
                    </div>
                </div>

                <button className={`${styles.saveBtn} main-btn font-roboto-regular w-100`}>
                    Саклаш
                </button>
            </div>

        </div>
    );
};

export default RegistrationSelfEmployedPersons;

import React from 'react';
import styles from '../ElectronicTaxReporting.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";
const YurElectronicTaxReporting = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.yurElectronicTaxReporting}>
            <>
                {/*<div className={`${styles.dwnTitle} d-flex`}>*/}
                {/*    <h2 className="font-roboto-bold page-main-title">*/}
                {/*        ЮШ томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини тайёрлаш ва солик органларига юбориш*/}
                {/*    </h2>*/}
                {/*    <button className={styles.downloadBtn}>*/}
                {/*        <span className="icon icon-download" />*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<button className={`${styles.mainBtn} w-100`}>*/}
                {/*    Шакилантириш*/}
                {/*</button>*/}
                {/*<div className={styles.taxReport}>*/}
                {/*    <div className={`${styles.taxReportTabelHeader} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20">Филиал номи</p>*/}
                {/*        <p className="w-100 mr-20">ИНН</p>*/}
                {/*        <p className="w-100">Хисоб-фактура санаси</p>*/}
                {/*    </div>*/}

                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*    <div className={`${styles.taxReportTabelBody} d-flex w-100`}>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</p>*/}
                {/*        <p className="w-100 mr-20 font-roboto-light">123 456 798</p>*/}
                {/*        <p className="w-100 font-roboto-light">12.12.2020</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>YSH tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        YSH tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish
                    </h3>
                </div>
            </div>
            <div className="upBox">
                <h2 className="font-roboto-bold">ESP bilan tizimga kiring</h2>
                <div className="inputs w-100">
                    <Select options={options} placeholder="Kalitni tanlang" />
                </div>
            </div>

            <div className="upBox mt-30">
                <div className={styles.mainTabs}>
                    <div  className={styles.Tab}>
                        <Link className={styles.activeTab}>Soliq hisobotlari</Link>
                        <Link >Moliyaviy hisobotlar</Link>
                        <Link >Budjetdan tashqari fondlarga hisobotlar</Link>
                        <Link >Boshqalar</Link>
                    </div>
                    <div>
                        <button className={styles.repBtn}>Hisobotlar jurnali <span className="icon icon-report"/></button>
                    </div>
                </div>

                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>
                                №
                            </th>
                            <th>
                                ID
                            </th>
                            <th>
                                Nomi
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default YurElectronicTaxReporting;

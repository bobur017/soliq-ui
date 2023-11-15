import React from 'react';
import styles from '../ElectronicTaxReporting.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";

const ValueAddedTaxReports = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.valueAddedTaxReports}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>YSH tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Qoʼshilgan qiymat soligʼi hisobotlari</span>
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
            <h2 className="font-roboto-bold">
                Qoʼshilgan qiymat soligʼi hisobotlari
            </h2>

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
                            <th>
                                Аmal qilish muddati
                            </th>
                            <th>
                                Toʼxtatilgan
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>100</td>
                            <td className="font-roboto-bold">Qoʼshilgan qiymat soligʼi hisobotlari</td>
                            <td>01.01.2022</td>
                            <td></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ValueAddedTaxReports;

import React from 'react';
import styles from '../ElectronicTaxReporting.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";
const YattElectronicTaxReportingTable6 = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.yurElectronicTaxReportingTable}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>YTT tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Hisobotlar jurnali</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex">
                            <>Hisobotlar jurnali</>
                            <button className={styles.filterBtn}>
                                <span className="icon icon-filter-btn"/>
                            </button>
                        </h3>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-50 mr-20">
                            <label >Oraliq:</label>
                            <input type="date" className="w-100"  placeholder="dan"/>
                        </div>

                        <div className="inputs w-100 mr-20">
                            <label >Данные:</label>
                            <input type="text" className="w-100"  placeholder="Paket №"/>
                        </div>
                        <div className="inputs w-100">
                            <input type="text" className="w-100 mt-30"  placeholder="Hisobot №"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-50 mr-20">
                            <input type="date" className="w-100"  placeholder="gacha"/>
                        </div>
                        <div className="inputs w-100 mr-20">
                            <Select options={options} placeholder="Yil" />
                        </div>
                        <div className="inputs w-100">
                            <Select options={options} placeholder="Davr" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className={styles.radios}>
                            <input id="rd1" type="radio"/>
                            <label htmlFor="rd1">По дате изменения</label>
                        </div>
                        <div className={styles.radios}>
                            <input id="rd2" type="radio"/>
                            <label htmlFor="rd2">По дате изменения</label>
                        </div>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="closeBtn font-roboto-bold mr-20">
                        <span className="icon icon-close" />
                        Tozalash
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-search" />
                        QIdirish
                    </button>
                </div>
            </div>

            <div className={`${styles.tabelsMain}  upBox mt-30`}>
                <div className={styles.mainTabs}>
                    <div  className={styles.Tab}>
                        <Link >Oxirgilari</Link>
                        <Link >Tekshirish jarayonida</Link>
                        <Link >Xatolik mavjud</Link>
                        <Link >Qabul qilingan</Link>
                        <Link >Joʼnatilgan</Link>
                        <Link className={styles.activeTab}>Rad etilgan</Link>
                        <Link >Xomaki</Link>
                        <Link >Yangi</Link>
                    </div>
                </div>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>
                                Hisobot №
                            </th>
                            <th>
                                Paket №
                            </th>
                            <th>
                                Nomi
                            </th>
                            <th>Yil va davr</th>
                            <th>Joʼnatilgan sana</th>
                            <th>Sertifikat</th>
                            <th>Xolati</th>
                            <th>Дата проверки</th>
                            <th>Инспектор</th>
                            <th>Xudud nomi</th>
                            <th>Yaratilgan sana</th>
                            <th>Sozlash</th>
                        </tr>
                        <tr>
                            <td>138059207</td>
                            <td>10006_34</td>
                            <td className="font-roboto-bold">Расчет налога на добавленную стоимость</td>
                            <td>2022 </td>
                            <td>May</td>
                            <td>01.01.2022  15:23</td>
                            <td>Черновик</td>
                            <td> </td>
                            <td> </td>
                            <td>Mirzo Ulug‘bek tumani</td>
                            <td>01.01.2022  15:23</td>
                            <td className="text-center">
                                <button>
                                    <span className="icon icon-vertical-dot"/>
                                </button>
                                <div className={styles.control}>
                                    <button><span className="icon icon-bird"/>Qabul qildim</button>
                                    <button><span className="icon icon-copy"/>Nusxa qilish</button>
                                    <button><span className="icon icon-upload"/>Biriktirilgan fayllar</button>
                                    <button><span className="icon icon-upload"/>Exel faylni yuklash</button>
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default YattElectronicTaxReportingTable6;

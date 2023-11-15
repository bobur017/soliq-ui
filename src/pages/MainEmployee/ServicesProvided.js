import React from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";
import {Link} from "react-router-dom";
const ServicesProvided = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.servicesProvided}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ko’rsatilgan xizmatlar</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex">
                            <>Ko’rsatilgan xizmatlar</>
                            <button className={styles.filterBtn}>
                                <span className="icon icon-filter-btn"/>
                            </button>
                        </h3>
                    </div>
                    <div className="d-flex mt-30">
                        <div className="inputs w-100 m-0 z-index-main">
                            <label >Ko’rsatish:</label>
                            <Select options={options} placeholder="Davr" />
                        </div>
                    </div>

                    <div className="d-flex ">
                        <div className="inputs w-100 mr-20" >
                            <label >Malumotlar:</label>
                            <input type="text" className="w-100"  placeholder="INN"/>
                        </div>
                        <div className="inputs w-100 mr-20">
                            <input type="text" className="w-100 mt-30"  placeholder="F.I.O"/>
                        </div>
                        <div className="inputs w-100">
                            <input type="text" className="w-100 mt-30"  placeholder="ID"/>
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
            <div className={styles.decTabel}>
                <div className="d-flex justify-content-between">
                    <div className={styles.page}>
                        <label>Записей на странице:</label>
                        <div className={`${styles.page2} z-index-main`}>
                            <Select options={options} placeholder="-" />
                        </div>
                    </div>
                    <div className={styles.page}>
                        <label><span className="icon icon-upload"/>Yuklash:</label>
                        <div className={`${styles.page3}  z-index-main`}>
                            <Select options={options} placeholder="-" />
                        </div>
                        <button className={`${styles.uploadBtn}  font-roboto-bold`}>Yuklab olish</button>
                    </div>
                </div>

                <div className={`${styles.tabelsMain}  mt-30`}>
                    <div className={styles.mainTable}>
                        <table>
                            <tr>
                                <th>№</th>
                                <th>ID</th>
                                <th>F.I.O</th>
                                <th>Ko’rsatilgan xizmat nomi</th>
                                <th>Xizmat ko’rsatilgan vaqti</th>
                                <th>To`lov turi</th>
                                <th>Soni</th>
                                <th>Summa</th>
                                <th>Sozlash</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>123 456</td>
                                <td>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td>Компьютер хизматлари ва техник ёрдам</td>
                                <td className={styles.date}>
                                    12.12.2020
                                    <span>10:31</span>
                                </td>
                                <td>Naxt</td>
                                <td>1</td>
                                <td className={styles.statusPaid}>
                                    <span>8 000 сум</span>
                                    <span className={styles.paid}>To'langan</span>
                                </td>
                                <td>
                                    <Link>Ko'rish <span className="icon icon-arrow-right "/></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>123 456</td>
                                <td>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td>Компьютер хизматлари ва техник ёрдам</td>
                                <td className={styles.date}>
                                    12.12.2020
                                    <span>10:31</span>
                                </td>
                                <td>Naxt</td>
                                <td>1</td>
                                <td className={styles.statusPaid}>
                                    <span> 40 000 сум</span>
                                    <span className={styles.unpaid}>To`lov kutilmoqda</span>
                                </td>
                                <td>
                                    <Link>Ko'rish <span className="icon icon-arrow-right "/></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>123 456</td>
                                <td>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td>Компьютер хизматлари ва техник ёрдам</td>
                                <td className={styles.date}>
                                    12.12.2020
                                    <span>10:31</span>
                                </td>
                                <td>Naxt</td>
                                <td>1</td>
                                <td className={styles.statusPaid}>
                                    <span> 40 000 сум</span>
                                    <span className={styles.process}>Jarayonda</span>
                                </td>
                                <td>
                                    <Link>Ko'rish <span className="icon icon-arrow-right "/></Link>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesProvided;

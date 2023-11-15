import React from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";
import {Link} from "react-router-dom";
const PerformanceIndicators = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.performanceIndicators}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Samaradorlik ko’rsatkichlari</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex">
                            <>Samaradorlik ko’rsatkichlari</>
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

                    <div className="d-flex  ">
                        <div className="inputs w-100 mr-20" >
                            <label >Malumotlar:</label>
                            <input type="text" className="w-100"  placeholder="INN"/>
                        </div>
                        <div className="inputs w-100 mr-20">
                            <input type="text" className="w-100 mt-30"  placeholder="F.I.O"/>
                        </div>
                        <div className="inputs w-100">
                            <input type="text" className="w-100 mt-30"  placeholder="Korxona manzili"/>
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
                                <th>Raxbarni F.I.O</th>
                                <th>Korxona manzili</th>
                                <th>Berilgan reja</th>
                                <th>Reja bajarilishi</th>
                                <th>Reja bajarilishi %</th>
                                <th>Viloyat</th>
                                <th>Sozlash</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td>Г. Ташкент, ул. Алишера Навои 27</td>
                                <td>99 999 999 сум </td>
                                <td>99 999 999 сум</td>
                                <td>100 %</td>
                                <td>Toshkent</td>
                                <td>
                                    <button>Sozlash <span className="icon icon-edit-btn "/></button>
                                    <button>Yuklab olish <span className="icon icon-download "/></button>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceIndicators;

import React from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";


const MonthlyAttendanceReport = () => {
    const options = [
        { value: 'chocolate', label: '12' },
        { value: 'strawberry', label: '12' },
        { value: 'vanilla', label: '12' }
    ]
    return (
        <div className={styles.monthlyAttendanceReport}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ishga kelganlik bo’yicha oylik tabel</span>
            </p>
            <div className={`${styles.dupTitleBox}  titleBox`}>
                <div className="w-100">
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex">
                            <>Ishga kelganlik bo’yicha oylik tabel</>
                            <button className={styles.filterBtn}>
                                <span className="icon icon-filter-btn"/>
                            </button>
                        </h3>
                    </div>
                    <div className="d-flex  ">
                        <div className="inputs w-100 mr-20" >
                            <label >F.I.O</label>
                            <input type="text" className="w-100"  placeholder="-"/>
                        </div>
                        <div className="inputs w-33  z-index-main mr-20">
                            <label >Yil:</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-33  z-index-main">
                            <label >Oy:</label>
                            <Select options={options} placeholder="-" />
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
                                <th>F.I.O</th>
                                <th className="text-center"><span>1 May </span> <br/><span className="font-roboto-light"> Dushanba </span></th>
                                <th className="text-center"><span>2 May </span> <br/><span className="font-roboto-light"> Seshanba </span></th>
                                <th className="text-center"><span>3 May </span> <br/><span className="font-roboto-light"> Chorshanba </span></th>
                                <th className="text-center"><span>4 May </span> <br/><span className="font-roboto-light"> Payshanba </span></th>
                                <th className="text-center"><span>5 May </span> <br/><span className="font-roboto-light"> Juma </span></th>
                                <th className={`${styles.sunday} text-center`}><span>6 May </span> <br/><span className="font-roboto-light"> Shanba </span></th>
                                <th  className={`${styles.sunday} text-center`}><span>7 May </span> <br/><span className="font-roboto-light"> Yakshanba </span></th>
                                <th className="text-center"><span>8 May </span> <br/><span className="font-roboto-light"> Dushanba </span></th>
                                <th className="text-center"><span>9 May </span> <br/><span className="font-roboto-light"> Seshanba </span></th>
                                <th className="text-center"><span>10 May</span> <br/><span className="font-roboto-light"> Chorshanba </span></th>
                                <th className="text-center"><span>11 May</span> <br/><span className="font-roboto-light"> Payshanba </span></th>
                                <th className="text-center"><span>12 May</span> <br/><span className="font-roboto-light"> Juma </span></th>
                                <th  className={`${styles.sunday} text-center`}><span>13 May</span> <br/><span className="font-roboto-light"> Shanba </span></th>
                                <th className={`${styles.sunday} text-center`}><span>14 May</span> <br/><span className="font-roboto-light"> Yakshanba </span></th>
                                <th className="text-center"><span>15 May</span> <br/><span className="font-roboto-light"> Dushanba </span></th>
                                <th className="text-center"><span>16 May</span> <br/><span className="font-roboto-light"> Seshanba </span></th>
                                <th className="text-center"><span>17 May</span> <br/><span className="font-roboto-light"> Chorshanba </span></th>
                                <th className="text-center"><span>18 May</span> <br/><span className="font-roboto-light"> Payshanba </span></th>
                                <th className="text-center"><span>19 May</span> <br/><span className="font-roboto-light"> Juma </span></th>
                                <th  className={`${styles.sunday} text-center`}><span>20 May</span> <br/><span className="font-roboto-light"> Shanba </span></th>
                                <th  className={`${styles.sunday} text-center`}><span>21 May</span> <br/><span className="font-roboto-light"> Yakshanba </span></th>
                                <th className="text-center"><span>22 May</span> <br/><span className="font-roboto-light"> Dushanba </span></th>
                                <th className="text-center"><span>23 May</span> <br/><span className="font-roboto-light"> Seshanba </span></th>
                                <th className="text-center"><span>24 May</span> <br/><span className="font-roboto-light"> Chorshanba </span></th>
                                <th className="text-center"><span>25 May</span> <br/><span className="font-roboto-light"> Payshanba </span></th>
                                <th className="text-center"><span>26 May</span> <br/><span className="font-roboto-light"> Juma </span></th>
                                <th className={`${styles.sunday} text-center`}><span>27 May</span> <br/><span className="font-roboto-light"> Shanba </span></th>
                                <th className={`${styles.sunday} text-center`}><span>28 May</span> <br/><span className="font-roboto-light"> Yakshanba </span></th>
                                <th className="text-center"><span>29 May</span> <br/><span className="font-roboto-light"> Dushanba </span></th>
                                <th className="text-center"><span>30 May</span> <br/><span className="font-roboto-light"> Seshanba </span></th>
                                <th className="text-center"><span>31 May</span> <br/><span className="font-roboto-light"> Chorshanba </span></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className={styles.fio}>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                 <td className={styles.hours}>
                                     <span>9:35</span>
                                     <span>18:26</span>
                                 </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className={styles.fio}>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td className={styles.fio}>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td className={styles.fio}>
                                    <span className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</span>
                                    <span>ИНН: 12345678912345</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td>
                                    <span>D</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                                <td className={styles.hours}>
                                    <span>9:35</span>
                                    <span>18:26</span>
                                </td>
                            </tr>

                        </table>
                    </div>
                    <div className={styles.titles}>
                        <span className="font-roboto-light">D - Dam olish kuni</span>
                        <span className="font-roboto-light">B - Bayram kunlari</span>
                        <span className="font-roboto-light">M/T - Mexnat Tatili</span>
                        <span className="font-roboto-light">T- O’z hisobidan tatil</span>
                        <span className="font-roboto-light">X - Ishlamagan kunlari</span>
                        <span className="font-roboto-light">K - Kasallik varaqasi</span>
                        <span className="font-roboto-light">C - Xizmat safari</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyAttendanceReport;

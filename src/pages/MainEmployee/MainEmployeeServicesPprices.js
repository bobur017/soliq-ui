import React from 'react';
import styles from "./MainEmployee.module.scss";
import {Link} from "react-router-dom";

const MainEmployeeServicesPprices = () => {
    return (
        <div className={styles.MainEmployeeServicesPprices}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Malumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xizmat turlari va narxlari</span>
            </p>
            <div className={styles.titleBox}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h3 className="titleMain font-roboto-bold">
                        Xizmatlar turlari va narxlari
                    </h3>
                    <button className={styles.printBtn}>
                        <span className="icon icon-print"/>
                    </button>
                </div>
            </div>

            <div className="upBox mt-30">
                <h2 className="page-main-title">Asosiy hizmatlar</h2>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>
                                №
                            </th>
                            <th>Xizmat nomi</th>
                            <th>
                                Toshkent shaxri
                            </th>
                            <th>
                                Qoraqalpog’iston respublikasi va viloyatlar tuman (shaxar)lari
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className="upBox mt-30">
                <h2 className="page-main-title">Interaktiv xizmatlar</h2>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>
                                №
                            </th>
                            <th>Xizmat nomi</th>
                            <th>
                                Toshkent shaxri
                            </th>
                            <th>
                                Qoraqalpog’iston respublikasi va viloyatlar tuman (shaxar)lari
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className="upBox mt-30">
                <h2 className="page-main-title">Qoshimcha xizmatlar</h2>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>
                                №
                            </th>
                            <th>Xizmat nomi</th>
                            <th>
                                Toshkent shaxri
                            </th>
                            <th>
                                Qoraqalpog’iston respublikasi va viloyatlar tuman (shaxar)lari
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td className="font-roboto-bold">Ижара шартномасини рўйхатдан ўтказиш</td>
                            <td  >1 000 сум</td>
                            <td  >1 000 сум</td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MainEmployeeServicesPprices;

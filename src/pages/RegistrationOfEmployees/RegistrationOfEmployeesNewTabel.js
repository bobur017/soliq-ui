import React from 'react';
import styles from './RegistrationOfEmployees.module.scss'
import Select from "react-select";

const RegistrationOfEmployeesNewTabel = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];
    return (
        <div className={styles.RegistrationOfEmployeesNewTabel}>

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
            </p>

            <div className={`${styles.regTitleMain} titleBox`}>
              <div>
                  <h3 className="titleMain font-roboto-bold">
                      Yuridik shaxs nomi
                  </h3>
                  <p>INN: 256263456</p>
              </div>
                <button className="font-roboto-bold">
                    <span className="icon icon-plus-circle" />
                    Hodimni ro’yxatdan o’tkashish
                </button>

            </div>

            <div className={styles.decTabel}>
                <h3 className="font-roboto-bold titleMain">

                    Ro’yxatdan o'tkazilgan hodimlar ro’yxati
                </h3>
                <div className={`${styles.tabelsMain}   mt-30`}>
                    <div className={styles.mainTable}>
                        <table>
                            <tr>
                                <th className="font-roboto-bold">
                                    №
                                </th>
                                <th  className="font-roboto-bold">
                                    JShShIR
                                </th>
                                <th className="font-roboto-bold">STIR</th>
                                <th className="font-roboto-bold">F.I.O</th>
                                <th className="font-roboto-bold">Ro’yxatga olingan sana</th>
                                <th className="font-roboto-bold">Amal  qilish muddati</th>
                                <th className="font-roboto-bold"> </th>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    12345678909876
                                </td>
                                <td>123456789</td>

                                <td>Sultonov Rahmatilla  Xudoybergan  O’g’li</td>
                                <td>07.07.2022</td>
                                <td>01.07.2022</td>
                                <td className="text-center">
                                    <button>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div className={styles.control}>
                                        <button><span className="icon icon-upload"/>Ariza</button>
                                        <button><span className="icon icon-upload"/>Kartochkasi</button>
                                        <button><span className="icon icon-upload"/>Bildirishnoma</button>
                                        <button><span className="icon icon-upload"/>To’lov xabarnoma</button>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    12345678909876
                                </td>
                                <td>123456789</td>

                                <td>Sultonov Rahmatilla  Xudoybergan  O’g’li</td>
                                <td>07.07.2022</td>
                                <td>01.07.2022</td>
                                <td className="text-center">
                                    <button>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div className={styles.control}>
                                        <button><span className="icon icon-upload"/>Ariza</button>
                                        <button><span className="icon icon-upload"/>Kartochkasi</button>
                                        <button><span className="icon icon-upload"/>Bildirishnoma</button>
                                        <button><span className="icon icon-upload"/>To’lov xabarnoma</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    12345678909876
                                </td>
                                <td>123456789</td>

                                <td>Sultonov Rahmatilla  Xudoybergan  O’g’li</td>
                                <td>07.07.2022</td>
                                <td>01.07.2022</td>
                                <td className="text-center">
                                    <button>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div className={styles.control}>
                                        <button><span className="icon icon-upload"/>Ariza</button>
                                        <button><span className="icon icon-upload"/>Kartochkasi</button>
                                        <button><span className="icon icon-upload"/>Bildirishnoma</button>
                                        <button><span className="icon icon-upload"/>To’lov xabarnoma</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    12345678909876
                                </td>
                                <td>123456789</td>

                                <td>Sultonov Rahmatilla  Xudoybergan  O’g’li</td>
                                <td>07.07.2022</td>
                                <td>01.07.2022</td>
                                <td className="text-center">
                                    <button>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div className={styles.control}>
                                        <button><span className="icon icon-upload"/>Ariza</button>
                                        <button><span className="icon icon-upload"/>Kartochkasi</button>
                                        <button><span className="icon icon-upload"/>Bildirishnoma</button>
                                        <button><span className="icon icon-upload"/>To’lov xabarnoma</button>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationOfEmployeesNewTabel;
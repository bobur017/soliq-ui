import React from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss";
import Select from "react-select";

const Confirmed = () => {
    const options = [
        { value: '10', label: '10' },
        { value: '25', label: '25' },
        { value: '50', label: '50' },
        { value: '100', label: '100' }
    ];
    return (
        <div className={`${styles.tables} allBox w-100 `}>
            <div className={styles.tablesHeader}>
                <div className="inputs w-100 mr-20">
                    <label htmlFor="stir1">Beruvchi STIR</label>
                    <input type="text" className="w-100" id="stir1" placeholder="-"/>
                </div>
                <div className="inputs w-100 mr-20">
                    <label htmlFor="stir2">Oluvchi STIR</label>
                    <input type="text" className="w-100" id="stir1" placeholder="-"/>
                </div>
                <div className="inputs w-100 mr-20">
                    <label htmlFor="JSHSHIR1">Beruvchi JSHSHIR</label>
                    <input type="text" className="w-100" id="JSHSHIR1" placeholder="-"/>
                </div>
                <div className="inputs w-100 mr-20">
                    <label htmlFor="JSHSHIR2">Oluvchi JSHSHIR</label>
                    <input type="text" className="w-100" id="JSHSHIR2" placeholder="-"/>
                </div>
                <div className="inputs w-100 mr-20">
                    <label htmlFor="code1">Kadastr kodi</label>
                    <input type="text" className="w-100" id="code1" placeholder="-"/>
                </div>
                <button className={styles.searchBtn}>
                    <span className="icon icon-search"/>
                </button>
            </div>
            <div className={styles.fil}>
                <p>Записей на странице:</p>
                <Select options={options} placeholder="10" />
            </div>
            <div className={styles.tableList}>
                <table>
                    <tr>
                        <th>№</th>
                        <th>Shartnoma raqami</th>
                        <th>Holati</th>
                        <th>Ro’yxatga <br/>
                            qo’yilgan <br/>
                            sana</th>
                        <th>Ko’chmas mulk kadastr raqami</th>
                        <th>Ijara muddatini <br/> tugash sanasi</th>
                        <th>Ijaraga <br/> berilayotgan maydon (m.kv)</th>
                        <th>Maydon turi</th>
                        <th>Hujjatlar</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="green"></div>Tasdiqlangan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="green"></div>Tasdiqlangan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="green"></div>Tasdiqlangan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>

                </table>
            </div>

        </div>
    );
};

export default Confirmed;

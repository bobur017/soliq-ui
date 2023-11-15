import React, {useState} from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss";
import Select from "react-select";
import Modal from "react-modal";

const PendingConfirmation = () => {
    const options = [
        { value: '10', label: '10' },
        { value: '25', label: '25' },
        { value: '50', label: '50' },
        { value: '100', label: '100' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
        const toggleModal = () => {
            setIsOpen(!isOpen)
        }

        const success = () => {
            setIsOpen2(true)
            setIsOpen(false)
            setTimeout(() =>setIsOpen2(false), 1000);
        }
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
                        <th>Hujjat yaratilgan sana</th>
                        <th>Ko’chmas mulk kadastr raqami</th>
                        <th>Ko`chmas <br/> mulkning ijaraga berilishi</th>
                        <th>Ijaraga <br/> berilayotgan <br/> maydon (m.kv)</th>
                        <th>Maydon turi</th>
                        <th>Bekor qilish</th>
                        <th>Hujjatlar</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal}>Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>791584</td>
                        <td className={styles.sends}><div className="d-flex"><div className="gray"></div>Yuborilgan</div></td>
                        <td><p>16.06.2022 <br/>
                            14:51:46</p></td>
                        <td>10:11:01:02:02:6179:0001:0999</td>
                        <td>Qisman</td>
                        <td>3</td>
                        <td>Bino</td>
                        <td><button className={styles.cancelBtn} onClick={toggleModal} >Bekor qilish</button></td>
                        <td><button className={styles.viewBtn}>Ko’rish<span className="icon icon-eye"/></button></td>
                    </tr>
                </table>

            </div>

            <div  className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModal}`}>
                <button className={styles.closeBtn} onClick={toggleModal}> <span className="icon icon-close" /></button>
                <h2>Ijara shartnomasini bekor qilasizmi?</h2>
                <p>Bekor qilish sababini kiriting *</p>
                <textarea  >

                </textarea>
                <div>
                    <button onClick={toggleModal}>Yo'q</button>
                    <button onClick={success}>Ha</button>
                </div>
            </div>


            <div  className={`${isOpen2 ? "d-block" : "d-none"} ${styles.mainModal}`}>
                <div className={styles.bird}>
                    <img src="./assets/birdcircle.png" alt=""/>
                    <h2>Parol +998******3133 raqamiga yuborildi!</h2>
                </div>
            </div>
        </div>
    );
};

export default PendingConfirmation;

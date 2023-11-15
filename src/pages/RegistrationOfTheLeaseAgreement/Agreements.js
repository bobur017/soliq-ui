import React, {useState} from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss";
import Select from "react-select";
import {Link} from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

const Agreements = (props) => {
    const options = [
        {value: '2', label: '2'},
        {value: '1', label: '1'},
        {value: '10', label: '10'},
        {value: '25', label: '25'},
        {value: '50', label: '50'},
        {value: '100', label: '100'}
    ];
    const {setSize, setPage, page, size, rents, getRentTable, setIsLoading, isLoading} = props
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const changeSize = (size) => {
        setSize(size.value)
        setPage(0)
        getRentTable()
    }

    const changePage = (page) => {
        setPage(page)
        getRentTable()
    }

    const success = () => {
        setIsOpen2(true)
        setIsOpen(false)
        setTimeout(() => setIsOpen2(false), 1000);
    }
    return (
        <div className={`${styles.tables} allBox w-100 `}>
            <ClipLoader color={'#174aa4'} loading={isLoading} size={150}/>

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
                <Select onChange={changeSize} options={options} placeholder="10" className="select-sm"/>
            </div>
            <div className={styles.tableList}>
                <table id="rentTable">

                    <tr className="font-roboto-bold">
                        <th>Shartnoma №</th>
                        <th>Holati</th>
                        <th>Hujjat yaratilgan sana</th>
                        <th>Ko’chmas mulk kadastr raqami</th>
                        <th>Ko`chmas <br/>
                            mulkning ijaraga <br/> berilishi
                        </th>
                        <th>Ijaraga <br/> berilayotgan <br/> maydon (m.kv)</th>
                        <th colSpan={2}>Maydon turi</th>
                        {/*<th>Hujjatlar</th>*/}
                    </tr>
                    {
                        rents && rents.length > 0 ? rents.map((item, i) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>
                                        <div className={`${styles.sends} ${styles.sendsSent}`}>{item.stateNameUzLatin}</div>
                                    </td>
                                    {/*<td>16.06.2022 / <span className={styles.time}>14:51:46</span></td>*/}
                                    <td>{item.createdAt}</td>
                                    <td>{item.objectCode}</td>
                                    <td>Qisman</td>
                                    <td>{item.rentField}</td>
                                    <td>Bino</td>
                                    <td><Link
                                        to="/main/electronic-registration/registration-of-the-lease-agreement/info"><span
                                        className={`${styles.icon} icon icon-link`}/></Link></td>
                                </tr>
                            )
                            :
                            <tr className={styles.noFile}>
                                <th colSpan="9">
                                    <h1>Shartnomalar mavjud emas</h1>
                                </th>
                            </tr>
                    }
                </table>
                <button disabled={page === 0} onClick={() => changePage(page - 1)} className={styles.searchBtn}>
                    <span className="icon"/> Orqaga
                </button>
                <button disabled={rents.length < size} onClick={() => changePage(page + 1)}
                        className={styles.searchBtn}>
                    <span className="icon"/> Oldinga
                </button>
            </div>
        </div>
    );
};

export default Agreements;

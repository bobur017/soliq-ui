import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import styles from './ElectronicContract.module.scss';
import { request } from "../../utils/request";

function HistoryElektronicContract(props) {
    const { setContracts, contracts } = props;
    const options = [
        { value: '12', label: '1' },
        { value: '24', label: '2' },
        { value: '36', label: '2' }
    ]
    const [open, setOpen] = useState(undefined);
    const { setStatus } = props;
    useEffect(() => {
        request({
            url: "contract/get-contracts",
            method: "get",
        }).then(res => {
            setContracts(res?.data?.content)
        })
    }, [])
    console.log(contracts)

    return (
        <div className={styles.CreateElektronicContract}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Elektron shartnomalar tuzish</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Shartnomalar tarixi</span>
            </p>

            <div className={styles.HistoryContract}>
                <div className={styles.header}>
                    <div className="d-flex justify-content-between">
                        <h1 className="font-roboto-bold">Elektron shartnomalar</h1>
                        <div className="d-flex">
                            <button className="createBtn" onClick={() => {
                                setStatus('create')
                            }}>
                                <span className="icon icon-plus-circle" />
                                Shartnomani yaratish
                            </button>
                            <button>
                                <span className="icon icon-filter" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className="d-flex justify-content-between">
                        <div className="inputs w-25 mr-20">
                            <label>Yaratilgan vaqt oralig’i</label>
                            <div className="d-flex">
                                <input type="date" className="w-100 font-roboto-light" placeholder="-" />
                                <input type="date" className="w-100 ml-10 font-roboto-light" placeholder="-" />
                            </div>
                        </div>
                        <div className="inputs w-100">
                            <label>Malumotlar:</label>
                            <div className="d-flex">
                                <input type="text" className="w-33 font-roboto-light" placeholder="STIR yoki JShShIR" />
                                <input type="text" className="w-33 ml-10 font-roboto-light" placeholder="+998" />
                                <input type="text" className="w-100 ml-5 font-roboto-light"
                                    placeholder="Buyurtmachi F.I.O" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className={styles.footerBtn}>
                        <span className="icon icon-clear" />
                        Tozalash
                    </button>
                    <button className={styles.footerBtn}>
                        <span className="icon icon-search" />
                        QIdirish
                    </button>
                </div>
            </div>


            <div className={styles.decTabel}>

                <div className={styles.page}>
                    <div className={styles.fil}>
                        <p>Записей на странице:</p>
                        <Select options={options} className="select-sm" placeholder="10" />
                    </div>
                    <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                        className="icon icon-upload" /> Yuklab olish
                    </button>
                </div>
                <div className={`${styles.tabelsMain}   mt-30`}>
                    <div className={styles.mainTable}>
                        <table>
                            <tr>
                                <th className="font-roboto-bold">
                                    №
                                </th>
                                <th className="font-roboto-bold">
                                    Yaratilgan sana
                                </th>
                                <th className="font-roboto-bold">
                                    Xizmat ko’rsatgan xodim
                                </th>
                                <th className="font-roboto-bold">Telefon raqam</th>
                                <th className="font-roboto-bold">Shartnomani amal qilish muddati</th>
                                <th className="font-roboto-bold">Shartnoma summasi</th>
                                <th className="font-roboto-bold"></th>
                            </tr>
                            {contracts?.map((item, key) =>
                                <tr>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.createdAt}
                                    </td>
                                    <td>
                                        {item.cDirFio}
                                        <p>JShShIR: {item.cPinfl}</p>
                                    </td>
                                    <td>
                                        {item.cPhone}
                                    </td>
                                    <td>{item.startDate} - {item.endDate}</td>

                                    <td>
                                        {item.amount}
                                    </td>

                                    <td className="text-center">
                                        <button onClick={() => setOpen(open === key ? undefined : key)}>
                                            <span className="icon icon-vertical-dot" />
                                        </button>
                                        <div style={open === key ? { display: "block" } : { display: "none" }}
                                            className={styles.control}>
                                            <button><span className="icon icon-edit-btn" />O’zgartirish</button>
                                            <button onClick={() => props.getPdf(item.id)}><span
                                                className="icon icon-upload" />Yuklab olish
                                            </button>
                                            <button><span className="icon icon-delete-btn" />O’chirish</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryElektronicContract;

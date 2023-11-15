/**
 * Created by Sherlock on 02.05.2022.
 */
import React, {useEffect, useState} from 'react';
import styles from './YattTaxInfo.module.scss';
import { downloadFile, getFileName } from '../../../utils/common';
import { API_PATH } from '../../../utils/constants';
import {Link} from "react-router-dom";

const LegalPersonalTaxDebtInfo = (props) => {
    const [download, setDownload] = useState(undefined);


    return (


        <div className={styles.debtInfo}>
            <h1 className="font-roboto-bold">Ushbu STIR bo'yicha soliq majburiyati (obyekti) mavjud bo'lgan hududlar ro'yxati</h1>

            <div className={styles.debtInfoTitle}>
                Obyektni tanlang
            </div>
            <div className={styles.itemList}>
                {props.taxObjects?.map(item =>   item.penya + item.nedoimka>0?
                    <div className={styles.itemdebtInfo}>
                    <div>
                        <h4 className="font-roboto-bold">{item.ns10Name} {item.ns11Name}</h4>
                        <h5>
                            <span>STIR:</span>
                            <span className="font-roboto-light">{props.tin}</span>
                        </h5>
                        <h2 className={styles.taxInActive}>Diqqat! Ushbu STIR bo'yicha {(item.nedoimka + item.penya).toFixed(2)} so'm soliq qarzdorligi mavjud!</h2>
                    </div>
                </div>
                    :
                    <div className={styles.itemdebtInfo} style={{cursor:"pointer"}} onClick={()=>download==item?setDownload(undefined):setDownload(item)} >
                        <div style={{background: download==item?"#D4E5FF":undefined,
                            border: download==item?"1px solid #174AA4":undefined}}>
                            <h4 className="font-roboto-bold">Toshkent shaxar Yunusobod tumani</h4>
                            <h5>
                                <span>STIR:</span>
                                <span className="font-roboto-light">{props.tin}</span>
                            </h5>
                            <h2 className={styles.taxActive}>Ushbu STIR  bo'yicha soliq qarzdorligi mavjud emas!</h2>
                        </div>

                    </div>)
                }




            </div>
            {download?<Link className={`${styles.payment} font-roboto-bold`} onClick={()=>props.saveToRepository(download.tin,download.ns10Code,download.ns11Code,download.objectCode)}>
                Ma’lumotnomani shakllantirish
            </Link>:""}
        </div>

    );
};

export default LegalPersonalTaxDebtInfo

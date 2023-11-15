import React, {useState} from 'react';
import styles from "./QRCodeIssuanceService.module.scss"
import {request} from "../../utils/request";
import {toast} from "react-toastify";

const QrCodeIssuanceServiceSearch = (props) => {
    const [clientPinfl, setClientPinfl] = useState(undefined);
    const {setStatus, setQrList, setStir, setFullName,setPinfl} = props;
    const getQrsByPinfl = () => {
        setPinfl(clientPinfl)
        request({
            url: "phys-np1",
            method: "get",
            params: {
                tin: clientPinfl
            }
        }).then(res => {
            console.log(res)
            if (res.success) {
                if (res?.data?.tin !== null) {
                    setStir(res?.data?.tin)
                    setFullName(res?.data?.surName + ' ' + res?.data?.firstName + ' ' + res?.data?.middleName)
                    console.log(clientPinfl)
                    request({
                        url: "branch/list",
                        method: "post",
                        data: {
                            pinfl: clientPinfl
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.success) {
                            setQrList(res.data)
                            setStatus('view')
                        } else {
                            toast.error("Xatolik!");
                        }
                    })
                } else {
                    toast.error("Bunday JSHIR raqam ostidagi shaxs topilmadi!");
                }
            } else {
                toast.error("Xatolik!");
            }
        })


    }
    return (
        <div className={styles.qrCodeIssuanceServiceSearch}>
            {console.log(props.pinfl)
            }
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code berish xizmati</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    QR-code berish xizmati
                </h3>
            </div>
            <div className="upBox">
                <div className="d-flex justify-content-center">
                    <div className={styles.inputs}>
                        <label>JShShIR ni kiriting <span className="withStar ">*</span></label>
                        <div className="d-flex">
                            <input type="text" onChange={(e) => {
                                setClientPinfl(e.target.value)
                            }} placeholder="-" className="input-style font-roboto-light w-100"/>
                        </div>
                        <div className={styles.footerBtn}>
                            <button onClick={() => props.history.push("/main")} className={styles.back}>
                                <span className="icon icon-back"/>
                                Ortga
                            </button>
                            <button onClick={getQrsByPinfl} className={styles.save}>
                                <span className="icon icon-search"/>
                                Qidirish
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default QrCodeIssuanceServiceSearch;

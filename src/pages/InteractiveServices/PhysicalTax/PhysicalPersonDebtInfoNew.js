import React, {useState} from 'react';
import styles from "./PhysicalPerson.module.scss"
import {Link} from "react-router-dom";
import {request} from "../../../utils/request";
import {API_PATH} from "../../../utils/constants";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";

const PhysicalPersonDebtInfoNew = (props) => {
    const [placeToShow, setPlaceToShow] = useState("");
    const create = () => {
        if (placeToShow == "") {
            toast.error("Axborot bilan ta'minlash joyi keltirilmadi")
        } else {
            props.updateState({loading: true})

            request({
                url: "services/interactive/get-invoice-about-debt/new/phys",
                method: "post",
                data: {
                    email: "",
                    fio: props.info.surName + " " + props.info.firstName + " " + props.info.middleName,
                    ns10Code: props.info.ns10Code,
                    ns10Name: props.info.ns10Name,
                    ns11Code: props.info.ns11Code,
                    ns11Name: props.info.ns11Name,
                    objectCodes: props.taxInfo?.map((taxObject, index) => taxObject.object_code).join(';'),
                    phone: props.info.phone,
                    placeToShow: placeToShow,
                    tin: props.info.tin
                }
            }).then(res2 => {
                if (res2.data.length > 0) {
                    props.setDownload(API_PATH + "services/interactive/debt-invoice/download?tin=" + props.info.tin + "&certificateNum=" + res2.data[0].certificateNum)
                }
                props.updateState({loading: false})
                //
                // setTaxInfo(res2.data);
            })
                .catch(er => {
                    props.updateState({loading: false})
                })
        }
    }
    return (
        <div className={styles.PhysicalPersonDebtInfoNew}>
            <div>
                <h3 className="titleMain font-roboto-bold">
                    Jismoniy shaxs to’g’risida malumot
                </h3>
            </div>

            <div className={styles.manualUpBox}>

                {
                    props.taxInfo?.map((taxObject, index) =>
                        <div className={styles.inputs}>
                            <div className="inputs w-50 mr-20">
                                <label>Kadastr raqami </label>
                                <input type="text" className="w-100 font-roboto-light" disabled/>
                            </div>
                            <div className="inputs w-100 mr-20">
                                <label>Soliq solinadigan ob'ektning manzili </label>
                                <input type="text" className="w-100 font-roboto-light" disabled/>
                            </div>
                            <div className={styles.deleteBtn}>
                                <button>
                                    <span className="icon icon-delete-btn"/>
                                </button>
                            </div>
                        </div>
                    )}
                <div className="inputs w-100 mr-20">
                    <label>Axborot bilan ta'minlash joyi</label>
                    <input type="text" className="w-100 font-roboto-light" placeholder="So’ralgan joy"
                           onChange={(e) => setPlaceToShow(e.target.value)}/>
                </div>
            </div>
            <Link className={`${styles.payment} font-roboto-bold`} onClick={() => create()}>
                <span className="icon icon-add-btn"></span>
                Shakllantirish
            </Link>

        </div>
    );
};

export default connect(null, {updateState})(PhysicalPersonDebtInfoNew);

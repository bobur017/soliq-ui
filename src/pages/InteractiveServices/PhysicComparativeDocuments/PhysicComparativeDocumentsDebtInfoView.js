import React from 'react';
import styles from "./PhysicComparativeDocuments.module.scss"
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/physicTaxInfoAction";
import {API_PATH} from "../../../utils/constants";
const PhysicComparativeDocumentsDebtInfoView = (props) => {
    return (
        props.physicReconciliation &&
        <div className={`${styles.yattComparativeDocumentsDebtInfoView} info-box`}>
            <h2 className="font-roboto-bold">Solishtirma dalolatnoma ko'rish  yoki o'tkazish</h2>
            <div className={`${styles.viewDownload} d-flex w-100`}>
                <button className={`${styles.viewBtn} w-100`}><span className="icon icon-eye" />Ko'rsatish</button>

                <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                props.inn +
                '&name=' +
                btoa(unescape(encodeURIComponent(props.physicInfo?.surName + " " + props.physicInfo?.firstName + " " + props.physicInfo?.middleName))) +
                '&ns10=' +
                props.region.split("_")[0] +
                '&ns11=' +
                props.region.split("_")[1] +
                '&unit=1&user-type=3'} className={`${styles.pdfBtn} w-100`}><span className="icon icon-download"/>PDF yuklab olish</a>


                <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/phys/download?tin=' +
                props.inn +
                '&ns10=' +
                props.region.split("_")[0] +
                '&ns11=' +
                props.region.split("_")[1] +
                '&isItd=true'} className={`${styles.pdfBtn} w-100`}><span className="icon icon-download"/>Excel yuklab olish</a>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        physicInfo: state.physic.physicInfo,
        inn: state.physic.inn,
        physicRegions: state.physic.physicRegions,
        physicReconciliation: state.physic.physicReconciliation,
    }
}

export default connect(mapStateToProps, {updateState})(PhysicComparativeDocumentsDebtInfoView);


import React from 'react';
import styles from "./YurComparativeDocuments.module.scss"
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/yurTaxInfoAction";
import {API_PATH} from "../../../utils/constants";

const YurComparativeDocumentsDebtInfoView = (props) => {
    const downloadReport = () => {
        setTimeout(() => {
            const response = {
                file:
                    API_PATH + 'services/interactive/act-of-reconciliation/jur/download?tin=' +
                    props.inn +
                    '&ns10=' +
                    props.region.split("_")[0] +
                    '&ns11=' +
                    props.region.split("_")[1] +
                    '&date=' +
                    props.date +
                    '&year=' +
                    props.year +
                    '&unit=' +
                    props.unit
            };
            // server sent the url to the file!
            // now, let's download:
            window.open(response.file);
            // you could also do:
            // window.location.href = response.file;
        }, 100);
    };
    return (
        // props.yurReconciliation &&
        <div className="info-box">
            <h2 className="font-roboto-bold">Solishtirma dalolatnoma ko'rish  yoki o'tkazish</h2>

            <div className=" viewDownload d-flex w-100">
                <button className="viewBtn w-100"><span className="icon icon-eye"/>Ko'rsatish</button>
                <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                props.inn +
                '&name=' +
                btoa(unescape(encodeURIComponent(props.yurInfo.fio))) +
                '&ns10=' +
                props.region.split("_")[0] +
                '&ns11=' +
                props.region.split("_")[1] +
                '&date=' +
                props.date +
                '&year=' +
                props.year +
                '&unit=' +
                props.unit +
                '&user-type=2'} className="pdfBtn w-100"><span className="icon icon-download"/>PDF yuklab olish</a>


                <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/jur/download?tin=' +
                props.inn +
                '&ns10=' +
                props.region.split("_")[0] +
                '&ns11=' +
                props.region.split("_")[1] +
                '&date=' +
                props.date +
                '&year=' +
                props.year +
                '&unit=' +
                props.unit} className="exelBtn w-100"><span className="icon icon-download"/>Excel yuklab olish</a>

            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        yurInfo: state.yur.yurInfo,
        inn: state.yur.inn,
        yurRegions: state.yur.yurRegions,
        yurReconciliation: state.yur.yurReconciliation,
    }
}

export default connect(mapStateToProps, {updateState})(YurComparativeDocumentsDebtInfoView);

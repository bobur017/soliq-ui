import React, {useEffect, useState} from 'react';
import YurComparativeDocumentsDebt from "./YurComparativeDocumentsDebt";
import YurComparativeDocumentsDebtInfo from "./YurComparativeDocumentsDebtInfo";
import YurComparativeDocumentsDebtInfoView from "./YurComparativeDocumentsDebtInfoView";
import {getPhysicInfo, request} from "../../../utils/request";
import {toast} from "react-toastify";
import {updateState} from "../../../redux/actions/GlobalAction";
import {connect} from "react-redux";
import YurTaxView from "./YurTaxView";
import {API_PATH} from "../../../utils/constants";

const YurComparativeDocuments = (props) => {
    const [inn, setInn] = useState("");
    const [info, setInfo] = useState({});
    const [regions, setRegions] = useState(null)
    const [region, setRegion] = useState("");
    const [year, setYear] = useState("");
    const [date, setDate] = useState("");
    const [unit, setUnit] = useState("1");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [yurReconciliation, setYurReconciliation] = useState(null);
    const [show, setShow] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (e.target.inn.value.length === 9){
            props.updateState({loading: true})
            request({
                url: "np1",
                method: "get",
                params: {tin: e.target.inn.value}
            })
                .then(res => {
                    if(res.success){
                        setInfo(res.data)
                        request({
                            url: "jur-tax-regions-by-tin",
                            method: "get",
                            params: {
                                lang: "uz",
                                tin: e.target.inn.value
                            }
                        })
                            .then(res2 => {
                                if (res2.success){
                                    setRegions(res2.data)
                                }else {
                                    toast.error(res2.reason)
                                }
                                props.updateState({loading: false})
                            })
                            .catch(er => {
                                props.updateState({loading: false})
                            })
                    } else {
                        toast.error(res.reason)
                        props.updateState({loading: false})
                    }
                })
                .catch(err => {
                    toast.error("Xatolik!");
                    props.updateState({loading: false})
                });
        } else {
            toast.error("INN noto'g'ri kiritildi")
        }
    }

    useEffect(() => {
        return () => {
            setInfo(null);
            setRegions(null)
        }
    }, [])

    const clearData = () => {
        setInn("");
        setInfo(null);
        setRegions(null);
        setRegion(null);
        setYear("");
        setDate("");
        setUnit("1");
        setSelectedRegion("");
        setYurReconciliation(null);
        setShow(false);
    }

    return (
        <div>

                    <YurComparativeDocumentsDebt show={show} submit={submit} setInn={setInn} info={info} setInfo={setInfo} setRegions={setRegions}/>
                    {!show ? regions &&
                        <YurComparativeDocumentsDebtInfo
                            setSelectedRegion={setSelectedRegion}
                            setRegion={setRegion}
                            setYear={setYear}
                            setDate={setDate}
                            setUnit={setUnit}
                            regions={regions}
                            inn={inn}
                            date={date}
                            info={info}
                            yurReconciliation={yurReconciliation}
                            setYurReconciliation={setYurReconciliation}
                            setShow={setShow}
                        /> : ""
                    }
            {
                yurReconciliation &&
                <YurTaxView
                    src={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                        inn +
                        '&name=' +
                        btoa(unescape(encodeURIComponent(info.fio))) +
                        '&ns10=' +
                        region.split("_")[0] +
                        '&ns11=' +
                        region.split("_")[1] +
                        '&date=' +
                        date +
                        '&year=' +
                        year +
                        '&unit=' +
                        unit +
                        '&user-type=2'}
                />
            }
        </div>
    );
};

export default connect(null, {updateState})(YurComparativeDocuments);

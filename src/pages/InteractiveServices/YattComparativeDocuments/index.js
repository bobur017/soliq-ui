import React, {useEffect, useState} from 'react';
import YattComparativeDocumentsDebtInfo from "./YattComparativeDocumentsDebtInfo";
import YattComparativeDocumentsDebtInfoView from "./YattComparativeDocumentsDebtInfoView";
import YattComparativeDocumentsDebt from "./YattComparativeDocumentsDebt";
import {request} from "../../../utils/request";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";
import YurTaxView from "../YurComparativeDocuments/YurTaxView";
import {API_PATH} from "../../../utils/constants";

const YattComparativeDocuments = (props) => {
    const [inn, setInn] = useState("");
    const [info, setInfo] = useState(null);
    const [regions, setRegions] = useState(null)

    const [region, setRegion] = useState("");
    const [isItd, setIsItd] = useState(true);
    const [show, setShow] = useState(false);
    const [yattReconciliation, setYattReconciliation] = useState(null)

    const submit = (e) => {
        e.preventDefault();
        if (e.target.inn.value.length === 9){
            props.updateState({loading: true})
            request({
                url: "phys-np1",
                method: "get",
                params: {tin: e.target.inn.value}
            })
                .then(res => {
                    if(res.success){
                        setInfo(res.data)
                        request({
                            url: "tax-regions-by-tin",
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

    return (
        <div>
            <YattComparativeDocumentsDebt
                submit={submit} info={info} setInn={setInn} setInfo={setInfo} setRegions={setRegions} show={show}/>
            {!show ? regions &&
            <YattComparativeDocumentsDebtInfo
                setRegion={setRegion}
                inn={inn}
                regions={regions}
                info={info}
                setShow={setShow}
                yattReconciliation={yattReconciliation}
                setYattReconciliation={setYattReconciliation}
            /> : ""
            }
            {show &&
                <YurTaxView
                    src={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                        inn +
                        '&name=' +
                        btoa(unescape(encodeURIComponent(info?.surName + " " + info?.firstName + " " + info?.middleName))) +
                        '&ns10=' +
                        region.split("_")[0] +
                        '&ns11=' +
                        region.split("_")[1] +
                        '&unit=1&user-type=3'}
                />
            }
            {/*<YattComparativeDocumentsDebtInfoView*/}
            {/*    region={region}*/}
            {/*    isItd={isItd}*/}
            {/*/>*/}
        </div>
    );
};

export default connect(null, {updateState})(YattComparativeDocuments);

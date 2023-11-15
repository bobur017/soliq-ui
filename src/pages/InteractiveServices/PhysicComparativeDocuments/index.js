import React, {useEffect, useState} from 'react';
import PhysicComparativeDocumentsDebtInfo from "./PhysicComparativeDocumentsDebtInfo";
import PhysicComparativeDocumentsDebtInfoView from "./PhysicComparativeDocumentsDebtInfoView";
import PhysicComparativeDocumentsDebt from "./PhysicComparativeDocumentsDebt";
import PhysicComparativeDocumentsDebtInfoNew from "./PhysicComparativeDocumentsDebtInfoNew";
import YurTaxView from "../YurComparativeDocuments/YurTaxView";
import {request} from "../../../utils/request";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";
import {API_PATH} from "../../../utils/constants";

const PhysicComparativeDocuments = (props) => {
    const [region, setRegion] = useState("");
    const [isItd, setIsItd] = useState(true);
    const [inn, setInn] = useState("");
    const [info, setInfo] = useState(null);
    const [regions, setRegions] = useState(null)
    const [show, setShow] = useState(false)

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
                                tin: e.target.inn.value,
                                isItd: false
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
                            .catch(er=>{
                                props.updateState({loading: false})

                            })
                    } else {
                        props.updateState({loading: false})
                        toast.error(res.reason)
                    }
                })
                .catch(err => {
                    props.updateState({loading: false})
                    toast.error("Xatolik!");
                });
        } else {
            toast.error("INN noto'g'ri kiritilgan")
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
            <PhysicComparativeDocumentsDebt submit={submit} info={info} setInn={setInn} setInfo={setInfo} setRegions={setRegions} show={show}/>
            {/*<PhysicComparativeDocumentsDebtInfo/>*/} {/*bu eskisi yangisi new qo'shilgani*/}
            {!show ? regions &&
            <PhysicComparativeDocumentsDebtInfoNew
                setRegion={setRegion}
                inn={inn}
                regions={regions}
                info={info}
                setShow={setShow}
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
            {/*<PhysicComparativeDocumentsDebtInfoView*/}
            {/*    region={region}*/}
            {/*    isItd={isItd}*/}
            {/*/>*/}
            {/*<YurTaxView src="/assets/dalolatnoma.pdf"/>*/}
        </div>
    );
};

export default connect(null, {updateState})(PhysicComparativeDocuments);

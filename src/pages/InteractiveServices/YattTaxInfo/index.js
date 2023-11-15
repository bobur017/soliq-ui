import React, {useState} from 'react';
import styles from "./YattTaxInfo.module.scss";
import LegalPersonalTaxDebt from "./LegalPersonalTaxDebt";
import LegalPersonalTaxDebtInfo from "./LegalPersonalTaxDebtInfo";
import {getPhysicInfo, request} from "../../../utils/request";
import {API_PATH} from "../../../utils/constants";
import YurTaxView from "../YurTaxInfo/YurTaxView";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";
import {toast} from "react-toastify";

const YattTaxInfo = (props) => {
    const [selectedRegionDocument, setSelectedRegionDocument] = useState(undefined);
    const [tin, setTin] = useState("");
    const [info, setInfo] = useState(null);
    const [taxInfo, setTaxInfo] = useState(null);
    const [repoFiles, setRepoFiles] = useState({});
    const submit = (e) => {
        e.preventDefault();
        if (e.target.inn.value.length === 9 || e.target.inn.value.length === 14) {
            props.updateState({loading: true})

            getPhysicInfo(e.target.inn.value)
                .then(res => {
                    if (res.data.tin){
                        setInfo(res.data);
                        setTin(res.data.tin);
                        request({
                            url: "tax-objects/ind",
                            method: "get",
                            params: {
                                tin: res.data.tin,
                                ns10: res.data.ns10Code,
                                ns11: res.data.ns11Code
                            }
                        }).then(res2 => {
                            setTaxInfo(res2.data);
                            props.updateState({loading: false})
                        })
                            .catch(er => {
                                props.updateState({loading: false})

                            })
                    } else {
                        toast.error("Bunday STIR yoki PINFL li YaTT mavjud emas")
                        props.updateState({loading: false})
                    }
                })
                .catch(err => {
                    props.updateState({loading: false})
                });
        } else {
            toast.error("STIR yoki PINFL noto'g'ri kiritilgan")
        }
    }

    const saveToRepository = (inn, ns10, ns11, objectCode) => {
        props.updateState({loading: true})

        request({
            url: "repository/save/ind",
            method: "get",
            params: {
                tin: inn,
                ns10,
                ns11,
                objectCode
            }
        })
            .then(res => {
                setSelectedRegionDocument(API_PATH + "repository/download?certificateId=" + res.data.repositoryId)
                // setRepoFiles({...repoFiles, [`${inn}_${ns10}_${ns11}_${objectCode}`]: res.data.repositoryId});
                props.updateState({loading: false})
            })
            .catch(er => {
                props.updateState({loading: false})
            })
    }
    console.log(props)
    return (
        <div className={styles.interactiveServices}>
            <LegalPersonalTaxDebt info={info} submit={submit} setInfo={setInfo} setTaxInfo={setTaxInfo}
                                  selectedRegionDocument={selectedRegionDocument}/>

            {info &&
                <>
                    {selectedRegionDocument ? "" :
                        <LegalPersonalTaxDebtInfo tin={tin} taxObjects={taxInfo} saveToRepository={saveToRepository}
                                                  repoFiles={repoFiles}/>}
                    {selectedRegionDocument ? <YurTaxView src={selectedRegionDocument}/> : ""}
                </>}
        </div>
    );
};

export default connect(null, {updateState})(YattTaxInfo);

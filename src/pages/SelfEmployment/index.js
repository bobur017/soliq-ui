import React, {useEffect, useState} from 'react';
import SelfEmploymentForms from "./SelfEmploymentForms";
import styles from "./SelfEmployment.module.scss";
import SelfEmploymentView from "./SelfEmploymentView";
import {getPhysicInfo, request} from "../../utils/request";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {updateState} from "../../redux/actions/GlobalAction";

const SelfEmployment = (props) => {
        const [url, setUrl] = useState('create');
        const [canPay, setCanPay] = useState(false);
        const [info, setInfo] = useState(null);
        const [pinfl, setPinfl] = useState("");
        const [actType, setActType] = useState([]);
        const [regions, setRegions] = useState([]);
        const [districts, setDistricts] = useState([]);
        const [district, setDistrict] = useState({});
        const [region, setRegion] = useState('');
        const [selectedAct, setSelectedAct] = useState(null);
        const [content, setContent] = useState(null);
        const [smsId, setSmsId] = useState(undefined);
        const [smsPhone, setSmsPhone] = useState(undefined);
        const [confirmCode, setConfirmCode] = useState(undefined);
        const [finishStatus, setFinishStatus] = useState(false);
        console.log(url)
        const submit = (e) => {
            e.preventDefault();
            props.updateState({loading: true})

            getPhysicInfo(e.target.tin.value).then(res => {
                if (res.success && res.data.tin) {
                    props.updateState({loading: true})
                    request({
                        url: "slf-emp/getbyid",
                        method: "get",
                        params: {
                            pinfl: e.target.tin.value
                        }
                    }).then(res1 => {
                        props.updateState({loading: false})
                        if (res1.success) {
                            if (res1.data) {
                                props.updateState({loading: true})
                                setUrl('view')
                                request({
                                    url: "slf-emp/get-document",
                                    method: "get",
                                    params: {
                                        uniqueCode: res1.data.uniqueCode
                                    }
                                }).then(res2 => {
                                    props.updateState({loading: false})

                                    if (res2.success) {
                                        setCanPay(false)
                                        setContent(res2.data.replaceAll("\n", ""))
                                    } else {
                                        toast.error(res2.reason)
                                    }
                                })
                            } else {
                                setPinfl(e.target.tin.value);
                                setInfo(res.data);
                                setUrl('create')
                            }
                        }
                    })
                } else {
                    toast.error("Bunday JShShIR mavjud emas");
                }
                props.updateState({loading: false})
            })
                .catch(e => {
                    toast.error("Serverda xatolik!");
                    props.updateState({loading: false})
                })
        }
        const regExp = /[0-9]/g;
        const regExpCode = /[0-9]/g;
        console.log(regExp.test(smsPhone))
        const sendSms = () => {
            if (smsPhone?.length === 13 && smsPhone.startsWith('+') && regExp.test(smsPhone)) {
                request({
                    url: "sms-confirm/send",
                    method: "post",
                    data: {
                        phoneNumber: smsPhone
                    }
                }).then(res1 => {
                    if (res1?.status?.code === 200) {
                        toast.success(res1?.status?.message);
                        setSmsId(res1.data)
                    } else {
                        toast.error(res1?.status?.message);
                    }
                })
            } else {
                toast.error("Telefon raqamni format asosida kiriting");
            }
        }

        const confirmSms = () => {
            if (confirmCode?.length === 6 && regExpCode.test(confirmCode)) {
                request({
                    url: "sms-confirm/confirm",
                    method: "post",
                    data: {
                        id: smsId,
                        code: confirmCode
                    }
                }).then(res => {
                    if (res?.data) {
                        toast.success(res?.status?.message);
                        setFinishStatus(res.data)
                    } else {
                        toast.error(res?.status?.message);
                    }
                })
            } else {
                toast.error("Telefon raqamni format asosida kiriting");
            }
        }


        const getNs11ByNs10 = (ns10) => {
            request({
                url: "ns11",
                method: "get",
                params: {
                    "ns10Code": ns10
                }
            }).then(res => {
                setDistricts(res.list);
                setRegion(ns10)
            })
        }

        useEffect(() => {
            request({
                url: "slf-emp/act-types",
                method: "get",
            }).then(res => {
                if (res.success) {
                    setActType(res.data)
                }
            })

            request({
                url: "ns10",
                method: "get",
            }).then(res => {
                setRegions(res.list)
            })
        }, [])

        const register = () => {
            if (!district.value) {
                toast.error("Iltimos, faoliyat yuritiladigan hududni tanlang");
            } else if (!selectedAct) {
                toast.error("Iltimos, faoliyat yuritiladigan sohani tanlang");
            } else {
                props.updateState({loading: true})
                request({
                    url: "slf-emp/register",
                    method: "post",
                    data: {
                        personalNum: pinfl,
                        ns10Code: region,
                        ns11Code: district.value,
                        phoneNumber: smsPhone,
                        activities: [
                            {
                                actCode: selectedAct
                            }
                        ]
                    }
                }).then(res => {
                    props.updateState({loading: false})
                    if (res.success) {
                        setActType([]);
                        setRegions([]);
                        setDistricts([]);
                        setDistrict({});
                        setRegion('');
                        setSelectedAct(null);
                        setSmsId(undefined);
                        setSmsPhone(undefined);
                        setConfirmCode(undefined);
                        setFinishStatus(false);
                        setUrl('view')
                        setCanPay(true)
                        toast.success(res.message)
                        request({
                            url: "slf-emp/getbyid",
                            method: "get",
                            params: {
                                pinfl: pinfl
                            }
                        }).then(res1 => {
                            if (res1.success) {
                                if (res1.data) {
                                    setUrl('view')
                                    props.updateState({loading: true})
                                    request({
                                        url: "slf-emp/get-document",
                                        method: "get",
                                        params: {
                                            uniqueCode: res1.data.uniqueCode
                                        }
                                    })
                                        .then(res2 => {
                                            props.updateState({loading: false})
                                            if (res2.success) {
                                                setContent(res2.data.replaceAll("\n", ""))
                                            } else {
                                                toast.error(res2.reason)
                                            }
                                        })
                                }
                            }
                        })

                    } else {
                        toast.error(res.message)
                    }
                })

            }
        }
        return (
            <div className={styles.SelfEmployment}>
                <p className={styles.path}>
                    <span>Asosiy</span>
                    <img src="/assets/arrow-right.png" alt=""/>
                    <span>Yonlangan xodimlarni ro’yxatdan o’tkazish</span>
                </p>
                {url === 'create' && <SelfEmploymentForms submit={submit} info={info} actType={actType} setInfo={setInfo}
                                                          getNs11ByNs10={getNs11ByNs10} districts={districts}
                                                          regions={regions}
                                                          getDistricts={getNs11ByNs10} district={district}
                                                          setDistrict={setDistrict}
                                                          register={register} setSelectedAct={setSelectedAct}
                                                          confirmSms={confirmSms} sendSms={sendSms} smsId={smsId}
                                                          setSmsPhone={setSmsPhone}
                                                          setConfirmCode={setConfirmCode} finishStatus={finishStatus}
                />}

                {url === 'view' && content &&
                <SelfEmploymentView history={props.history} content={content} setUrl={setUrl} canPay={canPay}/>
                }
            </div>
        );
    }
;

export default connect(null, {updateState})(SelfEmployment);

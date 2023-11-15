import React, {useEffect, useState} from 'react';
import styles from './RegistrationOfTheLeaseAgreement.module.scss'
import Select from "react-select";
import GetInfo from "../../component/GetInfo";
import {connect} from "react-redux";
import {getUserData, updateState} from "../../redux/actions/RentAction";
import {request} from "../../utils/request";
import {toast} from "react-toastify";


const RegistrationOfTheLeaseAgreementNewTwo = (props) => {
    const [contract, setContract] = useState({
        "isInvoiceCreated": 0,
        "otherConditions": "",
        "bookingType": 3,
        "myRentType": 1
    });

    const [pkcs7, setpkcs7] = useState(undefined);
    const [userTypes, setUserTypes] = useState(undefined);
    const [showLivePlaceLesse, setShowLivePlaceLesse] = useState(false);
    const [showLivePlaceReceiver, setShowLivePlaceReceiver] = useState(false);
    const errorWrongPassword = 'Пароль неверный.';
    const errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.';

    const [currensies, setCurrensies] = useState(undefined);
    const [purposes, setPurposes] = useState(undefined);
    const [communals, setCommunals] = useState(undefined);
    const [streets, setStreets] = useState(undefined);
    const [taxObjects, setTaxObjects] = useState(undefined);
    let [taxObject, setTaxObject] = useState(undefined);
    const [ns10, setNs10] = useState(undefined);
    const [ns11, setNs11] = useState(undefined);
    let [friends, setFriends] = useState([]);
    const [streetsReceiver, setStreetsReceiver] = useState(undefined);
    const [ns11Receiver, setNs11Receiver] = useState(undefined);
    let {account, lessee, receiver, updateState} = props
    const vo=JSON.parse(localStorage.getItem("vo"))
    const keyId=localStorage.getItem("keyId")
    useEffect(() => {
        getNs10()
        getNs11()
        getStreets()
        getUserTypes()
        getTaxObjects()
        getCurrensies()
        getPurposes()
        getCommunals()
        props.getUserData(props.pinfl).then(res => {
            console.log(lessee)
            res.communals = communals.map(communal => communal.id)
            props.updateState({lessee: res})
            console.log(lessee)

        })
    }, []);
    const getNs10 = () => {
        request({
            url: "https://my3.soliq.uz/api/general-api/catalog/ns10",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {

            setNs10(res.list)
        })
    }
    const getCurrensies = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/catalog/currencies/get-all",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setCurrensies(res.list)
        })
    }
    const getPurposes = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/catalog/get-all-object-purpose-types/1/1",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setPurposes(res.list)
        })
    }
    const getCommunals = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/communals/get-list",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {

            setCommunals(res.list)
        })
    }
    const getTaxObjects = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/object/fiz-tax-objects",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setTaxObjects(res.data)
        })
    }
    const getNs11 = (n10 = undefined) => {
        request({
            url: "https://my3.soliq.uz/api/general-api/catalog/ns11/get-by-ns10/" + (n10 ? n10 : lessee?.ns10Code),
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setNs11(res.list)
        })
    }
    const getStreets = (ns10 = undefined, ns11 = undefined) => {
        request({
            url: "https://my3.soliq.uz/api/general-api/catalog/village/" + (ns10 ? ns10 : account.regionCode) + "/" + (ns11 ? ns11 : account.districtCode),
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setStreets(res.list)
        })
    }

    const getNs11Receiver = (ns10) => {

        request({
            url: "https://my3.soliq.uz/api/general-api/catalog/ns11/get-by-ns10/" + (ns10 ? ns10 : receiver?.ns10Code),
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setNs11Receiver(res.list)
        })
    }
    const getStreetsReceiver = (ns10, ns11) => {
        request({
            url: "https://my3.soliq.uz/api/general-api/catalog/village/" + (ns10 ? ns10 : receiver?.ns10Code) + "/" + (ns11 ? ns11 : receiver.ns11Code),
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setStreetsReceiver(res.list)
        })
    }
    const getUserTypes = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/catalog/get-user-types",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setUserTypes(res.list)
        })
    }

    const options = [
        {value: 'blues', label: 'Blues'},
        {value: 'rock', label: 'Rock'},
        {value: 'jazz', label: 'Jazz'},
        {value: 'orchestra', label: 'Orchestra'}
    ];

    const validate = (event) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
        if (event.target.value.length == 14) {
            setPin(event.target.value)
        }

    }
    const setPin = (tin) => {
        props.getUserData(tin).then(res => {
            res.communals = []
            updateState({receiver: {...receiver,...res}})
            getNs11Receiver()
            getStreetsReceiver()
        })
        // updateState({pinfl: tin})
    }
    const validateFriend = (event, index) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
        if (event.target.value.length == 14) {
            setPinFriend(event.target.value, index)
        }

    }
    const insert = (arr, index, newItem) => [
        // part of the array before the specified index
        ...arr.slice(0, index),
        // inserted item
        newItem,
        // part of the array after the specified index
        ...arr.slice(index)
    ]
    const setPinFriend = (tin, index) => {
        props.getUserData(tin).then(res => {
            friends = insert(friends, index, res)
            setFriends([...friends])
        })

    }
    const add = () => {
        console.log(taxObject.rentField)
        const object = {
            contract,
            from: {
                members: [
                    {
                        items:[
                            {
                                userType: 1,
                                subUserTypes: [
                                    1
                                ],
                                tin: lessee.tin,
                                pinfl: account.pinfl,
                                yurName: account.organizationName,
                                fio: account.name,
                                "ns10": account.regionCode,
                                "ns11": account.districtCode,
                                "address": lessee.address,
                                "currentAddress": lessee.address,
                                "currentNs10": lessee.currentNs10,
                                "currentNs11": lessee.currentNs11,
                                "currentVillageName": lessee.currentVillageName,
                                "currentStreet": lessee.currentStreet,
                                "currentHouse": lessee.currentHouse,
                                "currentApartment": lessee.currentApartment,
                                "phone": lessee.phone,
                                "communals": lessee.communals,
                                "isTeamLeader": 1
                            }
                        ]
                    }
                ],
                "communals": lessee.communals,
                "userType": 1
            },
            to: {
                members: [
                    {
                        items: [
                            {
                                "userType": receiver.userType,
                                "pinfl": receiver.personalNum,
                                "fio": receiver?.surName + " " + receiver?.firstName + " " + receiver?.middleName,
                                "ns10": receiver?.ns10Code,
                                "ns11": receiver?.ns11Code,
                                "address": receiver.address,
                                "currentAddress": receiver.address,
                                "currentNs10": receiver?.currentNs10,
                                "currentNs11": receiver?.currentNs11,
                                "currentVillage": receiver?.currentVillage,
                                "currentStreet": receiver?.currentStreet,
                                "currentHouse": receiver?.currentHouse,
                                "currentApartment": receiver?.currentApartment,
                                "phone": receiver?.phone,
                                "subUserTypes": [
                                    1
                                ],
                                "isTeamLeader": 1
                            },
                            ...friends.map(value => {
                                return {
                                    "userType": 1,
                                    "pinfl": value.personalNum,
                                    "fio": value?.surName + " " + value?.firstName + " " + value?.middleName,
                                    "ns10": value?.ns10Code,
                                    "ns11": value?.ns11Code,
                                    "address": value.address,
                                    "subUserTypes": [
                                        1
                                    ],
                                    "isTeamLeader": 0
                                }
                            })
                        ]
                    }
                ],
                "communals": receiver.communals,
                "userType": receiver.userType
            },
            object: {
                items: [
                    {
                        "currenciesCode": taxObject.currenciesCode,
                        "objectCode": taxObject.objectCode,
                        "objectNs10": taxObject.ns10Code,
                        "objectNs11": taxObject.ns11Code,
                        "objectAddress": taxObject.mulkAddress,
                        "allField": taxObject.mulkTotalArea,
                        "rentField": taxObject.rentField,
                        "beginDate": taxObject.beginDate,
                        "endDate": taxObject.endDate,
                        "monthSum": taxObject.monthSum,
                        "allSum": "2.17",
                        "objectTypeId": 1,
                        "rentPurposes":taxObject.rentPurposes.map(item => {
                            if (item.rentArea)
                                return {
                                    "purposeTypeId": item.purposeTypeId,
                                    "rentArea": item.rentArea,
                                    "monthSum": taxObject.monthSum
                                }
                        })
                    }
                ]
            }
        }
        console.log(object)
        sign(object)


    }
    console.log(pkcs7)

    const sign = (data) => {
        window.EIMZOClient.loadKey(vo, (id) => {
            window.EIMZOClient.createPkcs7(id,JSON.stringify(data) , null, (pkcs7) => {
                setpkcs7({pkcs7})
                save(pkcs7)
            }, (e, r) => {
                if (r) {
                    if (r.indexOf("BadPaddingException") != -1) {
                        this.uiShowMessage(this.errorWrongPassword);
                    } else {
                        this.uiShowMessage(r);
                    }
                } else {
                    this.uiShowMessage(this.errorBrowserWS);
                }
                if (e) this.wsError(e);
            });
        }, (e, r) => {
            if (r) {
                if (r.indexOf("BadPaddingException") != -1) {
                    this.uiShowMessage(this.errorWrongPassword);
                } else {
                    this.uiShowMessage(r);
                }
            } else {
                this.uiShowMessage(this.errorBrowserWS);
            }
            if (e) this.wsError(e);
        });
    };
    const save=(pkcs7)=>{
        request({
            url: "https://ijara.soliq.uz/api/rent/client/contract/add",
            method: "post",
            data: {
                ijara: true,
                signData:pkcs7

            }
        }).then(res => {
           console.log(res)
        })
    }
    return (
        <div className={styles.RegistrationOfTheLeaseAgreementNew}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomasini ro’yxatdan o’tkazish</span>
            </p>

            {/*<div className="titleBox">*/}
            {/*<div className="w-100">*/}
            {/*    <h3 className="titleMain font-roboto-bold">*/}
            {/*        Ijara shartnomasini ro’yxatdan o’tkazish*/}
            {/*    </h3>*/}
            {/*    <div className={styles.progressMain}>*/}
            {/*        <div className={`${styles.dot} ${styles.activeDot}`}><div><span className={styles.activeDot}></span></div></div>*/}
            {/*        <div className={styles.dot}><div><span  className={styles.activeDot}></span></div><h1 className={`m-0 font-roboto-regular`}>Kerakli ma’lumotlar kiritish</h1></div>*/}
            {/*        <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>Hujjatni shallantirish</h1></div>*/}
            {/*        <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>  Hizmat uchun to’lovni amalga oshirish</h1></div>*/}
            {/*        <div className={styles.dot}><div><span><span className="icon icon-bird"></span></span></div><h1 className={` m-0 font-roboto-regular`}>Hizmat yakunlandi</h1></div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*     </div>*/}
            <GetInfo type={"IJSH1"}/>
            <div className={styles.twoPart}>
                <div className={styles.leftPart}>
                    <h3 className="font-roboto-bold">Ijaraga beruvchi to‘grisida ma‘lumot</h3>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="PINFL1">PINFL</label>
                            <input type="text" className="w-100" id="PINFL1" defaultValue={account.pinfl}
                                   disabled={true}/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="FIO1">F.I.O</label>
                            <input type="text" className="w-100" id="FIO1" placeholder="-" defaultValue={account.name}
                                   disabled={true}/>
                        </div>
                    </div>
                    <h2>Ro‘yxatga olingan manzili</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea1">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea1" placeholder="-"
                                   defaultValue={lessee?.ns10NameUz} disabled/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName1">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName1" placeholder="-"
                                   defaultValue={lessee?.ns11NameUz} disabled/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="adress1">Manzili</label>
                            <input type="text" className="w-100" id="address1" placeholder="-"
                                   defaultValue={lessee?.address} disabled/>
                        </div>

                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="phone1">Telefon raqami <span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="phone1" placeholder="+998" onChange={(e) => {
                                props.updateState({lessee: {...lessee, phone: e.target.value}})
                            }}/>
                        </div>

                    </div>
                    <div className={styles.residentialAddress1}>
                        <input type="checkbox" id="residentialAddress1"
                               onClick={() => setShowLivePlaceLesse(!showLivePlaceLesse)}/>
                        <h2>Yashash manzili</h2>
                    </div>

                    {showLivePlaceLesse ? <>
                        <div className="d-flex w-100">
                            <div className="inputs w-100 mr-20 z-index-main">
                                <label htmlFor="nameArea2">Hudud nomi</label>
                                <Select options={ns10?.map(ns => {
                                    return {value: ns.code, label: ns.nameLatn}
                                })} onChange={(e) => {
                                    getNs11(e.value);
                                    props.updateState({lessee: {...lessee, currentNs10: e.value}})
                                }} placeholder="-"/>
                            </div>
                            <div className="inputs w-100 mr-20 z-index-main">
                                <label htmlFor="regionName2">Tuman nomi</label>
                                <Select options={ns11?.map(ns => {
                                    return {value: ns.code, label: ns.nameLatn}
                                })} placeholder="-" onChange={(e) => {
                                    getStreets(lessee.currentNs10, e.value);
                                    props.updateState({lessee: {...lessee, currentNs11: e.value}})
                                }}/>
                            </div>
                            <div className="inputs w-100 z-index-main">
                                <label htmlFor="neighborhoodName1">Mahalla nomi</label>
                                <Select options={streets?.map(ns => {
                                    return {value: ns.code, label: ns.name_uz_latn}
                                })} onChange={(e) => {
                                    props.updateState({lessee: {...lessee, currentVillageName: e.value}})
                                }} placeholder="-"/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="inputs w-100 mr-20">
                                <label htmlFor="streetName1">Ko'cha nomi</label>
                                <input type="text" className="w-100" id="streetName1" placeholder="-" onChange={(e) => {
                                    props.updateState({lessee: {...lessee, currentStreet: e.target.value}})
                                }}/>
                            </div>
                            <div className="inputs w-33 mr-20">
                                <label htmlFor="home1">Uy</label>
                                <input type="text" className="w-100" id="home1" placeholder="-" onChange={(e) => {
                                    props.updateState({lessee: {...lessee, currentApartment: e.target.value}})
                                }}/>
                            </div>
                            <div className="inputs w-33">
                                <label htmlFor="kv1">Xonadon</label>
                                <input type="text" className="w-100" id="kv1" placeholder="-" onChange={(e) => {
                                    props.updateState({lessee: {...lessee, currentHouse: e.target.value}})
                                }}/>
                            </div>
                        </div>
                    </> : ""}


                </div>
                <div className={styles.rightPart}>
                    <h3 className="font-roboto-bold">Ijaraga oluvchi to‘grisida ma‘lumot</h3>
                    <div className="d-flex">

                        <div className="inputs w-100 mr-20 z-index-main">
                            <label htmlFor="renterType1">ijaraga oluvchi turi <span
                                className="withStar">*</span></label>
                            <Select options={userTypes?.map(ut => {

                                return {value: ut.code, label: ut.name_uz_latn}
                            })} placeholder="-" onChange={(e) => {
                                props.updateState({receiver: {...receiver, userType: e.value}})
                            }}/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="PINFL2">PINFL</label>
                            <input type="text" className="w-100" id="PINFL2" placeholder="-" onChange={validate}/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="FISH1">F.I.SH</label>

                            <input type="text" className="w-100" id="FISH1" placeholder="-"
                                   defaultValue={receiver ? receiver?.surName + " " + receiver?.firstName + " " + receiver?.middleName : ""}
                                   disabled/>
                        </div>
                    </div>
                    <h2>Ro‘yxatga olingan manzili</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea1">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea1" placeholder="-"
                                   defaultValue={receiver?.ns10NameUz} disabled/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName1">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName1" placeholder="-"
                                   defaultValue={receiver?.ns11NameUz} disabled/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="address2">Ro‘yxatga otgan manzili</label>
                            <input type="text" className="w-100" id="address2" placeholder="-"
                                   defaultValue={receiver?.address} disabled/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="phone2">Telefon raqami <span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="phone2" placeholder="+998" onChange={(e) => {
                                props.updateState({receiver: {...receiver, phone: e.target.value}})
                            }}/>
                        </div>
                    </div>
                    <div className={styles.residentialAddress1}>
                        <input type="checkbox" id="residentialAddress2"
                               onClick={() => setShowLivePlaceReceiver(!showLivePlaceReceiver)}/>
                        <h2>Yashash manzili</h2>
                    </div>
                    {showLivePlaceReceiver ? <>
                        <div className="d-flex w-100">
                            <div className="inputs w-100 mr-20 z-index-main">
                                <label htmlFor="nameArea3">Hudud nomi</label>
                                <Select options={ns10?.map(ns => {
                                    return {value: ns.code, label: ns.nameLatn}
                                })} placeholder="-" onChange={(e) => {
                                    getNs11Receiver(e.value);
                                    props.updateState({receiver: {...receiver, currentNs10: e.value}})
                                }}/>
                            </div>
                            <div className="inputs w-100 mr-20 z-index-main">
                                <label htmlFor="regionName3">Tuman nomi</label>
                                <Select options={ns11Receiver?.map(ns => {
                                    return {value: ns.code, label: ns.nameLatn}
                                })} placeholder="-" onChange={(e) => {
                                    getStreetsReceiver(receiver.currentNs10, e.value);
                                    props.updateState({receiver: {...receiver, currentNs11: e.value}})
                                }}/>
                            </div>
                            <div className="inputs w-100 z-index-main">
                                <label htmlFor="neighborhoodName3">Mahalla nomi</label>
                                <Select options={streetsReceiver?.map(ns => {
                                    return {value: ns.code, label: ns.name_uz_latn}
                                })} placeholder="-" onChange={(e) => {
                                    props.updateState({receiver: {...receiver, currentVillage: e.value}})
                                }}/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="inputs w-100 mr-20">
                                <label htmlFor="streetName2">Ko'cha nomi</label>
                                <input type="text" className="w-100" id="streetName2" placeholder="-"
                                       onChange={(e) => {
                                           props.updateState({receiver: {...receiver, currentStreet: e.target.value}})
                                       }}
                                />
                            </div>
                            <div className="inputs w-33 mr-20">
                                <label htmlFor="home2">Uy</label>
                                <input type="text" className="w-100" id="home2" placeholder="-"
                                       onChange={(e) => {
                                           props.updateState({
                                               receiver: {
                                                   ...receiver,
                                                   currentApartment: e.target.value
                                               }
                                           })
                                       }}
                                />
                            </div>
                            <div className="inputs w-33">
                                <label htmlFor="kv2">Xonadon</label>
                                <input type="text" className="w-100" id="kv2" placeholder="-" onChange={(e) => {
                                    props.updateState({receiver: {...receiver, currentHouse: e.target.value}})
                                }}/>
                            </div>
                        </div>
                    </> : ""}
                    <h2>Ijarada birga yashovchilar</h2>
                    {friends.map((friend, index) =>
                        <div className="d-flex">
                            <div className="inputs w-100 mr-20">
                                <label htmlFor="PINFL3">PINFL</label>
                                <input type="text" className="w-100" id="PINFL3" placeholder="-"
                                       defaultValue={friend?.personalNum} onChange={(e) => validateFriend(e, index)}/>
                            </div>
                            <div className="inputs w-100 mr-20">
                                <label htmlFor="FIO2">F.I.O</label>
                                <input type="text"
                                       defaultValue={friend.surName ? (friend?.surName + " " + friend?.firstName + " " + friend?.middleName) : ""}
                                       className="w-100" id="FIO2" placeholder="-" disabled/>
                            </div>
                            <div className={styles.button} onClick={() => {
                                friends.splice(index, 1);
                                setFriends([...friends])
                            }}>
                                <span className="icon icon-delete-btn"/>
                            </div>
                        </div>
                    )}
                    <button className={styles.additionBtn} onClick={() => {
                        friends.push({});
                        setFriends([...friends]);
                    }}>
                        <span className="icon icon-circleplus"/>
                        Ijarada birga yashovchilar qoshish
                    </button>
                </div>
            </div>
            <div className={styles.onePart}>
                <h3>Ijaraga berilayotgan ko'chmas mulk to'g'risida ma'lumot</h3>
                <div className={styles.residentialAddress1}>
                    <input type="checkbox" id="residentialAddress2"/>
                    <h2>Ikkilamchi ijaraga roziman</h2>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label htmlFor="nameArea3">Ko'chmas mulk obyekti <span className="withStar">*</span></label>
                        <Select options={taxObjects?.map(to => {
                            return {value: to.objectCode, label: to.objectCode + " " + to.erAddress}
                        })} placeholder="-" onChange={e => {
                            taxObject = taxObjects?.find(to => to.objectCode == e.value)
                            taxObject.rentPurposes = []
                            setTaxObject(taxObject)
                        }}/>
                    </div>
                    <div className="inputs w-50 mr-20">
                        <label htmlFor="estate1">Ko'chmas mulkning turi</label>
                        <input type="text" className="w-100" id="estate1" value={"Turar"} placeholder="-" disabled/>
                    </div>
                    <div className={styles.button}>
                        <span className="icon icon-not"/>
                    </div>
                </div>
                {/*<div className="d-flex">*/}
                {/*    <div className="inputs w-100 ">*/}
                {/*        <label htmlFor="person1">Yuridik shaxsning nomi</label>*/}
                {/*        <input type="text" className="w-100" id="person1" placeholder="-"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="nameArea3">Hudud nomi</label>
                        <input type="text" className="w-100" id="nameArea3" placeholder="-"
                               defaultValue={taxObject?.ns10NameUz} disabled/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="regionName3">Tuman nomi</label>
                        <input type="text" className="w-100" id="regionName3" placeholder="-"
                               defaultValue={taxObject?.ns11NameUz} disabled/>
                    </div>
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label htmlFor="nameArea3">Ijaraga berilish holati <span className="withStar">*</span></label>
                        <Select options={[
                            {value: 'full', label: "to'liq"},
                            {value: 'part', label: "qisman"},
                        ]} placeholder="-"/>
                    </div>
                    <div className="inputs w-100">
                        <label htmlFor="area1">Umumiy maydon (kv.m)</label>
                        <input type="text" className="w-100" id="area1" placeholder="-"
                               defaultValue={taxObject?.mulkTotalArea} disabled/>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="date1">Ijara sanasi boshlanishi <span className="withStar">*</span></label>
                        <input type="date" className="w-100" id="date1" placeholder="-" onChange={e => {
                            setTaxObject({...taxObject, beginDate: new Date(e.target.value).ddmmyyyy()});
                        }}/>
                    </div>
                    <div className="inputs w-100">
                        <label htmlFor="date2">Ijara sanasi tugashi</label>
                        <input type="date" className="w-100" id="date2" placeholder="-" onChange={e => {
                            setTaxObject({...taxObject, endDate: new Date(e.target.value).ddmmyyyy()});
                        }}/>
                    </div>

                </div>


                <h2>Ko'chmas mulkdan foydalanish turi</h2>
                <div className={styles.residentialAddress1}>
                    <input type="checkbox" id="residentialAddress2"/>
                    <h2>Bepul</h2>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label>Tolov turi <span className="withStar">*</span></label>
                        <Select options={currensies?.map(cs => {
                            return {
                                value: cs.code, label: cs.nameUzLatin
                            }
                        })} placeholder="-" onChange={e => {
                            taxObject.currenciesCode = e.value
                            setTaxObject({...taxObject})
                        }}/>
                    </div>
                    <div className="w-100 d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="monthPayment1">Bir oylik to'lovi <span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="monthPayment1" placeholder="-" onChange={e => {
                                taxObject.monthSum = e.target.value
                                setTaxObject({...taxObject})
                            }}/>
                        </div>
                        <div className="inputs w-100 ">
                            <label htmlFor="allSum1">To'lovning umumiy summasi <span
                                className="withStar">*</span></label>
                            <input type="text" className="w-100" id="allsum1" placeholder="-" disabled/>
                        </div>
                    </div>
                </div>

                <div className="d-flex">


                    {taxObject?.rentPurposes?.map((item, index) =>
                        <div className="inputs w-100 mr-20">
                            <div className="inputs w-100 mr-20 z-index-main">
                                <label>Mulkning foydalanish maqsadi <span className="withStar">*</span></label>
                                <Select options={purposes?.map(cs => {
                                    return {
                                        value: cs.code, label: cs.name_uz_latn
                                    }
                                })} placeholder="-" onChange={e => {
                                    taxObject.rentPurposes[index].purposeTypeId = e.value
                                }}/>
                            </div>
                            <label htmlFor="areaArenda1">Ijara maydoni<span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="areaArenda1" placeholder="-" onChange={event => {
                                event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
                                console.log(taxObject.rentPurposes.reduce((previousValue, currentValue) => previousValue + (currentValue.rentArea ? currentValue.rentArea : 0), 0))
                                console.log(taxObject.rentPurposes && taxObject.rentPurposes.reduce((previousValue, currentValue) => previousValue + (currentValue.rentArea ? currentValue.rentArea : 0), 0) < taxObject.mulkTotalArea)

                                if (taxObject.rentPurposes && taxObject.rentPurposes.reduce((previousValue, currentValue) => previousValue + (currentValue.rentArea ? currentValue.rentArea : 0), 0) + Number(event.target.value) < taxObject.mulkTotalArea) {
                                    taxObject.rentPurposes[index].rentArea = Number(event.target.value)
                                    taxObject.rentField = taxObject.rentPurposes.reduce((pv, cv, ci, arr) => cv.rentArea + pv,0)
                                    console.log(taxObject.rentField)
                                } else {
                                    toast.error("Ijara beriladigan joy umumiy maydondan kichik bo'lsihi kerak!!!")
                                    event.target.value = 0
                                }
                                setTaxObject({...taxObject})
                            }}/>

                            <button className={styles.addBtn} onClick={() => {
                                taxObject.rentPurposes.splice(index, 1);
                                setTaxObject({...taxObject})
                            }}><span className="icon icon-delete-btn"/>
                            </button>
                        </div>)}


                    {taxObject ? <button className={styles.addBtn} onClick={() => {
                        taxObject.rentPurposes = [...taxObject.rentPurposes, {}]
                        setTaxObject({...taxObject})
                    }}><span className="icon icon-plus-btn"/>
                    </button> : ""}
                </div>
            </div>
            <div className={styles.thirdPart}>
                <h3>Quyidagi kommunal to'lovlar ijara shartnomasiga asosan IJARAGA OLUVCHI tomonidan amalga
                    oshiriladi</h3>

                <div className="d-flex">
                    {
                        communals?.map(communal => <div className={styles.residentialAddress112}>
                            <input type="checkbox" defaultValue={communal.id} onChange={(e) => {
                                if (lessee.communals?.includes(Number(e.target.value))) {
                                    lessee.communals = lessee.communals.filter(c => c != e.target.value)
                                    lessee = {...lessee, communals: [...lessee.communals]}
                                    receiver.communals.push(Number(e.target.value))

                                } else {
                                    receiver.communals = receiver.communals.filter(c => c != e.target.value)
                                    receiver = {...receiver, communals: [...receiver.communals]}
                                    lessee.communals.push(Number(e.target.value))
                                }
                                console.log(lessee.communals)
                                console.log(receiver.communals)
                                props.updateState({lessee, receiver})
                            }}/>
                            <h2>{communal.nameUzLatin}</h2>
                        </div>)
                    }

                </div>
                <div className="d-flex">
                    <div className="inputs w-100">
                        <label htmlFor="uslugi1">Qo'shimcha shartlar</label>
                        <input type="text" className="w-100" id="uslugi1" placeholder="-"
                               onChange={(e) => setContract({...contract, otherConditions: e.target.value})}/>
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <button className={styles.backBtn}

                            onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement")}>
                        <span className="icon icon-arrow-left"/>
                        Ortga qaytish
                    </button>
                    <button className={styles.paidBtn}
                            onClick={add}>
                        {/*onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement/completed")}>*/}
                        <span className="icon icon-circleplus"/>
                        Shartnomani yaratish
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pinfl: state.rent.pinfl,
        lessee: state.rent.lessee,
        receiver: state.rent.receiver,
        account: state.rent.account,
        keyId: state.rent.keyId,
        vo: state.rent.vo
    };
};
export default connect(mapStateToProps, {updateState, getUserData})(RegistrationOfTheLeaseAgreementNewTwo);

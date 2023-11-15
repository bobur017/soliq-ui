import React, {Component} from 'react';
import styles from './ElectronicDigitalSignature.module.scss';
import Select from 'react-select';
import GetInfo from '../../component/GetInfo';
import {request} from "../../utils/request";
import {Base64} from "js-base64";
import {toast} from "react-toastify";
import {API_PATH} from "../../utils/constants";
import {downloadFile} from "../../utils/common";


class ElectronicDigitalSignaturePhysical extends Component {
    EIMZO_MAJOR = 3;
    EIMZO_MINOR = 37;
    errorCAPIWS = 'Ошибка соединения с E-IMZO. Возможно у вас не установлен модуль E-IMZO или Браузер E-IMZO.';
    errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.';
    errorUpdateApp = 'ВНИМАНИЕ !!! Установите новую версию приложения E-IMZO или Браузера E-IMZO.<br /><a href="https://e-imzo.uz/main/downloads/" role="button">Скачать ПО E-IMZO</a>';
    errorWrongPassword = 'Пароль неверный.';

    constructor() {
        super();
        this.state = {
            code: false,
            userPassword: "",
            balance: false,
            newKey: true,
            show: false,
            userRePassword: "",
            reKey: false,
            submit: false,
            ERIID: undefined,
            userData: undefined,
            userInfo: undefined,
            pinfl: "",
            keyName: "",
            phone: "+998",
            pkcs7: undefined,
            pkcs10: undefined,
            passportFile: undefined,
            selfiFile: undefined,
            applicationId: "568683",
            sertificateId: "2006151334",
            disk: [],
            selectedDisk: undefined,
            pdfId: undefined
        }
    }

    componentDidMount() {
        this.AppLoad()
        const setNewKey = (val) => {
            this.state.newKey = val;
            this.setState(this.state)
        }
        const setReKey = (val) => {
            this.state.reKey = val;
            this.setState(this.state)
        }

        const setBalance = (val) => {
            this.state.balance = val;
            this.setState(this.state)
        }
        const changeTabValue = (key) => {
            if (key === 'newKey') {
                setNewKey(true);
                setReKey(false);
                setBalance(false);
            } else if (key === 'reKey') {
                setNewKey(false);
                setReKey(true);
                setBalance(false);
            } else {
                setNewKey(false);
                setReKey(false);
                setBalance(true);
            }
        }
        this.state = {
            code: false,
            userPassword: "",
            balance: false,
            newKey: true,
            show: false,
            userRePassword: "",
            reKey: false,
            submit: false,
            ERIID: undefined,
            userData: undefined,
            userInfo: undefined,
            pinfl: "",
            keyName: "",
            phone: "+998",
            pkcs7: undefined,
            pkcs10: undefined,
            passportFile: undefined,
            selfiFile: undefined,
            applicationId: "568683",
            sertificateId: "2006151334",
            disk: [],
            selectedDisk: undefined,
            pdfId: undefined
        }
        if (this.props.state === "CREATE_APPLICATION") {
            changeTabValue('newKey')
        } else if (this.props.state === "RESTORE_APPLICATION") {
            changeTabValue('reKey')
        } else if (this.props.state === "CHECK_BALANCE") {
            changeTabValue('balance')
        }    }

    AppLoad = () => {

        window.EIMZOClient.API_KEYS = [
            'localhost', '96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B',
            '127.0.0.1', 'A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F',
            'null', 'E0A205EC4E7B78BBB56AFF83A733A1BB9FD39D562E67978CC5E7D73B0951DB1954595A20672A63332535E13CC6EC1E1FC8857BB09E0855D7E76E411B6FA16E9D',
            'dls.yt.uz', 'EDC1D4AB5B02066FB3FEB9382DE6A7F8CBD095E46474B07568BC44C8DAE27B3893E75B79280EA82A38AD42D10EA0D600E6CE7E89D1629221E4363E2D78650516'
        ];
        // this.uiLoading();
        const check = (major, minor) => {
            console.log(major)
            console.log(minor)
            var newVersion = this.EIMZO_MAJOR * 100 + this.EIMZO_MINOR;
            var installedVersion = parseInt(major) * 100 + parseInt(minor);
            console.log(installedVersion, "installedVersion")
            console.log(newVersion, "newVersion")
            if (installedVersion < newVersion) {
                alert(this.errorUpdateApp)
            } else {
                window.EIMZOClient.installApiKeys(() => {
                    this.listDisks(document.getElementById("disk"));
                }, (e, r) => {
                    if (r) {
                        alert(r)
                    } else {
                        this.wsError(e);
                    }
                });
            }
        }

        window.EIMZOClient.checkVersion((major, minor) => check(major, minor), (e, r) => {
            if (r) {
                alert(r);
            } else {
                this.uiNotLoaded(e);
            }
        });
    }
    uiLoadKeys = () => {
        window.EIMZOClient.listAllUserKeys((o, i) => {
            var itemId = "itm-" + o.serialNumber + "-" + i;
            return itemId;
        }, (itemId, v) => {

        }, (items, firstId) => {

        }, (e, r) => {
            if (e) {

            } else {

            }
        });
    }
    uiNotLoaded = (e) => {
        if (e) {
            alert(e);
        } else {
            alert(this.errorBrowserWS);
        }
    }
    wsError = (e) => {
        if (e) {
            alert(this.errorCAPIWS + " : " + e);
        } else {
            alert(this.errorBrowserWS);
        }
    };
    listDisks = (select) => {
        console.log(window.CAPIWS)
        console.log(select)
        window.CAPIWS.callFunction({name: "list_disks", plugin: "ytks"}, (event, data) => {
            if (data.success) {

                for (var rec in data.disks) {

                    this.state.disk.push({value: data.disks[rec], label: data.disks[rec]})

                }
            } else {
                console.log(data.reason)
                alert(data.reason);
            }
        }, function (e) {
            alert(e);
        });
    }
    _arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    createPkcs7AndPkcs10 = (x500Name = "", userPolicy = "", name, certInfo) => {
        var disk = this.state.selectedDisk;
        var path = 'DSKEYS';
        var password = this.state.userPassword;
        var x500NameObj = JSON.parse('{"' + x500Name.replace(/=/g, '": "').replace(/,/g, '", "') + '"}');
        console.log(certInfo)
        var guid = certInfo.guid;
        var kpId;
        var pkcs7;
        var pkcs10;
        var passportFile;
        var selfiFile;
        window.CAPIWS.callFunction({
            name: "generate_keypair",
            arguments: ['OZDST-1092-2009-2', 'seed']
        }, (event, data) => {
            console.log("data in generate_keypair")
            console.log(data)
            if (data.success) {
                kpId = data.kpId;
                window.CAPIWS.callFunction({
                    name: "create_pkcs10",
                    arguments: [kpId, x500Name, userPolicy]
                }, (event, data) => {
                    console.log("data in create_pkcs10")
                    console.log(data)
                    if (data.success) {
                        pkcs10 = data.pkcs10_64;
                        this.setState({...this.state, pkcs10})
                        window.CAPIWS.callFunction({
                            name: "save_temporary_pfx",
                            plugin: "pfx",
                            arguments: [disk, path, name, guid, kpId, password, x500Name]
                        }, (event, data) => {
                            console.log("data in save_temporary_pfx")
                            console.log(disk, "disk")
                            console.log(path, "path")
                            console.log(name, "name")
                            console.log(guid, "guid")
                            console.log(kpId, "kpId")
                            console.log(password, "password")
                            console.log(x500Name, "x500Name")
                            console.log(data, "data")
                            if (data.success) {
                                window.CAPIWS.callFunction({
                                    name: "load_key",
                                    plugin: "pfx",
                                    arguments: [disk, path, name, guid]
                                }, (event, data) => {
                                    console.log("data in load_key")
                                    console.log(data)

                                    if (data.success) {
                                        kpId = data.keyId;
                                        window.CAPIWS.callFunction({
                                            name: "create_pkcs7",
                                            plugin: "pkcs7",
                                            arguments: [Base64.encode(JSON.stringify(certInfo)), kpId, 'no']
                                        }, async (event, data) => {
                                            console.log("data in create_pkcs7")
                                            console.log(data)
                                            if (data.success) {
                                                pkcs7 = data.pkcs7_64;
                                                passportFile = this.state.passportFile;
                                                selfiFile = this.state.selfiFile;
                                                console.log(passportFile)
                                                console.log(selfiFile)
                                                request({
                                                    url: 'eri/saveFiles',
                                                    method: "post",
                                                    data: {
                                                        id: this.state.ERIID,
                                                        pkcs10,
                                                        pkcs7,
                                                        selfieFileName: selfiFile.name,
                                                        selfieFile: (await this.toBase64(selfiFile))?.split(",")[1],
                                                        passportFileName: passportFile.name,
                                                        passportFile: (await this.toBase64(selfiFile))?.split(",")[1],
                                                        keyPassword: this.state.userPassword,
                                                    }
                                                }).then(response => {
                                                    if (response.success) {
                                                        toast.success("pfx yaratildi!!!")
                                                        this.setState({
                                                            ...this.state,
                                                            pdfId: response.data,
                                                            submit: true
                                                        })
                                                    }
                                                });

                                            } else {
                                                alert(data.reason);
                                            }
                                        });
                                    } else {
                                        alert(data.reason);
                                    }
                                });
                            } else {
                                alert(data.reason);
                            }
                        });
                    } else {
                        alert(data.reason);
                    }
                });
            } else {
                alert(data.reason);
            }
        });
    };

    activateCertificate = (guid, key_password, subject_certificate, ca_certificate, root_certificate) => {

        window.CAPIWS.callFunction({plugin: "pfx", name: "list_all_certificates"}, function (event, data) {
            if (data.success) {
                console.log('data in list_all_certificates');
                console.log(subject_certificate);
                console.log(data);

                data.certificates.map(v => {
                    console.log(v)
                    if (v.alias == guid) {
                        console.log("enter")
                        window.CAPIWS.callFunction({
                            plugin: "pfx",
                            name: "load_key",
                            arguments: [v.disk, v.path, v.name, v.alias]
                        }, function (event, data) {
                            console.log('data in load_key');
                            console.log(data);
                            if (data.success) {
                                var key_id = data.keyId;
                                window.CAPIWS.callFunction({
                                    plugin: "x509",
                                    name: "get_certificate_info",
                                    arguments: [subject_certificate]
                                }, function (event, data) {
                                    console.log('data in get_certificate_info');
                                    console.log(data);
                                    if (data.success) {
                                        var new_alias = data.certificate_info.subjectName + ",SERIALNUMBER=" + data.certificate_info.serialNumber + ",VALIDFROM=" + data.certificate_info.validFrom + ",VALIDTO=" + data.certificate_info.validTo;
                                        window.CAPIWS.callFunction({
                                            plugin: "pfx",
                                            name: "save_pfx",
                                            arguments: [v.disk, v.path, v.name, new_alias, key_id, key_password, subject_certificate, ca_certificate, root_certificate]
                                        }, function (event, data) {
                                            console.log('data in save_pfx');
                                            console.log(data);
                                            if (data.success) {
                                                // requset to Method-2: Activate key
                                                request({
                                                    url: 'eri/activateKey',
                                                    method: "get",
                                                    data: {
                                                        applicationId: this.state.applicationId,
                                                        certificateId: this.state.certificateId
                                                    }
                                                }).then(response => {
                                                    if (response.success) {
                                                        if (response.data == 0) {
                                                            toast.success("Kalit aktivlashtirildi")
                                                        } else {
                                                            toast.success("Kalit aktivlashtishda xatolik")
                                                        }
                                                    } else {
                                                        toast.success("Kalit aktivlashtishda serverda xatolik")
                                                    }
                                                })
                                            } else {
                                                alert(data.reason);
                                            }
                                        });
                                    } else {
                                        alert(data.reason);
                                    }
                                });
                            } else {
                                alert(data.reason);
                            }
                        });
                    }
                })
            } else {
                alert(data.reason);
            }
        });
    }
    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    getSign = () => {
        if (!this.state.userPassword.isEmpty && this.state.userPassword === this.state.userRePassword) {
            request({
                url: 'eri/x500',
                method: "get",
                data: {
                    eriId: this.state.ERIID,
                }
            }).then(response => {
                if (response.success) {


                    request({
                        url: 'eri/certInfo',
                        method: "get",
                        data: {
                            eriId: this.state.ERIID,
                        }
                    }).then(item => {
                        if (item.success) {
                            this.createPkcs7AndPkcs10(response.data.x500Name, response.data.policyNoticies, this.state.keyName, JSON.parse(item.data))


                        }
                    });
                }
            });
        } else {
            toast.error("parol nato'g'ri!!!")
        }
    }

    checkApplication = () => {
        request({
            url: 'eri/getApplication',
            method: "get",
            data: {
                applicationId: this.state.applicationId
            }
        }).then(item => {
            if (item.success) {
                console.log("re")
                if (item.data.state == "4") {
                    console.log("red")
                    this.state.certificateId = item.data.certSn;
                    this.setState(this.state)
                    toast.success(item.data.stateNameUz)
                    request({
                        url: 'eri/getCertificate',
                        method: "get",
                        data: {
                            certificateId: this.state.certificateId
                        }
                    }).then(res => {
                        if (res.success) {
                            this.activateCertificate(item.data.guid, document.getElementById("password").value, res.data.subject_certificate, res.data.ca_certificate, res.data.root_certificate)
                        }
                    })

                } else
                    toast.error(item.data.stateNameUz)
            }
        });
    }
    getCertificate = () => {
        request({
            url: 'eri/getCertificate',
            method: "post",
            data: {
                certificateId: this.state.certificateId,

            }
        }).then(item => {
            console.log(item)
        })
    }

    render() {


        const options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]
        const {
            code,
            ERIID,
            pinfl,
            userInfo,
            phone,
            userData,
            userPassword,
            userRePassword,
            newKey,
            reKey,
            balance,
            submit
        } = this.state
        const setCode = (val) => {
            this.state.code = val;
            this.setState(this.state)
        }
        const setERIID = (val) => {
            this.state.ERIID = val;
            this.setState(this.state)
        }
        const setUserData = (val) => {
            this.state.userData = val;
            this.setState(this.state)
        }
        const setPinfl = (val) => {
            this.state.pinfl = val;
            this.setState(this.state)
        }

        const setPhone = (val) => {
            this.state.phone = val;
            this.setState(this.state)
        }

        const setUserInfo = (val) => {
            this.state.userInfo = val;
            this.setState(this.state)
        }
        const setSubmit = (val) => {
            this.state.submit = val;
            this.setState(this.state)
        }
        const setUserPassword = (val) => {
            this.state.userPassword = val;
            this.setState(this.state)
        }
        const setUserRePassword = (val) => {
            this.state.userRePassword = val;
            this.setState(this.state)
        }





        const sendMessage = () => {
            request({
                url: "phys-np1",
                method: "get",
                data: {tin: pinfl}
            })
                .then(res => {
                    console.log(res)
                    console.log(phone)
                    if (res.success) {
                        console.log(res)
                        request({
                            url: "eri/sendMessage",
                            method: "post",
                            data: {
                                pinfl,
                                phoneNumber: phone.slice(1),
                                birthDate: res.data.birthDate,
                                address: res.data.address,
                                passOrg: res.data.passOrg,
                                passDate: res.data.passDate,
                                passSeries: res.data.passSeries,
                                passNumber: res.data.passNumber,
                                stir: res.data.tin,
                                fullName: res.data.surName + " " + res.data.firstName + " " + res.data.middleName,
                            }
                        }).then(response => {
                            if (response.success) {
                                setERIID(response.data);
                                setCode(true)
                                setUserData(res.data);
                            }
                        })


                    }
                })
        }

        const checkPhone = () => {
            //TODO:update after phone complate

            request({
                url: 'eri/keyName',
                method: "get",
                data: {
                    eriId: this.state.ERIID
                }
            }).then(data => {
                if (data.success) {
                    this.state.keyName = data.data
                    this.setState(this.state)
                    setUserInfo(true)
                }
            })


        }

        const sendApplication = () => {
            request({
                url: 'eri/save',
                method: "get",
                data: {
                    ERIID: this.state.ERIID,
                }
            }).then(response => {
                if (response.success) {
                    this.setState({
                        ...this.state,
                        applicationId: response.data,
                    })
                }
            });
        }
        return (
            <div className={styles.electronicDigitalSignaturePhysical}>
                <p className={styles.path}>
                    <span>Asosiy</span>
                    <img src="/assets/arrow-right.png" alt=""/>
                    <span>Elektron raqamli imzo muddatini uzaytirib berishga ariza jo’natishatish</span>
                </p>


                {
                    newKey === true ?
                        <div>

                            <GetInfo type={'electronSignature'}/>

                            {code !== true ?
                                <div className={styles.signInfo}>
                                    <h1 className="font-roboto-bold">Kim ekanligingizni belgilang</h1>

                                    <div className={styles.btnGroup}>
                                        <button>Jismoniy shahs</button>
                                        <button>Yuridik shahs</button>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <div className="inputs">
                                            <label htmlFor="STIR">Sizning STIR yoki JShShIR <span
                                                className="withStar">*</span></label>
                                            <input type="text" id={'STIR'} defaultValue={pinfl}
                                                   onChange={(e) => setPinfl(e.target.value)}/>
                                        </div>
                                        <div className="inputs">
                                            <label htmlFor="phone">Telefon raqami <span
                                                className="withStar">*</span></label>
                                            <input type="text" id={'phone'} defaultValue={phone}
                                                   onChange={(e) => setPhone(e.target.value)}
                                                   onfocusout={(e) => setPhone(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className={styles.footerBtn}>
                                        <button onClick={()=>this.props.setState("LIST")}>
                                            <span className="icon icon-back"/>
                                            Ortga qaytish
                                        </button>
                                        <button onClick={sendMessage}>
                                            Davom ettirish
                                            <span className="icon icon-back"/>
                                        </button>
                                    </div>
                                </div> :
                                userInfo !== true ?
                                    <div className={styles.signInfoCode}>
                                        <h1 className="font-roboto-bold">Tasdiqlash kodi *******{phone.slice(9)} telefon
                                            raqamiga
                                            yuborildi</h1>

                                        <div className={styles.formGroup}>
                                            <div className="inputs m-0">
                                                <label htmlFor="code">Tasdiqlash kodi <span
                                                    className="withStar">*</span></label>
                                                <input type="text" id={'code'}/>
                                            </div>
                                        </div>

                                        <p>Sizga yuborilgan SMS xabar 52 sekund amal qiladi</p>

                                        <div className={styles.footerBtn}>
                                            <button onClick={()=>this.setState({
                                                code:true,
                                                userInfo:false,
                                            })}>
                                                <span className="icon icon-back"/>
                                                Ortga qaytish
                                            </button>
                                            <button onClick={checkPhone}>
                                                Davom ettirish
                                                <span className="icon icon-back"/>
                                            </button>
                                        </div>
                                    </div> :
                                    submit !== true ?
                                        <div>
                                            <div className={styles.createPFXFile}>
                                                <h1 className="font-roboto-bold">{userData.surName + " " + userData.firstName + " " + userData.middleName}</h1>
                                                <p>Jismoniy shahs</p>
                                                <p>STIR {userData.tin}</p>
                                                <div className={styles.addFile}>
                                                    <div className={styles.inputGroup}>

                                                        <div className="">
                                                            <label className="">
                                                                Passport rasmi (pdf, png, jpg, jpeg formatda {"<"} 5
                                                                Mb) <span className="withStar">*</span>
                                                            </label>
                                                            <div className="w-100 pr-20">
                                                                <input type="file"
                                                                       className="input-style font-roboto-light w-100"
                                                                       placeholder="fayl tanlanmagan" id={"passport"}
                                                                       onChange={(e) => {
                                                                           console.log(e)
                                                                           this.setState({
                                                                               ...this.state,
                                                                               passportFile: e.target.files[0]
                                                                           })
                                                                       }
                                                                       }/>
                                                                {/*<button>*/}
                                                                {/*    <span className="icon icon-plus-circle"/>*/}
                                                                {/*    Fayl qo’shish*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.inputGroup}>

                                                        <div className="">
                                                            <label className="">
                                                                Passport bilan selfi (pdf, png, jpg, jpeg
                                                                formatda {"<"} 5
                                                                Mb) <span className="withStar">*</span>
                                                            </label>
                                                            <div className="w-100 pr-20">
                                                                <input type="file"
                                                                       className="input-style font-roboto-light w-100"
                                                                       placeholder="fayl tanlanmagan" id={"selfie"}
                                                                       onChange={(e) => this.setState({
                                                                           ...this.state,
                                                                           selfiFile: e.target.files[0]
                                                                       })}/>
                                                                {/*<button>*/}
                                                                {/*    <span className="icon icon-plus-circle"/>*/}
                                                                {/*    Fayl qo’shish*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.addUserPassword}>
                                                    <div className="inputs mr-20 ">
                                                        <label>Diskni tanlang</label>
                                                        <Select className={styles.select} options={this.state.disk}
                                                                onChange={(e) => this.setState({
                                                                    ...this.state,
                                                                    selectedDisk: e.value
                                                                })}
                                                                placeholder="-"/>
                                                    </div>
                                                    <div className="inputs  mr-20">
                                                        <label>.pfx fayl nomi</label>
                                                        <input type="text" className="w-100 font-roboto-light"
                                                               placeholder="" disabled
                                                               defaultValue={this.state.keyName}/>
                                                    </div>
                                                    <div className={`${styles.password} inputs mr-20`}>
                                                        <label htmlFor="password">Parol yarating <span
                                                            className="withStar">*</span></label>
                                                        <input className="w-100"
                                                               type={this.state.show ? 'password' : 'text'}
                                                               id="password"
                                                               onChange={(e) => setUserPassword(e.target.value)}/>
                                                        <span
                                                            className={`${styles.eyeIcon} icon icon-eye-img`}
                                                            onClick={() => this.setState({...this.state, show: true})}
                                                        />
                                                    </div>
                                                    <div className={`${styles.password} inputs `}>
                                                        <label htmlFor="repassword">Parolni takrorlang <span
                                                            className="withStar">*</span></label>
                                                        <input type={this.state.show ? 'password' : 'text'}
                                                               id="repassword"
                                                               onChange={(e) => setUserRePassword(e.target.value)}/>
                                                        <span className={`${styles.eyeIcon} icon icon-eye-img`}
                                                              onClick={() => this.setState({...this.state, show: true})}
                                                        />
                                                    </div>

                                                </div>


                                            </div>
                                            <div className={styles.footerBtn}>
                                                <button onClick={()=>this.setState({
                                                    userInfo:false,
                                                    submit:true,
                                                })}>
                                                    <span className="icon icon-back"/>
                                                    Ortga qaytish
                                                </button>
                                                <button onClick={this.getSign}>
                                                    .pfx fayl yaratish
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <div className={styles.submitInfo}>
                                                <div className="d-flex">
                                                    <Select placeholder={'PDF'}/>
                                                    <button
                                                        onClick={() => downloadFile(API_PATH + "pdf/get/" + this.state.pdfId)}>
                                                        <span className="icon icon-download"/>
                                                        Yuklab olish
                                                    </button>
                                                    <button>
                                                        <span className="icon icon-print"/>
                                                        Chop etish
                                                    </button>
                                                </div>

                                                <div className={styles.submitCard}>
                                                    <div className={styles.submitCardHeader}>
                                                        <p>Ariza</p>
                                                        <img src="/assets/copy.png" alt=""/>
                                                    </div>
                                                    <div className={styles.submitCardBody}>
                                                        <embed frameBorder="0"
                                                               src={`${API_PATH + "pdf/get/" + this.state.pdfId}#toolbar=0&scrollbar=0`}
                                                               type="application/pdf" width="640"
                                                               height="600"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.footerBtn}>
                                                <button onClick={()=>this.setState({
                                                        userInfo:true,
                                                        submit:false,
                                                    })}
                                                >
                                                    <span className="icon icon-back"/>
                                                    Ortga qaytish
                                                </button>
                                                <button onClick={sendApplication}>
                                                    Arizani yuborish
                                                </button>
                                            </div>
                                        </div>
                            }
                        </div> :
                        reKey === true ?
                            <div>
                                <div className={styles.electronicSignature}>
                                    <h1 className="font-roboto-bold">Elektron raqamli imzo parolini olish</h1>
                                </div>

                                <div className={styles.returnKeys}>
                                    <div className={styles.forms}>
                                        <label htmlFor="key">
                                            ERI kalitini tanlash <span className="withStar">*</span>
                                        </label>
                                        <Select placeholder={'Kalitni kiriting'}/>
                                    </div>
                                    <div className={styles.footerBtn}>
                                        <button onClick={()=>this.props.setState("LIST")}>
                                            <span className="icon icon-back"/>
                                            Ortga qaytish
                                        </button>
                                        <button>
                                            Parolni olish
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className={styles.electronicSignature}>
                                    <h1 className="font-roboto-bold">Balansni tekshirish</h1>
                                </div>

                                <div className={styles.balanceCard}>
                                    <div className={styles.forms}>
                                        <label htmlFor="STIR">
                                            STIR yoki JShShIRni kiriting<span className="withStar">*</span>
                                        </label>
                                        <div className="d-flex">
                                            <input id="STIR" className={styles.STIRinput} type="text"/>
                                            <button>
                                                <span className="icon icon-search"/>
                                            </button>
                                        </div>
                                    </div>

                                    <p className="font-roboto-bold">Balans</p>
                                    <h1 className="font-roboto-bold">0.00 UZS</h1>


                                    <div className={styles.mainTable}>
                                        <table>
                                            <tr>
                                                <th>
                                                    Sertifikat seriya raqami
                                                </th>
                                                <th>
                                                    Sertifikat yatuvchi F.I.O
                                                </th>
                                                <th>
                                                    STIR
                                                </th>
                                                <th>Sertifikat egasi F.I.O</th>
                                                <th>Sertifikat muddati</th>
                                                <th>Holati</th>
                                                <th>Biriktirilgan tel raqam</th>
                                                <th>Sozlash</th>
                                            </tr>
                                            <tr>
                                                <td>2007583839</td>
                                                <td className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</td>
                                                <td>599007944</td>
                                                <td className="font-roboto-bold">Axmadjonov ilhomjon inomjonovich</td>
                                                <td>22.02.2022 - 22.03.2022</td>
                                                <td className={`${styles.activeGreen} font-roboto-bold`}>Aktiv</td>
                                                <td>+998******3133</td>
                                                <td className="text-center">
                                                    <button className="font-roboto-bold"><span
                                                        className="icon icon-upload"/>Yuklab olish
                                                    </button>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>

                                    <div className={styles.backBtn}>
                                        <button onClick={()=>this.props.setState("LIST")}>
                                            <span className="icon icon-back"/>
                                            Ortga qaytish
                                        </button>
                                    </div>
                                </div>
                            </div>

                }

            </div>
        );
    }
};

export default ElectronicDigitalSignaturePhysical;

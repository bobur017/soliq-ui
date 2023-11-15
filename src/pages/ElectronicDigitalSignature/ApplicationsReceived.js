import React, { Component } from 'react';
import styles from "./ElectronicDigitalSignature.module.scss"
import Select from "react-select";
import { Base64 } from "js-base64";
import { request } from "../../utils/request";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class ApplicationsReceived extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            pkcs7: undefined,
            pkcs10: undefined,
            passportFile: undefined,
            selfiFile: undefined,
            applicationId: "568683",
            sertificateId: "2006151334",
            eris: [],
            open: undefined,
            page: 0,
            size: 10,
            totalPages: 0
        }
    }

    EIMZO_MAJOR = 3;
    EIMZO_MINOR = 37;
    errorCAPIWS = 'Ошибка соединения с E-IMZO. Возможно у вас не установлен модуль E-IMZO или Браузер E-IMZO.';
    errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.';
    errorUpdateApp = 'ВНИМАНИЕ !!! Установите новую версию приложения E-IMZO или Браузера E-IMZO.<br /><a href="https://e-imzo.uz/main/downloads/" role="button">Скачать ПО E-IMZO</a>';
    errorWrongPassword = 'Пароль неверный.';


    componentDidMount() {
        this.AppLoad()
        this.getEris()
    }

    getEris = () => {
        request({
            url: 'eri',
            method: "get",
            data: {
                page: 0,
                size: 10,
            }
        }).then(response => {
            if (response.success) {
                console.log(response.data)
                this.setState({
                    eris: response.data.content,
                    totalPages: response.data.totalPages
                })
            }
        })
    }

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
        window.CAPIWS.callFunction({ name: "list_disks", plugin: "ytks" }, function (event, data) {
            if (data.success) {

                for (var rec in data.disks) {
                    var opt = document.createElement('option');
                    opt.value = data.disks[rec];
                    opt.innerHTML = data.disks[rec];
                    select.appendChild(opt);
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

    activateCertificate = (guid, key_password, subject_certificate, ca_certificate, root_certificate) => {

        window.CAPIWS.callFunction({ plugin: "pfx", name: "list_all_certificates" }, function (event, data) {
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


    checkApplication = (eri, ERIID, password) => {
        request({
            url: 'eri/getApplication',
            method: "get",
            data: {
                ERIID
            }
        }).then(item => {
            if (item.success) {

                if (item.data.state == "4") {
                    this.state.certificateId = item.data.certSn;
                    this.setState(this.state)
                    toast.success(item.data.stateNameUz)
                    request({
                        url: 'eri/getCertificate',
                        method: "get",
                        data: {
                            // applicationId:this.state.applicationId,
                            certificateId: this.state.certificateId
                        }
                    }).then(res => {
                        if (res.success) {
                            this.activateCertificate(eri.guid, password, res.data.subject_certificate, res.data.ca_certificate, res.data.root_certificate)
                        }
                    })

                } else {
                    this.getEris()
                    toast.error(item.data.stateNameUz)
                }
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
            { value: '12', label: '1' },
            { value: '24', label: '2' },
            { value: '36', label: '2' }
        ]

        const toggleModal = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        const states = {
            SMS_VERIFICATION: "tasdiqlash jarayonida",
            SMS_CANCELLED: "Tasdiqlanmadi",
            PFX_CREATED: "pfx file yaratildi",
            APLICATION_SEND: "Yuborilgan",
            CANCELLED: "ariza bekor qilindi",
            COMPLATED: "Tasdiqlandi",
            COMPLATED_PAYED: "yakunlandi",
        }
        const status = (e) => {
            console.log(e)
            // eslint-disable-next-line default-case
            if (e === "SMS_VERIFICATION") {
                return styles.control;
            } else if (e === "SMS_CANCELLED") {
                return "canceled";
            } else if (e === "PFX_CREATED") {
                return styles.control;
            } else if (e === "APLICATION_SEND") {
                return "success";
            } else if (e === "CANCELLED") {
                return styles.canceled;
            } else if (e === "COMPLATED") {
                return styles.success;
            } else if (e === "COMPLATED_PAYED") {
                return styles.success;
            }
        }

        return (
            <div className={styles.ApplicationsReceived}>
                <p className={styles.path}>
                    <span>Asosiy</span>
                    <img src="/assets/arrow-right.png" alt="" />
                    <span>Elektron raqamli imzo muddatini uzaytirib berishga ariza jo’natishatish</span>
                </p>
                <div className="titleBox">
                    <h3 className="titleMain font-roboto-bold">
                        Elektron raqamli imzo muddatini uzaytirib berishga ariza
                    </h3>
                    <div className={styles.controlBtnPrivate}>
                        <div className={styles.create}>
                            <span className="icon icon-plus-circle" />
                            <Link className="font-roboto-bold" to={"#"}
                                onClick={() => this.props.setState("CREATE_APPLICATION")}>Arizani yaratish</Link>
                        </div>
                        <div className={styles.simple}>
                            <Link className="font-roboto-bold" to={"#"}
                                onClick={() => this.props.setState("RESTORE_APPLICATION")}>Parolni tiklash</Link>
                        </div>
                        <div className={styles.simple}>
                            <Link className="font-roboto-bold" to={"#"}
                                onClick={() => this.props.setState("CHECK_BALANCE")}>Balansni tekshirish</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.decTabel}>
                    <div className="w-100">
                        <h3 className="titleMain font-roboto-bold d-flex">
                            <>Yuborilgan arizalar</>
                            <button className={styles.filterBtn}>
                                <span className="icon icon-filter-btn" />
                            </button>
                        </h3>
                    </div>
                    <div className="d-flex w-100 align-items-end">
                        <div className="inputs w-50 mr-20">
                            <label>Ariza raqami </label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-50 mr-20">
                            <label>Arizachi STIR</label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-50 mr-20 ">
                            <label>Xizmat ko’rsatgan xodim STIR </label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-100 mr-20">
                            <label>Xizmat ko’rsatgan xodim F.I.O si </label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-33 mr-20">
                            <label>Yaratilgan vaqt oralig’i </label>
                            <input type="date" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-33  mt-auto">
                            <input type="date" className="w-100 " placeholder="-" />
                        </div>
                    </div>

                    <div className={styles.page}>
                        <div className={styles.fil}>
                            <p>Записей на странице:</p>
                            <Select options={options} className="select-sm" placeholder="10" />
                        </div>
                        <button className={`${styles.uploadBtn}  font-roboto-bold`}><span
                            className="icon icon-upload" /> Yuklab olish
                        </button>
                    </div>
                    <div className={`${styles.tabelsMain}   mt-30`}>
                        <div className={styles.mainTable}>
                            <table>


                                <tr>
                                    <th className="font-roboto-bold">
                                        Ariza raqami
                                    </th>
                                    <th className="font-roboto-bold">
                                        Arizachi
                                    </th>
                                    <th className="font-roboto-bold">
                                        Xizmat ko’rsatgan xodim
                                    </th>
                                    <th className="font-roboto-bold">Ariza qabul qilingan sana</th>
                                    <th className="font-roboto-bold">Ariza holati</th>
                                    <th className="font-roboto-bold">Izoh</th>
                                    <th className="font-roboto-bold"></th>
                                </tr>
                                {this.state.eris.map((value, index) => <tr>
                                    <td>
                                        {value.id}
                                    </td>
                                    <td>{value.fullName}
                                        <p>ИНН: {value.stir}</p>
                                    </td>
                                    <td>
                                        <p>ИНН: </p>
                                    </td>
                                    <td>138059207</td>

                                    <td><span className={(value.state === "SMS_VERIFICATION") ? styles.control :
                                        value.state === "PFX_CREATED" ? styles.control :
                                            value.state === "APLICATION_SEND" ? styles.success :
                                                value.state === "CANCELLED" ? styles.canceled :
                                                    value.state === "COMPLATED" ? styles.success :
                                                        value.state === "COMPLATED_PAYED" ? styles.success : undefined
                                    }>{states[value.state]}</span></td>
                                    <td className={!value.message ? styles.coinSec : value.state === "COMPLATED" ? styles.coinSec : styles.commit}>
                                        {value.state === "COMPLATED" ? <> <span className="icon icon-coin" />
                                            Xizmatni yakunlash</> : ""}
                                        {!value.message || (value.state !== "COMPLATED" || value.state !== "CANCELLED") ? <button
                                            onClick={() => this.checkApplication(value, value.id, value.password)}>Tekshirish</button> : <>{value.message}</>}

                                    </td>
                                </tr>)}
                            </table>
                        </div>
                    </div>
                </div>
                <div className={`${this.state.isOpen ? "d-block" : "d-none"} ${styles.mainModalRec}`}>
                    <button className={styles.closeBtn} onClick={toggleModal}><span className="icon icon-close" />
                    </button>
                    <h3 className="font-roboto-bold">Arizani rad etish</h3>
                    <div className={`${styles.selectMain} inputs w-75`}>
                        <label>Rad etish sababini ko’rsating <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={toggleModal}>Bekor qilish</button>
                        <button>OK</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default ApplicationsReceived;

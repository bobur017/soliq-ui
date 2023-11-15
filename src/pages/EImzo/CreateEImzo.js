import React, {Component} from 'react';
import axios from "axios";
import {request} from "../../utils/request";
import {Base64} from 'js-base64';
import {toast} from "react-toastify";

class CreateEImzo extends Component {
    EIMZO_MAJOR = 3;
    EIMZO_MINOR = 37;
    errorCAPIWS = 'Ошибка соединения с E-IMZO. Возможно у вас не установлен модуль E-IMZO или Браузер E-IMZO.';
    errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.';
    errorUpdateApp = 'ВНИМАНИЕ !!! Установите новую версию приложения E-IMZO или Браузера E-IMZO.<br /><a href="https://e-imzo.uz/main/downloads/" role="button">Скачать ПО E-IMZO</a>';
    errorWrongPassword = 'Пароль неверный.';

    constructor(props) {
        super(props);
        this.state = {
            pkcs7: undefined,
            pkcs10: undefined,
            passportFile: undefined,
            selfiFile: undefined,
            applicationId: "568683",
            sertificateId: "2006151334",
        }
    }

    componentDidMount() {
        this.AppLoad()
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
        window.CAPIWS.callFunction({name: "list_disks", plugin: "ytks"}, function (event, data) {
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
    createPkcs7AndPkcs10 = (x500Name = "", userPolicy = "", name, certInfo) => {
        var disk = document.getElementById("disk").value;
        var path = 'DSKEYS';
        var password = document.getElementById("password").value;
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
                                                passportFile = document.getElementById("passport").files[0];
                                                selfiFile = document.getElementById("selfie").files[0];
                                                this.setState({...this.state, pkcs7, passportFile, selfiFile})

                                                request({
                                                    url: 'eri/save',
                                                    method: "post",
                                                    data: {
                                                        pkcs10,
                                                        pkcs7,
                                                        selfieFileName: selfiFile.name,
                                                        selfieFile: (await this.toBase64(selfiFile))?.split(",")[1],
                                                        passportFileName: passportFile.name,
                                                        passportFile: (await this.toBase64(selfiFile))?.split(",")[1],
                                                        keyPassword: document.getElementById("password").value,
                                                    }
                                                }).then(response => {
                                                    if (response.success) {
                                                        this.setState({...this.state, applicationId: response.data})
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

                data.certificates.map(v=>{
                    console.log(v)
                    if (v.alias == guid) {
                        console.log("enter")
                        window.CAPIWS.callFunction({ plugin: "pfx", name: "load_key", arguments: [v.disk, v.path, v.name, v.alias] }, function (event, data) {
                            console.log('data in load_key');
                            console.log(data);
                            if (data.success) {
                                var key_id = data.keyId;
                                window.CAPIWS.callFunction({ plugin: "x509", name: "get_certificate_info", arguments: [subject_certificate] }, function (event, data) {
                                    console.log('data in get_certificate_info');
                                    console.log(data);
                                    if (data.success) {
                                        var new_alias = data.certificate_info.subjectName + ",SERIALNUMBER=" + data.certificate_info.serialNumber + ",VALIDFROM=" + data.certificate_info.validFrom + ",VALIDTO=" + data.certificate_info.validTo;
                                        window.CAPIWS.callFunction({ plugin: "pfx", name: "save_pfx", arguments: [v.disk, v.path, v.name, new_alias, key_id, key_password, subject_certificate, ca_certificate, root_certificate] }, function (event, data) {
                                            console.log('data in save_pfx');
                                            console.log(data);
                                            if (data.success) {
                                                // requset to Method-2: Activate key
                                                request({
                                                    url: 'eri/activateKey',
                                                    method: "get",
                                                    data: {
                                                        applicationId:this.state.applicationId,
                                                        certificateId:this.state.certificateId
                                                    }
                                                }).then(response => {
                                                    if (response.success) {
                                                        if (response.data == 0) {
                                                            toast.success("Kalit aktivlashtirildi")
                                                        }else {
                                                            toast.success("Kalit aktivlashtishda xatolik")
                                                        }
                                                    }else {
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
        request({
            url: 'eri/x500',
            method: "post",
            data: {
                pinfl: document.getElementById("pinfl").value
            }
        }).then(response => {
            if (response.success) {
                request({
                    url: 'eri/keyName',
                    method: "post",
                    data: {
                        pinfl: document.getElementById("pinfl").value
                    }
                }).then(data => {
                    if (data.success) {
                        request({
                            url: 'eri/certInfo',
                            method: "post",
                            data: {
                                pinfl: document.getElementById("pinfl").value,
                                phone: document.getElementById("phone").value
                            }
                        }).then(item => {
                            if (item.success) {
                                this.createPkcs7AndPkcs10(response.data.x500Name, response.data.policyNoticies, data.data, JSON.parse(item.data))
                            }
                        });
                    }
                });
            }
        });
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
                            // applicationId:this.state.applicationId,
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
        return (
            <div>
                <label className="text-left small text-dark_grey">Select disk</label>
                <select className="form-control" name="disk" id="disk"></select>

                <br/>
                <br/>
                <label className="text-left small text-dark_grey">Key name</label>
                <input className="type-13 ff-sans-b text-dark_grey" id="key_name" name="key_name" readOnly=""
                       defaultValue="${keyName}"/>

                <br/>
                <br/>
                <label className="text-left small text-dark_grey">Passport file</label>
                <input className="type-13 ff-sans-b text-dark_grey form-control pull-left" type="file" id="passport"
                       name="passport"/>

                <br/>
                <br/>
                <label className="text-left small text-dark_grey">Selfi file</label>
                <input className="type-13 ff-sans-b text-dark_grey" type="file" id="selfie" name="selfie"/>

                <br/>
                <br/>
                <label className="text-left small text-dark_grey">Enter password</label>
                <input className="type-13 ff-sans-b text-dark_grey" type="password" id="password"
                       name="password" maxLength="16"/>

                <br/>
                <br/>

                <label className="text-left small text-dark_grey">Re-enter password</label>
                <input className="type-13 ff-sans-b text-dark_grey" type="password"
                       id="password_confirm" name="password_confirm"
                       maxLength="16"/>
                <br/>
                <label className="text-left small text-dark_grey">PINFL</label>
                <input type="text" id={"pinfl"}/>
                <br/>
                <label className="text-left small text-dark_grey">phone</label>
                <input type="text" id={"phone"}/>

                <br/>
                <button onClick={this.getSign}>Create certificate
                </button>
                <button onClick={this.checkApplication}>
                    check status
                </button>
                <button onClick={this.getCertInfo}>
                    getCertInfo
                </button>

                <button onClick={this.getCertificate}>
                    getCertificate
                </button>

            </div>
        );
    }
}

export default CreateEImzo;

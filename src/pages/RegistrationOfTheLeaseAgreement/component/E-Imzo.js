import React, {Component} from 'react';

class EImzo extends Component {
    EIMZO_MAJOR = 3;
    EIMZO_MINOR = 37;
    errorCAPIWS = 'Ошибка соединения с E-IMZO. Возможно у вас не установлен модуль E-IMZO или Браузер E-IMZO.';
    errorBrowserWS = 'Браузер не поддерживает технологию WebSocket. Установите последнюю версию браузера.';
    errorUpdateApp = 'ВНИМАНИЕ !!! Установите новую версию приложения E-IMZO или Браузера E-IMZO.<br /><a href="https://e-imzo.uz/main/downloads/" role="button">Скачать ПО E-IMZO</a>';
    errorWrongPassword = 'Пароль неверный.';
    componentDidMount() {
        window.onload = ()=>this.AppLoad();
    }
    AppLoad =()=> {

        window.window.EIMZOClient.API_KEYS = [
            'localhost', '96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B',
            '127.0.0.1', 'A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F',
            'null', 'E0A205EC4E7B78BBB56AFF83A733A1BB9FD39D562E67978CC5E7D73B0951DB1954595A20672A63332535E13CC6EC1E1FC8857BB09E0855D7E76E411B6FA16E9D',
            'dls.yt.uz', 'EDC1D4AB5B02066FB3FEB9382DE6A7F8CBD095E46474B07568BC44C8DAE27B3893E75B79280EA82A38AD42D10EA0D600E6CE7E89D1629221E4363E2D78650516'
        ];
        this.uiLoading();
       const check =(major, minor)=> {
            var newVersion = this.EIMZO_MAJOR * 100 + this.EIMZO_MINOR;
            var installedVersion = parseInt(major) * 100 + parseInt(minor);
            if (installedVersion < newVersion) {
                this.uiUpdateApp();
            } else {
                window.EIMZOClient.installApiKeys(()=> {
                    this.uiLoadKeys();
                },  (e, r)=> {
                    if (r) {
                        this.uiShowMessage(r);
                    } else {
                        this.wsError(e);
                    }
                });
            }
        }
        window.window.EIMZOClient.checkVersion((major, minor)=>check(major, minor) , (e, r)=> {
            if (r) {
                this.uiShowMessage(r);
            } else {
                this.uiNotLoaded(e);
            }
        });
    }
    uiShowMessage=(message)=>{
        alert(message);
    }
    uiLoading=()=> {
        var l = document.getElementById('message');
        l.innerHTML = 'Загрузка ...';
        l.style.color = 'red';
    }
    uiNotLoaded =(e)=>{
        var l = document.getElementById('message');
        l.innerHTML = '';
        if (e) {
            this.wsError(e);
        } else {
            this.uiShowMessage(this.errorBrowserWS);
        }
    }
    uiUpdateApp =()=> {
        var l = document.getElementById('message');
        l.innerHTML = this.errorUpdateApp;
    }
    uiLoadKeys=()=>{
        this.uiClearCombo();
        window.EIMZOClient.listAllUserKeys( (o, i)=> {
            var itemId = "itm-" + o.serialNumber + "-" + i;
            return itemId;
        }, (itemId, v)=> {
            return this.uiCreateItem(itemId, v);
        },  (items, firstId)=> {
            this.uiFillCombo(items);
            this.uiLoaded();
            this.uiComboSelect(firstId);
        },  (e, r)=> {
            if (e) {
                this.uiShowMessage(this.errorCAPIWS + " : " + e);
            } else {
                this.uiShowMessage(r);
            }
        });
    }
    uiComboSelect =(itm)=> {
        if (itm) {
            var id = document.getElementById(itm);
            id.setAttribute('selected', 'true');
        }
    }
    uiClearCombo =()=> {
        var combo = document.testform.key;
        combo.length = 0;
    }
    uiFillCombo =(items)=> {
        var combo = document.getElementById("testform").key;
        for (var itm in items) {
            combo.append(items[itm]);
        }
    }
    uiLoaded =()=> {
        var l = document.getElementById('message');
        l.innerHTML = '';
    }
    uiCreateItem =(itmkey, vo)=>  {
        var now = new Date();
        vo.expired = window.dates.compare(now, vo.validTo) > 0;
        var itm = document.createElement("option");
        itm.value = itmkey;
        itm.text = vo.CN;
        if (!vo.expired) {

        } else {
            itm.style.color = 'gray';
            itm.text = itm.text + ' (срок истек)';
        }
        itm.setAttribute('vo', JSON.stringify(vo));
        itm.setAttribute('id', itmkey);
        return itm;
    }
    wsError =(e)=> {
        if (e) {
            this.uiShowMessage(this.errorCAPIWS + " : " + e);
        } else {
            this.uiShowMessage(this.errorBrowserWS);
        }
    };
    cbChanged =(c)=> {
        document.getElementById('keyId').innerHTML = '';
    }
    sign =()=> {
        var itm = document.getElementById("testform").key.value;
        if (itm) {
            var id = document.getElementById(itm);
            var vo = JSON.parse(id.getAttribute('vo'));
            var data = document.getElementById("testform").data.value;
            var keyId = document.getElementById('keyId').innerHTML;
            if (keyId) {
                window.EIMZOClient.createPkcs7(keyId, data, null, function (pkcs7) {
                    document.getElementById("testform").pkcs7.value = pkcs7;
                },  (e, r)=> {
                    if (r) {
                        if (r.indexOf("BadPaddingException") != -1) {
                            this.uiShowMessage(this.errorWrongPassword);
                        } else {
                            this.uiShowMessage(r);
                        }
                    } else {
                        document.getElementById('keyId').innerHTML = '';
                        this.uiShowMessage(this.errorBrowserWS);
                    }
                    if (e) this.wsError(e);
                });
            } else {
                window.EIMZOClient.loadKey(vo,  (id)=> {
                    document.getElementById('keyId').innerHTML = id;
                    window.EIMZOClient.createPkcs7(id, data, null,  (pkcs7)=> {
                        document.getElementById("testform").pkcs7.value = pkcs7;
                    }, (e, r)=> {
                        if (r) {
                            if (r.indexOf("BadPaddingException") != -1) {
                                this.uiShowMessage(this.errorWrongPassword);
                            } else {
                                this.uiShowMessage(r);
                            }
                        } else {
                            document.getElementById('keyId').innerHTML = '';
                            this.uiShowMessage(this.errorBrowserWS);
                        }
                        if (e) this.wsError(e);
                    });
                },  (e, r)=> {
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
            }
        }
    };

    render() {
        return (
            <div>
                <form name="testform" id="testform">
                    <label id="message" style={{color: "red"}}></label>
                    Выберите ключ <br/>
                    <select name="key" onChange={this.cbChanged}>
                    </select><br/>
                    Текст для подписи <br/>
                    <textarea name="data"></textarea><br/>
                    <button onClick={this.sign} type="button">Подписать</button>
                    <br/>
                    ID ключа <label id="keyId"></label><br/>
                    Подписанный документ PKCS#7<br/>
                    <textarea name="pkcs7"></textarea><br/>
                </form>
            </div>
        );
    }
}

export default EImzo;

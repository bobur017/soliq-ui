import React, {useEffect, useState} from 'react';
import styles from './QRCodeIssuanceService.module.scss';
import GetInfo from '../../component/GetInfo';
import Select from 'react-select';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {request} from "../../utils/request";
import {toast} from "react-toastify";

function CreateNewQrCode(props) {
    const {setStatus, pinfl, stir} = props;
    console.log(pinfl)
    console.log(stir)
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState({});
    const [region, setRegion] = useState('');
    const [location, setLocation] = useState([41.369037, 69.299512]);
    const [longitude, setLongitude] = useState(41.369037);
    const [latitude, setLatitude] = useState(69.299512);
    const [dirTin, setDirTin] = useState(undefined);
    const [dirPinfl, setDirPinfl] = useState(undefined);
    const [dirFio, setDirFio] = useState(undefined);
    const [branchName, setBranchName] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const clickOnMap = (e) => {
        console.log(e.get('coords'))
        setLocation(e.get('coords'))
        console.log(e)
    }
    const goToSearch = () => {
        setStatus('pinfl')
        // props.history.push("/main/qr-code-services/qr-code-issuance-service")
    }
    const register = () => {
        request({
            url: "branch/create-branch",
            method: "post",
            data: {
                ns10Code: region,
                ns11Code: district.value,
                directorTin: dirTin,
                directorName: dirFio,
                directorPinfl: dirPinfl,
                branchName: branchName,
                pinfl: pinfl,
                tin: stir,
                address: address,
                name: name,
                longitude: longitude,
                latitude: latitude,
                // token:localStorage.getItem('access_token')
            }
        }).then(res => {
            if (res.success) {
                toast.success(res.message)
                props.getBranchQrByBranchId(res.data.data);
            } else {
                toast.error(res.message)
            }
        })

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
            url: "ns10",
            method: "get",
        }).then(res => {
            setRegions(res.list)
        })
    }, [])
    return (
        <div className={styles.createNewQRCode}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code berish xizmati</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code yaratish</span>
            </p>

            <GetInfo type='createQRCode'/>
            <div className={styles.addNewBranch}>
                <h1>Yangi filial malumotlarini qo'shish</h1>

                <div className="d-flex justify-content-between">
                    <div className={styles.group}>
                        <label htmlFor="inn">INN <span className="withStar">*</span></label>
                        <input type="text" value={stir} disabled id={'inn'}/>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="director">Filial raxbari JSHSHIR <span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setDirPinfl(e.target.value)
                        }} id={'director'}/>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="companyName">Korxona nomi <span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value)
                        }} id={'companyName'}/>
                    </div>
                    <div className={styles.group}>
                        <label>Viloyat<span className="withStar">*</span></label>
                        <Select options={regions?.map(item => {
                            return {value: item.code, label: item.nameUz}
                        })} placeholder="Tanlang" onChange={e => {
                            getNs11ByNs10(e.value);
                            setDistrict({})
                        }}/>
                    </div>
                    <div className={styles.group}>
                        <label>Tuman<span className="withStar">*</span></label>
                        <Select options={districts?.map(item => {
                            return {value: item.code, label: item.nameUz}
                        })} placeholder="Tanlang" onChange={e => {
                            setDistrict({
                                value: e.value,
                                label: e.label
                            })
                        }} value={district}/>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-30">
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Filial nomi <span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setBranchName(e.target.value)
                        }} id={'name'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="address">Filial manzili <span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setAddress(e.target.value)
                        }} id={'address'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName">Filial raxbari F.I.O <span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setDirFio(e.target.value)
                        }} id={'fullName'}/>
                    </div>

                </div>
            </div>
            <div className={styles.newBranch}>
                <h1>Yangi filial joylashuvini belgilash</h1>

                <div className="d-flex justify-content-between w-100">
                    <div className={styles.group}>
                        <label className="labels" htmlFor='width'>Kenglik (kenglik):</label>
                        <input id='width' value={location?.[0]} disabled type="text"/>
                    </div>
                    <div className={styles.group}>
                        <label className="labels" htmlFor='height'>Uzunlik (Longitude):</label>
                        <input id='height' value={location?.[0]} disabled type="text"/>
                    </div>


                </div>
                <YMaps>
                    <div>
                        <Map
                            instanceRef={inst => inst?.events.add('click', clickOnMap)}
                            className='mapYandex mt-10' style={{height: '400px'}}
                            defaultState={{center: location, zoom: 17}}>
                            <Placemark
                                geometry={location}
                            />
                        </Map>
                    </div>
                </YMaps>

                {/*<iframe src="https://yandex.uz/map-widget/v1/-/CCUNbGXmOB" onChange={(e) => {*/}
                {/*    console.log(e.target.value)*/}
                {/*}} width="560" height="400" frameBorder="1"*/}
                {/*        allowFullScreen="true"/>*/}

                <div className="d-flex justify-content-end">
                    <button onClick={goToSearch}>
                        <span className='icon icon-back'/>
                        Ortga qaytish
                    </button>
                    <button onClick={register}>
                        <span className='icon icon-payment'/>
                        To'lovga o'tish
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CreateNewQrCode;

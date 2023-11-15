import React, {useState} from 'react';
import styles from './ElectronicContract.module.scss';
import GetInfo from '../../component/GetInfo';
import {request} from "../../utils/request";
import {toast} from "react-toastify";

function CreateElectronicContract(props) {
    const {setContractId, setStatus} = props;
    //Buyurtmachi
    const [cPinfl, setCPinfl] = useState(undefined);
    const [cTin, setCTin] = useState(undefined);
    const [cCompanyName, setCCompanyName] = useState(undefined);
    const [cCompanyAddress, setCCompanyAddress] = useState(undefined);
    const [cCompanyDirFio, setCCompanyDirFio] = useState(undefined);
    const [cAccountNumber, setCAccountNumber] = useState(undefined);
    const [cMfo, setCMfo] = useState(undefined);
    const [cEmail, setCEmail] = useState(undefined);
    const [cPhone, setCPhone] = useState(undefined);

    //Ijrochi
    const [ePinfl, setEPinfl] = useState(undefined);
    const [eTin, setETin] = useState(undefined);
    const [eCompanyName, setECompanyName] = useState(undefined);
    const [eCompanyAddress, setECompanyAddress] = useState(undefined);
    const [eCompanyDirFio, setECompanyDirFio] = useState(undefined);
    const [eAccountNumber, setEAccountNumber] = useState(undefined);
    const [eMfo, setEMfo] = useState(undefined);
    const [eEmail, setEEmail] = useState(undefined);
    const [ePhone, setEPhone] = useState(undefined);
    const [eExecutive, setEExecutive] = useState(undefined);

    //Shartnoma predmeti
    const [serviceTypes, setServiceTypes] = useState(undefined);
    const [contractStartDate, setContractStartDate] = useState(undefined);
    const [contractEndDate, setContractEndDate] = useState(undefined);
    const [amount, setAmount] = useState(undefined);

    const create = () => {
        request({
            url: "contract/save",
            method: "post",
            data: {
                cPinfl: cPinfl,
                cCompanyName: cCompanyName,
                cCompanyAddress: cCompanyAddress,
                cCompanyDirFio: cCompanyDirFio,
                cAccountNumber: cAccountNumber,
                cMfo: cMfo,
                cEmail: cEmail,
                cPhone: cPhone,

                ePinfl: ePinfl,
                eCompanyName: eCompanyName,
                eCompanyAddress: eCompanyAddress,
                eCompanyDirFio: eCompanyDirFio,
                eAccountNumber: eAccountNumber,
                eMfo: eMfo,
                eEmail: eEmail,
                ePhone: ePhone,
                eExecutive: eExecutive,

                serviceTypes: serviceTypes,
                contractStartDate: contractStartDate,
                contractEndDate: contractEndDate,
                amount: amount
            }
        }).then(res => {
            if (res.success) {
                console.log(res)
                toast.success(res.reason)
                props.getPdf(res.data?.contractNumber)
            } else {
                toast.error(res.reason)
            }
        })

    }

    return (
        <div className={styles.ContractMaker}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Elektron shartnomalar tuzish</span>
            </p>

            <GetInfo type="contract"/>

            <div className={styles.maker}>
                <h2 className="titleMain font-roboto-bold">Buyurtmachi</h2>

                <div className="d-flex m-0 justify-content-between">
                    <div className={'w-50 inputs '}>
                        <div className="w-100 pr-20">
                            <label htmlFor="INN">INN/PINFL<span className="withStar">*</span></label>
                            <input type="text" id={'cPinfl'} placeholder="-" onChange={(e) => {
                                setCPinfl(e.target.value)
                            }}
                                   className="w-100 font-roboto-light "/>
                        </div>
                    </div>
                    <div className={'w-50  inputs mr-20'}>
                        <label htmlFor="company">Korxona nomi<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setCCompanyName(e.target.value)
                        }} id={'cCompany'} className="w-100 font-roboto-light"/>
                    </div>
                    <div className={'w-100  inputs '}>
                        <label htmlFor="address">Korxona manzili</label>
                        <input type="text" onChange={(e) => {
                            setCCompanyAddress(e.target.value)
                        }} id={'cAddress'} className="w-100 font-roboto-light"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between  ">
                    <div className={'w-100  inputs mr-20'}>
                        <label htmlFor="fullName">DIrektorning F.I.O<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setCCompanyDirFio(e.target.value)
                        }} id={'cFullName'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className=" w-50">

                        <div className={'w-100  inputs pr-20'}>
                            <label htmlFor="accountNumber">Xisob raqami<span className="withStar">*</span></label>
                            <input type="text" onChange={(e) => {
                                setCAccountNumber(e.target.value)
                            }} id={'cAccountNumber'} placeholder="-"
                                   className="w-100 font-roboto-light"/>
                        </div>
                    </div>
                    <div className={'w-50  inputs '}>
                        <label htmlFor="mfo">MFO<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setCMfo(e.target.value)
                        }} id={'cMfo'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-30 ">
                    <div className={'w-50  inputs mr-20'}>
                        <label htmlFor="email">E-mail<span className="withStar">*</span></label>
                        <input type="email" onChange={(e) => {
                            setCEmail(e.target.value)
                        }} id={'cEmail'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className={'w-50  inputs '}>
                        <label htmlFor="phone">Telefon raqamingiz<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setCPhone(e.target.value)
                        }} id={'cPhone'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                </div>
            </div>
            <div className={styles.maker}>
                <h2 className="titleMain font-roboto-bold">Ijrochi</h2>

                <div className="d-flex m-0 justify-content-between">
                    <div className={'w-50 inputs '}>
                        <div className="w-100 pr-20">
                            <label htmlFor="INN">INN/PINFL<span className="withStar">*</span></label>
                            <input type="text" onChange={(e) => {
                                setEPinfl(e.target.value)
                            }} id={'ePinfl'} placeholder="-"
                                   className="w-100 font-roboto-light "/>
                        </div>
                    </div>
                    <div className={'w-50  inputs mr-20'}>
                        <label htmlFor="company">Korxona nomi<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setECompanyName(e.target.value)
                        }} id={'eCompany'} className="w-100 font-roboto-light"/>
                    </div>
                    <div className={'w-100  inputs '}>
                        <label htmlFor="address">Korxona manzili</label>
                        <input type="text" onChange={(e) => {
                            setECompanyAddress(e.target.value)
                        }} id={'eAddress'} className="w-100 font-roboto-light"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between  ">
                    <div className={'w-100  inputs mr-20'}>
                        <label htmlFor="fullName">DIrektorning F.I.O<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setECompanyDirFio(e.target.value)
                        }} id={'eFullName'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className=" w-50">
                        <div className={'w-100  inputs pr-20'}>
                            <label htmlFor="accountNumber">Xisob raqami<span className="withStar">*</span></label>
                            <input type="text" onChange={(e) => {
                                setEAccountNumber(e.target.value)
                            }} id={'eAccountNumber'} placeholder="-"
                                   className="w-100 font-roboto-light"/>
                        </div>
                    </div>
                    <div className={'w-50  inputs '}>
                        <label htmlFor="mfo">MFO<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setEMfo(e.target.value)
                        }} id={'eMfo'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-30 ">
                    <div className={'w-100  inputs mr-20'}>
                        <label htmlFor="email">E-mail<span className="withStar">*</span></label>
                        <input type="email" onChange={(e) => {
                            setEEmail(e.target.value)
                        }} id={'eEmail'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className={'w-50 inputs pr-20 '}>
                        <label htmlFor="phone">Telefon raqamingiz<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setEPhone(e.target.value)
                        }} id={'ePhone'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className={'w-50 inputs '}>
                        <label htmlFor="eExecutive">Bajaruvchi<span className="withStar">*</span></label>
                        <input type="text" onChange={(e) => {
                            setEExecutive(e.target.value)
                        }} id={'eExecutive'} placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                </div>
            </div>


            <div className={styles.subject}>
                <h3 className="titleMain font-roboto-bold">Shartnoma predmeti</h3>

                <div className={`${styles.serviceType} inputs`}>
                    <label htmlFor="serviceType">
                        “Ijrochi” tomonidan ko'rsatiladigan xizmat turlari<span className="withStar">*</span>
                    </label>
                    <textarea name="" onChange={(e) => {
                        setServiceTypes(e.target.value)
                    }} id="serviceType" placeholder="-" className="w-100 font-roboto-light"/>
                </div>

                <div className="d-flex justify-content-between mt-30 w-50">
                    <div className={`${styles.deadline} inputs w-25`}>
                        <label htmlFor="date">Shartnoma muddati<span className="withStar">*</span></label>
                        <input type="date" onChange={(e) => {
                            setContractStartDate(e.target.value)
                        }} id="date" placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                    <div className={`${styles.deadline}  inputs w-25`}>
                        <input type="date" onChange={(e) => {
                            setContractEndDate(e.target.value)
                        }} id="endDate" placeholder="-"
                               className="w-100 font-roboto-light mt-auto d-block"/>
                    </div>
                    <div className={`${styles.deadline} inputs w-25`}>
                        <label htmlFor="sum">Summa<span className="withStar">*</span></label>
                        <input type="number" min={0} onChange={(e) => {
                            setAmount(e.target.value)
                        }} id="sum" placeholder="-" className="w-100 font-roboto-light"/>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    {/*<button className={styles.footerBtn}>*/}
                    {/*    <span className="icon icon-plus-circle"/>*/}
                    {/*    Faylni qoshish*/}
                    {/*</button>*/}
                    <button onClick={create} className={styles.footerBtn}>
                        <span className="icon icon-add-btn"/>
                        Shakllantirish
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CreateElectronicContract;

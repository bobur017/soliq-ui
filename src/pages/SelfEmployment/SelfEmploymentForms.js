import React from 'react';
import styles from "./SelfEmployment.module.scss"
import Select from "react-select";

const SelfEmploymentForms = (props) => {

    return (
        <>
            <div className={`${styles.SelfEmploymentForms} `}>

                <h3 className="font-roboto-bold">Jismoniy shaxs to’g’risida malumot</h3>
                <div className="d-flex w-100">
                    <form onSubmit={props.submit} className="w-100 mr-20">
                        <div className="inputs w-100 ">
                            <label>JShShIRni tering<span className="withStar">*</span></label>
                            <div className={styles.searchBtn}>
                                <input type="text" className="w-100" placeholder="-" name="tin" onChange={() => {
                                    props.setInfo(null);
                                    props.setDistrict({});
                                    props.setSelectedAct(null)
                                }}/>
                                <button>
                                    <span className="icon icon-search"/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="inputs w-100 mr-20">
                        <label>Familiya</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.surName : ""}/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label>Ism</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.firstName : ""}/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label>Sharif</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.middleName : ""}/>
                    </div>
                    <div className="inputs w-100  ">
                        <label>Tug’ilgan sanasi</label>
                        <input type="date" className="w-100" disabled
                               value={props.info ? props.info.birthDate.substr(6, 4) + "-" + props.info.birthDate.substr(3, 2) + "-" + props.info.birthDate.substr(0, 2) : ""}/>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="inputs w-33 mr-20">
                        <label>Viloyat</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.ns10Name : ""}/>
                    </div>
                    <div className="inputs w-33 mr-20">
                        <label>Tuman</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.ns11Name : ""}/>
                    </div>
                    <div className="inputs w-100  ">
                        <label>Manzil</label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.address : ""}/>
                    </div>

                </div>
                <div className="d-flex w-100">

                    <div className="inputs w-100 mr-20">
                        <label>Passport seriya<span className="withStar">*</span></label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.passSeries : ""}/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label>Passport raqami<span className="withStar">*</span></label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.passNumber : ""}/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label>Kim tomonidan berilgan <span className="withStar">*</span></label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.passOrg : ""}/>
                    </div>
                    <div className="inputs w-100  ">
                        <label>Qachon berilgan* <span className="withStar">*</span></label>
                        <input type="text" className="w-100" disabled value={props.info ? props.info.passDate : ""}/>
                    </div>
                </div>
                <div className="inputs">
                    <label>Faolyat turi<span className="withStar">*</span></label>
                    <Select options={props.actType?.map(item => {
                        return {value: item.code, label: item.nameLatn}
                    })} placeholder="Tanlang" onChange={(e) => {
                        props.setSelectedAct(e.value)
                    }}/>
                </div>
            </div>
            {props.info &&
            <div className={styles.SelfEmploymentRegion}>

                <h3 className="font-roboto-bold">Faoliyat yuritiladigan xudud</h3>

                <div className="d-flex w-100">

                    <div className="inputs w-100 mr-20">
                        <label>Viloyat<span className="withStar">*</span></label>
                        <Select options={props.regions?.map(item => {
                            return {value: item.code, label: item.nameUz}
                        })} placeholder="Tanlang" onChange={e => {
                            props.getDistricts(e.value);
                            props.setDistrict({})
                        }}/>
                    </div>
                    <div className="inputs w-100">
                        <label>Tuman<span className="withStar">*</span></label>
                        <Select options={props.districts?.map(item => {
                            return {value: item.code, label: item.nameUz}
                        })} placeholder="Tanlang" onChange={e => {
                            props.setDistrict({
                                value: e.value,
                                label: e.label
                            })
                        }} value={props.district}/>
                    </div>
                </div>
            </div>
            }
            {props.info &&
            <div className={`${styles.SelfEmploymentFormsSms}`}>
                <div className="d-flex w-100">
                    <div className="w-100 mr-20 form">
                        <div className="inputs w-50 ">
                            <label>Telefon raqam<span className="withStar">*</span></label>
                            <div className={styles.smsBtn}>
                                <input type="text" className="w-100" onChange={(e) => {
                                    props.setSmsPhone(e.target.value)
                                }} placeholder="-" name="smsPhone"/>
                                <button className='btn' onClick={props.sendSms}>
                                    Kodni yuborish
                                </button>
                            </div>
                        </div>
                    </div>
                    {props.smsId && <div className="w-100 mr-20 form">
                        <div className="inputs w-50 ">
                            <label>Tasdiqlash kodi<span className="withStar">*</span></label>
                            <div className={styles.smsBtn}>
                                <input type="text" className="w-100" onChange={(e) => {
                                    props.setConfirmCode(e.target.value)
                                }} placeholder="-" name="confirmCode"/>
                                <button className='btn' onClick={props.confirmSms}>
                                    Tasdiqlash
                                </button>
                            </div>
                        </div>
                    </div>}
                    <div className="btnGroup">
                        <button disabled={props.finishStatus === false} className="paidBtn font-roboto-bold"
                                onClick={() => props.register()}>
                            Malumotnomani shakllantirish
                        </button>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default SelfEmploymentForms;

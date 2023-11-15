import React from 'react';
import styles from "./SelfEmployment.module.scss"
import Select from "react-select";
import GetInfo from "../../component/GetInfo";
const SelfEmploymentForms2 = () => {
    const options = [
        {value: 'chocolate', label: '2222'},
        {value: 'strawberry', label: '2222'},
        {value: 'vanilla', label: '2222'}
    ]
    return (

            <div className={`${styles.upBox} upBox`}>
                <h2 className="font-roboto-bold">Jismoniy shaxs to’g’risida malumotlar</h2>
                    <div className="d-flex">
                        <div className="w-100 d-flex">
                            <div className="inputs w-100 mr-20">
                                <label >INN <span className="withStar">*</span></label>
                                <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                            </div>
                            <div className="inputs w-100 mr-20">
                                <label >JSHSHIR<span className="withStar">*</span></label>
                                <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="inputs w-100 ">
                                <label >Shaxsning  F.I.O</label>
                                <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                            </div>
                        </div>
                    </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >Passport seriyasi </label>
                        <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Passport raqami</label>
                        <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 ">
                        <label >Kim tomonidan berilgan IIB</label>
                        <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >Uy manzili </label>
                        <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-25 ">
                        <label >Telefon raqamingiz <span className="withStar">*</span></label>
                        <input type="text"   className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >Amalga oshirilgan faoliyat turi</label>
                        <Select options={options} placeholder="Tanlang" />
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Faoliyatni amalga oshirish joyi</label>
                        <input type="text" disabled className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-33 ">
                        <label >Shartnoma muddati<span className="withStar">*</span></label>
                        <input type="date"   className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="uploaded mr-30 font-roboto-bold">
                        <span className="icon icon-bird"/>
                        Mexnat shartnomasi yuklandi
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-add-btn"/>
                        Arizani shakllantirish
                    </button>
                </div>
            </div>
    );
};

export default SelfEmploymentForms2;
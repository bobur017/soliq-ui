import React from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss";
import Select from "react-select";
import GetInfo from "../../component/GetInfo";

const RegistrationOfStudentRentalAgreement2 = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];
    return (
        <div className={styles.registrationOfStudentRentalAgreement2}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari  ro’yxatdan o’tkazish</span>
            </p>
            {/*<div className="titleBox ">*/}
            {/*    <div className="w-100">*/}
            {/*        <h3 className="titleMain font-roboto-bold">*/}
            {/*            Ijara shartnomasini ro’yxatdan o’tkazish*/}
            {/*        </h3>*/}
            {/*        <div className={styles.progressMain}>*/}
            {/*            <div className={`${styles.dot} ${styles.activeDot}`}><div><span className={styles.activeDot}></span></div></div>*/}
            {/*            <div className={`${styles.dot} ${styles.activeDot}`}><div><span  className={styles.activeDot}></span></div><h1 className={`m-0 font-roboto-regular`}>Kerakli ma’lumotlar kiritish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span  className={styles.activeDot}></span></div><h1 className={`m-0 font-roboto-regular`}>Talabani tasdiqlash</h1></div>*/}
            {/*            <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>Hujjatni shallantirish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>  Hizmat uchun to’lovni amalga oshirish</h1></div>*/}
            {/*            <div className={styles.dot}><div><span><span className="icon icon-bird"></span></span></div><h1 className={` m-0 font-roboto-regular`}>Hizmat yakunlandi</h1></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <GetInfo type={"IJSH3"} />
            <div className={styles.registrationOfStudentRentalAgreement2Part}>
                <div className={styles.leftPart}>
                    <h2>Ijaraga berilayotgan ko’chmas mulk tog`risida ma’lumot</h2>
                    <div className="d-flex w-100">
                        <div className="inputs w-100 z-index-main">
                            <label>Ko’chmas mulk obyekti</label>
                            <Select options={options} placeholder="-" />
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="inputs w-100 mr-20">
                            <label >Umumiy maydon (kv.m)</label>
                            <input type="text" className="w-100"  placeholder="-" />
                        </div>
                        <div className="inputs w-100 mr-20">
                            <label >Ijara berilgan maydon (kv.m)</label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-100">
                            <label >Bo’sh maydon (kv.m)</label>
                            <input type="text" className={styles.kvm2}  placeholder="-" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea11">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea11" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName11">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName11" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="address11">Manzil</label>
                            <input type="text" className="w-100" id="address11" placeholder="-"/>
                        </div>

                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="date11">Ijara sanasini boshlanishi</label>
                            <input type="date" className="w-100" id="date11" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="date12">Ijara sanasini tugashi</label>
                            <input type="date" className="w-100" id="date12" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="area11">Ijara beriladigan maydon</label>
                            <input type="text" className="w-100" id="area11" placeholder="-"/>
                        </div>
                        <div className="inputs w-100 z-index-main ">
                            <label>Hisoblash miqdori</label>
                            <Select options={options} placeholder="-" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="payments11">Bir oylik to’lovlar</label>
                            <input type="text" className="w-100" id="payments11" placeholder="-"/>
                        </div>
                        <div className="inputs w-100  ">
                            <label htmlFor="allpayments11">To’lovning umumiy summasi</label>
                            <input type="text" className="w-100" id="allpayments11" placeholder="-"/>
                        </div>
                    </div>

                </div>
                <div className={styles.rightPart}>
                    <h2>Ijaraga oluvchi to‘grisida ma‘lumot</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label >JSHSHIR <span className="withStar">*</span></label>
                            <input type="text" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-100">
                            <label >F.I.SH</label>
                            <input type="text"  className="w-100" placeholder="JSHSHIR orqali avtomatik aniqlanadi" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label >Telefon raqami <span className="withStar">*</span></label>
                            <input type="text" className="w-100" placeholder="+ 998" />
                        </div>
                    </div>
                 <div className="d-flex">
                     <div className="inputs w-100  mr-20 z-index-main">
                         <label>Tasdiqlash turi</label>
                         <Select options={options} placeholder="-" />
                     </div>
                     <div className="inputs mt-auto w-75">
                         <button className={styles.disBtn} disabled={true}>Tasdiqlash kodini yuborish</button>
                     </div>
                 </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="code12">Tasdiqlash kodi </label>
                            <input type="text" id="code12" className="w-100" placeholder="-" />
                        </div>
                        <div className="inputs w-75">
                            <button className={styles.disBtn} disabled={true}>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea12">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea12" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName12">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName12" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="address12">Manzil</label>
                            <input type="text" className="w-100" id="address12" placeholder="-"/>
                        </div>

                    </div>
                    <button className={styles.additionBtn}>
                        <span className="icon icon-circleplus" />
                        Ijarada birga yashovchilar qoshish
                    </button>
                </div>
            </div>

            <div className={styles.thirdPart}>
                <h3>Quyidagi kommunal to'lovlar ijara shartnomasiga asosan IJARAGA OLUVCHI tomonidan amalga oshiriladi</h3>

                <div className="d-flex">
                    <div className={styles.residentialAddress112}>
                        <input type="checkbox"  />
                        <h2>Tabiiy gaz</h2>
                    </div>
                    <div className={styles.residentialAddress112}>
                        <input type="checkbox"  />
                        <h2>Elektr energiyasi</h2>
                    </div>
                    <div className={styles.residentialAddress112}>
                        <input type="checkbox"  />
                        <h2>Issiq suv</h2>
                    </div>
                    <div className={styles.residentialAddress112}>
                        <input type="checkbox"  />
                        <h2>Sovuq suv</h2>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100">
                        <label htmlFor="uslugi1">Qo'shimcha shartlar</label>
                        <input type="text" className="w-100" id="uslugi1" placeholder="-"/>
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <button className={styles.paidBtn}>
                        <span className="icon icon-circleplus" />
                        Shartnomani yaratish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationOfStudentRentalAgreement2;

import React from 'react';
import styles from './RegistrationOfTheLeaseAgreement.module.scss'
import Select from "react-select";
import GetInfo from "../../component/GetInfo";
const RegistrationOfStudentRentalAgreement = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];

    return (
        <div className={styles.registrationOfStudentRentalAgreement}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Talabalar ijarasini ro’yxatga olish</span>
            </p>
            {/*<div className="titleBox ">*/}
            {/*     <div className="w-100">*/}
            {/*         <h3 className="titleMain font-roboto-bold">*/}
            {/*             Ijara shartnomasini ro’yxatdan o’tkazish*/}
            {/*         </h3>*/}
            {/*         <div className={styles.progressMain}>*/}
            {/*             <div className={`${styles.dot} ${styles.activeDot}`}><div><span className={styles.activeDot}></span></div></div>*/}
            {/*             <div className={styles.dot}><div><span  className={styles.activeDot}></span></div><h1 className={`m-0 font-roboto-regular`}>Talabani tasdiqlash</h1></div>*/}
            {/*             <div className={styles.dot}><div><span></span></div><h1 className={`m-0 font-roboto-regular`}>Kerakli ma’lumotlar kiritish</h1></div>*/}
            {/*             <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>Hujjatni shallantirish</h1></div>*/}
            {/*             <div className={styles.dot}><div><span></span></div><h1 className={` m-0 font-roboto-regular`}>  Hizmat uchun to’lovni amalga oshirish</h1></div>*/}
            {/*             <div className={styles.dot}><div><span><span className="icon icon-bird"></span></span></div><h1 className={` m-0 font-roboto-regular`}>Hizmat yakunlandi</h1></div>*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*</div>*/}

            <GetInfo type={"IJSH2"} />
            <div className={styles.stTwoPart}>
                <div className={styles.leftPart}>
                    <h2>Ijaraga berilayotgan ko’chmas mulk tog`risida ma’lumot</h2>
                    <div className="inputs w-100 z-index-main">
                        <label >Tuman nomi</label>
                        <Select options={options} placeholder="-" />
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <h2>Ijaraga oluvchi to‘grisida ma‘lumot</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label >JSHSHIR <span className="withStar">*</span></label>
                            <input type="text" className="w-100"  placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label >F.I.SH</label>
                            <input type="text" className="w-100"  placeholder="JSHSHIR orqali avtomatik aniqlanadi"/>
                        </div>
                    </div>
                    <button className={styles.addBtn}>
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
                        <label >Qo'shimcha shartlar</label>
                        <input type="text" className="w-100"  placeholder="-"/>
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

export default RegistrationOfStudentRentalAgreement;

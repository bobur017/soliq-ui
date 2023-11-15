import React from 'react';
import styles from './RegistrationOfTheLeaseAgreement.module.scss'
import Select from "react-select";
const RegistrationOfTheLeaseAgreementNewOne = () => {
    const options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];

    return (
        <div className={styles.RegistrationOfTheLeaseAgreementNew}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomasini ro’yxatdan o’tkazish</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Ijara shartnomasini ro’yxatdan o’tkazish
                </h3>
            </div>
            <div className={styles.twoPart}>
                <div className={styles.leftPart}>
                    <h3>ijaraga beruvchi to‘grisida ma‘lumot</h3>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="PINFL1">PINFL</label>
                            <input type="text" className="w-100" id="PINFL1" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="FIO1">F.I.O</label>
                            <input type="text" className="w-100" id="FIO1" placeholder="-"/>
                        </div>
                    </div>
                    <h2>Ro‘yxatga olingan manzili</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea1">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea1" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName1">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName1" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="adress1">Manzili</label>
                            <input type="text" className="w-100" id="address1" placeholder="-"/>
                        </div>

                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 ">
                            <label htmlFor="phone1">Telefon raqami   <span className="withStar">*</span></label>
                            <input type="text"  className="w-100" id="phone1" placeholder="+998"/>
                        </div>

                    </div>
                    <div className={styles.residentialAddress1}>
                        <input type="checkbox" id="residentialAddress1"  />
                        <h2>Yashash manzili</h2>
                    </div>
                    <div className="d-flex w-100">
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label htmlFor="nameArea2">Hudud nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label >Tuman nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100 z-index-main">
                            <label htmlFor="neighborhoodName1">Mahalla nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="streetName1">Ko'cha nomi</label>
                            <input type="text" className="w-100" id="streetName1" placeholder="-"/>
                        </div>
                        <div className="inputs w-33 mr-20">
                            <label htmlFor="home1">Uy</label>
                            <input type="text" className="w-100" id="home1" placeholder="-"/>
                        </div>
                        <div className="inputs w-33">
                            <label htmlFor="kv1">Tuman nomi</label>
                            <input type="text" className="w-100" id="kv1" placeholder="-"/>
                        </div>
                    </div>

                </div>
                <div className={styles.rightPart}>
                    <h3>ijaraga oluvchi to‘grisida ma‘lumot</h3>
                    <div className="d-flex">

                        <div className="inputs w-100 mr-20 z-index-main">
                            <label htmlFor="renterType1">ijaraga oluvchi turi <span className="withStar">*</span></label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="PINFL2">PINFL</label>
                            <input type="text" className="w-100" id="PINFL2" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="FISH1">F.I.SH</label>
                            <input type="text" className="w-100" id="FISH1" placeholder="-"/>
                        </div>
                    </div>
                    <h2>Ro‘yxatga olingan manzili</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="nameArea1">Hudud nomi</label>
                            <input type="text" className="w-100" id="nameArea1" placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label htmlFor="regionName1">Tuman nomi</label>
                            <input type="text" className="w-100" id="regionName1" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="address2">Ro‘yxatga otgan manzili</label>
                            <input type="text" className="w-100" id="address2" placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100">
                            <label htmlFor="phone2">Telefon raqami   <span className="withStar">*</span></label>
                            <input type="text"  className="w-100" id="phone2" placeholder="+998"/>
                        </div>
                    </div>
                    <div className={styles.residentialAddress1}>
                        <input type="checkbox" id="residentialAddress2"  />
                        <h2>Yashash manzili</h2>
                    </div>
                    <div className="d-flex w-100">
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label htmlFor="nameArea3">Hudud nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label htmlFor="regionName3">Tuman nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100 z-index-main">
                            <label htmlFor="neighborhoodName3">Mahalla nomi</label>
                            <Select options={options} placeholder="-" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="streetName2">Ko'cha nomi</label>
                            <input type="text" className="w-100" id="streetName2" placeholder="-"/>
                        </div>
                        <div className="inputs w-33 mr-20">
                            <label htmlFor="home2">Uy</label>
                            <input type="text" className="w-100" id="home2" placeholder="-"/>
                        </div>
                        <div className="inputs w-33">
                            <label htmlFor="kv2">Tuman nomi</label>
                            <input type="text" className="w-100" id="kv2" placeholder="-"/>
                        </div>
                    </div>
                    <h2>Ijarada birga yashovchilar</h2>
                    <div className="d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="PINFL3">PINFL</label>
                            <input type="text" className="w-100" id="PINFL3" placeholder="-"/>
                        </div>
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="FIO2">F.I.O</label>
                            <input type="text" className="w-100" id="FIO2" placeholder="-"/>
                        </div>
                        <div className={styles.button}>
                            <span className="icon icon-delete-btn"/>
                        </div>
                    </div>
                    <button className={styles.additionBtn}>
                        <span className="icon icon-circleplus" />
                        Ijarada birga yashovchilar qoshish
                    </button>
                </div>
            </div>
            <div className={styles.onePart}>
                <h3>Ijaraga berilayotgan ko'chmas mulk to'g'risida ma'lumot</h3>
                <div className={styles.residentialAddress1}>
                    <input type="checkbox" id="residentialAddress2"  />
                    <h2>Ikkilamchi ijaraga roziman</h2>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label htmlFor="nameArea3">Ko'chmas mulk obyekti <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-50 mr-20">
                        <label htmlFor="estate1">Ko'chmas mulkning turi</label>
                        <input type="text" className="w-100" id="estate1" placeholder="-"/>
                    </div>
                    <div className={styles.button}>
                        <span className="icon icon-not"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 ">
                        <label htmlFor="person1">Yuridik shaxsning nomi</label>
                        <input type="text" className="w-100" id="person1" placeholder="-"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="nameArea3">Hudud nomi</label>
                        <input type="text" className="w-100" id="nameArea3" placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="regionName3">Tuman nomi</label>
                        <input type="text" className="w-100" id="regionName3" placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label htmlFor="nameArea3">Ijaraga berilish holati <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100">
                        <label htmlFor="area1">Umumiy maydon (kv.m)</label>
                        <input type="text" className="w-100" id="area1" placeholder="-"/>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label htmlFor="date1">Ijara sanasi boshlanishi <span className="withStar">*</span></label>
                        <input type="date" className="w-100" id="date1" placeholder="-"/>
                    </div>
                    <div className="inputs w-100">
                        <label htmlFor="date2">Ijara sanasi tugashi</label>
                        <input type="date" className="w-100" id="date2" placeholder="-"/>
                    </div>

                </div>


                <h2>Ko'chmas mulkdan foydalanish turi</h2>
                <div className={styles.residentialAddress1}>
                    <input type="checkbox" id="residentialAddress2"  />
                    <h2>Bepul</h2>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label>Tolov turi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="w-100 d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="monthPayment1">Bir oylik to'lovi <span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="monthPayment1" placeholder="-"/>
                        </div>
                        <div className="inputs w-100 ">
                            <label htmlFor="allSum1">To'lovning umumiy summasi <span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="allsum1" placeholder="-"/>
                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label>Mulkning foydalanish maqsadi <span className="withStar">*</span></label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="w-100 d-flex">
                        <div className="inputs w-100 mr-20">
                            <label htmlFor="areaArenda1">Ijara maydoni<span className="withStar">*</span></label>
                            <input type="text" className="w-100" id="areaArenda1" placeholder="-"/>
                        </div>
                        <button className={styles.addBtn}>
                            <span className="icon icon-plus-btn" />
                        </button>
                    </div>
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
                       <span className="icon icon-coin" />
                       To'lovga o'tish
                   </button>
               </div>
            </div>
        </div>
    );
};

export default RegistrationOfTheLeaseAgreementNewOne;

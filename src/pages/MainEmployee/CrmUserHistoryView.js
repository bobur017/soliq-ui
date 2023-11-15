import React, {useState} from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";
const CrmUserHistoryView = () => {
    const [open, setOpen] = useState(false)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.CRMUserHistory}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>CRM Foydalanuvchilar tarixi</span>
            </p>
            <div className={`${styles.titleBox} z-index-main`}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h3 className="titleMain font-roboto-bold">
                        Axmadjonov ilhomjon inomjonovich
                    </h3>
                    <div className="d-flex ">
                        <div  className={styles.services}>
                           <button  onClick={() => setOpen(!open)} className="font-roboto-light">Barcha xizmatlar</button>
                            <button onClick={() => setOpen(!open)}>
                                <span className="icon icon-arrow-down" />
                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                                         className="css-tj5bde-Svg">
                                        <path
                                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                    </svg>
                            </button>
                            <div className={open ? styles.openSelect : styles.closeSelect}>
                                <div className={styles.groups}>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Ижара шартномасини рўйхатдан ўтказиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Ижара шартномасини бекор килиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Ўз ўзини банд қилган шахсларни рўйхатдан ўтказиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Ёлланган ходимларни рўйхатдан ўтказиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>QR-code бериш хизмати</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Шартномаларни електрон тузиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Електрон рақамли имзо муддатини узайтириб беришга ариза жўнатиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Murojaatlarni onlayn tarzda qabul qilish hamda savol javob o‘tkazish</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЮШ солиқ қарзлари йўқлиги тўғрисида маълумотнома</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЯТТлар солик карзи мавжуд эмаслиги</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЖШ солиқ қарзлари йўқлиги тўғрисида маълумотнома</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЮШ солиштирма даломатномалари</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЯТТлар солиштирма далолат номалари</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Декларацияни қидириш</span>
                                    </div>
                                </div>
                                <div className={styles.groups}>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ПИНФЛ регистрация</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ПИНФЛни СТИЛга бириктириш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Маълумотларини рўйхатдан ўтказиш ва ўзгартириш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЮШ томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини тайёрлаш ва солик органларига юбориш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЯТТ лар томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини тайёрлаш ва солик органларига юбориш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЖС жами йиллик даромати тугр сидаги декларацияни тизиш ва электрон шаклга утказиб, солик органларига юбориш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ИНН сертификат тақдим етиш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Компьютер хизматлари</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>ЮШ ва ЖС ёзма мурожаатига (ёзма) тушинтириш бериш</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Огзаки маслахатлар</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Утказилган укув курслари ва семинарлар</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Омавий ахборот воситаларида чикаришлар</span>
                                    </div>
                                    <div className="d-flex">
                                        <input type="checkbox"/>
                                        <span>Чоп этилган буклет ва флаерлар</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Select options={options} placeholder="yil" className={styles.month}/>
                        <Select options={options} placeholder="oy" className={styles.month}/>
                        <button className={styles.printBtn}>
                            <span className="icon icon-print"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="upBox">
                <div className="w-100">
                    <label className="labels font-roboto-regular inputLabel" >PINFL/INN tering<span
                        className="withStar">*</span></label>
                    <div className="d-flex">
                        <input type="text"  className="input-style font-roboto-light w-100"/>
                        <button className={styles.searchBtn}>
                            <span className="icon icon-search"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${styles.tabelsMain}  mt-30`}>
                <h3 className="font-roboto-bold">Ijara shartnomasini ro’yxatdan o’tkazish</h3>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>№</th>
                            <th>Yaratilgan sana</th>
                            <th>Filial nomi</th>
                            <th>Pasport seriasi va raqami</th>
                            <th>Telefon raqami</th>
                            <th>Sozlash</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span>18.09.2021</span>
                                <span className={styles.expected}>Kutilmoqda</span>
                            </td>
                            <td>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</td>
                            <td>АА 1234561</td>
                            <td>+998 33 408 28 08</td>
                            <td>
                                <button>Ko'rish <span className="icon icon-arrow-right "/></button>
                                <button>Yuklab olish <span className="icon icon-download "/></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span>18.09.2021</span>
                                <span className={styles.signed}>Imzolangan</span>
                            </td>
                            <td>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</td>
                            <td>АА 1234561</td>
                            <td>+998 33 408 28 08</td>
                            <td>
                                <button>Ko'rish <span className="icon icon-arrow-right "/></button>
                                <button>Yuklab olish <span className="icon icon-download "/></button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
            <div className={`${styles.tabelsMain}  mt-30`}>
                <h3 className="font-roboto-bold">Ijara shartnomasini bekor qilish</h3>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th>№</th>
                            <th>Yaratilgan sana</th>
                            <th>Filial nomi</th>
                            <th>Pasport seriasi va raqami</th>
                            <th>Telefon raqami</th>
                            <th>Sozlash</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span>18.09.2021</span>
                                <span className={styles.expected}>Kutilmoqda</span>
                            </td>
                            <td>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</td>
                            <td>АА 1234561</td>
                            <td>+998 33 408 28 08</td>
                            <td>
                                <button>Ko'rish <span className="icon icon-arrow-right "/></button>
                                <button>Yuklab olish <span className="icon icon-download "/></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <span>18.09.2021</span>
                                <span className={styles.signed}>Imzolangan</span>
                            </td>
                            <td>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</td>
                            <td>АА 1234561</td>
                            <td>+998 33 408 28 08</td>
                            <td>
                                <button>Ko'rish <span className="icon icon-arrow-right "/></button>
                                <button>Yuklab olish <span className="icon icon-download "/></button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default CrmUserHistoryView;

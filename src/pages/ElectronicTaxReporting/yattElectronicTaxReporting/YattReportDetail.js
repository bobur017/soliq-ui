import React from 'react';
import styles from '../ElectronicTaxReporting.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";

const YattReportDetail = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <div className={styles.reportDetail}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>YTT tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Qoʼshilgan qiymat soligʼi hisobotlari</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>10006_34</span>
            </p>

            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold"> YTT tomonidan taqdim etilgan malumotlar asosida ekektron
                    soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish </h3>
            </div>
            <div className="upBox">
                <h2 className="font-roboto-bold">ESP bilan tizimga kiring</h2>
                <Select options={options} className="mt-30 mr-20" placeholder="-"/>
            </div>
            <div className="titleBox mt-30">
                <div className="w-100">
                    <h2 className="titleMain font-roboto-bold">Hisobot detallari</h2>
                    <div className="d-flex">
                        <div className="w-75 mr-20">
                            <div className="inputs w-100 ">
                                <label>Shaxsni tanlang<span className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                        </div>
                        <div className="w-100 d-flex">
                            <div className="inputs mr-20 w-100">
                                <label>Xisobot turi<span className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                            <div className="inputs mr-20 w-25">
                                <label>Yil<span className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                            <div className="inputs w-25">
                                <label>Период<span className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="w-75 mr-20">
                            <div className="inputs w-100">
                                <label>Tumanni tanlang<span className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="inputs w-100">
                                <label>Qoʼshilgan qiymat soligʼi toʼlovchisi toʼgʼrisida maʼlumot<span
                                    className="withStar">*</span></label>
                                <Select options={options} placeholder="-"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.titleBoxDup}>
                <h3 className="titleMain font-roboto-bold">Faylni biriktirish</h3>
                <div className="d-flex mt-30">
                    <div className={styles.forAdd}>
                        <button className={`${styles.addBtn}  font-roboto-bold`}>
                            <span className="icon icon-circleplus"/>
                            Faylni tanlang
                        </button>
                    </div>
                    <div className={styles.links}>
                        Biriktirilgan shablon fayli <Link className="font-roboto-bold">Shablonni yuklab olish</Link>
                        <button className="font-roboto-bold">Hujjatlar roʼyxati yuklab olish</button>
                    </div>
                    <div className={styles.text}>
                        <p>
                            Hisobot yuborilgandan soʼng "Tekshirishda" boʼlimiga joylashtiriladi va avtomatik ravishda
                            toʼliq va toʼgʼri toʼldirilganligi tekshiriladi. Soʼngra hisobotda xatolik aniqlangan
                            xolatda "Xatolik mavjud" boʼlimiga joylashtiriladi, yoki "Joʼnatilganlar" boʼlimiga
                            joylashtiriladi
                        </p>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="notBtn font-roboto-bold mr-20">
                        <span className="icon icon-not"/>
                        Qo‘llanma
                    </button>
                    <button className="closeBtn font-roboto-bold mr-20">
                        <span className="icon icon-close"/>
                        Saqlash
                    </button>
                    <button className="paidBtn font-roboto-bold mr-20">
                        <span className="icon icon-bird"/>
                        Saqlash
                    </button>
                    <button className="uploadUpBtn font-roboto-bold">
                        <span className="icon icon-upload-up"/>
                        Saqlash
                    </button>
                </div>
            </div>
            <div className={styles.informationPair}>
                <div className="d-flex justify-content-between">
                    <div className={styles.innSt}>
                        <label className="font-roboto-light">ИНН</label>
                        <input type="text"/>
                    </div>
                    <div className={styles.nds1}>
                        <label className="font-roboto-light">Регистрационный код плательщика НДС</label>
                        <input type="text"/>
                        <label className="font-roboto-light">лист 01</label>
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <div className={styles.typeDoc1}>
                        <div>
                            <label>Вид документа</label>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <p className="font-roboto-light">Вид документа: 1-расчет, 2-уточняющий (через дробь номер
                            уточнения)</p>
                    </div>
                    <div className={styles.typeDoc2}>
                        <label>Налоговый период</label>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div className={styles.typeDoc3}>
                        <div className="d-flex">
                            <div className={styles.tekst}><label>Месяц</label></div>
                            <div className={styles.in1}></div>
                            <div className={styles.in2}><input type="text"/></div>
                            <div className={styles.in3}><label>год</label></div>
                        </div>
                        <div className="d-flex">
                            <div className={styles.tekst}></div>
                            <div className={styles.in1}><input type="text"/></div>
                            <div className={styles.in2}></div>
                            <div className={styles.in3}></div>
                        </div>
                    </div>
                </div>
                <h3 className="font-roboto-bold mt-30">СВЕДЕНИЯ о платеотщике налога на добавленную стоимость</h3>
                <div className={styles.infoValue}>
                    <div className="d-flex">
                        <div className={styles.inq1}><label>Полное наименование налогоплательщика</label></div>
                        <div className={styles.inq2}>
                            <input type="text" className="w-100"/>
                        </div>
                    </div>
                    <div className={styles.inq3}>
                        <label>Метод определения суммы НДС, принимаемой к зачету</label>
                        <input type="text"/>
                        <label>пропорциональнь</label>
                        <input type="text"/>
                        <label>раздельный (отметить с цифрой “1”)</label>
                    </div>
                    <div className="d-flex mt-10">
                        <div className={styles.inq1}><label>Местонахождение налогоплательщика</label></div>
                        <div className={styles.inq2}>
                            <input type="text" className="w-100"/>
                        </div>
                    </div>
                    <div className="d-flex mt-10">
                        <div className={styles.inq1}><label>Почтовый адрес</label></div>
                        <div className={styles.inq2}>
                            <input type="text" className="w-100"/>
                        </div>
                    </div>
                    <div className={styles.inq4}>
                        <div className="w-50">
                            <label>Срок представления Расчета (день/месяц/год)</label>
                        </div>
                        <div className="w-100 d-flex justify-content-between">
                            <input type="text"/>
                            <label>Единица измерения сум</label>
                        </div>
                    </div>
                    <div className="d-flex mt-10">
                        <div className={styles.inq1}><label>Представляется в</label></div>
                        <div className={styles.inq2}>
                            <input type="text" className="w-100"/>
                        </div>
                    </div>

                </div>
                <div className={styles.infoTable}>
                    <table>
                        <tr>
                            <td colSpan={9} className="text-center font-roboto-light">Если строка 030 расчета отрицательна, данная сумма может возмещена или
                                засчитана в счет предстоящих платежей по НДС согласна статья 274 Налогового кодекса.
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.forLeft} font-roboto-light`}>Возместить отрицательную сумму НДС</td>
                            <td className={styles.yellowBox}><input type="text"/></td>
                            <td className={`${styles.forRight} font-roboto-light`} colSpan="2">Засчитать в счет прелстоящих платежей по НДС</td>
                            <td className={styles.greenBox}><input type="text"/></td>
                            <td className="text-center font-roboto-light" colSpan={3}>(нужную ячейку отметить цифрой “1”)</td>
                        </tr>
                        <tr>
                            <td colSpan={9} className="text-center font-roboto-light">
                                налоговый период
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.forLeft} font-roboto-light`}>Возмещаемая сумма НДС</td>
                            <td className={styles.greenBox}><input type="text"/></td>
                            <td className={`${styles.forLeft2} font-roboto-light`}>Сум</td>
                            <td className={styles.yellowBox}><input type="text"/></td>
                            <td className={styles.w200}></td>
                            <td className={`${styles.w150} font-roboto-bold`}>Год <span className={`${styles.arrow} icon icon-arrow-mini`} /></td>
                            <td className={styles.w50}></td>
                            <td className={`${styles.w100} font-roboto-bold`}>Месяц <span className={`${styles.arrow} icon icon-arrow-mini`} /></td>
                            <td className={styles.w50}></td>
                            <td className={styles.yellowBox}><input type="text"/></td>
                        </tr>
                        <tr>
                            <td className={`${styles.forLeft} font-roboto-light`}>Порядок возмещения</td>
                            <td className={styles.greenBox}><input type="text"/></td>
                            <td className={`${styles.forLeft2} font-roboto-light`} colSpan="2">Общий</td>
                            <td className={styles.w200}></td>
                            <td className={`${styles.w150} font-roboto-light`}>Ускоренный</td>
                            <td className="text-center font-roboto-light" colSpan="4">(нужную ячейку отметить цифрой “1”)</td>
                        </tr>
                    </table>

                    <h3 className="font-roboto-bold mt-20">Расчет налога на добавленную стоимость</h3>
                    <div className={styles.infoTable}>
                        <table>
                            <tr>
                                <td className="text-center">Показатели</td>
                                <td className="text-center">Код строки</td>
                                <td className="text-center">Сумма</td>
                            </tr>
                            <tr>
                                <td className="text-left">Сумма налога на добавленную стоимость (НДС), принимаемая к зачету в налоговом периоде (стр. 040 Приложения № 3 - стр. 030 Приложения № 6)</td>
                                <td className={`${styles.calc} text-center font-roboto-bold`}>010</td>
                                <td className={styles.yellowBox}><input type="text"/></td>
                            </tr>
                            <tr>
                                <td className="text-left">Сумма НДС по оборотам от реализации товаров (услуг) (гр. 4 стр. 010 Приложения № 1)</td>
                                <td className={`${styles.calc} text-center font-roboto-bold`}>010</td>
                                <td className={styles.yellowBox}><input type="text"/></td>
                            </tr>
                            <tr>
                                <td className="text-left">Сумма НДС, подлежащая уплате в бюджет (к уменьшению), всего (стр. 020 – стр. 010)</td>
                                <td className={`${styles.calc} text-center font-roboto-bold`}>010</td>
                                <td className={styles.yellowBox}><input type="text"/></td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.bottomBox}>
                        <div className={styles.topTitle}>
                            <label>Достоверность и полноту сведений, указанных в настоящем Расчете, подтверждаю:</label>
                        </div>
                        <div className={styles.bottomTitle}>
                            <div className={styles.leftP}>
                               <div className="d-flex">
                                   <div className="mt-20">
                                       <label>Руководитель:</label>
                                   </div>
                                   <div>

                                   </div>
                               </div>
                                <div className={styles.btGroup}>
                                        <div>
                                            <label>ИНН</label>
                                        </div>
                                        <div className={styles.w100}>
                                            <input type="text"/>
                                        </div>
                                </div>
                                <div className={styles.btGroup}>
                                        <div>
                                            <label>Ф.И.О</label>
                                        </div>
                                        <div className={styles.w100}>
                                            <input type="text"/>
                                        </div>
                                </div>
                                <div className={styles.btGroup}>
                                        <div>
                                            <label>Подпись</label>
                                        </div>
                                    <div className={styles.signature}>

                                    </div>

                                </div>
                                <div className={styles.btGroup}>
                                        <div>
                                            <label>Дата (дд/мм/гггг)</label>
                                        </div>
                                        <div className={styles.w100}>
                                            <input type="text"/>
                                        </div>
                                </div>
                            </div>
                            <div className={styles.leftP}>
                                <div className="d-flex mt-30">
                                    <div className="mt-30">
                                        <label>Руководитель:</label>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className={styles.btGroup}>
                                    <div>
                                        <label>ИНН</label>
                                    </div>
                                    <div className={styles.w100}>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className={styles.btGroup}>
                                    <div>
                                        <label>Ф.И.О</label>
                                    </div>
                                    <div className={styles.w100}>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className={styles.btGroup}>
                                    <div>
                                        <label>Подпись</label>
                                    </div>
                                    <div className={styles.signature}>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.btTitle}>
                    <table>
                        <tr>
                            <td><label className="font-roboto-light">Ошибка*: Сумма подлежащая к возмещению не должна быть меньше нуля.</label></td>
                            <td><label className="font-roboto-bold">Ожидаемая переплата</label></td>
                            <td><label className="font-roboto-bold">сум</label></td>
                        </tr>
                        <tr>
                            <td><label className="font-roboto-light">Ошибка**: Сумма подлежащая к возмещению не должна быть больше суммы переплаты КЛС.</label></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="font-roboto-light">Ошибка***: Если требуется засчитать отрицательную сумму НДС в счет предстоящих платежей, выбор ускоренного порядка подачи заявления невозможен.</label></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label className="font-roboto-light">Ошибка***: Если требуется засчитать отрицательную сумму НДС в счет предстоящих платежей, выбор ускоренного порядка подачи заявления невозможен.</label></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default YattReportDetail;

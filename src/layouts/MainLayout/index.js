import React, { useEffect } from 'react';
import styles from './MainLayout.module.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Main from '../../pages/Main';
import NotFound from '../../pages/NotFound';
import YattTaxInfo from '../../pages/InteractiveServices/YattTaxInfo';
import YurTaxInfo from '../../pages/InteractiveServices/YurTaxInfo';
import PinflStirAttach from '../../pages/InteractiveServices/PinflStirAttach';
import YurComparativeDocuments from '../../pages/InteractiveServices/YurComparativeDocuments';
import YattComparativeDocuments from '../../pages/InteractiveServices/YattComparativeDocuments';
import SearchDeclaration from '../../pages/InteractiveServices/SearchDeclaration';
import PinflRegstration from '../../pages/InteractiveServices/PinflRegstration';
import PhysicalTax from '../../pages/InteractiveServices/PhysicalTax';
import ProvideINNCertificate from '../../pages/ComputerServices/ProvideINNCertificate';
import RegisterModifyData from '../../pages/ComputerServices/ProvideINNCertificate/RegisterModifyData';
import yurElectronicTaxReporting
    from '../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/YurElectronicTaxReporting';
// import YattElectronicTaxReporting from '../../pages/ElectronicTaxReporting/YattElectronicTaxReporting';
import PhysicalPersonElectronicTaxReporting
    from '../../pages/ElectronicTaxReporting/PhysicalPersonElectronicTaxReporting';
import ComputerServicePage from '../../pages/ComputerServicesAdvice/ComputerServicePage';
import YurAndPhysicalAppeal from '../../pages/ComputerServicesAdvice/YurAndPhysicalAppeal';
import OralAdvice from '../../pages/ComputerServicesAdvice/OralAdvice';
import IssuesMedia from '../../pages/ComputerServicesAdvice/IssuesMedia';
import BookletsAndFlyers from '../../pages/ComputerServicesAdvice/BookletsAndFlyers';
import TrainingSeminars from '../../pages/ComputerServicesAdvice/TrainingSeminars';
import RegistrationOfTheLeaseAgreement from '../../pages/RegistrationOfTheLeaseAgreement';
import SendingInvoices from '../../pages/SendingInvoices';
import TerminationOfTheLeaseAgreement from '../../pages/TerminationOfTheLeaseAgreement';
import RegistrationSelfEmployedPersons from '../../pages/RegistrationSelfEmployedPersons';
import HiredStaff from '../../pages/HiredStaff';
import ElectronicDigitalSignature from '../../pages/ElectronicDigitalSignature';
import QRCodeIssuanceService from '../../pages/QRCodeIssuanceService';
import ReceiveApplicationsOnlineAnswerQuestions from '../../pages/ReceiveApplicationsOnlineAnswerQuestions';
import Archive from '../../pages/Archive';
import MainEmployee from '../../pages/MainEmployee';
// import PerformanceIndicators from '../../pages/MainEmployee/PerformanceIndicators';
import PhysicComparativeDocuments from '../../pages/InteractiveServices/PhysicComparativeDocuments';
import MainEmployeeNew from "../../pages/MainEmployee";
import RegistrationOfTheLeaseAgreementNew from "../../pages/RegistrationOfTheLeaseAgreement";
import RegistrationOfEmployeesNew from "../../pages/RegistrationOfEmployees";
import ValueAddedTaxReports from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/ValueAddedTaxReports";
import yurElectronicTaxReportingTable
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable";
import yurElectronicTaxReportingTable2
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable2";
import yurElectronicTaxReportingTable3
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable3";
import yurElectronicTaxReportingTable4
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable4";
import yurElectronicTaxReportingTable5
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable5";
import yurElectronicTaxReportingTable6
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable6";
import yurElectronicTaxReportingTable7
    from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/yurElectronicTaxReportingTable7";
import ReportDetail from "../../pages/ElectronicTaxReporting/yurElectronicTaxReporting/ReportDetail";
import YattElectronicTaxReportingTable
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable";
import YattValueAddedTaxReports
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattValueAddedTaxReports";
import YattElectronicTaxReportingTable2
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable2";
import YattElectronicTaxReportingTable3
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable3";
import YattElectronicTaxReportingTable4
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable4";
import YattElectronicTaxReportingTable5
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable5";
import YattElectronicTaxReportingTable6
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable6";
import YattElectronicTaxReportingTable7
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReportingTable7";
import YattReportDetail from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattReportDetail";
import YattElectronicTaxReporting
    from "../../pages/ElectronicTaxReporting/yattElectronicTaxReporting/YattElectronicTaxReporting";
import GetSalaryRefrence from "../../pages/InteractiveServices/getSalaryRefrence";
import ElectronicContract from '../../pages/ElectronicContractService';
import ControlPanel from "../../pages/MainEmployee/ControlPanel";
import BackdoorLogin from "../../pages/Backdoor";
import { connect } from "react-redux";
import { getNs10, getNs11, searchUsers, updateState } from "../../redux/actions/GlobalAction";
import { useLocation } from 'react-router-dom'
import { userSearchPages } from "../../utils/constants";
import OtherService from "../../pages/ComputerServicesAdvice/OtherService";
import SelfEmployment from "../../pages/SelfEmployment";
import SignIn from "../../pages/SignIn";
import TablePr from "../../pages/TablePr";
import News from "../../pages/News";
import NewsService from '../../pages/News/NewsService';
import NewsPage from '../../pages/News/NewsPage';
import WorkingDays from '../../pages/WorkingDays';
import OneUser from '../../pages/WorkingDays/OneUser';
import TypesOfServicesPrices from '../../pages/TypesOfServicesPrices';
import OneService from '../../pages/TypesOfServicesPrices/OneService';
import PerformanceIndicators from '../../pages/PerformanceIndicators';
import FooterFromPage from '../../pages/FooterFromPage';
import CreatePlan from '../../pages/PerformanceIndicators/CreatePlan';
import ServicesProvided from '../../pages/ServicesProvided';
import PracticalHelpCompanies from '../../pages/PracticalHelpCompanies';
import CrmUserHistory from '../../pages/MainEmployee/CRMUserHistory';
import CRMUserHistory from '../../pages/CRMUserHistory/index';
import IncomeReport from '../../pages/MainEmployee/IncomeReport';
import IncomeReport2 from '../../pages/IncomeReport/index';
import InformationAboutEnterprises2 from '../../pages/InformationAboutEnterprises/index';
import InformationAboutEnterprises from '../../pages/MainEmployee/InformationAboutEnterprises';
import Transactions from '../../pages/Transactions';
import UserProfile from '../../pages/UserProfile';
import Dashboard from '../../pages/Dashboard';

const MainLayout = (props) => {
    const location = useLocation();
    let lang = localStorage.getItem("language") ? localStorage.getItem("language") : "uz"
    useEffect(() => {
        props.getNs10()
    }, []);
    const setSearchText = (e) => {
        props.updateState({ searchText: e.target.value })
    }
    const searchUsers = () => {
        props.searchUsers(props.selectedNs10, props.selectedNs11, props.searchText)
    }
    console.log(props.selectedUser, "user")
    return (
        <div className={styles.mainLayout}>

            <div className={styles.mainLayoutLeft}>
                <div>
                    <Link to="/main">
                        <img src="/assets/icons/logo.svg" alt="logo.svg" />
                    </Link>
                    <div className={styles.line + " " + styles.first} />
                    <ul>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/main' ? styles.active : ''}`}><span
                                className="icon icon-layer" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-dashboard-line" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-list" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-time-list" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-edit" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-portfel" /></Link></li>

                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-monitor"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-progress"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-edit"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-question"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-magistr"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-play"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-bookmark"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-user-monitor"/></Link></li>*/}
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span
                                className="icon icon-user-card" /></Link></li>
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-dashboard"/></Link></li>*/}
                        {/*<li><Link to="/main"*/}
                        {/*          className={`d-flex align-items-center justify-content-center ${props.history.location.pathname.includes('/dwa') ? styles.active : ''}`}><span*/}
                        {/*    className="icon icon-folder"/></Link></li>*/}
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-bordi-keldi" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-news" /></Link></li>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${props.history.location.pathname === '/' ? styles.active : ''}`}><span
                                className="icon icon-settings" /></Link></li>
                    </ul>
                    <div className={styles.line} />
                    <ul>
                        <li><Link to="/main"
                            className={`d-flex align-items-center justify-content-center ${styles.logout}`}><span
                                className="icon icon-logout" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.mainLayoutRight}>
                <div className={styles.mainLayoutRightHeader}>
                    {/*  <ul>
                        <li><Link to="/main">Фойдаланувчиларни бошқариш</Link></li>
                        <li><Link to="/main">Хисоботлар</Link></li>
                        <li><Link to="/main">Маълумотлар</Link></li>
                        <li><Link to="/main">Янгиликлар</Link></li>
                    </ul>
                    <div className={styles.line}/>
                    <Link to="/main"><span className="icon icon-language"/> Узбекча</Link>*/}
                    <form>
                        <select name="region" onChange={event => props.getNs11(event.target.value)}>
                            <option value="">Respublika bo'yicha</option>
                            {props.ns10?.map(val => <option value={val.code}
                                key={val.code}>{lang == "uz" ? val.nameUz : val.nameRu}</option>)}

                        </select>
                        <select name="region" onChange={event => updateState({ selectedNs11: event.target.value })}>
                            <option value="">Viloyat bo'yicha</option>
                            {props.ns11?.map(val => <option value={val.code}
                                key={val.code}>{lang == "uz" ? val.nameUz : val.nameRu}</option>)}
                        </select>
                        <div className={styles.formGroup}>
                            <input
                                name="search"
                                placeholder={userSearchPages.includes(location.pathname) ? "Foydalanuvchini izlash" : " Izlash"}
                                className=" font-roboto-light"
                                type="search"
                                onChange={userSearchPages.includes(location.pathname) ? setSearchText : null}
                            />
                            <img src="/assets/search.png" alt="" onClick={userSearchPages.includes(location.pathname) ? searchUsers : null} />
                            <div style={{ position: "absolute", width: "320px", height: "100px" }}>
                                {
                                    props.users?.map(user => <div onClick={event => { console.log(user); props.updateState({ selectedUser: user }) }}>{user.firstName + " " + user.lastName}</div>)
                                }
                            </div>
                        </div>

                    </form>
                    <div className={styles.mainLayoutRightMenu}>
                        <div className={styles.info}>
                            <div className={styles.message}>
                                <span className="icon icon-message" />
                                <b>
                                    3
                                </b>
                            </div>
                            <div className={styles.bell}>
                                <span className="icon icon-bell" />
                                <b>
                                    3
                                </b>
                            </div>
                            <div className={styles.language}>
                                <button><img src="/assets/uz.png" alt="" /></button>
                                {/* <button><img src="assets/ru.png" alt=""/></button>
                        <button><img src="assets/en.png" alt=""/></button>*/}
                            </div>
                        </div>

                        <div className={styles.expense}>
                            <hr />
                            <div>
                                <strong>+ 535 000 so‘m</strong>
                                <b>- 120 000 so‘m</b>
                            </div>
                            <hr />
                        </div>

                        <div className={styles.role}>
                            <select name="name">
                                <option value="Muxammad">X.Muxammad</option>
                                <option value="Muxammad">X.Muxammad</option>
                                <option value="Muxammad">X.Muxammad</option>
                                <option value="Muxammad">X.Muxammad</option>
                            </select>
                            <p>Super admin
                                <span />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.mainLayoutRightContent}>
                    <Switch>
                        <Route path="/main" exact component={Main} />

                        {/*YTTning soliq qarzlari yo‘qligi to‘g‘risida ma'lumotnoma olish*/}
                        <Route path="/main/interactive/yatt-tax-info" exact component={YattTaxInfo} />

                        {/*YSh soliq qarzlari yo‘qligi to‘g‘risida ma'lumotnoma olish*/}
                        <Route path="/main/interactive/yur-tax-info" exact component={YurTaxInfo} />

                        {/*JSh soliq qarzlari yo‘qligi to‘g‘risida ma'lumotnoma olish*/}
                        <Route path="/main/interactive/physical-tax-info" exact component={PhysicalTax} />

                        {/*YSH solishtirma dalolatnomalarini olish*/}
                        <Route path="/main/interactive/yur-comparative-tax-info" exact
                            component={YurComparativeDocuments} />

                        {/*YTTning solishtirma dalolatnomalarini olish*/}
                        <Route path="/main/interactive/yatt-comparative-tax-info" exact
                            component={YattComparativeDocuments} />

                        {/*JSH solishtirma dalolatnomalarini olish*/}
                        <Route path="/main/interactive/physic-comparative-tax-info" exact
                            component={PhysicComparativeDocuments} />

                        {/*Deklarasiya qidirish*/}
                        <Route path="/main/interactive/search-declaration" exact component={SearchDeclaration} />

                        {/*PINFL ro’yxatdan o’tkazish*/}
                        <Route path="/main/interactive/pinfl-regstration" exact component={PinflRegstration} />

                        {/*PINFLni STILga biriktirish*/}
                        <Route path="/main/interactive/pinfl-stir-attach" exact component={PinflStirAttach} />

                        {/*INN sertifikat taqdim etish*/}
                        <Route path="/main/provide/presentation-inn-certificate" exact
                            component={ProvideINNCertificate} />

                        {/*Ma'lumotlarini ro’yxatdan o’tkazish va o’zgartirish*/}
                        <Route path="/main/provide/register-modify-data" exact component={RegisterModifyData} />

                        {/*YSH tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish*/}

                        <Route path="/main/electronic-tax-reporting/yur-reporting" exact
                            component={yurElectronicTaxReporting} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-2" exact
                            component={ValueAddedTaxReports} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-oxirgilari" exact
                            component={yurElectronicTaxReportingTable} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-tekshirish-jarayonda" exact
                            component={yurElectronicTaxReportingTable2} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-xatolik-mavjud" exact
                            component={yurElectronicTaxReportingTable3} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-qabul-qilingan" exact
                            component={yurElectronicTaxReportingTable4} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-junatilgan" exact
                            component={yurElectronicTaxReportingTable5} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-rad-etilgan" exact
                            component={yurElectronicTaxReportingTable6} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-xomaki" exact
                            component={yurElectronicTaxReportingTable7} />
                        <Route path="/main/electronic-tax-reporting/yur-reporting-report-detail" exact
                            component={ReportDetail} />

                        {/*YATT tomonidan taqdim etilgan malumotlar asosida ekektron soliq xisobotlarini tayyorlash va soliq o’rganlariga yuborish*/}
                        <Route path="/main/electronic-tax-reporting/yatt-reporting" exact
                            component={YattElectronicTaxReporting} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-2" exact
                            component={YattValueAddedTaxReports} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-oxirgilari" exact
                            component={YattElectronicTaxReportingTable} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-tekshirish-jarayonda" exact
                            component={YattElectronicTaxReportingTable2} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-xatolik-mavjud" exact
                            component={YattElectronicTaxReportingTable3} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-qabul-qilingan" exact
                            component={YattElectronicTaxReportingTable4} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-junatilgan" exact
                            component={YattElectronicTaxReportingTable5} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-rad-etilgan" exact
                            component={YattElectronicTaxReportingTable6} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-xomaki" exact
                            component={YattElectronicTaxReportingTable7} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting-report-detail" exact
                            component={YattReportDetail} />
                        <Route path="/main/electronic-tax-reporting/yatt-reporting" exact
                            component={YattElectronicTaxReporting} />
                        <Route path="/main/electronic-tax-reporting/physical-person-reporting" exact
                            component={PhysicalPersonElectronicTaxReporting} />
                        {/*Ish haqi to'g'risida malumotnoma olish*/}
                        <Route path="/main/electronic-services/get-salary-refrence" exact
                            component={GetSalaryRefrence} />

                        {/*Kompyuter xizmatlari*/}
                        <Route path="/main/electronic-services/computer-service-advice" exact
                            component={ComputerServicePage} />

                        {/*YSH va JSH yozma murojaatiga (yozma) tushuntirush berish*/}
                        <Route path="/main/electronic-services/yur-physical-appeal" exact
                            component={YurAndPhysicalAppeal} />

                        {/*Og’zaki maslaxatlar*/}
                        <Route path="/main/electronic-services/oral-advice" exact component={OralAdvice} />

                        {/*O’tkazilgan o’quv kurslari va seminarlar*/}
                        <Route path="/main/electronic-services/training-seminars" exact component={TrainingSeminars} />

                        {/*Ommaviy axborot vositalarida chiqarish*/}
                        <Route path="/main/electronic-services/issues-media" exact component={IssuesMedia} />

                        {/*Chop etilgan buklet va flayerlar*/}
                        <Route path="/main/electronic-services/booklets-and-flyers" exact
                            component={BookletsAndFlyers} />

                        {/*Boshqa turdagi xizmatlar*/}
                        <Route path="/main/electronic-services/other-service" exact
                            component={OtherService} />

                        {/*<Route path="/main/electronic-registration/registration-of-the-lease-agreement" exact*/}
                        {/*       component={RegistrationOfTheLeaseAgreement}/>*/}
                        <Route path="/main/electronic-registration/sending-invoices" exact component={SendingInvoices} />
                        <Route path="/main/electronic-registration/termination-of-the-lease-agreement" exact
                            component={TerminationOfTheLeaseAgreement} />
                        <Route path="/main/electronic-registration-self-employed/registration-of-self-employed-persons"
                            exact component={RegistrationSelfEmployedPersons} />
                        <Route path="/main/hired-staff/hired-staff-registration" exact component={HiredStaff} />
                        {/*Elektron raqamli imzo muddatini uzaytirib berishga ariza*/}
                        <Route path="/main/electronic-digital-signature/application-for-electronic-digital-signature"
                            exact component={ElectronicDigitalSignature} />

                        {/*Elektron shartnomalar tuzish*/}
                        <Route path="/main/electronic-contracts-service"
                            exact component={ElectronicContract} />

                        {/*QR-code berish xizmati*/}
                        <Route path="/main/qr-code-services/qr-code-issuance-service" exact
                            component={QRCodeIssuanceService} />

                        <Route path="/main/receive-applications-online/receive-applications-online-and-answer-questions"
                            exact component={ReceiveApplicationsOnlineAnswerQuestions} />

                        <Route path="/main/archive/archive-list" exact component={Archive} />
                        {/*<Route path="/main/main-employee/main-employee-home" exact component={MainEmployee}/>*/}
                        <Route path="/main/main-employee/main-employee-home" exact component={MainEmployeeNew} />
                        <Route path="/main/main-employee/control-panel" exact component={ControlPanel} />

                        {/*Ijara shartnomasini ro’yxatdan otkazish*/}
                        <Route path="/main/electronic-registration/registration-of-the-lease-agreement"
                            component={RegistrationOfTheLeaseAgreementNew} />

                        {/*Yonlangan xodimlarni ro’yxatdan o’tkazish*/}
                        <Route path="/main/registration/registration-of-employee" exact
                            component={RegistrationOfEmployeesNew} />
                        <Route path="/main/backdoor" exact component={BackdoorLogin} />

                        {/*Yonlangan xodimlarni ro’yxatdan o’tkazish */}
                        <Route path="/main/self-employment" exact component={SelfEmployment} />


                        {/*Yangiliklar */}
                        <Route path="/main/news/service" exact component={NewsService} />

                        {/*Ishga kelganlik bo’yicha oylik tabel bitta xodim */}
                        <Route path="/main/info/working-days/:id" exact component={OneUser} />

                        {/*Ishga kelganlik bo’yicha oylik tabel */}
                        <Route path="/main/info/working-days" exact component={WorkingDays} />

                        {/*Samaradorlik ko’rsatkichlari */}
                        <Route path="/main/info/performance-indicators" exact component={PerformanceIndicators} />

                        {/*Samaradorlik ko’rsatkichlari - Reja shakllantirish */}
                        <Route path="/main/info/attaching-plan" exact component={CreatePlan} />

                        {/*Ko’rsatilgan xizmatlar */}
                        <Route path="/main/info/services-provided" exact component={ServicesProvided} />

                        {/*Xizmatlar turlari va narxlari */}
                        <Route path="/main/info/types-services-prices/:id" exact component={OneService} />

                        {/*Amaliy yordam ko’rsatilgan korxonalar */}
                        <Route path="/main/practical-help-companies" exact component={PracticalHelpCompanies} />

                        {/*Amaliy yordam ko’rsatilgan korxonalar */}
                        <Route path="/main/crm-user-history" exact component={CRMUserHistory} />
                        {/*Korxonalar haqida ma'lumot */}
                        <Route path="/main/information-about-enterprises" exact component={InformationAboutEnterprises2} />

                        {/*Tushumlar pul o'tkazmalar */}
                        <Route path="/main/transactions" exact component={Transactions} />

                        {/*Foydalanuvchu profili */}
                        <Route path="/main/user-profile" exact component={UserProfile} />

                        {/*Foydalanuvchu profili */}
                        <Route path="/main/dashboard" exact component={Dashboard} />


                        <Route path="/main/info/types-services-prices" exact component={TypesOfServicesPrices} />

                        {/*Batafsil Yangilik */}
                        <Route path="/main/news/:id" exact component={NewsPage} />
                        {/*test */}
                        <Route path="/main/test" exact component={InformationAboutEnterprises} />
                        {/*Tushumlar bo’yicha xisobot */}
                        <Route path="/main/income-report" exact component={IncomeReport2} />

                        {/*Yangiliklar */}
                        <Route path="/main/news" exact component={News} />
                        <Route path="/main/table-pr" exact component={TablePr} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <FooterFromPage />
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        ns10: state.globalState.ns10,
        ns11: state.globalState.ns11,
        selectedNs11: state.globalState.selectedNs11,
        users: state.globalState.users,
        selectedNs10: state.globalState.selectedNs10,
        selectedUser: state.globalState.selectedUser,
        searchText: state.globalState.searchText,
    }
}
export default connect(mapStateToProps, { updateState, getNs10, getNs11, searchUsers })(MainLayout);

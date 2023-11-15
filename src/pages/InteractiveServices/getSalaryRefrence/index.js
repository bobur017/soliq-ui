import React, {useState} from 'react';
import styles from "./getSalaryRefrence.module.scss"
import Select from "react-select";
import {Link} from "react-router-dom";
import GetSalaryRefrenceInfo from "./GetSalaryRefrenceInfo";
import YurTaxView from "../YurTaxInfo/YurTaxView";
import GetInfo from "../../../component/GetInfo";
import {request} from "../../../utils/request";
import {toast} from "react-toastify";
import {API_PATH} from "../../../utils/constants";

const GetSalaryRefrence = () => {
    const [file, setFile] = useState(undefined);
    const [salary, setSalary] = useState(undefined);
    const [print, setPrint] = useState(false);
    const [printYear, setPrintYear] = useState(new Set);

    let [salaryYearly, setSalaryYearly] = useState({});
    let [salarySelected, setSalarySelected] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [userData, setUserData] = useState([]);

    const [tin, setTin] = useState("");
    const selectCompany = (company) => {
        salaryYearly = {}
        salarySelected = []
        salary.map(item => {

            if (item.orgName === company.value || company.value === "ALL") {
                salarySelected.push(item)
                if (salaryYearly[item.year]) {
                    printYear.add(item.year)
                    salaryYearly[item.year] = [...salaryYearly[item.year], item]
                } else {
                    printYear.add(item.year)
                    salaryYearly[item.year] = [item]
                }
            }
        })
        setSalaryYearly({...salaryYearly})
        setPrintYear(new Set(printYear))
    }
    const getSalary = () => {
        request({
            url: 'fizsalary/get-salary',
            method: "get",
            data: {
                pinfl: tin
            }
        }).then(response => {
            submit(tin)
            setSalary(response.data)
            response.data.map(item => {

                if (salaryYearly[item.year]) {
                    printYear.add(item.year)
                    salaryYearly[item.year] = [...salaryYearly[item.year], item]
                } else {
                    printYear.add(item.year)
                    salaryYearly[item.year] = [item]
                }
                if (!companies.includes(item.orgName)) {
                    companies.push(item.orgName)
                }

            })
            setSalaryYearly({...salaryYearly})
            setCompanies([...companies]);
            setSalarySelected(response.data)
            setPrintYear(new Set(printYear))
            console.log(salaryYearly)
        })
    }


    const submit = (pinfl) => {
        request({
            url: "phys-np1",
            method: "get",
            params: {tin: pinfl}
        })
            .then(res => {
                setUserData(res.data)
            })
            .catch(err => {
                toast.error("Xatolik!");
            });
    }

    const options = [{value: "ALL", label: "Barcha"}, ...companies.map(item => {
        return {value: item, label: item}
    })]
    const addPrintYear = (year, list) => {
        if (printYear.has(year)) {
            salarySelected = salarySelected.filter(item => !list.includes(item))
            setSalarySelected(salarySelected)
            printYear.delete(year)
            setPrintYear(new Set(printYear))
        } else {
            salarySelected = [...salarySelected, ...list]
            salarySelected.sort(function (a, b) {
                return a.orgName < b.orgName;
            });

            salarySelected.sort(function (a, b) {
                return a.period < b.period;
            });
            salarySelected.sort(function (a, b) {
                return a.year < b.year;
            });
            setSalarySelected(salarySelected)
            printYear.add(year)
            setPrintYear(new Set(printYear))
        }
        console.log(printYear)
        console.log(salarySelected)
    }
    const getFile = () => {
        console.log(salarySelected)
        const month = ["Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"]
        let html = "<div >\n" +
            "            <h4 className=\"font-roboto-bold text-center \">2019-йил учун <br/> даромад маьлумотномаси.</h4>\n" +
            "            <p className=\"m-0 font-roboto-regular\">Ф.И.О: <span>ESHMURATOV BAXROM JUMAKULOVICH</span> </p>\n" +
            "            <p className=\"m-0 font-roboto-regular\">СТИР:<span>496147887</span></p>\n" +
            "            <p className=\"m-0 font-roboto-regular\">ИНПС:<span>32001910270610</span></p>\n" +
            "            <p className=\"m-0\">Ҳақиқатдан ҳам маълумотнома эгаси бизнинг корҳона</p>\n" +
            "            <p className=\"m-0\">(Ташкилот, муассаса) да ишлайди ва қуйидагича даромад олган:</p>\n" +
            "            <table  border=\"1\"  cellspacing=\"0\" className=\"w-100 mt-30\" cellpadding=\"0\"  >\n" +
            "                <tr>\n" +
            "                    <td className=\"p-10\">Йил</td>\n" +
            "                    <td className=\"p-10\">Ой</td>\n" +
            "                    <td className=\"p-10\">Ҳисобланган <br/> ойлик иш ҳақи (сўм)</td>\n" +
            "                    <td className=\"p-10\">Ҳисобланган <br/> даромад солиғи (сўм)</td>\n" +
            "                    <td className=\"p-10\">Пенсия <br/> жамғармасига ажратилган <br/> сумма (0,1%)</td>\n" +
            "                </tr>\n";
        (salarySelected.map(item => {
            html += "                <tr className=\"p-10\">\n" +
                "                    <td className=\"p-10 \"  >" + item.year + "</td>\n" +
                "                    <td className=\"p-10\">" + month[item.period - 1] + "</td>\n" +
                "                    <td className=\"p-10\">" + item.salary + "</td>\n" +
                "                    <td className=\"p-10\">" + item.salaryTaxSum + "</td>\n" +
                "                    <td className=\"p-10\">" + item.salaryTaxSum * 0.1 + "</td>\n" +
                "                </tr>\n"
        }))
        html += "            </table>\n" +
            "        </div>"
        request({
            url: "pdf/generate",
            method: "post",
            data: {htmlCode: html}
        })
            .then(res => {

                setFile(res.data)
            })
            .catch(err => {
                toast.error("Xatolik!");
            });
    }
    return (
        <div className={styles.getSalaryRefrence}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ish haqi to'g'risida malumotnoma olish</span>
            </p>

            {salary ? "" : <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Ish haqi to'g'risida malumotnoma olish
                </h3>
            </div>}
            {salary ? "" : <div className="upBox">
                <div className="d-flex justify-content-center">
                    <div className={styles.inputs}>
                        <label>JShShIR ni kiriting <span className="withStar ">*</span></label>
                        <div className="d-flex">
                            <input type="text" placeholder="-" className="input-style font-roboto-light w-100"
                                   onChange={(e) => setTin(e.target.value)}/>
                        </div>
                        <div className={styles.footerBtn}>
                            <button className={styles.back}>
                                <span className="icon icon-back"/>
                                Ortga
                            </button>
                            <button className={styles.save} onClick={getSalary}>
                                <span className="icon icon-search"/>
                                Saqlash
                            </button>
                        </div>
                    </div>

                </div>

            </div>}
            {salary ? <GetInfo type={"getSalary"}/> : ""}
            {salary ? file?"":<GetSalaryRefrenceInfo salary={salary} options={options}
                                                     salaryYearly={salaryYearly}
                                                     userData={userData}
                                                     selectCompany={selectCompany}
                                                     setPrintYear={addPrintYear}
                                                     printYear={printYear}
                                                     getFile={getFile}
            /> : ""}


            {file? <YurTaxView src={API_PATH+"pdf/get/"+file}/>:""}

        </div>
    );
};

export default GetSalaryRefrence;

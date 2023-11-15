import React, {useState} from 'react';
import styles from "./getSalaryRefrence.module.scss";
import Select from "react-select";
import {Link} from "react-router-dom";

const GetSalaryRefrenceInfo = (props) => {
    const [opened, setOpened] = useState([]);
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "SUM",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    function numberWithSpaces(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }
    return (
            <div className={styles.decTabel}>
                <div className="d-flex justify-content-between">
                    <div className={styles.page}>
                        <h3 className="titleMain font-roboto-bold">{props.userData.surName+" "+props.userData.firstName+" "+props.userData.middleName}</h3>
                        <p>INN: {props.userData.tin}</p>
                    </div>
                    <div className={`${styles.tableSearch}  z-index-main`}>
                        <Select options={props.options} placeholder="Korxonani tanlang" onChange={props.selectCompany} />
                    </div>

                </div>


                <div className={`${styles.tabelsMain}    mt-30`}>
                    <div className={styles.mainTable}>
                        <table>
                            <tr>
                                <th className="font-roboto-bold">
                                    Yil
                                </th>
                                <th className="font-roboto-bold">
                                    Hisoblangan oylik ish haqi (so‘m)
                                </th>
                                <th className="font-roboto-bold">
                                    Hisoblangan daromat solig‘i (12%)
                                </th>
                                <th className="font-roboto-bold">Pensiya jamgarmasiga ajratilgan summa (0,1%)</th>
                                <th className="font-roboto-bold">Haqiqatga ishlagan oylar soni</th>
                                <th className="font-roboto-bold">Kompaniya</th>
                                <th className="font-roboto-bold"> </th>

                            </tr>

                            {Object.keys(props.salaryYearly).map(year=><>
                                <tr>
                                    <td className="d-flex justify-content-between align-items-center"  onClick={()=>{
                                        if (opened.includes(year)){
                                            setOpened(opened.filter(el=>el!=year))
                                        }else {
                                            setOpened([...opened,year])
                                        }

                                    }}> <button style={opened.includes(year)?{transform:" rotate(180deg)"}:undefined} className={`${styles.arrowUp} icon icon-arrow-down`} />{year}</td>
                                    <td>{numberWithSpaces(props.salaryYearly[year].reduce((previousValue, currentValue) => previousValue+currentValue.salary,0))}</td>
                                    <td>{numberWithSpaces(props.salaryYearly[year].reduce((previousValue, currentValue) => previousValue+currentValue.salaryTaxSum,0))}</td>
                                    <td>{numberWithSpaces(props.salaryYearly[year].reduce((previousValue, currentValue) => previousValue+currentValue.salaryTaxSum,0)*0.1)}</td>
                                    <td colSpan={2}>{new Set(props.salaryYearly[year].map(item=>item.period)).size}</td>

                                    <td>
                                        <label htmlFor={"sqrRadio3"+year}>
                                            <input id={"sqrRadio3"+year} type="checkbox" defaultChecked={props?.printYear?.has(Number(year))} onClick={()=>props.setPrintYear(Number(year),props.salaryYearly[year])}/>
                                            <span className={styles.fill}></span>
                                        </label>
                                    </td>
                                </tr>

                                {opened.includes(year)?props.salaryYearly[year].map(item=> <tr>
                                        <td className="d-flex justify-content-between align-items-center" > </td>
                                        <td>{numberWithSpaces(item.salary)}</td>
                                        <td>{numberWithSpaces(item.salaryTaxSum)}</td>
                                        <td>{numberWithSpaces(item.salaryTaxSum*.1)} </td>
                                        <td>{item.period}</td>
                                        <td>{item.orgName}</td>
                                        <td>
                                        </td>
                                    </tr>
                                ):""}
                            </>)}


                        </table>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold" onClick={props.getFile}>
                        <span className="icon icon-add-btn" />
                        Shakllantirish
                    </button>
                </div>
            </div>
    );
};

export default GetSalaryRefrenceInfo;

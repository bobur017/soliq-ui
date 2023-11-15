import React, {useEffect, useState} from 'react';
import styles from './YurComparativeDocuments.module.scss'
import Select from 'react-select'
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";
import {getOptionsYearList} from "../../../utils/common";
import {request} from "../../../utils/request";
import {API_PATH} from "../../../utils/constants";

const YurComparativeDocumentsDebtInfo = (props) => {
    const [region, setRegion] = useState("");
    const [year, setYear] = useState("");
    const [date, setDate] = useState("");
    const [unit, setUnit] = useState("1");

    const options = [
        // { value: '1', label: 'ўлчов бирлиги' },
        { value: '1', label: 'Сўм' },
        { value: '1000', label: 'Минг сўм' },
        { value: '1000000', label: 'Миллион сўм' }
    ]

    const show = () => {
        props.updateState({loading: true})
        const dateN = new Date();
        props.setRegion(region);
        props.setYear(year);
        props.setDate(dateN.getDay() + "." + (dateN.getMonth() +1)  + "." + dateN.getFullYear())
        props.setUnit(unit);

        request({
            url: "services/interactive/act-of-reconciliation/jur",
            method: "post",
            data: {
                date: dateN.getDay() + "." + (dateN.getMonth() +1)  + "." + dateN.getFullYear(),
                ns10Code: region.split("_")[0],
                ns11Code: region.split("_")[1],
                tin: props.inn,
                unit: unit,
                year: year,
            }
        })
            .then(res => {
                props.setYurReconciliation(res.data)
                props.setShow(true);
                props.updateState({loading: false})
            })
            .catch(er => {
                props.updateState({loading: false})

            })


    }
    // useEffect(() => {
    //     return () => {
    //         props.setYurReconciliation(null)
    //     }
    // }, [])


    return (

       <div className={styles.yurComparativeDocumentsDebtInfo}>
           <div className={styles.forms}>
               <div className="d-flex ">
                   <div className="w-100 mr-20">
                       <label>Hudud nomi:</label>
                       <Select placeholder="-" onChange={(e) => setRegion(e.value)} options={props.regions.map(item => {return {value: item.ns10Code+"_"+item.ns11Code, label: item.ns10Name + " " + item.ns11Name}})}/>
                   </div>
                   <div className="w-100 mr-20">
                       <label>Yil:</label>
                       <Select onChange={(e) => setYear(e.value)} options={getOptionsYearList().map(otherEntity => {return {value: otherEntity, label: otherEntity}})} placeholder="-"/>
                   </div>
                   <div className="w-100">
                       <label>O'lchov birligi:</label>
                       <Select onChange={(e) => setUnit(e.value)} options={options} placeholder="-"/>
                   </div>
               </div>
               <div className="d-flex justify-content-end ">
                   <button className={`${styles.createShape} font-roboto-bold`} onClick={show}>
                       <span className="icon icon-add-btn"/>
                       Shakllantirish
                   </button>
               </div>
           </div>

           {props.yurReconciliation &&
               <>
                   <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                   props.inn +
                   '&name=' +
                   btoa(unescape(encodeURIComponent(props.info.fio))) +
                   '&ns10=' +
                   region.split("_")[0] +
                   '&ns11=' +
                   region.split("_")[1] +
                   '&date=' +
                   props.date +
                   '&year=' +
                   year +
                   '&unit=' +
                   unit +
                   '&user-type=2'} className="pdfBtn w-100"><span className="icon icon-download"/>PDF yuklab olish</a>

                   <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/jur/download?tin=' +
                   props.inn +
                   '&ns10=' +
                   region.split("_")[0] +
                   '&ns11=' +
                   region.split("_")[1] +
                   '&date=' +
                   props.date +
                   '&year=' +
                   year +
                   '&unit=' +
                   unit} className="exelBtn w-100"><span className="icon icon-download"/>Excel yuklab olish </a>
               </>
           }
       </div>
    );
};

export default connect(null, {updateState})(YurComparativeDocumentsDebtInfo);

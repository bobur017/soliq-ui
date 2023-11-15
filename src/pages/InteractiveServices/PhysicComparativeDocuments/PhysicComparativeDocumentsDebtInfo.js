import React, {useState} from 'react';
import styles from './PhysicComparativeDocuments.module.scss'
import Select from "react-select";
import {connect} from "react-redux";
import {getPhysicInfo, getPhysicReconciliation, updateState} from "../../../redux/actions/physicTaxInfoAction";
const PhysicComparativeDocumentsDebtInfo = (props) => {

    const [region, setRegion] = useState("");

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    const show = () => {
        props.getPhysicReconciliation({
            ns10Code: region.split("_")[0],
            ns11Code: region.split("_")[1],
            tin: props.inn,
            isItd: true
        });
        props.setRegion(region);
    }

    return (

       <div className={styles.yattComparativeDocumentsDebtInfo}>

           <div className={styles.forms}>
               <div className="d-flex ">
                   <div className="w-100 mr-20">
                           <label>Hujjat turi:</label>
                           <Select options={options} placeholder="-"/>
                   </div>
                   <div className="w-100 mr-20">
                       <label>Yil:</label>
                       <Select options={options} placeholder="-"/>
                   </div>
                   <div className="w-100">
                       <label>O'lchov birligi:</label>
                       <Select options={options} placeholder="-"/>
                   </div>
               </div>
               <div className="d-flex justify-content-end">
                   <button className={styles.createShape}>
                       Ma’lumotnomani shakllantirish
                   </button>
               </div>
           </div>


           {/*<div className="d-flex">
               <div className="d-flex w-100">
                   <div className="w-33">
                       <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Регион<span
                           className="withStar">*</span></label>
                       <Select className={`${styles.p20} custom-select`} onChange={(e) => setRegion(e.value)} placeholder="Регион" options={props.physicRegions.map(item => {return  {value: item.ns10Code+"_"+item.ns11Code, label: item.ns10Name + " " + item.ns11Name}})} />
                   </div>
                   <div className={"mt-auto rightBtn"}>
                       <button className="main-btn font-roboto-regular " type="button" onClick={show}>
                           Курсатиш
                       </button>
                   </div>
               </div>
           </div>*/}
       </div>
    );
};
const mapStateToProps = (state) => {
    return {
        physicInfo: state.physic.physicInfo,
        inn: state.physic.inn,
        physicRegions: state.physic.physicRegions,
    }
}
export default connect(mapStateToProps, {updateState, getPhysicInfo, getPhysicReconciliation})(PhysicComparativeDocumentsDebtInfo);


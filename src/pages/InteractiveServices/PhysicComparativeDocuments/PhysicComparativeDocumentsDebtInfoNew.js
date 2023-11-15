import React, {useEffect, useState} from 'react';
import styles from './PhysicComparativeDocuments.module.scss'
import Select from "react-select";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/GlobalAction";
import {request} from "../../../utils/request";
import {API_PATH} from "../../../utils/constants";
const PhysicComparativeDocumentsDebtInfoNew = (props) => {

    const [region, setRegion] = useState("");
    const [fizReconciliation, setFizReconciliation] = useState(null)

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]


    const show = () => {
        props.updateState({loading: true})
       request({
           url: "services/interactive/act-of-reconciliation/phys",
           method: "post",
           data: {
               ns10Code: region.split("_")[0],
               ns11Code: region.split("_")[1],
               tin: props.inn,
               isItd: false
           }
       })
           .then(res => {
               setFizReconciliation(res.data)
               props.setShow(true)
               props.updateState({loading: false})
           })
           .catch(er => {
               props.updateState({loading: false})

           })
        props.setRegion(region);
    }

    useEffect(() => {
        return () => {
            setFizReconciliation(null)
        }
    }, [])

    return (

        <div className={styles.yattComparativeDocumentsDebtInfo}>

            <div className={styles.forms}>
                <div className="d-flex ">
                    <div className="w-33 mr-20">
                        <label>Hudud:</label>
                        <Select onChange={(e) => setRegion(e.value)} placeholder="-" options={props.regions.map(item => {return  {value: item.ns10Code+"_"+item.ns11Code, label: item.ns10Name + " " + item.ns11Name}})} />
                    </div>
                </div>
                <div className="d-flex justify-content-end ">
                    <button className={`${styles.createShape} font-roboto-bold`} onClick={show}>
                        <span className="icon icon-add-btn"/>
                        Shakllantirish
                    </button>
                </div>
            </div>

            {fizReconciliation &&
                <>
                    <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/download/pdf?tin=' +
                    props.inn +
                    '&name=' +
                    btoa(unescape(encodeURIComponent(props.info?.surName + " " + props.info?.firstName + " " + props.info?.middleName))) +
                    '&ns10=' +
                    region.split("_")[0] +
                    '&ns11=' +
                    region.split("_")[1] +
                    '&unit=1&user-type=3'} className={`${styles.pdfBtn} w-100`}><span className="icon icon-download"/>PDF юклаб олиш</a>


                    <a target="_blank" href={API_PATH + 'services/interactive/act-of-reconciliation/phys/download?tin=' +
                    props.inn +
                    '&ns10=' +
                    region.split("_")[0] +
                    '&ns11=' +
                    region.split("_")[1] +
                    '&isItd=true'} className={`${styles.pdfBtn} w-100`}><span className="icon icon-download"/>Excel юклаб олиш</a>
                </>
            }


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
// const mapStateToProps = (state) => {
//     return {
//         physicInfo: state.physic.physicInfo,
//         inn: state.physic.inn,
//         physicRegions: state.physic.physicRegions,
//     }
// }
export default connect(null, {updateState})(PhysicComparativeDocumentsDebtInfoNew);
// export default PhysicComparativeDocumentsDebtInfoNew;

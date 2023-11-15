import React from 'react';
import styles from './PhysicComparativeDocuments.module.scss'
import {connect} from "react-redux";
import {getPhysicInfo, updateState} from "../../../redux/actions/physicTaxInfoAction";
import GetInfo from '../../../component/GetInfo';

const PhysicComparativeDocumentsDebt = (props) => {

    const submit = (e) => {
        e.preventDefault();
        props.getPhysicInfo(props.inn, true);
    }

    return (
        <div className={styles.yattComparativeDocumentsDebt}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Jismoniy shaxslarning solishtirma dalolatnomalari</span>
            </p>

            <GetInfo type={'JShD'}/>

            {!props.show ?
                <div className={styles.forms}>
                    <h1 className="font-roboto-bold m-0">Jismoniy shaxs to’g’risida malumot</h1>
                    <form onSubmit={props.submit}>
                        <div className="d-flex">
                            <div className="d-flex w-100">
                                <div className="w-100  inputs mr-20">
                                    <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">
                                        INN kiriting   <span
                                        className="withStar">*</span></label>
                                    <div className="d-flex">
                                        <input type="text" id="innInput" placeholder="-" className={`${styles.loupe} font-roboto-light w-100`}
                                               onChange={(e) => {props.setInn(e.target.value); props.setInfo(null); props.setRegions(null)}} name="inn"/>

                                        <button>
                                            <span className="icon icon-search"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-100  inputs">
                                    <label htmlFor="fullName" className="labels font-roboto-regular inputLabel">
                                        F.I.SH
                                    </label>
                                    <input type="text" id="fullName"
                                           className="   font-roboto-light w-100" disabled value={props.info ? props.info?.surName + " " + props.info?.firstName + " " + props.info?.middleName : ""}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  ">
                            <div className="d-flex w-100">
                                <div className="w-100  inputs mr-20">
                                    <label className="labels font-roboto-regular inputLabel" htmlFor="address">
                                        Ro'yxatga olingan hudud nomi  </label>
                                    <div className="d-flex">
                                        <input type="text" id="address" className="   font-roboto-light w-100" disabled  value={props.info? props.info.ns10Name: ""}/>
                                    </div>
                                </div>
                                <div className="w-100  inputs">
                                    <label htmlFor="region" className="labels font-roboto-regular inputLabel">
                                        Ro'yxatga olingan tuman/shahar nomi
                                    </label>
                                    <input type="text" id="region"
                                           className="   font-roboto-light w-100" disabled value={props.info? props.info.ns11Name: ""}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div> : ""
            }

        </div>
    );
};
// const mapStateToProps = (state) => {
//     return {
//         physicInfo: state.physic.physicInfo,
//         inn: state.physic.inn,
//     }
// }

// export default connect(mapStateToProps, {updateState, getPhysicInfo})(PhysicComparativeDocumentsDebt);
export default PhysicComparativeDocumentsDebt

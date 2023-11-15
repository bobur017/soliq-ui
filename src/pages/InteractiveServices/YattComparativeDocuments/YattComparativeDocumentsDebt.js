import React from 'react';
import styles from './YattComparativeDocuments.module.scss'
import {connect} from "react-redux";
import {getYattInfo, updateState} from "../../../redux/actions/yattTaxInfoAction";
import GetInfo from '../../../component/GetInfo';

const YattComparativeDocumentsDebt = (props) => {

    const submit = (e) => {
        e.preventDefault();
        props.getYattInfo(props.inn, true);
    }

    return (
        <div className={styles.yattComparativeDocumentsDebt}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yakka tartibdagi tadbirkorlarning solishtirma dalolat nomalari</span>
            </p>

            <GetInfo type={'YTTShD'}/>

            {!props.show ?
                <div className={styles.forms}>
                    <h1 className="font-roboto-bold m-0">Yakka tartibdagi tadbirkor to’g’risida malumot</h1>
                    <form onSubmit={props.submit}>
                        <div className="d-flex">
                            <div className="d-flex w-100">
                                <div className="w-100 inputs mr-20">
                                    <label className="labels font-roboto-regular inputLabel" htmlFor="innInput">
                                        INN kiriting <span
                                        className="withStar">*</span></label>
                                    <div className="d-flex">
                                        <input type="text" id="innInput" className={`${styles.loupe} font-roboto-light w-100`} name="inn"
                                               onChange={(e) => {
                                                   props.setInn(e.target.value);
                                                   props.setInfo(null); props.setRegions(null)
                                               }}/>
                                        <button>
                                            <span className="icon icon-search"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-100 inputs ">
                                    <label htmlFor="fullName" className="labels font-roboto-regular inputLabel">
                                        Yakka tartibdagi tadbirkor nomi
                                    </label>
                                    <input type="text" id="fullName"
                                           className=" font-roboto-light w-100" value={props.info ? props.info?.surName + " " + props.info?.firstName + " " + props.info?.middleName : ""} disabled/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex  ">
                            <div className="d-flex w-100 ">
                                <div className="w-100 inputs mr-20">
                                    <label className="labels font-roboto-regular inputLabel" htmlFor="address">
                                        Ro'yxatga olingan hudud nomi  </label>
                                    <div className="d-flex">
                                        <input type="text" id="address" className=" font-roboto-light w-100" disabled value={props.info? props.info.ns10Name : ""}/>
                                    </div>

                                </div>
                                <div className="w-100 inputs">
                                    <label htmlFor="region" className="labels font-roboto-regular inputLabel">
                                        Ro'yxatga olingan tuman/shahar nomi
                                    </label>
                                    <input type="text" id="region"
                                           className=" font-roboto-light w-100" disabled value={props.info? props.info.ns11Name : ""}/>
                                </div>


                            </div>

                        </div>
                    </form>
                </div> :""
            }
        </div>
    );
};
// const mapStateToProps = (state) => {
//     return {
//         yattInfo: state.yatt.yattInfo,
//         inn: state.yatt.inn,
//     }
// }

// export default connect(mapStateToProps, {updateState, getYattInfo})();
export default YattComparativeDocumentsDebt;

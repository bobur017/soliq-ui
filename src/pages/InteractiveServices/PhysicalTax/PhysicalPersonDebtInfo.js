import React from 'react';
import styles from './PhysicalPerson.module.scss';
import { connect } from 'react-redux';
import { getPhysicInfo, sendPhysicData, updateState } from '../../../redux/actions/physicTaxInfoAction';
import { toast } from 'react-toastify';
import { API_PATH } from '../../../utils/constants';
import { getFileName } from '../../../utils/common';

const PhysicalPersonDebtInfo = (props) => {
    const submit = (e) => {
        e.preventDefault();
        if (e.target.reason.value.length > 0) {
            props.sendPhysicData({
                email: '',
                fio: (props.physicInfo.surName + ' ' + props.physicInfo.firstName + ' ' + props.physicInfo.middleName),
                ns10Code: props.physicInfo.ns10Code,
                ns10Name: props.physicInfo.ns10Name,
                ns11Code: props.physicInfo.ns11Code,
                ns11Name: props.ns11Name,
                objectCodes: props.taxObjects.map(item => item.object_code).join(';'),
                phone: props.physicInfo.phone ? props.physicInfo.phone : '',
                placeToShow: e.target.reason.value,
                tin: props.inn
            });
        } else
            toast.error('Илтимос, Ахборот билан таъминлаш жойини киритинг');
    };
    return (

        <div className={styles.physicalPersonDebtInfo}>
            <div className={styles.forms}>
                <h1 className="font-roboto-bold">Soliq toʼlovchiga qarashli obʼektlar roʼyxati</h1>
                <form onSubmit={submit}>
                    <div className="d-flex">
                        <div className="d-flex w-100">
                            <div className="w-50 leftInput">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="kadastr">
                                    Kadastr raqami <span
                                    className="withStar">*</span></label>
                                <div className="d-flex">
                                    <input  placeholder="-" type="text" id="kadastr" className="input-style font-roboto-light w-100"/>

                                </div>

                            </div>
                            <div className="w-100 leftInput">
                                <label htmlFor="address" className="labels font-roboto-regular inputLabel">
                                    Soliq solinadigan ob'ektning manzili
                                </label>
                                <div className="d-flex">
                                    <input  placeholder="-" type="text" id="address"
                                           className="input-style font-roboto-light w-100"/>
                                    <button className={styles.plus}>
                                        <span className="icon icon-plus-btn"></span>
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="d-flex mt-30">
                        <div className="d-flex w-100">
                            <div className="w-100 leftInput">
                                <label className="labels font-roboto-regular inputLabel" htmlFor="information">
                                    Axborot bilan ta'minlash joyi </label>
                                <div className="d-flex">
                                    <input  placeholder="-" type="text" id="information"
                                           className="input-style font-roboto-light w-100"/>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>

                <div className="d-flex justify-content-end">
                    <button className={`${styles.createShape} font-roboto-bold`}>
                        Hujjatni shakllantirish
                    </button>
                </div>
            </div>
        </div>
        /* props.physicInfo &&
         <div className={styles.physicalPersonDebtInfo}>
             {/!*<div className="d-flex w-100">*!/}
             {/!*    <div className={`${styles.innpinfl}  leftInput`}>*!/}
             {/!*        <label className="labels font-roboto-regular inputLabel">Кадастр рақами<span*!/}
             {/!*            className="withStar">*</span></label>*!/}
             {/!*        <input type="text" className="input-style font-roboto-light w-100"*!/}
             {/!*               placeholder="Кадастр рақами"/>*!/}
             {/!*        <button className="input-clear-btn">*!/}
             {/!*            <span className="icon icon-input-clear"/>*!/}
             {/!*        </button>*!/}
             {/!*    </div>*!/}
             {/!*    <div className={`${styles.address} w-100 leftInput`}>*!/}
             {/!*        <label className="labels font-roboto-regular inputLabel">*!/}
             {/!*            Солиқ солинадиган объектнинг манзили*!/}
             {/!*        </label>*!/}
             {/!*        <input type="text" disabled={true} className="input-style font-roboto-light w-100"/>*!/}
             {/!*    </div>*!/}
             {/!*    <div className="d-flex">*!/}
             {/!*        <button className="delete-circle-btn mt-auto">*!/}
             {/!*            <span className="icon icon-delete-btn"/>*!/}
             {/!*        </button>*!/}
             {/!*        <button className="plus-circle-btn mt-auto">*!/}
             {/!*            <span className="icon icon-plus-btn"/>*!/}
             {/!*        </button>*!/}
             {/!*    </div>*!/}
             {/!*</div>*!/}
             <form onSubmit={submit}>
                 <div className={`${styles.provideInformation} w-100`}>
                     <label className="labels font-roboto-regular inputLabel" htmlFor="inn">Ахборот билан таъминлаш
                         жойи<span
                             className="withStar">*</span></label>
                     <input type="text" className="input-style font-roboto-light w-100"
                            placeholder="Ахборот билан таъминлаш жойи" name="reason"/>
                 </div>
                 {props.cert ?
                     <a className={`${styles.shaping} `} href={API_PATH + "services/interactive/debt-invoice/download?tin=" + props.inn + '&certificateNum=' + props.cert} target="_blank"
                        download={getFileName()}>Юклаб олиш</a> :
                     <button className={`${styles.shaping} `} type="submit">
                         Шакилантириш
                     </button>
                 }
             </form>
         </div>*/
    );
};


const mapStateToProps = (state) => {
    return {
        physicInfo: state.physic.physicInfo,
        inn: state.physic.inn,
        taxObjects: state.physic.taxObjects,
        repoFiles: state.physic.repoFiles,
        cert: state.physic.cert
    };
};

export default connect(mapStateToProps, { updateState, getPhysicInfo, sendPhysicData })(PhysicalPersonDebtInfo);

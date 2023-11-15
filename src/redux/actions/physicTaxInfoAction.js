import {PHYSIC_TAX_INFO_UPDATE_STATE} from "../types";
import axios from "axios";
import {API_PATH} from "../../utils/constants";
import {toast} from "react-toastify";

/**
 * Created by Sherlock on 30.05.2022.
 */
export function updateState(data){
    return{
        type: PHYSIC_TAX_INFO_UPDATE_STATE,
        payload: data
    }
}

export const getPhysicInfo = (inn, region) => (dispatch) => {
    axios.get(API_PATH + "phys-np1?tin=" + inn)
        .then(res => {
            dispatch(updateState({physicInfo: res.data.data}));
            if (region){
                dispatch(getPhysicRegions(inn));
            } else {
                dispatch(getPhysicInd(inn))
            }
            dispatch(getPhysicInd(inn))
        })
}

export const getPhysicInd = (inn) => (dispatch) => {
    axios.get(API_PATH + "tax-objects?tin="+ inn)
        .then(res => {
            dispatch(updateState({taxObjects: res.data.data}))
            console.log(res);
        })
}

export const sendPhysicData = (values) => (dispatch) => {
    axios.post(API_PATH + "services/interactive/get-invoice-about-debt/new/phys", values)
        .then(res => {
            console.log(res);
            if (res.data.success){
                const certificates = res.data.data;
                if (certificates != null && certificates.length > 0) {
                    const certificateNum = certificates[0].certificateNum;
                    dispatch(updateState({cert: certificateNum}))
                }
            }else {
                toast.error(res.data.reason);
            }
        })
}

export const getPhysicRegions = (inn) => dispatch => {
    axios.get(API_PATH + "tax-regions-by-tin?lang=uz&tin="+ inn +"&isItd=false")
        .then(res => {
            if (res.data.success){
                dispatch(updateState({physicRegions: res.data.data}))
            } else
                toast.error(res.data.reason)
        })
}

export const getPhysicReconciliation = (values) => dispatch => {
    axios.post(API_PATH + "services/interactive/act-of-reconciliation/phys", values)
        .then(res => {
            if (res.data.success){
                dispatch(updateState({physicReconciliation: res.data.data}))
            }else
                toast.error(res.data.reason)
        })
}

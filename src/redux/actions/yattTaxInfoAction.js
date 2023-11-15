/**
 * Created by Sherlock on 04.05.2022.
 */
import {YATT_TAX_INFO_UPDATE_STATE} from "../types";
import axios from "axios";
import {API_PATH} from "../../utils/constants";
import {toast} from "react-toastify";

export function updateState(data){
    return{
        type: YATT_TAX_INFO_UPDATE_STATE,
        payload: data
    }
}

export const getYattInfo = (inn, region) => (dispatch) => {
    axios.get(API_PATH + "phys-np1?tin=" + inn)
        .then(res => {
           if (res.data.success){
               dispatch(updateState({yattInfo: res.data.data}));

               if (region){
                   dispatch(getYattRegions(inn));
               } else {
                   dispatch(getYattInd(inn, res.data.data.ns10Code, res.data.data.ns11Code))
               }
           } else
               toast.error(res.data.reason)
        })
}

export const getYattInd = (inn, ns10, ns11) => (dispatch) => {
    axios.get(API_PATH + "tax-objects/ind?tin="+ inn +"&ns10="+ ns10 +"&ns11=" + ns11)
        .then(res => {
            dispatch(updateState({taxObjects: res.data.data}))
            console.log(res);
        })
}

export const saveToRepository = (inn, ns10, ns11, objectCode) => (dispatch, getState) => {
    axios.get(API_PATH + "repository/save/ind?tin=" + inn + "&ns10=" + ns10 + "&ns11=" + ns11 + "&objectCode=" + objectCode)
        .then(res => {
            dispatch(updateState({repoFiles: {...getState().yatt.repoFiles, [`${inn}_${ns10}_${ns11}_${objectCode}`]: res.data.data.repositoryId}}))
        })
}

export const getYattRegions = (inn) => dispatch => {
    axios.get(API_PATH + "tax-regions-by-tin?lang=uz&tin="+ inn +"&isItd=false")
        .then(res => {
            if (res.data.success){
                dispatch(updateState({yattRegions: res.data.data}))
            } else
                toast.error(res.data.reason)
        })
}

export const getYattReconciliation = (values) => dispatch => {
    axios.post(API_PATH + "services/interactive/act-of-reconciliation/phys", values)
        .then(res => {
            if (res.data.success){
                dispatch(updateState({yattReconciliation: res.data.data}))
            }else
                toast.error(res.data.reason)
        })
}

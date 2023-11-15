/**
 * Created by Sherlock on 04.05.2022.
 */
import {YUR_TAX_INFO_UPDATE_STATE} from "../types";
import axios from "axios";
import {API_PATH} from "../../utils/constants";
import {toast} from "react-toastify";
import {updateState as updateGlobalState} from "../actions/GlobalAction";

export function updateState(data){
    return{
        type: YUR_TAX_INFO_UPDATE_STATE,
        payload: data
    }
}

export const getYurInfo = (inn, regions) => (dispatch) => {
    dispatch(updateGlobalState({loading: true}))
    axios.get(API_PATH + "np1?tin=" + inn)
        .then(res => {
            if (res.data.success){
                dispatch(updateState({yurInfo: res.data.data}));

                if (regions){
                    dispatch(getYurRegions(inn))
                } else {
                    dispatch(getYurInd(inn, res.data.data.ns10Code, res.data.data.ns11Code))
                }

            } else {
                toast.error(res.data.reason)
                dispatch(updateGlobalState({loading: false}))
            }
        })
        .catch(er => {
            dispatch(updateGlobalState({loading: false}))
        })
}

export const getYurInd = (inn, ns10, ns11) => (dispatch) => {
    axios.get(API_PATH + "tax-objects/jur?tin="+ inn +"&ns10="+ ns10 +"&ns11=" + ns11)
        .then(res => {
            dispatch(updateState({taxObjects: res.data.data}))
            dispatch(updateGlobalState({loading: false}))
        })
        .catch(er => {
            dispatch(updateGlobalState({loading: false}))
        })
}

export const saveToRepository = (inn, ns10, ns11) => (dispatch, getState) => {
    dispatch(updateGlobalState({loading: true}))
    axios.get(API_PATH + "repository/save/jur?tin=" + inn + "&ns10=" + ns10 + "&ns11=" + ns11)
        .then(res => {
            dispatch(updateState({selectedRegionDocument: API_PATH+"repository/download?certificateId="+res.data.data.repositoryId}))
            // window.open(, '_blank').focus();
            dispatch(updateGlobalState({loading: false}))
        })
        .catch(er => {
            dispatch(updateGlobalState({loading: false}))
        })
}

export const getYurRegions = (inn) => dispatch => {
    axios.get(API_PATH + "jur-tax-regions-by-tin?lang=uz&tin=" + inn)
        .then(res => {
            if (res.data.success){
                dispatch(updateState({yurRegions: res.data.data}))
            }else {
                toast.error(res.data.reason)
            }
            dispatch(updateGlobalState({loading: false}))
        })
        .catch(er => {
            dispatch(updateGlobalState({loading: false}))
        })
}

export const getYurReconciliation = (values) => (dispatch, getState) => {
    axios.post(API_PATH + "services/interactive/act-of-reconciliation/jur", values)
        .then(res => {
            if (res.data.success){
                dispatch(updateState({yurReconciliation: res.data.data}))
            }else {
                toast.error(res.data.reason)
            }
        })
}

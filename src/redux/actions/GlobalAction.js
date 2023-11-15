import {GLOBAL_UPDATE_STATE} from "../types";
import axios from "axios";
import {API_PATH} from "../../utils/constants";

export function updateState(data) {
    return {
        type: GLOBAL_UPDATE_STATE,
        payload: data
    }
}

export const getNs10 = () => (dispatch) => {
    axios.get(API_PATH + "ns10")
        .then(res => {
            console.log(res)
            dispatch(updateState({ns10: res.data}))
        })
}
export const getNs11 = (ns10Code) => (dispatch) => {
    axios.get(API_PATH + "ns11?ns10Code=" + ns10Code)
        .then(res => {
            console.log(res)
            dispatch(updateState({ns11: res.data, selectedNs10: ns10Code}))
        })
}
export const searchUsers = (ns10,ns11,search) => (dispatch) => {
    axios.get(API_PATH + `users?ns10=${ns10}&ns11=${ns11}&search=${search}`)
        .then(res => {
            console.log(res)
            dispatch(updateState({users:res.data.content}))
        })
}

import {GLOBAL_UPDATE_STATE, RENT_UPDATE_STATE} from "../types";
import axios from "axios";
import {API_PATH} from "../../utils/constants";
import {request} from "../../utils/request";

export function updateState(data) {
    return {
        type: RENT_UPDATE_STATE,
        payload: data
    }
}

export const getUserData = (tin) => (dispatch) => {
   return  request({
       url: "https://ijara.soliq.uz/api/rent/client/catalog-general/fiz-np1-by-pinfl/" + tin,
       method: "get",
       data: {
           ijara:true
       }
   })
}


/**
 * Created by Sherlock on 04.05.2022.
 */
import {YATT_TAX_INFO_UPDATE_STATE} from "../types";

const initialState = {
    yattInfo: null,
    inn: "",
    taxObjects: [],
    repoFiles: {},
    yattRegions: null,
    yattReconciliation: null
}

export const yattTaxInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case YATT_TAX_INFO_UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

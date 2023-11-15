/**
 * Created by Sherlock on 04.05.2022.
 */
import {YUR_TAX_INFO_UPDATE_STATE} from "../types";

const initialState = {
    selectedRegionDocument:undefined,
    yurInfo: null,
    inn: "",
    taxObjects: [],
    repoFiles: {},
    yurRegions: null,
    yurReconciliation: null
}

export const yurTaxInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case YUR_TAX_INFO_UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

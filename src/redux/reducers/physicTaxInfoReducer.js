/**
 * Created by Sherlock on 30.05.2022.
 */

import {PHYSIC_TAX_INFO_UPDATE_STATE} from "../types";

const initialState = {
    physicInfo: null,
    inn: "",
    taxObjects: [],
    repoFiles: {},
    cert: null,
    physicRegions: null,
    physicReconciliation: null
}

export const physicTaxInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHYSIC_TAX_INFO_UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

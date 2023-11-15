import {RENT_UPDATE_STATE} from "../types";

const initialState = {
    pinfl:undefined,
    lessee:undefined,
    account:undefined,
    receiver:undefined,
    keyId:undefined,
    vo:undefined

}

export const rentReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENT_UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

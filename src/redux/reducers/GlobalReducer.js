import {GLOBAL_UPDATE_STATE} from "../types";

const initialState = {
    ns11: [],
    ns10: [],
    users:[],
    selectedNs11: "",
    selectedNs10: "",
    selectedUser: undefined,
    searchText: "",
    page:0,
    size:50,
    loading: false
}

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBAL_UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

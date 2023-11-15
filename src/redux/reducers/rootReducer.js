/**
 * Created by Sherlock on 02.05.2022.
 */
import {combineReducers} from "redux";
import {yattTaxInfoReducer} from "./yattTaxInfoReducer";
import {yurTaxInfoReducer} from "./yurTaxInfoReducer";
import {physicTaxInfoReducer} from "./physicTaxInfoReducer";
import {globalReducer} from "./GlobalReducer";
import {rentReducer} from "./RentReducer";

export const rootReducer = combineReducers({
    yatt: yattTaxInfoReducer,
    yur: yurTaxInfoReducer,
    physic: physicTaxInfoReducer,
    rent: rentReducer,
    globalState: globalReducer
})

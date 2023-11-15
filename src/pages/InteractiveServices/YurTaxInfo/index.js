/**
 * Created by Sherlock on 03.05.2022.
 */
import React from 'react';
import YurTaxDebt from "./YurTaxDebt";
import YurTaxDebtInfo from "./YurTaxDebtInfo";
import YurTaxView from "./YurTaxView";
import {connect} from "react-redux";
import {updateState} from "../../../redux/actions/yurTaxInfoAction";
const YurTaxInfo = (props) => {
    console.log(props)
    return (
        <div>
            <YurTaxDebt />
            {props.yurInfo &&
                <>
                    {props.selectedRegionDocument?"":<YurTaxDebtInfo/>}
                    {props.selectedRegionDocument?<YurTaxView src={props.selectedRegionDocument}/>:""}
                </>
            }

        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selectedRegionDocument: state.yur.selectedRegionDocument,
        yurInfo: state.yur.yurInfo,
    };
};
export default connect(mapStateToProps, { updateState })(YurTaxInfo);

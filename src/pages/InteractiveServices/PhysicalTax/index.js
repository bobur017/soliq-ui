import React, {useState} from 'react';
import PhysicalPersonDebt from "./PhysicalPersonDebt";
import {getPhysicInfo, request} from "../../../utils/request";
import PhysicalPersonDebtInfoNew from "./PhysicalPersonDebtInfoNew";
import YurTaxView from "../YurTaxInfo/YurTaxView";
import {updateState} from "../../../redux/actions/GlobalAction";
import {connect} from "react-redux";

const PhysicalTax = (props) => {
    const [info, setInfo] = useState(null);
    const [download, setDownload] = useState(undefined);
    const [taxInfo, setTaxInfo] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        props.updateState({loading: true})

        getPhysicInfo(e.target.tin.value)
            .then(res => {
                setInfo(res.data);
                request({
                    url: "tax-objects",
                    method: "get",
                    params: {tin: e.target.tin.value}
                }).then(res2 => {
                    setTaxInfo(res2.data);
                    props.updateState({loading: false})
                })
                    .catch(er => {
                        props.updateState({loading: false})
                    })
            })
            .catch(er => {
                props.updateState({loading: false})
            })
    }

    return (
        <div>

            <PhysicalPersonDebt info={info} submit={submit} setInfo={setInfo} setTaxInfo={setTaxInfo} download={download}/>

            {/*{taxInfo&&taxInfo.length>0 ?  <PhysicalPersonDebtInfo /> : ""}*/}

            {info &&
                <>
                    {download?"":<PhysicalPersonDebtInfoNew info={info}  taxInfo={taxInfo} setDownload={setDownload}/>}

                    {download?<YurTaxView src={download}/>:""}
                </>
            }

        </div>
    );
};

export default connect(null, {updateState})(PhysicalTax);

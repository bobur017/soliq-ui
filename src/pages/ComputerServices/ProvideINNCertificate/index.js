import React from 'react';
import ProvideINNCertificatePair from "./ProvideINNCertificatePair";
import ProvideINNCertificatePairView from "./ProvideINNCertificatePairView";
import ProvideInnCertificatePairResult from "./ProvideINNCertificatePairResult";
import YurTaxView from "../../InteractiveServices/YurTaxInfo/YurTaxView";

const ProvideINNCertificate = (props) => {

    return (
        <div>
            <ProvideINNCertificatePair history={props.history}/>
            <ProvideInnCertificatePairResult />
            {/*<ProvideINNCertificatePairView/>*/}
            <YurTaxView src="/assets/MyHome.pdf#toolbar=0&scrollbar=0" print={true} pdfDownload = {true}/>
            {/*<ProvideINNCertificatePairView/>*/}

        </div>
    );
};

export default ProvideINNCertificate;

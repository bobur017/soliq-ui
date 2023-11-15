import React, {useState} from 'react';
import styles from './ElectronicDigitalSignature.module.scss'

import ElectronicDigitalSignaturePhysical from "./ElectronicDigitalSignaturePhysical";

import ApplicationsReceived from "./ApplicationsReceived";

const ElectronicDigitalSignature = () => {
    const [state, setState] = useState("LIST")
    return (
        <div className={styles.electronicDigitalSignature}>

            {/*eski*/}
            {/*<ElectronicDigitalSignatureSearch/>*/}
            {/*<ElectronicDigitalSignatureNextStep />*/}


            {state === "LIST" ? "" : <ElectronicDigitalSignaturePhysical state={state} setState={setState}/>}
            {/*<ApplicationSend />*/}
            {/*<GetSignaturePassword />*/}
            {state === "LIST" ? <ApplicationsReceived setState={setState} state={state}/>:""}
        </div>
    );
};

export default ElectronicDigitalSignature;

import React, {useState} from 'react';
import HistoryElektronicContract from './HistoryElektronicContract';
import CreateElectronicContract from './CreateElectronicContract';
import YurTaxViewElectronic from "./YurTaxViewElectronic";

const ElectronicContractService = () => {
    const [status, setStatus] = useState('list');
    const [contractId, setContractId] = useState(undefined);
    const [contracts, setContracts] = useState([]);

    const getPdf = (id) => {
        setContractId(id)
        setStatus('view')
    }
    return (
        <div>
            {status === 'list' &&
            <HistoryElektronicContract getPdf={getPdf} setStatus={setStatus} setContracts={setContracts} contracts={contracts}/>}
            {status === 'create' && <CreateElectronicContract getPdf={getPdf} setContractId={setContractId} setStatus={setStatus}/>}
            {status === 'view' && contractId !== undefined &&
            <YurTaxViewElectronic getPdf={getPdf} setStatus={setStatus} contractId={contractId}/>}
        </div>
    );
};

export default ElectronicContractService;

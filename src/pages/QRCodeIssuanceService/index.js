import React, {useState} from 'react';
import QrCodeIssuanceGiveQrService from './QrCodeIssuanceGiveQrService';
import CreateNewQrCode from './CreateNewQRCode';
import QrCodeIssuanceServiceSearch from "./QRCodeIssuanceServiceSearch";
import EditQrCode from "./EditBranch";
import YurTaxView from "../InteractiveServices/YurTaxInfo/YurTaxView";

const QRCodeIssuanceService = (props) => {
    const [status, setStatus] = useState('pinfl');
    const [qrlist, setQrList] = useState([]);
    const [pinfl, setPinfl] = useState(undefined);
    const [stir, setStir] = useState(undefined);
    const [fullName, setFullName] = useState(undefined);
    const [branchId, setBranchId] = useState(undefined);
    const [downloadSrc, setDownloadSrc] = useState(undefined);

    const getBranchQrByBranchId = (id) => {
        //todo
        setStatus('print')
        setDownloadSrc('http://localhost:8080/api/branch/get/' + id);
    }
    console.log(downloadSrc)
    console.log(status)
    return (
        <div>
            {status === 'pinfl' &&
            <QrCodeIssuanceServiceSearch setQrList={setQrList} setStatus={setStatus} setStir={setStir}
                                         setPinfl={setPinfl} stir={stir} setFullName={setFullName}/>}
            {status === 'view' &&
            <QrCodeIssuanceGiveQrService setStatus={setStatus} qrlist={qrlist} setStir={setStir} stir={stir}
                                         fullName={fullName} branchId={branchId} setBranchId={setBranchId}
                                         getBranchQrByBranchId={getBranchQrByBranchId}/>}
            {status === 'create' &&
            <CreateNewQrCode setStatus={setStatus} stir={stir} pinfl={pinfl} setBranchId={setBranchId}
                             branchId={branchId} getBranchQrByBranchId={getBranchQrByBranchId}/>}
            {status === 'edit' && <EditQrCode setStatus={setStatus} setBranchId={setBranchId} branchId={branchId}/>}
            {status === 'print' &&
            <YurTaxView src={downloadSrc} setStatus={setStatus} branchId={branchId} downloadSrc={downloadSrc}
                        setBranchId={setBranchId} print={true} pdfDownload={true}/>}
        </div>
    );
};

export default QRCodeIssuanceService;

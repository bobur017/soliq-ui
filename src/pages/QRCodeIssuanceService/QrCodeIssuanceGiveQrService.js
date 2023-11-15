import React, {useState} from 'react';
import styles from './QRCodeIssuanceService.module.scss';

const QrCodeIssuanceGiveQrService = (props) => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    const [open, setOpen] = useState(undefined);
    const {setStatus, stir, fullName} = props;
    const goToCreate = () => {
        setStatus('create')
        // props.history.push("/main/qr-code-services/qr-code-issuance-service")
    }
    const {qrlist} = props;
    return (
        <div className={styles.qrCodeIssuanceGiveQrService}>

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code berish xizmati</span>
            </p>

            <div className={styles.mainCard}>
                <div>
                    <h1>{fullName}</h1>
                    <span>INN: {stir}</span>
                </div>
                <button onClick={goToCreate}>
                    <span className="icon icon-plus-circle"/>
                    QR-code yaratish
                </button>
            </div>

            <div className={styles.decTabel}>
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold d-flex">
                        <>Mavjud QR kodlar</>
                    </h3>
                </div>
                <div className={styles.mainTable}>
                    <table>
                        <tr>
                            <th className="font-roboto-bold">
                                №
                            </th>
                            {/*<th className="font-roboto-bold">*/}
                            {/*    Yaratilgan vaqt*/}
                            {/*</th>*/}
                            <th className="font-roboto-bold">
                                Viloyat nomi
                            </th>
                            <th className="font-roboto-bold">Tuman nomi</th>
                            <th className="font-roboto-bold">Filial nomi</th>
                            <th className="font-roboto-bold">Filial manzili</th>
                            <th className="font-roboto-bold"> Filial raxbari</th>
                            <th className="font-roboto-bold"></th>
                        </tr>
                        {qrlist && qrlist.length > 0 && qrlist.map((item, key) =>
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                {/*<td>*/}
                                {/*    {item.id}*/}
                                {/*</td>*/}
                                <td>
                                    {item.ns10Name}
                                </td>
                                <td>
                                    {item.ns11Name}
                                </td>

                                <td>{item.branchName}</td>
                                <td>
                                    {item.branchAddress}
                                </td>
                                <td>
                                    {item.orgNameFull}
                                </td>
                                <td className="text-center">
                                    <button onClick={() => setOpen(open === key ? undefined : key)}>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div style={open === key ? {display: "block"} : undefined}
                                         className={styles.control}>
                                        <button><span className="icon icon-edit-btn"/>O’zgartirish</button>
                                        <button onClick={() => props.getBranchQrByBranchId(item.id)}><span
                                            className="icon icon-upload"/>Yuklab olish
                                        </button>
                                        <button><span className="icon icon-delete-btn"/>O’chirish</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>

        </div>
    );
};

export default QrCodeIssuanceGiveQrService;

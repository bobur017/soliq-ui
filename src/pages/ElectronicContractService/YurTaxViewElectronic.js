import React, {useState} from 'react';
import styles from "../InteractiveServices/YurTaxInfo/YurTaxInfo.module.scss";
import Select from "react-select";
import YurTaxView from "../InteractiveServices/YurComparativeDocuments/YurTaxView";
import {API_PATH} from "../../utils/constants";

const YurTaxViewElectronic = (props) => {
    const {contractId,setStatus} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [userPassword, setUserPassword] = useState(false);
    console.log(contractId)
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.electronContract}>

            <div className={styles.YurTaxView}>
                {/*<div className="d-flex justify-content-center align-items-center">*/}

                {/*    <button className={`${styles.uploadBtn}  font-roboto-bold ml-10 mr-20`}>*/}
                {/*        <span className="icon icon-upload font-roboto-bold"/>*/}
                {/*        PDF Yuklab olish*/}
                {/*    </button>*/}


                {/*    <button className={`${styles.printBtn} font-roboto-bold`}>*/}
                {/*        <span className={` icon icon-print`}/>*/}
                {/*        Chop etish*/}
                {/*    </button>*/}

                {/*</div>*/}

                <div className={styles.mainPdfReader}>
                    <YurTaxView
                        src={API_PATH + 'contract/get-contract/' + contractId}
                    />


                    <div className="btnGroup">
                        <button onClick={toggleModal} className="paidBtn font-roboto-bold">
                            <span className="icon icon-coin"/>
                            Soliq Servis.uz tizimi orqali shartnomani elektron yuborish
                        </button>
                    </div>


                </div>

            </div>

            <div className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModal}`}>
                <button className={styles.closeBtn} onClick={toggleModal}><span className="icon icon-close"/></button>
                <h3 className="font-roboto-bold">Davom etish uchun mijoz kalit parolini kiriting</h3>
                <div className={`${styles.password} inputs w-75  `}>
                    <label htmlFor="password">Parol yarating <span className="withStar">*</span></label>
                    <input className="w-100" type={userPassword ? 'password' : 'text'} id="password"/>
                    <span onClick={() => setUserPassword(!userPassword)}
                          className={`${styles.eyeIcon} icon icon-eye-img`}/>
                </div>
                <div>
                    <button onClick={toggleModal}>Bekor qilish</button>
                    <button>OK</button>
                </div>
            </div>

        </div>
    );
};

export default YurTaxViewElectronic;

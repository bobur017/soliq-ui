import React from 'react';
import styles from './YurTaxInfo.module.scss'
import {downloadFile} from "../../../utils/common";

import GetInfo from "../../../component/GetInfo";
import Select from "react-select";
const YurTaxView = (props) => {
    // const options = [
    //     { value: '12', label: 'PDF' },
    //     { value: '24', label: 'PDF' },
    //     { value: '36', label: 'PDF' }
    // ]
    return (
        <div className={styles.YurTaxView}>
           <div className="d-flex justify-content-center align-items-center">
               {/*{*/}
               {/*    props.pdfDownload*/}
               {/*        ?*/}
               {/*        // <Select options={options}   placeholder="-" />*/}
               {/*        <select className={styles.pdfDownload} name="" id="">*/}
               {/*            <option value="1">PDF</option>*/}
               {/*        </select>*/}
               {/*        :*/}
               {/*        ""*/}
               {/*}*/}

               <button className={`${styles.uploadBtn}  font-roboto-bold ml-10 mr-20`} onClick={() => downloadFile(props.src)}>
                   <span className="icon icon-upload font-roboto-bold"/>
                   PDF Yuklab olish
               </button>


               {
                   props.print
                       ?
                       <button className={`${styles.printBtn} font-roboto-bold`}>
                           <span className={` icon icon-print`}/>
                           Chop etish
                       </button>
                       :
                       ""
               }
           </div>

            <div className={styles.mainPdfReader}>
                <embed frameBorder="0" src={`${props.src}#toolbar=0&scrollbar=0`} type="application/pdf" width="640"
                       height="600"/>


                        <div className="btnGroup">
                            <button className="paidBtn font-roboto-bold">
                                <span className="icon icon-coin"/>
                                To'lovga o'tish
                            </button>
                        </div>


            </div>

        </div>
    );
};

export default YurTaxView;

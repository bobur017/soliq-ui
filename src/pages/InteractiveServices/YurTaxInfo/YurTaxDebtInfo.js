import React, {useState} from 'react';
import styles from './YurTaxInfo.module.scss';
import {connect} from 'react-redux';
import {saveToRepository, updateState} from '../../../redux/actions/yurTaxInfoAction';
import {Link} from "react-router-dom";

const YurTaxDebtInfo = (props) => {
    const [download, setDownload] = useState(undefined);
    return (

        <div className={styles.debtInfo}>
            <h1 className="font-roboto-bold">Ushbu STIR bo'yicha soliq majburiyati (obyekti) mavjud bo'lgan hududlar ro'yxati</h1>

            <div className={styles.debtInfoTitle}>
                Obyektni tanlang
            </div>
            <div className={styles.itemList}>
                {props.taxObjects?.map(item => (
                    item.penya + item.nedoimka > 0 ?   <div className={styles.itemdebtInfo}>
                        <div>
                            <h4 className="font-roboto-bold">{item.ns10Name} {item.ns11Name}</h4>
                            <h5>
                                <span>STIR:</span>
                                <span className="font-roboto-light">{item.tin}</span>
                            </h5>
                            <h2 className={styles.taxInActive}>Diqqat! ushbu STIR bo'yicha  {(item.penya + item.nedoimka).toFixed(2)} so'm soliq qarzdorligi mavjud!</h2>
                        </div>

                    </div>
                        :  <div className={styles.itemdebtInfo} style={{cursor:"pointer"}} onClick={()=>download==item?setDownload(undefined):setDownload(item)} >
                  <div style={{background: download==item?"#D4E5FF":undefined,
                      border: download==item?"1px solid #174AA4":undefined}}>
                      <h4 className="font-roboto-bold">{item.ns10Name} {item.ns11Name}</h4>
                      <h5>
                          <span>STIR:</span>
                          <span className="font-roboto-light">{item.tin}</span>
                      </h5>
                      <h2 className={styles.taxActive}>Ushbu STIR  bo'yicha soliq qarzdorligi mavjud emas!</h2>
                  </div>

                </div>))}

            </div>
            {download?   <Link className={`${styles.payment} font-roboto-bold`}  onClick={()=>props.saveToRepository(download.tin,download.ns10Code,download.ns11Code)}>
                    <span className="icon icon-add-btn"></span>
                    Shakllantirish
                </Link>:""}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        taxObjects: state.yur.taxObjects,
        yurInfo: state.yur.yurInfo,
        repoFiles: state.yur.repoFiles
    };
};
export default connect(mapStateToProps, { updateState ,saveToRepository})(YurTaxDebtInfo);


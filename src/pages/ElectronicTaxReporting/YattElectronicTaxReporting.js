// import React from 'react';
// import styles from './ElectronicTaxReporting.module.scss'
//
// const YattElectronicTaxReporting = () => {
//     return (
//         <div className={styles.yattElectronicTaxReporting}>
//             <h2 className="font-roboto-bold page-main-title">ЯТТ лар томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини таёрлаш ва солик органларига юбориш</h2>
//             <div className="d-flex w-100">
//                 <div className={styles.leftInputs}>
//                   <div>
//                       <p className={`${styles.smallTitle} w-100`}>Якка тартибдаги тадбиркорнинг Ф.И.О</p>
//                       <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//                   </div>
//                    <div className="d-flex w-100">
//                        <div className={styles.leftPair}>
//                            <p className={`${styles.smallTitle} w-100 pr-20`}>Хизмат суммаси</p>
//                            <div className="w-100 d-flex">
//                                <p className={`${styles.smallTitle} ${styles.mt0} w-100 mr-20`}>Тайёорлаш</p>
//                                <p className={`${styles.smallTitle} ${styles.mt0} w-100 `}>Юбориш</p>
//                            </div>
//
//                        </div>
//                        <div className={styles.rightPair}>
//                            <p className={`${styles.bigTitle} w-100 pr-20`}>Электрон солик хисоботи юбориладиган солик турлари</p>
//                        </div>
//
//                        </div>
//                     <div className="w-100 d-flex">
//
//                         <div className={styles.leftPair}>
//                             <div className="w-100 d-flex">
//                                 <input type="text" className="input-style font-roboto-light w-100 mr-20" disabled={true}/>
//                                 <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//                             </div>
//                         </div>
//                         <div className={styles.rightPair}>
//                             <p className={styles.taxTypes}>Катъий белгиланган соглик</p>
//                         </div>
//                     </div>
//                     <div className={`${styles.miniInputs} w - 100 d-flex`}>
//
//                         <div className={styles.leftPair}>
//                             <div className=" w-100 d-flex">
//                                 <input type="text" className="input-style font-roboto-light w-100 mr-20" disabled={true}/>
//                                 <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//                             </div>
//                         </div>
//                         <div className={styles.rightPair}>
//                             <p className={styles.taxTypes}>Айланмадан соглик</p>
//                         </div>
//                     </div>
//                     <div className={`${styles.miniInputs} w - 100 d-flex`}>
//
//
//                     <div className={styles.leftPair}>
//                             <div className=" w-100 d-flex">
//                                 <input type="text" className="input-style font-roboto-light w-100 mr-20" disabled={true}/>
//                                 <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//                             </div>
//                         </div>
//                         <div className={styles.rightPair}>
//                             <p className={styles.taxTypes}>Даромат солиги (деклорация асосида)</p>
//                         </div>
//                     </div>
//                     <div className={`${styles.miniInputs} w - 100 d-flex`}>
//
//                     <div className={styles.leftPair}>
//                             <div className=" w-100 d-flex">
//                                 <input type="text" className="input-style font-roboto-light w-100 mr-20" disabled={true}/>
//                                 <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//                             </div>
//                         </div>
//                         <div className={styles.rightPair}>
//                             <p className={styles.taxTypes}>Сув соглиги</p>
//                         </div>
//                     </div>
//                     <div className={`${styles.miniInputs} w - 100 d-flex`}>
//
//                         <div className={styles.leftPair}>
//                             <p className={`${styles.smallTitle} ${styles.mt0} w-100 pr-20`}>Жами хизмат суммаси</p>
//                             <input type="text" className="input-style font-roboto-light w-100" disabled={true}/>
//
//                         </div>
//                         <div className={`${styles.rightPair} d-flex`}>
//                             <div className="w-100 pr-20">
//                                 <p className={`${styles.smallTitle}  ${styles.mt0} w-100`}>Туланган сумма</p>
//                                 <input type="text" className="input-style font-roboto-light w-100"/>
//                             </div>
//                             <div className="w-100">
//                                 <p className={`${styles.smallTitle}  ${styles.mt0} w-100 pr-20`}>Колдик сумма</p>
//                                 <input type="text" className="input-style font-roboto-light w-100"/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className={styles.rightInputs}>
//                     <p className={`${styles.smallTitle} w-100`}>СТИР</p>
//                     <div className={`${styles.stirInput}  w-100`}>
//                         <input type="text" className="input-style font-roboto-light w-100"
//                                placeholder="xxx xxx xxx"/>
//                         <button className="input-clear-btn">
//                             <span className="icon icon-input-clear" />
//                         </button>
//                     </div>
//                     <div className="w-100">
//                         <p className={`${styles.smallTitle} w-100 pr-20`}>Хисобот даври ва хизмат тури</p>
//                         <div className="w-100 d-flex">
//                             <p className={`${styles.smallTitle} ${styles.mt0} w-100 mr-20`}>Ойлик хисобот</p>
//                             <p className={`${styles.smallTitle} ${styles.mt0} w-100 `}>Чораклик хисобот</p>
//                         </div>
//                        <div className="d-flex w-100">
//                            <div className=" w-100 pr-20">
//                                <div className={styles.sendBtnGroup}>
//                                    <div className="w-100 d-flex">
//                                        <button className={styles.preparation }>Тайёорлаш</button>
//                                        <button>Юбориш</button>
//                                    </div>
//                                </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button >Юбориш</button>
//                                </div>
//                            </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button>Юбориш</button>
//                                </div>
//                            </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button>Юбориш</button>
//                                </div>
//                            </div>
//                            </div>
//                            <div className=" w-100">
//                                <div className={styles.sendBtnGroup}>
//                                    <div className="w-100 d-flex">
//                                        <button className={styles.preparation }>Тайёорлаш</button>
//                                        <button>Юбориш</button>
//                                    </div>
//                                </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button >Юбориш</button>
//                                </div>
//                            </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button>Юбориш</button>
//                                </div>
//                            </div>  <div className={styles.sendBtnGroup}>
//                                <div className="w-100 d-flex">
//                                    <button className={styles.preparation}>Тайёорлаш</button>
//                                    <button>Юбориш</button>
//                                </div>
//                            </div>
//                            </div>
//                        </div>
//
//                     </div>
//                     <div className="d-flex">
//                         <div className="w-100 pr-20">
//                             <p className={`${styles.smallTitle} w-100`}>Сана</p>
//
//                             <input type="date" id="date" className="input-style font-roboto-light w-100"/>
//                         </div>
//                         <div className={`${styles.controlCancelBtn} mt-auto w-100 pr-20`}>
//                             <button className=" w-100 mt-auto">Бекор килиш</button>
//                         </div>
//                         <div className={`${styles.controlSaveBtn} mt-auto w-100`}>
//                             <button className=" w-100 mt-auto">Сақлаш</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default YattElectronicTaxReporting;

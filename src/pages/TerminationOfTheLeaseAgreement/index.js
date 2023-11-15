import React from 'react';
import styles from './TerminationOfTheLeaseAgreement.module.scss'
const TerminationOfTheLeaseAgreement = () => {
    return (
        <div className={styles.terminationOfTheLeaseAgreement}>
            <div className={`${styles.dwnTitle} d-flex`}>
                <h2 className="font-roboto-bold page-main-title">
                    Ижара шартномасини бекор килиш
                </h2>
            </div>
            <div className="d-flex w-100">
                <div className="w-100 leftInput">
                    <label className="labels font-roboto-regular inputLabel">ИНН киритинг<span
                        className="withStar">*</span></label>
                    <input type="text" className="input-style font-roboto-light w-100"
                           placeholder="xxx xxx xxx"  />
                    <button className="input-clear-btn">
                        <span className="icon icon-input-clear" />
                    </button>
                </div>
                <div className="w-100 pr-20">
                    <label className="labels font-roboto-regular inputLabel">Доимий яшаш ҳудудининг номи</label>
                    <input type="text" className="input-style font-roboto-light w-100"  disabled={true}/>
                </div>
                <div className="w-100">
                    <label className="labels font-roboto-regular inputLabel">Доимий яшайдиган туман/шаҳар номи</label>
                    <input type="text" className="input-style font-roboto-light w-100"  disabled={true}/>
                </div>
            </div>
            <div className={`${styles.terminationInputs} d-flex w-100`}>
                <div className="w-100 pr-20">
                    <label className="labels font-roboto-regular inputLabel">Яшаш жойи</label>
                    <input type="text" className="input-style font-roboto-light w-100"  disabled={true}/>
                </div>
                <div className="w-100 pr-20">
                    <label className="labels font-roboto-regular inputLabel">Ф.И.О</label>
                    <input type="text" className="input-style font-roboto-light w-100"  disabled={true}/>
                </div>
                <div className="w-100 d-flex ">
                    <div className="w-100 pr-20">
                        <label className="labels font-roboto-regular inputLabel">Паспорт серияси ва номери</label>
                        <input type="text" className="input-style font-roboto-light w-100"  disabled={true}/>
                    </div>
                    <div className=" mt-auto">
                        <div className={"mt-auto ml-auto rightBtn"}>
                            <button className="main-btn font-roboto-regular ">
                                <span className="icon icon-search"/>
                                Излаш
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.taxReport}>
                <div className={`${styles.taxReportTabelHeader} d-flex w-100`}>
                    <p className="w-25">ID</p>
                    <p className="w-75">Ф.И.О</p>
                    <p className="w-75">Кучмас мулк жойлашган манзил</p>
                    <p className="w-33">Ижарага берилган сана</p>
                    <p className="w-33">Ижарага берилган муддат</p>
                    <p className="w-33">Ижарани бекор килинган сана</p>
                    <p className="w-33">(кв.м) Ижарага берилган майдон</p>
                    <p className="w-33">Бир ойлик ижара хаки тулови (сум)</p>
                   <div className={`${styles.terminationBtn} d-flex w-75`}>
                       <button className="w-100">
                           <span className="icon icon-add"></span>
                       </button>
                       <button className="w-100">
                           <span className="icon icon-download"></span>
                       </button>
                       <button className="w-100">
                           <span className="icon icon-return"></span>
                       </button>
                   </div>
                </div>

                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>
                <div className={`${styles.taxReportTabelBody} d-flex w-100`}>
                    <p className="w-100 font-roboto-light w-25">998 124</p>
                    <p className="w-100 font-roboto-light w-75">Абдухалилов Бахтийор Валиевич</p>
                    <p className="w-100 font-roboto-light w-75">Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">21.12.2021</p>
                    <p className="w-100 font-roboto-light w-33">29.5</p>
                    <p className="w-100 font-roboto-light w-33">100</p>
                    <div className="w-75">
                        <button>Ижара шартномаси бекор килинди</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TerminationOfTheLeaseAgreement;

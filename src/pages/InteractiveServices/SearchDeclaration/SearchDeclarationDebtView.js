import React, {useState} from 'react';
import styles from './SearchDeclaration.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";
const SearchDeclarationDebtView = (props) => {
    const [option, setOption] = useState(false);
      const options = [
        { value: 'INN', label: 'INN' },
        { value: 'Deklarasiya', label: 'Deklarasiya' }
    ]
    return (
        <div className={styles.searchDeclarationDebt}>

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Deklarasiya qidirish</span>
            </p>
            <div className="titleBox">
                <h3 className="titleMain font-roboto-bold">
                    Deklarasiya qidirish
                </h3>
            </div>
            {props.declorationType==="INN"?   <div className="upBox mt-30">
                <div className={styles.innBox}>
                    <div className="d-flex w-33">
                        <div className="inputs w-50  mt-0 mr-20 z-index-main">
                            <label >Qidirish turi <span className="withStar">*</span></label>
                            <Select options={options} value={options.filter(value =>props.declorationType===value.value)} onChange={(e)=>props.setDeclorationType(e.value)} placeholder="-" />
                        </div>
                        <div className="inputs w-75 mt-0  ">
                            <label >INN tering<span className="withStar">*</span></label>
                            <input type="text" className="w-100"  placeholder="-" defaultValue={props.tin} onChange={(e)=>props.setTin(e.target.value)}/>
                        </div>
                    </div>
                    <div className="btnGroup">
                        <button className="paidBtn font-roboto-bold" onClick={props.getDeclorationByTin}>
                            <span className="icon icon-search" />
                            QIdirish
                        </button>
                    </div>
                </div>
            </div>
                :
                <div className="upBox mt-30">
                <div className={styles.innBox}>
                    <div className="inputs w-100 mt-0 mr-20 z-index-main">
                        <label >Qidirish turi <span className="withStar">*</span></label>
                        <Select options={options}  value={options.filter(value =>props.declorationType===value.value)} onChange={(e)=>props.setDeclorationType(e.value)} placeholder="-" />
                    </div>
                    <div className="inputs w-100 mt-0 mr-20">
                        <label >Pos raqami<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light" name={"postNum"} onChange={event => props.setDeclorationNumber({...props.declorationNumber,[event.target.name]:event.target.value})} placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mt-0 mr-20">
                        <label >Deklarasiya sanasi<span className="withStar">*</span></label>
                        <input type="date" className="w-100 font-roboto-light" name={"declarationDate"} onChange={event => {
                            props.setDeclorationNumber({
                                ...props.declorationNumber,
                                [event.target.name]: new Date(event.target.value).ddmmyyyy()
                            })
                        }}  placeholder="-"/>
                    </div>
                    <div className="inputs mt-0 w-100">
                        <label >Deklarasiya raqami<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light" name={"num"} onChange={event => props.setDeclorationNumber({...props.declorationNumber,[event.target.name]:event.target.value})}  placeholder="-"/>
                    </div>
                    <div className="btnGroup">
                        <button className="paidBtn font-roboto-bold" onClick={props.getDeclorationByCertficate}>
                            <span className="icon icon-search" />
                            QIdirish
                        </button>
                    </div>
                </div>
            </div>}

            {props.declorationResponse? <div className={styles.decTabel}>
                <div className={styles.page}>
                    {/*<label><span className="icon icon-upload"/>Yuklash:</label>*/}
                    <div className={`${styles.page3}  z-index-main`}>
                        <Select options={options} placeholder="-" />
                    </div>
                    <button className={`${styles.uploadBtn}  font-roboto-bold`}> <span className="icon icon-upload"/> Yuklab olish</button>
                </div>

                <div className={`${styles.tabelsMain}   mt-30`}>
                    <div className={styles.mainTable}>
                        <table>
                            <tr>
                                <th className="font-roboto-bold">
                                    Sotib oluvchi
                                </th>
                                <th  className="font-roboto-bold">
                                    Yetkazib beruvchi
                                </th>
                                <th className="font-roboto-bold">Hisob faktura №</th>
                                <th className="font-roboto-bold">Hisob faktura sanasi</th>
                                <th className="font-roboto-bold">Yetkazib berish summasi</th>
                                <th className="font-roboto-bold">QQS summasi</th>
                                <th className="font-roboto-bold">Yetkazib berish QQS bilan</th>
                                <th className="font-roboto-bold"> </th>
                            </tr>
                            {props.declorationResponse?.map(item=>    <tr>
                                <td>{item.buyerName}
                                    <p>ИНН: {item.buyerTin}</p>
                                </td>
                                <td>{item.sellerName}
                                    <p>ИНН: {item.sellerTin}</p>
                                </td>
                                <td>{item.invoiceNo}</td>

                                <td>{item.invoiceDate}</td>
                                <td>{item.deliveryTotal}</td>
                                <td>{item.vatTotal}</td>
                                <td>{item.deliveryWithVat}</td>
                                <td className="text-center">
                                    <button onClick={()=>setOption(!option)}>
                                        <span className="icon icon-vertical-dot"/>
                                    </button>
                                    <div className={styles.control}  style={option?{display:"block"}:undefined}>
                                        <button onClick={()=>props.resend(item.invoiceId)}><span className="icon icon-return-code"/>Qayta jonatish</button>
                                        <button onClick={()=>props.updateG9TinByDecId(item.invoiceId )}><span className="icon icon-upload-right"/>G9 dan G2 ga o’tkazish</button>
                                    </div>
                                </td>
                            </tr>)}

                        </table>
                    </div>
                </div>
            </div>:""}

        </div>
    );
};

export default SearchDeclarationDebtView;

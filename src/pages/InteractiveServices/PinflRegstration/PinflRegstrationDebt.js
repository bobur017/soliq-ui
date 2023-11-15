import React from 'react';
import styles from "./PinflRegstration.module.scss"
import GetInfo from "../../../component/GetInfo";
import Select from "react-select";
const PinflRegstrationDebt = () => {
    return (
        <div className={styles.pinflRegstrationDebt}>
          {/*  <h2>ПИНФЛ регистрация</h2>*/}
          {/*<div className="d-flex">*/}
          {/*    <div className={` w-100 leftInput`}>*/}
          {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="passportSeria">Паспорт серияси ва номери<span*/}
          {/*            className="withStar">*</span></label>*/}
          {/*        <input type="text" id="passportSeria" className="input-style font-roboto-light w-100"*/}
          {/*               placeholder="АА 1234567" />*/}
          {/*        <button className="input-clear-btn">*/}
          {/*            <span className="icon icon-input-clear" />*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*    <div className={` w-100 leftInput`}>*/}
          {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="pinflinput">ПИНФЛ<span*/}
          {/*            className="withStar">*</span></label>*/}
          {/*        <input type="text" id="pinflinput" className="input-style font-roboto-light w-100"*/}
          {/*               placeholder="xxx xxx xxx" id="pinflinput"/>*/}
          {/*        <button className="input-clear-btn">*/}
          {/*            <span className="icon icon-input-clear" />*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*    <div className={` w-100 leftInput`}>*/}
          {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="inninput">ИНН киритинг<span*/}
          {/*            className="withStar">*</span></label>*/}
          {/*        <input type="text" id="inninput" className="input-style font-roboto-light w-100"*/}
          {/*               placeholder="xxx xxx xxx xxx xx" />*/}
          {/*        <button className="input-clear-btn">*/}
          {/*            <span className="icon icon-input-clear" />*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*    <div className={` w-100 leftInput`}>*/}
          {/*        <label className="labels font-roboto-regular inputLabel" htmlFor="date">Тугилган сана<span*/}
          {/*            className="withStar">*</span></label>*/}
          {/*        <input type="date" id="date" className="input-style font-roboto-light w-100"*/}
          {/*              />*/}
          {/*    </div>*/}
          {/*    <div className={"mt-auto ml-auto rightBtn"}>*/}
          {/*        <button className="main-btn font-roboto-regular ">*/}
          {/*            Саклаш*/}
          {/*        </button>*/}
          {/*    </div>*/}
          {/*</div>*/}
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>JShShIR ro’yxatdan o’tkazish</span>
            </p>

            <GetInfo type={'pinflreg'}/>

            <div className="upBox">
                <h2  className="font-roboto-bold">Jismoniy shaxs to’g’risida malumot</h2>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >Pasport seriyasi va nomeri<span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >JShShIR <span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >STIR <span className="withStar">*</span></label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100">
                        <label >Tugilgan sana <span className="withStar">*</span></label>
                        <input type="date" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-coin" />
                        To'lovga o'tish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PinflRegstrationDebt;

import React, {useState} from 'react';
import styles from './SearchDeclaration.module.scss'
import Select from "react-select";
import {Link} from "react-router-dom";
const SearchDeclarationDebt = (props) => {

    const options = [
        { value: 'INN', label: 'INN' },
        { value: 'Deklarasiya', label: 'Deklarasiya' }
    ]
    return (
        <div className={styles.searchDeclarationDebt}>
            {/*<h2>Декларацияни қидириш</h2>*/}
            {/*<div className="d-flex">*/}
            {/*    <div className="d-flex w-100">*/}
            {/*        <div className="w-100 pr-20">*/}
            {/*            <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">Тип поиска<span*/}
            {/*                className="withStar">*</span></label>*/}
            {/*            <Select className={`${styles.p20} custom-select`} placeholder="Тип поиска" options={options} />*/}
            {/*        </div>*/}
            {/*        <div className={`${styles.inputMarginBottom}  w-100 leftInput`}>*/}
            {/*            <label className="labels font-roboto-regular inputLabel" htmlFor="innpinflinput">ИНН<span*/}
            {/*                className="withStar">*</span></label>*/}
            {/*            <input type="text" id="innpinflinput" className="input-style font-roboto-light w-100"*/}
            {/*                   placeholder="xxx xxx xxx xxx xx" />*/}
            {/*            <button className="input-clear-btn">*/}
            {/*                <span className="icon icon-input-clear" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className={"mt-auto ml-auto rightBtn"}>*/}
            {/*            <button className="main-btn font-roboto-regular ">*/}
            {/*                <span className="icon icon-search"/>*/}
            {/*                Излаш*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

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

        </div>
    );
};

export default SearchDeclarationDebt;

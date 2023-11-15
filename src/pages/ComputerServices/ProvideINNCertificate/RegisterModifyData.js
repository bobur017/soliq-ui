import React from 'react';
import styles from './ProvideINNCertificate.module.scss'
import Select from "react-select";

const RegisterModifyData = () => {
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <div className={styles.registerModifyData}>
            {/*<h2 className="page-main-title font-roboto-bold">*/}
            {/*    Маълумотларини рўйхатдан ўтказиш ва ўзгартириш*/}
            {/*</h2>*/}

            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Доимий яшаш ҳудудининг номи*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex w-75">*/}
            {/*            <Select className="custom-select w-100 pr-20" placeholder="Вилоят" options={options}/>*/}
            {/*            <Select className="custom-select w-100" placeholder="Район" options={options}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Дастур тури*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex w-75">*/}
            {/*            <input type="text" className="input-style font-roboto-light w-100 mr-20"*/}
            {/*                   placeholder="Жисмоний шахсларни рўйхатга олиш"/>*/}
            {/*            <input type="text" className="input-style font-roboto-light w-100"*/}
            {/*                   placeholder="Маълумотларини ўзгартириш"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Ф.И.О*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex w-75">*/}
            {/*            <div className="w-100 leftInput">*/}
            {/*                <input type="text" required className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="Исмингиз"/>*/}
            {/*                <button className="input-clear-btn">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="w-100 leftInput">*/}
            {/*                <input type="text" required className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="Фамилиянгиз"/>*/}
            {/*                <button className="input-clear-btn">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className={`${styles.additionalStyle} w-100`}>*/}
            {/*                <input type="text" required className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="Отасини исми"/>*/}
            {/*                <button className="input-clear-btn ">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Тугилган сана*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="d-flex w-75">*/}
            {/*            <input type="date" id="date" className="input-style font-roboto-light w-100"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Доимий яшаш ҳудудининг номи*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className={`${styles.additionalStyle} w-75`}>*/}
            {/*            <input type="text" required className="input-style font-roboto-light w-100"*/}
            {/*                   placeholder="Махалла, куча ва хона раками"/>*/}
            {/*            <button className="input-clear-btn ">*/}
            {/*                <span className="icon icon-input-clear"/>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>Документ тури*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="w-75">*/}
            {/*            <div className="w-100">*/}
            {/*                <Select className={`${styles.p20} custom-select`} placeholder="Вид документа"*/}
            {/*                        options={options}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>*/}
            {/*                Паспорт серияси ва номери*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="w-75">*/}
            {/*            <div className={`${styles.additionalStyle} w-100`}>*/}
            {/*                <input type="text" required className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="АА 1234567"/>*/}
            {/*                <button className="input-clear-btn ">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>*/}
            {/*                Електрон почта манзили*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="w-75">*/}
            {/*            <div className={`${styles.additionalStyle} w-100`}>*/}
            {/*                <input type="email" required className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="example@mail.ru"/>*/}
            {/*                <button className="input-clear-btn ">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>*/}
            {/*                Телефон рақамингиз*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="w-75">*/}
            {/*            <div className={`${styles.additionalStyle} w-100`}>*/}
            {/*                <input type="text" id="organization_phone" required*/}
            {/*                       className="input-style font-roboto-light w-100"*/}
            {/*                       placeholder="+998 ( 99 ) 999 - 99 - 99"/>*/}
            {/*                <button className="input-clear-btn ">*/}
            {/*                    <span className="icon icon-input-clear"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.regTitle} w-100 d-flex`}>*/}
            {/*        <div className={`${styles.regTitleLabel} w-25`}>*/}
            {/*            <label>*/}
            {/*                Паспорт копияси*/}
            {/*                <span*/}
            {/*                    className={styles.withStar}>*</span>*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className={`${styles.fileSelectBtn} w-75`}>*/}
            {/*           <button>Файлни танланг</button>*/}
            {/*            <span>Файл хажми 3 Мбдан ошмаслиги лозим</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={`${styles.inputRows} d-flex`}>*/}
            {/*    <div className={`${styles.sendBtn} w-100 d-flex`}>*/}
            {/*        <div className="mt-auto ml-auto rightBtn">*/}
            {/*            <button className="main-btn font-roboto-regular ">*/}
            {/*                Жонатиш*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Malumotlarini ro’yxatdan o’tkazish va o’zgartirish</span>
            </p>
            <div className="titleBox ">
                <div className="w-100">
                    <h3 className="titleMain font-roboto-bold">
                        Malumotlarini ro’yxatdan o’tkazish va o’zgartirish
                    </h3>
                </div>
            </div>

            <div className="upBox">
                <div className="w-33">
                    <label className="labels font-roboto-regular inputLabel" >STIR yoki JShShIR kiriting<span
                            className="withStar">*</span></label>
                    <div className="d-flex">
                        <input type="text"  className="input-style font-roboto-light w-100"/>
                        <button className={styles.searchBtn}>
                            <span className="icon icon-search"/>
                        </button>
                    </div>

                </div>
            </div>

            <div className="upBox mt-30">
                <h2 className="font-roboto-bold">Jismoniy shaxs to’g’risida malumot</h2>

                    <div className="d-flex w-100">
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label >Shaxsni tanlang <span className="withStar">*</span></label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100 mr-20">
                            <label >F.I.O</label>
                            <input type="text" className="w-100"  placeholder="-"/>
                        </div>
                        <div className="inputs w-100">
                            <label >Tug'ilgan sana</label>
                            <input type="date" className="w-100 font-roboto-light"  placeholder="-"/>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="inputs w-100 mr-20">
                            <label >Doimiy yashash hududining nomi</label>
                            <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                        </div>
                        <div className="inputs w-100 mr-20 z-index-main">
                            <label >Viloyat</label>
                            <Select options={options} placeholder="-" />
                        </div>
                        <div className="inputs w-100  z-index-main">
                            <label >Tuman</label>
                            <Select options={options} placeholder="-" />
                        </div>

                    </div>
                <div className="d-flex w-100">
                    <div className="inputs w-100 mr-20">
                        <label >Elektron pochta manzili</label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100  ">
                        <label >Telefon raqamingiz</label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="inputs w-100 mr-20 z-index-main">
                        <label >Dokument turi</label>
                        <Select options={options} placeholder="-" />
                    </div>
                    <div className="inputs w-100  ">
                        <label >Pasport seriyasi va nomeri</label>
                        <input type="text" className="w-100 font-roboto-light"  placeholder="-"/>
                    </div>
                </div>
                {/*<button className={`${styles.addBtn} font-roboto-bold`}>*/}
                {/*    <span className="icon icon-plus-circle"/>*/}
                {/*    Pasport kopiyasini yuklash*/}
                {/*</button>*/}
                <div className="btnGroup">
                    <button className="uploaded font-roboto-bold mr-20">
                        <span className="icon icon-bird" />
                        Pasport kopiyasini yuklandi
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-coin" />
                        To'lovga o'tish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterModifyData;

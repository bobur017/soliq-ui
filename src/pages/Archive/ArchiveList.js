import React from 'react';
import styles from "./Archive.module.scss"

const ArchiveList = () => {
    return (
        <div className={styles.archiveList}>
            <div className={styles.header}>
                <div className={styles.tabelHeader1}>
                    ID
                </div>
                <div className={styles.tabelHeader2}>СТИР</div>
                <div className={styles.tabelHeader3}>Филиал номи</div>
                <div className={styles.tabelHeader4}>Вилоят номи</div>
                <div className={styles.tabelHeader5}>Адрес</div>
                <div className={styles.tabelHeader6}>Бошланиш мудати</div>
                <div className={styles.tabelHeader7}>Тури</div>
                <div className={styles.tabelHeader8}>Холати</div>
                <div className={styles.tabelHeader9}>
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
            </div>
            <div className={styles.bodySearch}>
                <div className={styles.tabelBody1}>
                    <input type="text"  className="input-style font-roboto-light w-100  " placeholder="xxxx"/>
                </div>
                <div className={styles.tabelBody2}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="xxx xxxx xxx"/>
                </div>
                <div className={styles.tabelBody3}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="Филиал номи"/>
                </div>
                <div className={styles.tabelBody4}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="Вилояти номи"/>
                </div>
                <div className={styles.tabelBody5}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="Адрес"/>
                </div>
                <div className={styles.tabelBody6}>
                    <input type="text" type="date"  className="input-style font-roboto-light w-100" placeholder="дд.мм.гггг"/>
                </div>
                <div className={styles.tabelBody7}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="Тури"/>
                </div>
                <div className={styles.tabelBody8}>
                    <input type="text"  className="input-style font-roboto-light w-100" placeholder="Холати"/>
                </div>
                <button className={styles.tabelBody9}>
                    <div className={`${styles.searchBtn} d-flex w-75`}>
                        Кидирув
                    </div>
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tabelBody1}>
                    9984
                </div>
                <div className={styles.tabelBody2}>123 456 789</div>
                <div className={styles.tabelBody3}>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</div>
                <div className={styles.tabelBody4}>Фаргона вилояти</div>
                <div className={styles.tabelBody5}>Узбекистан, Ташкент, Олмазорский район, Малая кольцевая дорога, 17</div>
                <div className={styles.tabelBody6}>21.12.2021</div>
                <div className={styles.tabelBody7}>CHSM</div>
                <div className={styles.tabelBody8}>Макулланди</div>
                <div className={styles.tabelBody9}>
                    <div className={`${styles.controlBtn} d-flex w-75`}>
                        <div className=" d-flex ">
                            <button className="plus-circle-btn mt-auto">
                                <span className="icon icon-download" />
                            </button>
                            <button className="delete-circle-btn ml-auto mt-auto">
                                <span className="icon icon-delete-btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchiveList;

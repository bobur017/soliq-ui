import React from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";

const SalaryTableDays = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.salaryTable}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Malumotlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>ishga kelganlik bo'yicha tabel</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Axmadjonov ilhomjon inomjonovich</span>
            </p>
            <div className={styles.titleBox}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h3 className="titleMain font-roboto-bold">
                        Axmadjonov ilhomjon inomjonovich
                    </h3>
                    <div className="d-flex mr-20">
                        <Select options={options} placeholder="yil" className={styles.month}/>
                        <Select options={options} placeholder="oy" className={styles.month}/>
                        <button className={styles.printBtn}>
                            <span className="icon icon-print"/>
                        </button>
                    </div>

                </div>
            </div>
            <div className={styles.selectDays}>
                <div className={styles.titles}>
                    <span className="font-roboto-light">D - Dam olish kuni</span>
                    <span className="font-roboto-light">B - Bayram kunlari</span>
                    <span className="font-roboto-light">M/T - Mexnat Tatili</span>
                    <span className="font-roboto-light">T- O’z hisobidan tatil</span>
                    <span className="font-roboto-light">X - Ishlamagan kunlari</span>
                    <span className="font-roboto-light">K - Kasallik varaqasi</span>
                    <span className="font-roboto-light">C - Xizmat safari</span>
                </div>
                <div className={`${styles.days} d-flex`}>
                    <div className={`${styles.daysNumbers} w-100`}>
                        1
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        2
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        3
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        4
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        5
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        6
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        7
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        8
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        9
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        10
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        11
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        12
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        13
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        14
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        15
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        16
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        17
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        18
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        19
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        20
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        21
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        22
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        23
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        24
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        25
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        26
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        27
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        28
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        29
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        30
                    </div>
                    <div className={`${styles.daysNumbers} w-100`}>
                        31
                    </div>
                </div>
                <div className={`${styles.marksList} d-flex`}>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>
                    <button className={`${styles.mark} w-100`}>8
                        <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                    </button>


    <div className={styles.marksChild}>
                        <button>д</button>
                        <button><b>Б</b></button>
                        <button>M/T</button>
                        <button>T</button>
                        <button>X</button>
                        <button>K</button>
                        <button>C</button>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        Saqlash
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SalaryTableDays;

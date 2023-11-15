import React from 'react';
import styles from "./MainEmployee.module.scss"
import Select from "react-select";

const SalaryTable = () => {
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
                  <button className={styles.controls}>
                      <span className="icon icon-return"/>
                  </button>
              </div>
              <div className={`${styles.marksList} d-flex`}>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={`${styles.mark} w-100`}>8</button>
                  <button className={styles.controls}>
                      <span className="icon icon-download"/>
                  </button>
              </div>

          </div>
            <div className={styles.infoDays}>
                    <div className={styles.progress}>
                        <p>6:00</p>
                        <div className={styles.progressLine}>
                          <div className={styles.progressBar}>
                              <div className={styles.redLine} style={{width: "20%"}}></div>
                              <div className={styles.blueLine} style={{width: "30%"}}></div>
                              <div className={styles.redLine} style={{width: "10%"}}></div>
                              <div className={styles.blueLine} style={{width: "40%"}}></div>
                          </div>
                            <div className={styles.numeric}>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                                <span>11</span>
                                <span>12</span>
                                <span>13</span>
                                <span>14</span>
                                <span>15</span>
                                <span>16</span>
                                <span>17</span>
                                <span>18</span>
                                <span>19</span>
                                <span>20</span>
                                <span>21</span>
                                <span>22</span>
                                <span>23</span>
                                <span>24</span>
                            </div>
                        </div>
                        <p>23:59</p>
                    </div>
                    <div className={`${styles.status} d-flex`}>
                        <div className={styles.statusItem}>
                            <span className={styles.blueCircle}>

                            </span>
                           <p className={styles.blueTitle}> Aktiv bo’lgan vaqtlar</p>
                        </div>
                        <div className={styles.statusItem}>
                            <span className={styles.redCircle}>

                            </span>
                            <p className={styles.redTitle}> Aktiv bo’lmagan vaqtlar</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SalaryTable;

import React from 'react';
import styles from "./ControlPanel.module.scss"
import FirstControlView from "./FirstControlView";
const FirstControl = () => {
    const data =[
        {
          name: "Toshkent",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Qashqadaryo",
          pr1: 56,
          pr2: 84,
          sum1: "62 312",
          sum2: "213 123",
        },
        {
          name: "Surxandaro",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Jizzax",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Andijon",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Navoiy",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Jizzax",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Andijon",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Navoiy",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Jizzax",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Andijon",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Navoiy",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Jizzax",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Andijon",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Navoiy",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Jizzax",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Andijon",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
        {
          name: "Navoiy",
          pr1: 95,
          pr2: 68,
          sum1: "312",
          sum2: "312 213 123",
        },
    ]
    return (
        <div className={styles.firstControl}>
            <div className={styles.box}>
                <div className={styles.controlHeader}>
                    <div>
                        <span className="icon icon-control"/>
                        <h3> Boshqaruv paneli</h3>
                    </div>
                    <div>
                        <button>
                            <span className="icon icon-arrow-up"/>
                        </button>
                    </div>
                </div>
                <div className={styles.controlContent}>
                    <div className={styles.controlContentItems}>
                        <div className={styles.controlContentItemsHeader}>
                            <div className="w-100">
                                <h2>Ko’rsatilgan xizmatlar soni va summasi</h2>
                                <button>
                                    <span className="icon icon-arrow-down"/>
                                </button>
                            </div>
                            <button>
                                <span className="icon icon-download"/>
                            </button>
                            <button>
                                <span className="icon icon-return"/>
                            </button>
                        </div>
                        {
                            data?.map(item =>(
                                <button className={styles.summs}>
                                    <div className={styles.prTitle}>
                                        <p>
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className={styles.progress}>
                                        <div style={{width: `${item.pr1}%`}}></div>
                                        <div style={{width: `${item.pr2}%`}}></div>
                                    </div>
                                    <div>
                                        <h6>{item.sum1}</h6>
                                        <h6>{item.sum2}</h6>
                                    </div>
                                </button>
                            ))
                        }
                        <div className={styles.controlContentItemsFooter}>
                            <div className={styles.statusBlue}>
                                <div />
                                <span className="font-roboto-light">Ko’rsatilgan xizmatlar soni</span>
                            </div>
                            <div className={styles.statusGreen}>
                                <div />
                                <span className="font-roboto-light">Ko’rsatilgan xizmatlar summasi</span>
                            </div>
                            <div className={styles.period}>
                                <label>Davr:</label>
                                <input type="date" placeholder="-"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controlContentItems}>
                        <div className={styles.controlContentItemsHeader}>
                            <div className="w-100">
                                <h2>Ko’rsatilgan xizmatlar soni va summasi</h2>
                                <button>
                                    <span className="icon icon-arrow-down"/>
                                </button>
                            </div>
                            <button>
                                <span className="icon icon-download"/>
                            </button>
                            <button>
                                <span className="icon icon-return"/>
                            </button>
                        </div>
                        <FirstControlView  data={data}/>

                        <div className={styles.controlContentItemsFooter}>
                            <div className={styles.statusBlue}>
                                <div />
                                <span className="font-roboto-light">Ko’rsatilgan xizmatlar soni</span>
                            </div>
                            <div className={styles.statusGreen}>
                                <div />
                                <span className="font-roboto-light">Ko’rsatilgan xizmatlar summasi</span>
                            </div>
                            <div className={styles.period}>
                                <label>Davr:</label>
                                <input type="date" placeholder="-"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstControl;

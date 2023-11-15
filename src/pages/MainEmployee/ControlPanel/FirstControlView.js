import React from 'react';
import styles from "./ControlPanel.module.scss";

const FirstControlView = (props) => {

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
    ]
    return (
        <div className={styles.firstControl}>
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
        </div>
    );
};

export default FirstControlView;

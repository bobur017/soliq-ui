import React from 'react';
import styles from "./ReceiveApplicationsOnlineAnswerQuestions.module.scss"
import Select from "react-select";
const ReceiveApplicationsOnlineAnswerQuestionsList = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className={styles.receiveApplicationsOnlineAnswerQuestionsList}>
            <div className={styles.pageTitle}>
                <h2 >
                    Murojaatlarni onlayn tarzda qabul qilish hamda savol javob o‘tkazish
                </h2>
                <div className={styles.controls}>
                    <div className={styles.selects}>
                        <Select className={`${styles.mySelect} custom-select-2`} placeholder="Тошкент вилояти" options={options} />
                        <Select className={`${styles.mySelect} custom-select-2`} placeholder="Туман тангланг" options={options} />
                    </div>
                    <div className={styles.inputs}>
                        <input type="date"  className="input-style font-roboto-light w-100" />
                        <div>
                            <p>-</p>
                        </div>
                        <input type="date"  className="input-style font-roboto-light w-100"  />
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <button className={styles.listItem}>
                    <p>Диккат, Диккат!</p>
                    <div>
                        <span className={styles.date}>14:20  /  01.01.2022</span>
                        <span className={`${styles.ptichka} icon icon-bird-circle`}></span>
                    </div>
                </button>
                <button className={styles.listItem}>
                    <p>“Солик-сервис” ДУК томонидан курсатилган хизматлар</p>
                    <div>
                        <span className={styles.date}>14:20  /  01.01.2022</span>
                        <span className={`${styles.ptichka} icon icon-bird-circle`}></span>
                    </div>
                </button>
                <button className={styles.listItem}>
                    <p>Ахборот тизими</p>
                    <div>
                        <span className={styles.date}>14:20  /  01.01.2022</span>
                        <span className={`${styles.caution} icon icon-caution`}></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ReceiveApplicationsOnlineAnswerQuestionsList;

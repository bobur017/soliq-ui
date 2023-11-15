import React, { useRef } from 'react'
import { services } from './FakeDates';
import left from '../News/icons/arrowLeft.svg';
import right from '../News/icons/arrowRight.svg';
import styles from './TypesOfServicesPrices.module.scss';
import ReactToPrint from 'react-to-print';
function TypesOfServicesPrices(props) {
    const componentRef = useRef();
    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Ma'lumotlar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Xizmatlar turlari va narxlari</span>
            </p>
            <div className={styles.MainHeader}>
                <div className={styles.header}>
                    <div className="d-flex justify-content-between">
                        <h1 className="font-roboto-bold mt-10">Xizmatlar turlari va narxlari</h1>
                        <div className="d-flex">
                            <ReactToPrint
                                trigger={() => <button>
                                    <span className="icon icon-print" />
                                </button>}
                                content={() => componentRef.current}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={componentRef}>
                {
                    services.map((item, index) =>
                        <div className={styles.decTabel} key={index} >
                            <p style={{ fontSize: 28 }} className='font-roboto-bold'>{item.name}</p>
                            <div className={`${styles.tabelsMain}   mt-30`}>
                                <div className={styles.mainTable}>
                                    <table>
                                        <tr>
                                            <th className="font-roboto-bold">
                                                №
                                            </th>
                                            <th className="font-roboto-bold" style={{ width: 700 }}>
                                                Xizmat nomi
                                            </th>
                                            <th>Toshkent shaxri</th>
                                            <th>Qoraqalpog’iston respublikasi <br /> va viloyatlar tuman (shaxar)lari</th>
                                            <th></th>
                                        </tr>
                                        {item.servicesList?.map((item2, key) =>
                                            <tr key={key}>
                                                <td>{key + 1}
                                                </td>
                                                <td >
                                                    <span style={{ width: 700 }} className='d-flex'>{item2.name}</span>
                                                </td>
                                                <td>{item2.cityPrice}</td>
                                                <td>{item2.regionPrice}</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className='icon icon-link' style={{ backgroundColor: '#174AA4', cursor: 'pointer' }} onClick={() => props.history.push("/main/info/types-services-prices/" + item2.id)}></span>
                                                </td>
                                            </tr>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='d-flex mt-20'>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}><img src={left} alt="" width={20} style={{ marginRight: 5 }} /> Oldingi </button></div>
                <div><button className={styles.buttonActive} style={{ backgroundColor: 'white' }}> Keyingi <img src={right} alt="" width={20} style={{ marginLeft: 5 }} /></button></div>
            </div>
        </div>
    )
}

export default TypesOfServicesPrices
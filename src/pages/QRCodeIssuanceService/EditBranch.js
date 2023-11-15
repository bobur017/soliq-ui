import React from 'react';
import Select from 'react-select';
import styles from './QRCodeIssuanceService.module.scss';
import GetInfo from "../../component/GetInfo";

function EditQrCode(props) {
    return (
        <div className={styles.createNewQRCode}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code berish xizmati</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>QR-code o’zgartirish</span>
            </p>

            <div className={styles.addNewBranch}>
                <h1 className="font-roboto-bold">Filial ma’lumotlari</h1>

                <div className="d-flex justify-content-between">
                    <div className={styles.group}>
                        <label htmlFor="inn">INN <span className="withStar">*</span></label>
                        <input type="text" id={'inn'}/>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="director">Filial raxbari JSHSHIR <span className="withStar">*</span></label>
                        <input type="text" id={'director'}/>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="companyName">Korxona nomi <span className="withStar">*</span></label>
                        <input type="text" id={'companyName'}/>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="region">Viloyat <span className="withStar">*</span></label>
                        <Select className="custom-select" placeholder="region">
                            <option value="toshkent">toshkent</option>
                            <option value="toshkent">toshkent</option>
                            <option value="toshkent">toshkent</option>
                        </Select>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="tuman">Tuman <span className="withStar">*</span></label>
                        <Select className="custom-select" placeholder="tuman">
                            <option value="toshkent">yunusobod</option>
                            <option value="toshkent">yunusobod</option>
                            <option value="toshkent">yunusobod</option>
                        </Select>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-30">
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Filial nomi <span className="withStar">*</span></label>
                        <input type="text" id={'name'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="address">Filial manzili <span className="withStar">*</span></label>
                        <input type="text" id={'address'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName">Filial raxbari F.I.O <span className="withStar">*</span></label>
                        <input type="text" id={'fullName'}/>
                    </div>

                </div>
            </div>
            <div className={styles.newBranch}>
                <h1 className="font-roboto-bold">Yangi filial joylashuvini belgilash</h1>

                <div className="d-flex justify-content-between w-100">
                    <div className={styles.group}>
                        <label className="labels" htmlFor='width'>Kenglik (kenglik):</label>
                        <input id='width' type="text"/>
                    </div>
                    <div className={styles.group}>
                        <label className="labels" htmlFor='height'>Uzunlik (Longitude):</label>
                        <input id='height' type="text"/>
                    </div>


                </div>


                <iframe src="https://yandex.uz/map-widget/v1/-/CCUNbGXmOB" width="560" height="400" frameBorder="1"
                        allowFullScreen="true"/>

                <div className="d-flex justify-content-end">
                    <button>
                        <span className='icon icon-back'/>
                        Ortga qaytish
                    </button>
                    <button>
                        <span className='icon icon-save'/>
                        Saqlash
                    </button>
                </div>
            </div>

        </div>
    );
}

export default EditQrCode;

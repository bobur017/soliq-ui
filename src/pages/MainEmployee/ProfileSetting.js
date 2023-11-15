import React from 'react';
import styles from "./MainEmployee.module.scss";

const ProfileSetting = () => {
    return (
        <div className={styles.profileSettings}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Foydalanuvchilarni boshqarish</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Foydalanuvchi akkauntini o’zgartirish</span>
            </p>
            <div className="titleBox mt-30">
                <h3 className="font-roboto-bold titleMain">Profil sozlamasi</h3>
            </div>
            <div className={styles.upBox}>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20" >
                        <label >F.I.O <span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="INN"/>
                    </div>
                    <div className="inputs w-100 mr-20" >
                        <label >INN/PINFL<span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="INN"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs w-100 mr-20" >
                        <label >Login<span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="INN"/>
                    </div>
                    <div className="inputs w-100 mr-20" >
                        <label >Parol<span className="withStar">*</span></label>
                        <input type="text" className="w-100"  placeholder="INN"/>
                    </div>
                </div>
                <div className="btnGroup">
                    <button className="closeBtn font-roboto-bold mr-20">
                        <span className="icon icon-close" />
                        Bekor qilish
                    </button>
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-bird" />
                        Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetting;

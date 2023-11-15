import React from 'react';
import styles from './ProvideINNCertificate.module.scss'
const ProvideInnCertificatePairResult = () => {
    return (
        <div  >
            <div className="upBox mt-30">
                <h3 className="titleMain font-roboto-bold">
                    Sorov natijasi
                </h3>

                <div className="d-flex">
                    <div className="inputs w-100 mr-20">
                        <label >JShShIR</label>
                        <input type="text" disabled className="w-100 font-roboto-light" value="12345678909876"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >JShShIR berilgan sana</label>
                        <input type="text" disabled className="w-100 font-roboto-light" value="JShShIR berilgan sana"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100 mr-20">
                        <label >Ro’yxatga olingan DSI</label>
                        <input type="text" disabled className="w-100 font-roboto-light" value="Jizzah Shahri"  placeholder="-"/>
                    </div>
                    <div className="inputs w-100  ">
                        <label >F.I.O</label>
                        <input type="text" disabled className="w-100 font-roboto-light" value="Abdurasulov Javohir Dilshod o’g’li"  placeholder="-"/>
                    </div>
                </div>

                <div className="btnGroup">
                    <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-add-btn" />
                        Shakllantirish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProvideInnCertificatePairResult;

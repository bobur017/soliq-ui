import React from 'react';
import './style.scss';

function GetInfo(props) {
    return (
        props.type === 'electronSignature' ?
            <div className="get-info mt-30">
                <h1 className="font-roboto-bold">Elektron raqamli imzo muddatini uzaytirib berishga ariza</h1>
                <div className="progress">
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text"/>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Shaxsiy malumotlarni kiritish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            SMS tasdiqlash
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            PFX fayl yaratish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Ariza
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Hizmat uchun to’lovni amalga oshirish
                        </div>
                    </div>

                    <div className="all-bar">
                        <div className="progress-bar">
                            <img src="/assets/correct.png" alt=""/>
                        </div>
                        <div className="text">
                            Hizmat yakunlandi
                        </div>
                    </div>
                </div>

            </div>
            :
        props.type === 'contract' ?
            <div className="get-info">
                <h1 className="font-roboto-bold">Elektron shartnomalar tuzish</h1>


                <div className="progress">
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text"/>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Shartnoma ma'lumotlarini kiritish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Shartnomani imzolash
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            EHF Shakllantirish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Xizmat uchun to’lovni amalga oshirish
                        </div>
                    </div>

                    <div className="all-bar">
                        <div className="progress-bar">
                            <img src="/assets/correct.png" alt=""/>
                        </div>
                        <div className="text">
                            Xizmat yakunlandi
                        </div>
                    </div>
                </div>

            </div>
            :
            props.type === 'YSh' ?
            <div className="get-info">
                <h1  className="font-roboto-bold">Yuridik shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma olish</h1>


                <div className="progress">
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text"/>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Yuridik shaxs to'g'risidagi ma'lumotlar

                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Ma’lumotnomani shakllantirish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Xizmat uchun to’lovni amalga oshirish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar">
                            <img src="/assets/correct.png" alt=""/>
                        </div>
                        <div className="text">
                            Xizmat yakunlandi
                        </div>
                    </div>
                </div>

            </div>
            : props.type === 'JSh' ?
            <div className="get-info">
                <h1  className="font-roboto-bold">Jismoniy shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma olish</h1>


                <div className="progress">
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text"/>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Jismoniy shaxs to'g'risidagi ma'lumotlar

                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Obyektni tanlash

                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Ma’lumotnomani shakllantirish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar"/>
                        <div className="text">
                            Xizmat uchun to’lovni amalga oshirish
                        </div>
                    </div>
                    <div className="all-bar">
                        <div className="progress-bar">
                            <img src="/assets/correct.png" alt=""/>
                        </div>
                        <div className="text">
                            Xizmat yakunlandi
                        </div>
                    </div>
                </div>

            </div>
            : props.type === 'JShD' ?
                <div className="get-info">
                    <h1  className="font-roboto-bold">Jismoniy shaxslarning solishtirma dalolatnomalarini olish</h1>


                    <div className="progress">
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text"/>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Jismoniy shaxs to'g'risidagi ma'lumotlar

                            </div>
                        </div>

                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Ma’lumotnomani shakllantirish
                            </div>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Xizmat uchun to’lovni amalga oshirish
                            </div>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar">
                                <img src="/assets/correct.png" alt=""/>
                            </div>
                            <div className="text">
                                Xizmat yakunlandi
                            </div>
                        </div>
                    </div>

                </div>:
                            props.type === 'YURShD' ?
                                <div className="get-info">
                                    <h1  className="font-roboto-bold">Yuridik shaxslarning solishtirma dalolatnomalarini olish</h1>


                                    <div className="progress">
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text"/>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Jismoniy shaxs to'g'risidagi ma'lumotlar

                                            </div>
                                        </div>

                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Ma’lumotnomani shakllantirish
                                            </div>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Xizmat uchun to’lovni amalga oshirish
                                            </div>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar">
                                                <img src="/assets/correct.png" alt=""/>
                                            </div>
                                            <div className="text">
                                                Xizmat yakunlandi
                                            </div>
                                        </div>
                                    </div>

                                </div>:
                            props.type === 'YTTShD' ?
                                <div className="get-info">
                                    <h1  className="font-roboto-bold">Yakka tartibdagi tadbirkorlarning solishtirma dalolatnomalarini olish</h1>
                                    <div className="progress">
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text"/>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Jismoniy shaxs to'g'risidagi ma'lumotlar

                                            </div>
                                        </div>

                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Ma’lumotnomani shakllantirish
                                            </div>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar"/>
                                            <div className="text">
                                                Xizmat uchun to’lovni amalga oshirish
                                            </div>
                                        </div>
                                        <div className="all-bar">
                                            <div className="progress-bar">
                                                <img src="/assets/correct.png" alt=""/>
                                            </div>
                                            <div className="text">
                                                Xizmat yakunlandi
                                            </div>
                                        </div>
                                    </div>

                                </div>
                : props.type === 'createQRCode' ?
                    <div className="get-info">
                        <h1  className="font-roboto-bold">QR-Code yaratish</h1>


                        <div className="progress">
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text"/>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Kerakli ma’lumotlar kiritish

                                </div>
                            </div>

                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    QR-Code shakllantirish
                                </div>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Xizmat uchun to’lovni amalga oshirish
                                </div>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar">
                                    <img src="/assets/correct.png" alt=""/>
                                </div>
                                <div className="text">
                                    Xizmat yakunlandi
                                </div>
                            </div>
                        </div>

                    </div>

                : props.type === 'pinflreg' ?
                    <div className="get-info">
                        <h1  className="font-roboto-bold">JSHSHIRni ro`yxatdan otkazish</h1>


                        <div className="progress">
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text"/>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Kerakli ma’lumotlar kiritish

                                </div>
                            </div>

                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    JSHSHIR shakllantirish
                                </div>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Xizmat uchun to’lovni amalga oshirish
                                </div>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar">
                                    <img src="/assets/correct.png" alt=""/>
                                </div>
                                <div className="text">
                                    Xizmat yakunlandi
                                </div>
                            </div>
                        </div>

                    </div>
                : props.type === 'pinflStirAttach' ?
                    <div className="get-info">
                        <h1  className="font-roboto-bold">JSHSHIRni STIRga biriktirish</h1>


                        <div className="progress">
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text"/>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Kerakli ma’lumotlar kiritish

                                </div>
                            </div>

                            <div className="all-bar">
                                <div className="progress-bar"/>
                                <div className="text">
                                    Shakllantirish
                                </div>
                            </div>
                            <div className="all-bar">
                                <div className="progress-bar">
                                    <img src="/assets/correct.png" alt=""/>
                                </div>
                                <div className="text">
                                    Xizmat yakunlandi
                                </div>
                            </div>
                        </div>

                    </div>
                                :

                                    props.type === 'IJSH1' ?
                                        <div className="get-info">
                                            <h1  className="font-roboto-bold">Ijara shartnomasini ro’yxatdan o’tkazish</h1>


                                            <div className="progress">
                                                <div className="all-bar">
                                                    <div className="progress-bar"/>
                                                    <div className="text"/>
                                                </div>
                                                <div className="all-bar">
                                                    <div className="progress-bar"/>
                                                    <div className="text">
                                                        Kerakli ma’lumotlar kiritish
                                                    </div>
                                                </div>
                                                <div className="all-bar">
                                                    <div className="progress-bar"/>
                                                    <div className="text">
                                                        Hujjatni shallantirish
                                                    </div>
                                                </div>

                                                <div className="all-bar">
                                                    <div className="progress-bar"/>
                                                    <div className="text">
                                                        Hizmat uchun to’lovni amalga oshirish
                                                    </div>
                                                </div>
                                                <div className="all-bar">
                                                    <div className="progress-bar">
                                                        <img src="/assets/correct.png" alt=""/>
                                                    </div>
                                                    <div className="text">
                                                        Hizmat yakunlandi
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                :   props.type === 'IJSH2' ?
                                            <div className="get-info">
                                                <h1  className="font-roboto-bold">Ijara shartnomasini ro’yxatdan o’tkazish</h1>


                                                <div className="progress">
                                                    <div className="all-bar">
                                                        <div className="progress-bar"/>
                                                        <div className="text"/>
                                                    </div>
                                                    <div className="all-bar">
                                                        <div className="progress-bar"/>
                                                        <div className="text">
                                                            Kerakli ma’lumotlar kiritish
                                                        </div>
                                                    </div>
                                                    <div className="all-bar">
                                                        <div className="progress-bar"/>
                                                        <div className="text">
                                                            Talabani tasdiqlash
                                                        </div>
                                                    </div>
                                                    <div className="all-bar">
                                                        <div className="progress-bar"/>
                                                        <div className="text">
                                                            Hujjatni shallantirish
                                                        </div>
                                                    </div>

                                                    <div className="all-bar">
                                                        <div className="progress-bar"/>
                                                        <div className="text">
                                                            Hizmat uchun to’lovni amalga oshirish
                                                        </div>
                                                    </div>
                                                    <div className="all-bar">
                                                        <div className="progress-bar">
                                                            <img src="/assets/correct.png" alt=""/>
                                                        </div>
                                                        <div className="text">
                                                            Hizmat yakunlandi
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            :
                                            props.type === 'IJSH3' ?
                                                <div className="get-info">
                                                    <h1  className="font-roboto-bold">Ijara shartnomasini ro’yxatdan o’tkazish</h1>


                                                    <div className="progress">
                                                        <div className="all-bar">
                                                            <div className="progress-bar"/>
                                                            <div className="text"/>
                                                        </div>
                                                        <div className="all-bar">
                                                            <div className="progress-bar"/>
                                                            <div className="text">
                                                                Kerakli ma’lumotlar kiritish
                                                            </div>
                                                        </div>
                                                        <div className="all-bar">
                                                            <div className="progress-bar"/>
                                                            <div className="text">
                                                                Talabani tasdiqlash
                                                            </div>
                                                        </div>
                                                        <div className="all-bar">
                                                            <div className="progress-bar"/>
                                                            <div className="text">
                                                                Hujjatni shallantirish
                                                            </div>
                                                        </div>

                                                        <div className="all-bar">
                                                            <div className="progress-bar"/>
                                                            <div className="text">
                                                                Hizmat uchun to’lovni amalga oshirish
                                                            </div>
                                                        </div>
                                                        <div className="all-bar">
                                                            <div className="progress-bar">
                                                                <img src="/assets/correct.png" alt=""/>
                                                            </div>
                                                            <div className="text">
                                                                Hizmat yakunlandi
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                :
                                                props.type === 'getSalary' ?
                                                    <div className="get-info">
                                                        <h1  className="font-roboto-bold">
                                                            Ish haqi to'g'risida ma'lumotnoma olish
                                                        </h1>

                                                        <div className="progress">
                                                            <div className="all-bar">
                                                                <div className="progress-bar"/>
                                                                <div className="text"/>
                                                            </div>
                                                            <div className="all-bar">
                                                                <div className="progress-bar"/>
                                                                <div className="text">
                                                                    Natijalarni tanlash
                                                                </div>
                                                            </div>
                                                            <div className="all-bar">
                                                                <div className="progress-bar"/>
                                                                <div className="text">
                                                                    Ma’lumotnomani shakllantirish
                                                                </div>
                                                            </div>

                                                            <div className="all-bar">
                                                                <div className="progress-bar"/>
                                                                <div className="text">
                                                                    Hizmat uchun to’lovni amalga oshirish
                                                                </div>
                                                            </div>
                                                            <div className="all-bar">
                                                                <div className="progress-bar">
                                                                    <img src="/assets/correct.png" alt=""/>
                                                                </div>
                                                                <div className="text">
                                                                    Hizmat yakunlandi
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                :

                                                    props.type === 'IJSH4' ?
                                                        <div className="get-info">
                                                            <h1  className="font-roboto-bold">Ijara shartnomasini ro’yxatdan o’tkazish</h1>


                                                            <div className="progress">
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text"/>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Kerakli ma’lumotlar kiritish
                                                                    </div>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Hujjatni shallantirish
                                                                    </div>
                                                                </div>

                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Xizmat uchun to’lovni amalga oshirish
                                                                    </div>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar">
                                                                        <img src="/assets/correct.png" alt=""/>
                                                                    </div>
                                                                    <div className="text">
                                                                        Xizmat yakunlandi
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        :

                                                    props.type === 'YXRU1' ?
                                                        <div className="get-info">
                                                            <h1  className="font-roboto-bold">Yonlangan xodimlarni ro’yxatdan o’tkazish</h1>


                                                            <div className="progress">
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text"/>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Kerakli ma’lumotlar kiritish
                                                                    </div>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Mehnat shartnomasini yuklab olish
                                                                    </div>
                                                                </div>

                                                                <div className="all-bar">
                                                                    <div className="progress-bar"/>
                                                                    <div className="text">
                                                                        Hizmat uchun to’lovni amalga oshirish
                                                                    </div>
                                                                </div>
                                                                <div className="all-bar">
                                                                    <div className="progress-bar">
                                                                        <img src="/assets/correct.png" alt=""/>
                                                                    </div>
                                                                    <div className="text">
                                                                        Hizmat yakunlandi
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        :

                                            <div className="get-info">
                    <h1  className="font-roboto-bold">Yakka tartibdagi tadbirkorlarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma olish</h1>


                    <div className="progress">
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text"/>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Jismoniy shaxs to'g'risidagi ma'lumotlar

                            </div>
                        </div>

                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Ma’lumotnomani shakllantirish
                            </div>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar"/>
                            <div className="text">
                                Xizmat uchun to’lovni amalga oshirish
                            </div>
                        </div>
                        <div className="all-bar">
                            <div className="progress-bar">
                                <img src="/assets/correct.png" alt=""/>
                            </div>
                            <div className="text">
                                Xizmat yakunlandi
                            </div>
                        </div>
                    </div>

                </div>

    );
}

export default GetInfo;

import React, { useState } from 'react';
import styles from "./Main.module.scss";
import { Collapse } from 'react-collapse';

const Main = (props) => {

    const [isOpen, setIsOpen] = useState(0);

    return (
        <div className={styles.main}>
            {/*<div className={styles.dashboard}>*/}
            {/*    <div className="d-flex align-items-center">*/}
            {/*        <span className="icon icon-dashboard-line"/>*/}
            {/*        <div className={styles.line}/>*/}
            {/*        <h3 className="font-roboto-bold">Дашбордлар</h3>*/}
            {/*    </div>*/}
            {/*    <span className="icon icon-arrow-down"/>*/}
            {/*</div>*/}

            {/*<h2 className="font-roboto-bold">Солик-сервис</h2>*/}
            {/*<div className={styles.row}>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement")}>*/}
            {/*            <img src="/assets/icons/ijara.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ижара шартномасини рўйхатдан ўтказиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-registration/termination-of-the-lease-agreement")}>*/}
            {/*            <img src="/assets/icons/ijara-atmen.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ижара шартномасини бекор килиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-registration/sending-invoices")}>*/}
            {/*            <img src="/assets/icons/hisob.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ҳисоб-фактураларни қоғоздан електрон шаклга ўтказиш ва уларни мижозларга юборишни*/}
            {/*                осонлаштириш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={styles.row}>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-registration-self-employed/registration-of-self-employed-persons")}>*/}
            {/*            <img src="/assets/icons/person.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ўз ўзини банд қилган шахсларни рўйхатдан ўтказиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/hired-staff/hired-staff-registration")}>*/}
            {/*            <img src="/assets/icons/personal.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ёлланган ходимларни рўйхатдан ўтказиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/qr-code-services/qr-code-issuance-service")}>*/}
            {/*            <img src="/assets/icons/qr-code.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>QR-code бериш хизмати</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-contracts-service")}*/}
            {/*        >*/}
            {/*            <img src="/assets/icons/xizmat.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Ҳизмат кўрсатиш шартномаларини електрон тузиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}>*/}
            {/*            <img src="/assets/icons/elektron-shartnoma.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Шартномаларни електрон тузиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/electronic-digital-signature/application-for-electronic-digital-signature")}>*/}
            {/*            <img src="/assets/icons/write-answer.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Електрон рақамли имзо муддатини узайтириб беришга ариза жўнатиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/main-employee/main-employee-home")}>*/}
            {/*            <img src="/assets/icons/course.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>CРМ фойдаланувчилар тарихи</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card}*/}
            {/*             onClick={() => props.history.push("/main/receive-applications-online/receive-applications-online-and-answer-questions")}>*/}
            {/*            <img src="/assets/icons/cmi.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Murojaatlarni onlayn tarzda qabul qilish hamda savol javob o‘tkazish</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card} onClick={() => props.history.push("/main/archive/archive-list")}>*/}
            {/*            <img src="/assets/icons/archive.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Архив</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={styles.lineHorizontal} />*/}
            {/*<div className={styles.row}>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={`${styles.card} ${isOpen === 1 ? styles.active : ""}`}*/}
            {/*             onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)}>*/}
            {/*            <img src="/assets/icons/interactive.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Интерактив хизматлардан фойдаланишга кумаклашиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={styles.card} onClick={() => props.history.push("/main/provide/provide-inn-certificate")}>*/}
            {/*            <img src="/assets/icons/comp.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Компьютер хизматлари ва техник ёрдам</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.col}>*/}
            {/*        <div className={`${styles.card} ${isOpen === 2 ? styles.active : ""}`}*/}
            {/*             onClick={() => setIsOpen(isOpen === 2 ? 0 : 2)}>*/}
            {/*            <img src="/assets/icons/elektron-fee.svg" alt="interactive.svg"/>*/}
            {/*            <div className={styles.line}/>*/}
            {/*            <p>Электрон солик хособотларини юритиш</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Collapse isOpened={isOpen === 1}>*/}
            {/*    <div className={styles.row}>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/yur-tax-info")}>*/}
            {/*                ЮШ солиқ қарзлари йўқлиги тўғрисида маълумотнома*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/yur-comparative-tax-info")}>*/}
            {/*                ЮШ солиштирма даломатномалари*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/pinfl-regstration")}>*/}
            {/*                ПИНФЛ регистрация*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/yatt-tax-info")}>*/}
            {/*                ЯТТлар солик карзи мавжуд эмаслиги*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/yatt-comparative-tax-info")}>*/}
            {/*                ЯТТлар солиштирма далолат номалари*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/pinfl-stir-attach")}>*/}
            {/*                ПИНФЛни СТИЛга бириктириш*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/physical-tax-info")}>*/}
            {/*                ЖШ солиқ қарзлари йўқлиги тўғрисида маълумотнома*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/physic-comparative-tax-info")}>*/}
            {/*                ЖШ солиштирма далолат номалари*/}
            {/*            </div>*/}
            {/*            <div className={styles.cardItem} onClick={() => props.history.push("/main/interactive/search-declaration")}>*/}
            {/*                Декларацияни қидириш*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Collapse>*/}
            {/*<Collapse isOpened={isOpen === 2}>*/}
            {/*    <div className={styles.row}>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem + " " + styles.cardItemBig} onClick={() => props.history.push("/main/electronic-tax-reporting/yur-reporting")}>*/}
            {/*                ЮШ томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини тайёрлаш ва солик органларига юбориш*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem + " " + styles.cardItemBig} onClick={() => props.history.push("/main/electronic-tax-reporting/yatt-reporting")}>*/}
            {/*                ЯТТ лар томонидан такдим этилган маълумотлар асосида электрон солик хисоботларини таёрлаш ва солик органларига юбориш*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={styles.col}>*/}
            {/*            <div className={styles.cardItem + " " + styles.cardItemBig} onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>*/}
            {/*                ЖС жами йиллик даромати тугрисидаги декларацияни тузиш ва электрон шаклга утказиб, солик органларига юбориш*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Collapse>*/}

            <div className={styles.dashboard}>
                <div className="d-flex align-items-center">
                    <span className="icon icon-dashboard-line" />
                    <div className={styles.line} />
                    <h3 className="font-roboto-bold">Statistika</h3>
                </div>
                <span className="icon icon-arrow-down" />
            </div>
            <h2 className={`${styles.mainLinks} font-roboto-bold`}>Ko'p foydalanilgan xizmatlar</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement")}>
                        <img src="/assets/icons/ij1.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Ijara shartnomalarini ro’yxatdan o’tkazish</p>
                        <span className={`${styles.ActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main/electronic-registration/termination-of-the-lease-agreement")}>*/}
                {/*        <img src="/assets/icons/ij2.svg" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>Ijara shartnomasini bekor qilish</p>*/}
                {/*        <span className={`${styles.ActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <h2 className={`${styles.mainLinks} font-roboto-bold`}>Asosiy xizmatlar</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement")}>
                        <img src="/assets/icons/ij1.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Ijara shartnomalarini ro’yxatdan o’tkazish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main/electronic-registration/termination-of-the-lease-agreement")}>*/}
                {/*        <img src="/assets/icons/ij2.svg" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>Ijara shartnomasini bekor qilish</p>*/}
                {/*        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/self-employment")}>
                        <img src="/assets/icons/ij3.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>O’zini o’zi band qilgan shaxslarni ro’yxatga olish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-contracts-service")}>
                        <img src="/assets/icons/ij6.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Elektron shartnomalar tuzish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-contracts-service")}>
                        <img src="/assets/icons/ehf.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Hisobvaraq-fakturalarini yaratish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/registration/registration-of-employee")}>
                        <img src="/assets/icons/ij4.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yollangan xodimlarni ro’yxatdan o’tkazish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/qr-code-services/qr-code-issuance-service")}>
                        <img src="/assets/icons/ij5.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Matritsali shtrix kod ma'lumotnomasini shakllantirish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-digital-signature/application-for-electronic-digital-signature")}>
                        <img src="/assets/icons/ij7.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Elektron raqamli imzo muddatini uzaytirib berishga ariza jo’natish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main")}>*/}
                {/*        <img src="/assets/icons/ij8.svg" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>Murojaatlarni onlayn tarzda qabul qilish hamda savol javob o‘tkazish</p>*/}
                {/*        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main")}>*/}
                {/*        <img src="/assets/icons/ij9.svg" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>Arxiv</p>*/}
                {/*        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <h2 className={`${styles.mainLinks} font-roboto-bold`}>Interaktiv xizmatlar</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/yur-tax-info")}>
                        <img src="/assets/icons/i1.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yuridik shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/yatt-tax-info")}>
                        <img src="/assets/icons/i3.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yakka tartibdagi tadbirkorlarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/physical-tax-info")}>
                        <img src="/assets/icons/i2.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Jismoniy shaxslarning soliq qarzi mavjud emasligi to’g’risida ma'lumotnoma</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/yur-comparative-tax-info")}>
                        <img src="/assets/icons/i5.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yuridik shaxslarning solishtirma dalolatnomalari</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/yatt-comparative-tax-info")}>
                        <img src="/assets/icons/i6.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yakka tartibdagi tadbirkorlarning solishtirma dalolatnomalari</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/physic-comparative-tax-info")}>
                        <img src="/assets/icons/i4.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Jismoniy shaxslarning solishtirma dalolatnomalari</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main/interactive/pinfl-regstration")}>*/}
                {/*        <img src="/assets/icons/i7.png" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>PINFL ro’yxatdan o’tkazish</p>*/}
                {/*        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/pinfl-stir-attach")}>
                        <img src="/assets/icons/i8.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>JShShIRni STIRga biriktirish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/interactive/search-declaration")}>
                        <img src="/assets/icons/i10.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Deklaratsiya qildirish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/get-salary-refrence")}>
                        <img src="/assets/icons/i11.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Ish haqi to'g'risida ma'lumotnoma</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/ys.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yuridik shaxslar tomonidan taqdim etilgan ma'lumotlar asosida elektron soliq hisobotlarini tayyorlash va soliq xizmati organlariga yuborish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/ytt.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yakka tartibdagi tadbirkorlar  tomonidan taqdim etilgan ma'lumotlar asosida elektron soliq hisobotlarini tayyorlash va soliq xizmati organlariga yuborish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/i13.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Jismoniy shaxslarning jami yillik daromadi to’g’risidagi deklaratsiyani tuzish va elektron shaklga o’tkazib soliq xizmati organlariga yuborish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/rezident.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Rezidentlik sertifikatiga  ariza yuborish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/shablon.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Shartnomalar namunasi</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-tax-reporting/physical-person-reporting")}>
                        <img src="/assets/icons/hkm.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Onlayn NKM va virtual kassa dasturiy mahsulotlarini ro’yhatdan o'tkazish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.col}>*/}
                {/*    <div className={styles.card}*/}
                {/*         onClick={() => props.history.push("/main/provide/register-modify-data")}>*/}
                {/*        <img src="/assets/icons/i9.svg" alt="interactive.svg"/>*/}
                {/*        <div className={styles.line}/>*/}
                {/*        <p>Ma'lumotlarini ro’yxatdan o’tkazish va o’zgartirish</p>*/}
                {/*        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>*/}
                {/*        <div className={styles.dots}>*/}
                {/*            <span>3</span>*/}
                {/*            <div></div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <h2 className={`${styles.mainLinks} font-roboto-bold`}>Qo'shimcha xizmatlar</h2>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/computer-service-advice")}>
                        <img src="/assets/icons/j1.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Kompyuter xizmatlari</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/yur-physical-appeal")}>
                        <img src="/assets/icons/j2.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Yuridik va Jismoniy shaxslarning yozma murojaatlariga (yozma) tushuntirish berish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/training-seminars")}>
                        <img src="/assets/icons/j3.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Og’zaki maslahatlar</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/training-seminars")}>
                        <img src="/assets/icons/j4.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>O’tkazilgan o’quv kurslar va seminarlar</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/issues-media")}>
                        <img src="/assets/icons/j5.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Ommaviy axborot vositalarida chiqishlar</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/electronic-services/booklets-and-flyers")}>
                        <img src="/assets/icons/j6.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>Chop etilgan buklet va flayerlar</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.card}
                        onClick={() => props.history.push("/main/provide/presentation-inn-certificate")}>
                        <img src="/assets/icons/i12.svg" alt="interactive.svg" />
                        <div className={styles.line} />
                        <p>STIR yoki JShShIR taqdim etish</p>
                        <span className={`${styles.inActiveStar} icon icon-active-star`}></span>
                        <div className={styles.dots}>
                            <span>3</span>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import styles from './IncomeReport.module.scss';
function ByNumberAndAmount(props) {
    return (
        <div className={styles.decTabel}>
            <div className={styles.mainTable}>
                <table style={{ width: 3500 }}>
                    <tr >
                        <th rowSpan={4} style={{ width: 150 }}>
                            Xudud nomi
                        </th>
                        <th rowSpan={3} colSpan={2}>
                            Jami ko'rsatilgan xizmatlar
                        </th>
                        <th colSpan={8}>
                            Kompyuter xizmatlari va texnik yordam
                        </th>
                        <th colSpan={9}>
                            Axborot xizmati
                        </th>
                        <th colSpan={6}>
                            Elektron soliq hisobotlarini tayyorlash va yuborish
                        </th>
                        <th colSpan={24}>
                            Interaktiv xizmatlar
                        </th>
                        <th colSpan={2} rowSpan={3}>
                            Yuridik va jismoniy shaxslarning yozma murojaatlariga (yozma) tushuntirishlar berish
                        </th>
                    </tr>
                    <tr>

                        <th colSpan={2} rowSpan={2}>
                            Hujjatdan nusxa olish <br /> (ксерокопия)
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Elektron hujjatni chop etish
                        </th>
                        {/* <th colSpan={2} rowSpan={2}>
                            O’zini o’zi band qilganlarni ro’yxatdan o’tkazish
                        </th> */}
                        <th colSpan={2} rowSpan={2}>
                            Hujjatni skaner qilib berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Matnni elektron terib berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar va yakka tartibdagi tadbirkorlarga soliq qarzi to'g'risida ma'lumotnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Jismoniy shaxslarga soliq qarzi to'g'risida ma'lumotnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar va yakka tartibdagi tadbirkorlarga solishtirma dalolatnoma chop etib berish (актсверка) chop etib berish
                        </th>

                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar va yakka tartibdagi tadbirkorlarga (litsenziya,ruxsatnoma, yoki xabarnoma) olish uchun arizani yuborishga ko'maklashish
                        </th>
                        <th rowSpan={2}>
                            Og'zaki maslahat
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yakka tartibdagi tadbirkorlarga
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Jismoniy shaxslarning jami yillik daromadi to'g'risidagi dekloratsiyani tuzish va soliq organlariga yuborish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            O'z-o'zini band qilgan jismoniy shaxslarga ma'lumotnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yakka tartibdagi tadbirkorlarning yollanma xodimlarini hisobga olish va ularga guvohnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Jismoniy shaxslarga hisoblangan sug'urta badali bo'yicha ma'lumotnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Soliq to'lovchilarga matritsa shtix kod ma'lumotnoma shakllantirib berishga ko'maklashish
                        </th>
                        <th colSpan={4}>
                            Mol-mulkni ijaraga berish shartnomasini  tayyorlab berishga ko'maklashish
                        </th>
                        <th colSpan={4}>
                            Mol-mulkni ijaraga berish shartnomasini bekor qilishga ko'maklashish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar va yakka tartibdagi tadbirkorlarning hisobvaraq-fakturalarini tayyorlash va yuborishga ko'maklashish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Yuridik shaxslar va jismoniy shaxslarga elektron raqamli imzo olishga ko'maklashish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Jismoniy shaxslarga ish haqi to'g'risida ma'lumotnoma berish
                        </th>
                        <th colSpan={2} rowSpan={2}>
                            Virtual kassa dasturiy mahsuli bo'yicha texnik xizmat ko'rsatish
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={2}>Jismoniy shaxslar</th>
                        <th colSpan={2}>Yuridik shaxslar</th>
                        <th colSpan={2}>Jismoniy shaxslar</th>
                        <th colSpan={2}>Yuridik shaxslar</th>
                    </tr>
                    <tr>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                        <th>
                            Soni
                        </th>
                        <th>
                            Tushgan summa
                        </th>
                    </tr>
                    {props.serviceList?.map((item, key) =>
                        <tr key={key}>

                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}

export default ByNumberAndAmount
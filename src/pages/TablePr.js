import React from 'react';

const TablePr = () => {
    return (
        <div >
            <h4 className="font-roboto-bold text-center ">2019-йил учун <br/> даромад маьлумотномаси.</h4>
            <p className="m-0 font-roboto-regular">Ф.И.О: <span>ESHMURATOV BAXROM JUMAKULOVICH</span> </p>
            <p className="m-0 font-roboto-regular">СТИР:<span>496147887</span></p>
            <p className="m-0 font-roboto-regular">ИНПС:<span>32001910270610</span></p>
            <p className="m-0">Ҳақиқатдан ҳам маълумотнома эгаси бизнинг корҳона</p>
            <p className="m-0">(Ташкилот, муассаса) да ишлайди ва қуйидагича даромад олган:</p>
            <table  border="1"  cellspacing="0" className="w-100 mt-30" cellpadding="0"  >
                <tr>
                    <td className="p-10">Йил</td>
                    <td className="p-10">Ой</td>
                    <td className="p-10">Ҳисобланган <br/> ойлик иш ҳақи (сўм)</td>
                    <td className="p-10">Ҳисобланган <br/> даромад солиғи (сўм)</td>
                    <td className="p-10">Пенсия <br/> жамғармасига ажратилган <br/> сумма (0,1%)</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10 "  >2019</td>
                    <td className="p-10">Январь</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">40 555.2</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Февраль</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">2 640</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Март</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">0</td>
                    <td className="p-10">3 122.4</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Апрель</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">2 640</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Май</td>
                    <td className="p-10">2 697 585.11</td>
                    <td className="p-10">323 707.81</td>
                    <td className="p-10">2 640</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Июнь</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">2 697.57</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Июль</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">0</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Август</td>
                    <td className="p-10">2 640 000</td>
                    <td className="p-10">316 800</td>
                    <td className="p-10">5 280</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Сентябрь</td>
                    <td className="p-10">2 900 000</td>
                    <td className="p-10">348 800</td>
                    <td className="p-10">2 640</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Октябрь</td>
                    <td className="p-10">2 900 000</td>
                    <td className="p-10">348 800</td>
                    <td className="p-10">0</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Ноябрь</td>
                    <td className="p-10">2 900 000</td>
                    <td className="p-10">348 000</td>
                    <td className="p-10">0</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10  ">2019</td>
                    <td className="p-10">Декабрь</td>
                    <td className="p-10">4 015 000</td>
                    <td className="p-10">481 800</td>
                    <td className="p-10">5 800</td>
                </tr>
                <tr className="p-10">
                    <td className="p-10 " colSpan='2'>Жами</td>
                    <td className="p-10">33 892 565.11</td>
                    <td className="p-10">3 750 307.81</td>
                    <td className="p-10">68 015.17</td>
                </tr>
            </table>
        </div>
    );
};

export default TablePr;
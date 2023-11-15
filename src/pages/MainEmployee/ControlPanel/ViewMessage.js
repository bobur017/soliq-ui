import React from 'react';
import styles from "./ControlPanel.module.scss";

const ViewMessage = () => {
    return (
        <div className={styles.IncomingMessages}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Yuborilgan xabarlar</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</span>
            </p>
            <div className={styles.viewMessage}>
                <div className={`${styles.items} `}>
                    <h4 className="font-roboto-bold">“Avto o‘rgatuvchi innovatsion avto maktab” MCHJ</h4>
                    <div className={styles.status}>
                        <p>14:20</p>
                        <p>/</p>
                        <p>01.01.2022</p>
                        <span className="icon icon-caution"/>
                    </div>
                </div>
                <p className="font-roboto-light">
                    А ещё тщательные исследования конкурентов и по сей день остаются уделом либералов, которые жаждут
                    быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает
                    их статус бесполезности. Сложившаяся структура организации, в своём классическом представлении,
                    допускает внедрение дальнейших направлений развития. Не следует, однако, забывать, что понимание
                    сути ресурсосберегающих технологий прекрасно подходит для реализации как самодостаточных, так и
                    внешне зависимых концептуальных решений. А также непосредственные участники технического прогресса
                    объявлены нарушающими общечеловеческие нормы этики и морали. Противоположная точка зрения
                    подразумевает, что активно развивающиеся страны третьего мира неоднозначны и будут подвергнуты целой
                    серии независимых исследований. Задача организации, в особенности же понимание сути
                    ресурсосберегающих технологий требует анализа распределения внутренних резервов и ресурсов. Но
                    укрепление и развитие внутренней структуры позволяет оценить значение инновационных методов
                    управления процессами. Кстати, представители современных социальных резервов являются только методом
                    политического участия и указаны как претенденты на роль ключевых факторов! А ещё ключевые
                    особенности структуры проекта представлены в исключительно положительном свете. Имеется спорная
                    точка зрения, гласящая примерно следующее: независимые государства ограничены исключительно образом
                    мышления. Современные технологии достигли такого уровня, что семантический разбор внешних
                    противодействий способствует повышению качества системы массового участия. Не следует, однако,
                    забывать, что сложившаяся структура организации предоставляет широкие возможности для существующих
                    финансовых и административных условий. Современные технологии достигли такого уровня, что постоянное
                    информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд на привычные
                    вещи - безусловно открывает новые горизонты для модели развития. Как принято считать, явные признаки
                    победы институционализации.
                </p>
                <div className={styles.viewMessageFooter}>
                    <div className={styles.formats}>
                        <button>PDF <span className="icon icon-download"/></button>
                        <button>PDF <span className="icon icon-download"/></button>
                        <button>Excel <span className="icon icon-download"/></button>
                        <button>JPG <span className="icon icon-download"/></button>
                        <button>MP3 <span className="icon icon-download"/></button>
                        <button>MP4 <span className="icon icon-download"/></button>
                    </div>
                    <div>
                        <h5><span>Yuboruvchi:</span> Axmadjonov ilhomjon inomjonovich </h5>
                    </div>
                </div>
                <button className={`${styles.sendBtn} font-roboto-bold`}>
                    Javob yozish
                </button>
            </div>
        </div>
    );
};

export default ViewMessage;

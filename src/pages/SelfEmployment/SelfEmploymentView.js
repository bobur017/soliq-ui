import React from 'react';
import styles from './SelfEmployment.module.scss'

const SelfEmploymentView = (props) => {
    // const options = [
    //     { value: '12', label: 'PDF' },
    //     { value: '24', label: 'PDF' },
    //     { value: '36', label: 'PDF' }
    // ]
    return (
        <div className={styles.YurTaxView}>
            <div className="d-flex justify-content-center align-items-center">
                {/*<Select className="select-sm" placeholder="PDF" options={options}/>*/}
                <button className={`${styles.uploadBtn}  font-roboto-bold ml-10 mr-20`}>
                    <span className="icon icon-upload font-roboto-bold"/>
                    PDF Yuklab olish
                </button>
                <button className={`${styles.printBtn} font-roboto-bold`}>
                    <span className={` icon icon-print`}/>
                    Chop etish
                </button>

            </div>

            <div className={styles.mainPdfReader}>

                <iframe frameborder="0" srcDoc={props.content} width="825"
                        height="872"/>

                {/*<embed frameBorder="0" src="/assets/MyHome.pdf#toolbar=0&scrollbar=0" type="application/pdf" width="640"*/}
                {/*       height="600"/>*/}


                <div className="btnGroup">
                    <button className="closeBtn font-roboto-bold mr-20" onClick={() => {
                        props.setUrl('create')
                    }}>
                        <span className="icon icon-arrow-left"/>
                        Ortga qaytish
                    </button>
                    {props.canPay && <button className="paidBtn font-roboto-bold">
                        <span className="icon icon-coin"/>
                        To'lovga o'tish
                    </button>}
                </div>


            </div>

        </div>
    );
};

export default SelfEmploymentView;

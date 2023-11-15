import React from 'react'
import styles from './News.module.scss';
import image from './icons/54975.png';
import { Link } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from 'react';
import Select from 'react-select';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import icons from './icons/calendar.svg';



const NewsService = (props) => {
    const [newsId, setNewsId] = useState('');
    const [endDate, setEndDate] = useState(false);
    const [startDate, setStartDate] = useState(false);
    const [editorState, setEditorState] = useState();
    const [imageState, setImageState] = useState(null);
    const [viewPost, setViewPost] = useState('');
    const activeStyle = { width: 13, height: 13, borderRadius: '50%', backgroundColor: ' #174aa4', marginRight: 3 };
    const inActiveStyle = { width: 13, height: 13, borderRadius: '50%', backgroundColor: ' #D8E1F6', marginRight: 3 };
    const options = [{ value: "", label: "Barchasi" }, { value: "Toshkent", label: "Toshkent" }, { value: "Samarqand", label: "Samarqand" }]
    // const uploadStyle = {
    //     marginTop: '15%',
    //     marginLeft: '33%',
    //     width: '108px',
    //     height: '100px',
    //     position: 'relative',
    //     // backgroundImage: `url(${imagePathState})`,
    //     backgroundSize: '108px 100px',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: '100% 100%',
    // }

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => {
        setNewsId('');
        setIsOpen(true);
    };
    const uploadImage = (e) => {
        setImageState(e.target.files[0])
    }

    const imageView = () => {
        return (
            <div className={styles.uploadImage}>
                <img src={image} height={100} width={100} style={{ marginTop: 50 }} />
                <br />
                <span>
                    rasm yuklash uchun <label for="files">bu yerga</label>  bosing
                    <input id="files" style={{ visibility: "hidden" }} type="file" accept="image/*" onChange={uploadImage} />
                </span>
            </div>
        )
    }
    const onEditorStateChange = (data) => {
        setEditorState(data);
    }
    const submitPost = (e) => {
        e.preventDefault();
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const markup = draftToHtml(
            rawContentState
        );
        console.log(markup);
        let data = {
            title: e.target.title.value,
            description: markup,
            startDate: e.target.startDate.value,
            startTime: e.target.startTime.value
        }
        setViewPost(data);
        openModal();
    }
    const endRadioBtn = () => {
        setEndDate(!endDate);
    }
    const startRadioBtn = () => {
        setStartDate(!startDate);
    }

    return (
        <div className={styles.main}>
            <p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Yangiliklar</span>
                <img src="/assets/arrow-right.png" alt="" />
                <span>Yangilik jo'natish</span>
            </p>
            <div className={styles.dashboard}>
                <div className="d-flex align-items-center">
                    <h3>Yangiliklar yaratish</h3>
                </div>
                <div className='d-flex w-30'>
                    <button className="createBtn w-10 d-flex"
                        onClick={() => props.history.push("/main/news")}
                    >
                        <span className="icon icon-eye" />
                        Ko'rish
                    </button>
                </div>
            </div>
            <div>

            </div>
            <form onSubmit={submitPost}>
                <div className={styles.row}>
                    <div className={styles.newsImageService}>
                        <div className='font-roboto-medium'>Yangilik jildi</div>
                        <div>
                            {imageState === null ? imageView() : <img src={URL.createObjectURL(imageState)} width={'100%'} />}
                        </div>
                    </div>
                    <div className={`${styles.newsTools} font-roboto-medium`}>
                        <span>Yangilik sozlamalari</span>
                        <br />
                        <div style={{ marginTop: 40 }}>
                            <label >Sarlavha <span style={{ color: 'red', fontSize: 14 }}>*</span></label>
                            <input type="text" className="input-style font-roboto-light w-100" name='title' placeholder="-" required />
                        </div>
                        <div className="d-flex">
                            <div className={`${styles.myInputs} w-100 mr-20`}>
                                <label>E'lon qilinadigan hudud <span style={{ color: 'red', fontSize: 14 }}>*</span></label>
                                <Select options={options} placeholder="Viloyatni tanlang" />
                            </div>
                            <div className={`${styles.myInputs} w-100 mr-20`}>
                                <label style={{ color: 'white' }}> -</label>
                                <Select options={options} placeholder="barcha tumanlar" />
                            </div>
                        </div>
                        <div className='d-flex w-100' style={{ marginTop: 40 }}>
                            <div className="d-flex w-100  mr-20" style={{ marginTop: 0, position: 'relative' }}>
                                <div style={{ marginTop: 0, position: 'absolute' }}>E’lon qilish boshlanish vaqti <span style={{ color: 'red', fontSize: 14 }}>*</span></div>
                                <div className={`${styles.myInputs} w-100 mr-20`}>
                                    <input type="date" disabled={startDate} name='startDate' className="w-100 font-roboto-light" placeholder="-" />
                                </div>
                                <div className={`${styles.myInputs} w-100 mr-20`}>
                                    <input type="time" disabled={startDate} name='startTime' className="w-100 font-roboto-light" placeholder="-" />
                                </div>
                                <div className={`${styles.myInputs} w-33`}>
                                    <button className={styles.radioBtn} onClick={startRadioBtn}>
                                        <span style={!startDate ? activeStyle : inActiveStyle}></span>
                                        <span>Hozir e'lon qilish</span>
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex w-100" style={{ position: 'relative' }}>
                                <div style={{ marginTop: 0, position: 'absolute' }}>E’lon qilish tugash vaqti <span style={{ color: 'red', fontSize: 14 }}>*</span></div>
                                <div className={`${styles.myInputs} w-100 mr-20`}>
                                    <input type="date" disabled={endDate} className="w-100 font-roboto-light" placeholder="-" />
                                </div>
                                <div className={`${styles.myInputs} w-100 mr-20`}>
                                    <input type="time" disabled={endDate} className="w-100 font-roboto-light" placeholder="-" />
                                </div>
                                <div className={`${styles.myInputs} w-33`}>
                                    <button className={styles.radioBtn} onClick={endRadioBtn}>
                                        <span style={!endDate ? activeStyle : inActiveStyle}></span>
                                        <span> Cheksiz muddat</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.textEditor}>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName={styles.editorClassName}
                        onEditorStateChange={onEditorStateChange}
                    />;
                    <div className="d-flex justify-content-end">
                        <button className={styles.footerBtn}>
                            <span className="icon icon-clear" />
                            Bekor qilish
                        </button>
                        <button className={styles.footerBtn} type='submit'>
                            <span className="icon icon-search" />
                            Ok
                        </button>
                    </div>
                </div>
            </form>

            <div className={`${isOpen ? "d-block" : "d-none"} ${styles.mainModalRec2}`}>
                <button className={styles.closeBtn} onClick={closeModal}><span className="icon icon-close" />
                </button>
                <div>
                    <div className={styles.card} style={{ marginTop: 40 }}>
                        <div className={styles.newsFooter} style={{ justifyContent: 'end' }}>
                            <div className='d-flex justify-content-end'>
                                <div style={{ color: "#777B82" }}>
                                    <img src={icons} width={16} />
                                </div>
                                <div style={{ marginRight: 5, marginLeft: 5 }}>{viewPost?.startTime}</div>  /
                                <div>{viewPost?.startDate}</div>
                                <span className={`${styles.icons} icon icon-eye ml-10`}></span>
                                <div style={{ marginLeft: 5 }}>{0}</div>
                            </div>
                        </div>
                        <h1 style={{ marginTop: 34, fontSize: 28 }} className='font-roboto-bold'>{viewPost?.title}</h1>
                        {imageState !== null ?
                            <div style={{ backgroundImage: `url(${URL.createObjectURL(imageState)})` }}>
                            </div> : null}
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: `${viewPost.description ? viewPost.description : ''}` }}></p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className={styles.footerBtn} onClick={closeModal}>
                                <span className="icon icon-clear" />
                                Bekor qilish
                            </button>
                            <button className={styles.footerBtn} type='submit'>
                                <span className="icon icon-search" />
                                Ok
                            </button>
                        </div>
                    </div>

                    <div />

                </div>
            </div>
        </div>
    )
}

export default NewsService
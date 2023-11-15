import React, {useState, useEffect} from 'react';
import styles from "./ReceiveApplicationsOnlineAnswerQuestions.module.scss"
import {connect} from "react-redux";
import {request, saveFile} from "../../utils/request";
import {toast} from "react-toastify";
import {acceptableFiles} from "../../utils/constants";
import {removeItem} from "../../utils/common";


const ReceiveApplicationsOnlineAnswerQuestionsSendAnswer = (props) => {
    let initialMessage = {
        receiver: {
            id: props.selectedUser?.id
        },
        title: "",
        message: ""
    }
    const [file, setFile] = useState([]);
    const [message, setMessage] = useState(initialMessage);
    useEffect(() => {
        setMessage({
            ...message, receiver: {
                id: props.selectedUser?.id
            },
            sender: {
                id: props.selectedUser?.id
            }
        })
    }, [props.selectedUser])
    const uploadFile = (event) => {
        console.log(file)
        if (event.target.files.length > 0) {
            let list = []
            Object.keys(acceptableFiles).map(key => list.push(...acceptableFiles[key]))
            if (list.includes(event.target.files[0].type)) {
                file.push(event.target.files)
                setFile([...file])
            } else
                toast.error("file turi noto'g'ri word file tanlang")
        }
    }

    const createMessage = () => {
        var fileStore = [];
        if (file.length > 0) {
            for (let i = 0; i < file.length; i++) {
                fileStore.push.apply(fileStore, file[i])
            }
        }
        saveFile(fileStore).then(response => {
            request({
                url: 'message',
                method: "post",
                data: {
                    ...message,
                    attachments: response.list.map(v => {
                        return {id: v.id}
                    }),
                    receiverDistricts:props.selectedNs11?[{code:props.selectedNs11}]:undefined,
                    receiverRegions:props.selectedNs10?[{code:props.selectedNs10}]:undefined
                }
            }).then(response => {
                if (response.success)
                    toast.success("Xabar yuborildi!")
            })
        })


    }
    const updateMessage = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }
    return (
        <div className={styles.receiveApplicationsOnlineAnswerQuestionsDetail}>
            <h2>{props.selectedUser?.firstName + " " + props.selectedUser?.lastName}ga жaвоб юбориш</h2>
            <div className="w-100">
                <label>Заголовок
                    <span
                        className={styles.withStar}>*</span>
                </label>
                <input type="text" className="input-style font-roboto-light w-100" defaultValue={message.title}
                       name={"title"} onChange={updateMessage}/>
            </div>
            <div className={styles.textArea}>
                <label>Тескт новости
                    <span
                        className={styles.withStar}>*</span>
                </label>
                <textarea type="textarea" className="input-style font-roboto-light w-100" placeholder="Наберите текст"
                          name={"message"} defaultValue={message.message} onChange={updateMessage}/>
            </div>
            <div className={styles.sendControls}>
                <span className={styles.uploadedFile}>
                    {file.map(f => {
                        return <div className="text-uppercase">
                            {Object.keys(acceptableFiles).map(key => acceptableFiles[key].includes(f[0].type) ? key.toUpperCase() : "")}
                            <button onClick={event => setFile([...removeItem(file, f)])}><span
                                className="icon icon-close"/></button>
                        </div>
                    })}


                </span>
                <div className="d-flex justify-content-between">

                    <div className="d-flex ">
                        <div className={`${styles.controlUpload} `}>
                            <label htmlFor="file1">Файл кошиш</label>
                            <input type="file" id="file1" onChange={uploadFile}/>
                        </div>

                    </div>
                    <div className="d-flex ">
                        <div className={`${styles.controlCancelBtn} pr-20 ml-auto`}>
                            <button>Бекор килиш</button>
                        </div>
                        <div className={`${styles.controlSaveBtn}`}>
                            <button onClick={createMessage}>Жонатиш</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selectedUser: state.globalState.selectedUser,
        selectedNs11: state.globalState.selectedNs11,
        selectedNs10: state.globalState.selectedNs10,
    }
}

export default connect(mapStateToProps, null)(ReceiveApplicationsOnlineAnswerQuestionsSendAnswer);

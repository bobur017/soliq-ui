import React, {useState} from 'react';
import {saveFile} from "../../utils/request";

const BackdoorLogin = () => {
    const [file, setFile] = useState({});
    const uploadFile = (e) => {
        console.log(e.target.files)
        if (e.target.files.length > 0) {
            //if (e.target.files[0].type === "application/msword" || e.target.files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
            setFile(e.target.files)
        }
        //else toast.error("file turi noto'g'ri word file tanlang")
    }
    const _arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    const uploadEriFile = (e) => {
        var reader = new FileReader();
        var fileByteArray = [];
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                var arrayBuffer = evt.target.result,
                    array = new Uint8Array(arrayBuffer);
                for (var i = 0; i < array.length; i++) {
                    fileByteArray.push(array[i]);
                }
                console.log(fileByteArray)
                console.log(_arrayBufferToBase64(fileByteArray))
            }

        }
        console.log(fileByteArray)

    }
    const save = () => {
        console.log(file)
        saveFile(file).then(request => {
            console.log(request)
        })
    }
    const ref = React.useRef();

    let url
    const onLoad = () => {
        url = ref.current.contentWindow.location.href;
        // do stg with url
    }


    const getRef = React.useCallback((node) => {
        // store node into state, this was not triggered properly either
    }, []);


    React.useEffect(() => {
        const interval = setInterval(() => {
            url = ref.current.contentWindow.location.href;
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    console.log(url)
    return (
        <div>
            Login
            <input type="file" onChange={uploadFile} name={"file"}/>
            Eri
            <input type="file" onChange={uploadEriFile} name={"eri"}/>


            <button onClick={save}>Save</button>
            <form action="">
                <input type="text" name={"username"}/>
                <input type="text" name={"password"}/>
                <button>kirish</button>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <iframe id={"iframe-my-id"} onLoad={onLoad} height={500} width={1200}
                    src={"https://my.soliq.uz/wefo4-clientui/form/uz/report/40007_1"} ref={ref}></iframe>

        </div>
    );
};

export default BackdoorLogin;

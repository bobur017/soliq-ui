import React, {useState} from 'react';
import styles from './SignIn.module.scss'

const WebCamera = () => {
    const [loader, setLoader] = useState(false)
    const [cam1, setcam1] = useState(false)
    const [cam2, setcam2] = useState(false)
    const [success, setSuccess] = useState(true)
    const [success2, setSuccess2] = useState(false)
    return (
        <div className={styles.WebCamera}>

            {
                loader
                ?
                    <div className={styles.loader}>
                        <div />
                    </div>
                    :

                    ""
            }

            {
                cam1
                ?
                    <div className={styles.cam1Style}>
                        <div>
                            <img src="./assets/fluent_camera.png" />
                            <h2 className="font-roboto-bold">Veb kameradan foydalanish ruxsat etilmagan</h2>
                        </div>
                        <button className="font-roboto-bold"> <span className="icon icon-refresh"/>Qayta urinish</button>
                    </div>
                    :
                    ""
            }


            {
                cam2
                ?
                    <div className={styles.cam2Style}>
                        <div>
                            <img src="./assets/user1.png"className={styles.userImg} />

                            {
                                success
                                    ?
                                    <img src="./assets/EllipseRed.png" alt="" className={styles.status}/>
                                    :
                                    <img src="./assets/EllipseGreen.png" alt="" className={styles.status}/>
                            }
                        </div>
                    </div>
                    :
                    ""
            }

            {
                success2
                ?
                    <div className={styles.cam1Style}>
                        <img src="./assets/success.png" />
                        <h1 className="font-roboto-bold">Tizimga kirish tasdiqlandi</h1>
                    </div>
                    :

                    <div className={styles.cam1Style}>
                        <img src="./assets/unSuccess.png" />
                        <h1 className="font-roboto-bold">Tizimga kirish tasdiqlanmadi</h1>
                        <button className="font-roboto-bold"> <span className="icon icon-refresh"/>Qayta urinish</button>

                    </div>

            }


        </div>
    );
};

export default WebCamera;
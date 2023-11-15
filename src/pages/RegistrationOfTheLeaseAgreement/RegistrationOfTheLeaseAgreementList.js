import React, {useEffect, useState} from 'react';
import styles from "./RegistrationOfTheLeaseAgreement.module.scss"
import {Link} from "react-router-dom";
import Agreements from "./Agreements";
import EnterRegistrationOfTheLeaseAgreementComponent from "./component";
import {connect} from "react-redux";
import {getUserData, updateState} from "../../redux/actions/RentAction";
import {request} from "../../utils/request";


const RegistrationOfTheLeaseAgreementList = (props) => {

    const {pinfl, lessee, updateState, getUserData} = props
    const [isLoading, setIsLoading] = useState(false);
    const [inComing, setIncoming] = useState([]);
    const [outComing, setOutComing] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [state, setState] = useState(10);
    const [rentType, setRentType] = useState(2);
    const [rents, setRents] = useState([]);
    useEffect(() => {
        getAccount()
        getInfoPanel()
        getRentTable()
    }, []);
    const options = [
        {value: '2', label: '2'},
        {value: '1', label: '1'},
        {value: '10', label: '10'},
        {value: '25', label: '25'},
        {value: '50', label: '50'},
        {value: '100', label: '100'}
    ];
    const getAccount = () => {
        request({
            url: "https://my3.soliq.uz/api/auth/oauth/account",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            updateState({account: res, pinfl: res.pinfl})
            console.log(res)
        })
    }

    const getInfoPanel = () => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/contract/info-panel",
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            setIncoming(res.inComing)
            setOutComing(res.outComing)
            console.log(res)
        })
    }

    const changeRentAndState = (rentType, state) => {
        setPage(0)
        setSize(10)
        setRentType(rentType);
        setState(state)
        getRentTable()
    }

    useEffect(() => {
        getRentTable()
    }, [state, page, size, rentType]);


    const getRentTable = () => {
        setIsLoading(true)
        request({
            url: "https://ijara.soliq.uz/api/rent/client/contract/get-list/by-params?myRentType=" + rentType + "&state=" + state + "&page=" + page + "&size=" + size,
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            if (res.success) {
                setRents(res.list)
            }
            setIsLoading(false)
        })
    }

    const nextPage = (page) => {
        request({
            url: "https://ijara.soliq.uz/api/rent/client/contract/get-list/by-params?myRentType=" + rentType + "&state=" + state + "&page=" + page + "&size=" + size,
            method: "get",
            data: {
                ijara: true,
            }
        }).then(res => {
            console.log(res)
        })
    }


    return (
        <div className={styles.registrationOfTheLeaseAgreement}>
            {/*{localStorage.getItem("access_token")?"":<AuthRegistrationOfTheAgreement/>}*/}
            {pinfl ? "" :
                <EnterRegistrationOfTheLeaseAgreementComponent updateState={updateState} getAccount={getAccount}
                                                               getUserData={getUserData}/>}
            {pinfl ? <div><p className={styles.path}>
                <span>Asosiy</span>
                <img src="/assets/arrow-right.png" alt=""/>
                <span>Ijara shartnomalari</span>
            </p>

                <div className="titleBox">
                    <h3 className="titleMain font-roboto-bold">
                        Ijara shartnomasini ro’yxatdan o’tkazish
                    </h3>
                    <button className="createBtn font-roboto-bold"
                            onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement/create")}>
                        <span className="icon icon-circleplus"/>
                        Shartnomani yaratish
                    </button>
                </div>
                <div className="titleBox">
                    <h3 className="titleMain font-roboto-bold">
                        Talabalar ijarasi
                    </h3>
                    <button className="createBtn font-roboto-bold"
                            onClick={() => props.history.push("/main/electronic-registration/registration-of-the-lease-agreement/create-student")}>
                        <span className="icon icon-circleplus"/>
                        Shartnomani yaratish
                    </button>
                </div>
                <div className={`${styles.mainTabel} d-flex`}>
                    <div className={`${styles.links} allBox`}>
                        <h4>Kiruvchi shartnomalar</h4>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(2, 10)
                        }}>Tasdiqlanishi
                            kutilayotgan <span>{inComing?.find(item => item.state === 10)?.rentCount}</span></Link>
                        <Link
                            to="#rentTable">Tasdiqlanganlar <span>{inComing?.find(item => item.state === 20)?.rentCount}</span></Link>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(2, 15)
                        }}>Rad
                            etilganlar <span>{inComing?.find(item => item.state === 15)?.rentCount}</span></Link>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(2, 50)
                        }}>Muddati
                            tugaganlar <span>{inComing?.find(item => item.state === 50)?.rentCount}</span></Link>
                        <h4 className={styles.h4}>Chiquvchi shartnomalar</h4>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(1, 10)
                        }}>Tasdiqlanishi
                            kutilayotgan <span>{outComing?.find(item => item.state === 10)?.rentCount}</span></Link>
                        <Link to="#rentTable"
                              onClick={() => {
                                  changeRentAndState(1, 20)
                              }}>
                            Tasdiqlanganlar <span>{outComing?.find(item => item.state === 20)?.rentCount}</span></Link>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(1, 11)
                        }}>Band
                            qilinganlar<span>{outComing?.find(item => item.state === 11)?.rentCount}</span></Link>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(1, 15)
                        }}>Rad
                            etilganlar <span>{outComing?.find(item => item.state === 15)?.rentCount}</span></Link>
                        <Link to="#rentTable" onClick={() => {
                            changeRentAndState(1, 50)
                        }}>Muddati
                            tugaganlar <span>{outComing?.find(item => item.state === 50)?.rentCount}</span></Link>
                    </div>

                    {/*<PendingConfirmation/>*/}
                    {/*<Confirmed/>*/}

                    <Agreements setSize={setSize} setPage={setPage} isLoading={isLoading} size={size} page={page}
                                rents={rents}
                                setIsLoading={setIsLoading} getRentTable={getRentTable}/>
                </div>
            </div> : ""}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        pinfl: state.rent.pinfl,
        lessee: state.rent.lessee,
    };
};
export default connect(mapStateToProps, {updateState, getUserData})(RegistrationOfTheLeaseAgreementList);

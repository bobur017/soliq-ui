import React, {useEffect} from 'react';
import  styles  from './ReceiveApplicationsOnlineAnswerQuestions.module.scss'
import ReceiveApplicationsOnlineAnswerQuestionsList from "./ReceiveApplicationsOnlineAnswerQuestionsList";
import ReceiveApplicationsOnlineAnswerQuestionsDetail from "./ReceiveApplicationsOnlineAnswerQuestionsDetail";
import ReceiveApplicationsOnlineAnswerQuestionsSendAnswer from "./ReceiveApplicationsOnlineAnswerQuestionsSendAnswer";
import {connect} from "react-redux";
import {getNs10, getNs11, searchUsers, updateState} from "../../redux/actions/GlobalAction";
const ReceiveApplicationsOnlineAnswerQuestions = (props) => {

    return (
        <div>
            <ReceiveApplicationsOnlineAnswerQuestionsList />
            <ReceiveApplicationsOnlineAnswerQuestionsDetail />
            <ReceiveApplicationsOnlineAnswerQuestionsSendAnswer/>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        selectedUser: state.globalState.selectedUser,
    }
}
export default connect(mapStateToProps, {updateState})(ReceiveApplicationsOnlineAnswerQuestions);

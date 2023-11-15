import React from 'react';
import FirstControl from "./FirstControl";
import SecondControl from "./SecondControl";
import IncomingMessages from "./IncomingMessages";
import SendMessage from "./SendMessage";
import ViewMessage from "./ViewMessage";
import AnswerMessage from "./AnswerMessage";
import SentAnswerMessage from "./SentAnswerMessage";
import SentSendMessage from "./SentSendMessage";
import SentViewMessage from "./SentViewMessage";
import SentIncomingMessages from "./SentIncomingMessages";

const ControlPanel = () => {
    return (
        <div >
            {/*<FirstControl />*/}
            {/*<SecondControl />*/}
            {/*<IncomingMessages />*/}
            {/*<SendMessage />*/}
            {/*<ViewMessage />*/}
            {/*<AnswerMessage />*/}
            {/*<SentAnswerMessage />*/}
            {/*<SentSendMessage />*/}
            {/*<SentViewMessage />*/}
            <SentIncomingMessages />
            <FirstControl/>
            <SecondControl/>
            <IncomingMessages/>
            <SendMessage/>
            <ViewMessage/>
            <AnswerMessage/>
        </div>
    );
};

export default ControlPanel;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";


const store = createStore(rootReducer, compose(applyMiddleware(thunk),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

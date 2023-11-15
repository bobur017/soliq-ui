import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import {ToastContainer} from "react-toastify";
import EImzo from "./pages/EImzo/E-Imzo";
import SignIn from "./pages/SignIn";
import {RotatingLines} from "react-loader-spinner"
import {connect} from "react-redux";
import CreateEImzo from "./pages/EImzo/CreateEImzo";

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Redirect to="/main"/></Route>
                <Route path="/main" component={MainLayout}/>
                <Route path="/main" component={MainLayout}/>
                <Route path="/imzo" component={EImzo}/>
                <Route path="/sign" component={CreateEImzo}/>
                <Route path="/sign-in" component={SignIn}/>

                <Route component={NotFound}/>
            </Switch>
            <ToastContainer/>
            {props.loading &&
                <div className="main-loader">
                    <RotatingLines
                        strokeColor="#147AD6"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            }
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.globalState.loading
    }
}

export default connect(mapStateToProps, {})(App);

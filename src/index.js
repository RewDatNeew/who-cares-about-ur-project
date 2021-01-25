import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store';
import AppContainer from './container/app';
import './styles/style.less';

import firebase from "firebase/app";
import "firebase/auth";
import {SnackbarProvider} from "notistack";
const firebaseConfig = {
    apiKey: "AIzaSyDydlBAU1xik5hpfZGIq5QH29N_Wti61_s",
    authDomain: "whocaresabouturproject.firebaseapp.com",
    databaseURL: "https://whocaresabouturproject-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "whocaresabouturproject",
    storageBucket: "whocaresabouturproject.appspot.com",
    messagingSenderId: "622621601801",
    appId: "1:622621601801:web:bb14c712b825314878c8d8",
    measurementId: "G-MLCH2CMMDD"
};
export const fb = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const history = createBrowserHistory();

ReactDOM.render(
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter basename={`wcaup/`}>
                    <Route path="/" component={AppContainer} />
                </BrowserRouter>
            </Router>
        </Provider>
    </SnackbarProvider>,
  document.getElementById('root')
);


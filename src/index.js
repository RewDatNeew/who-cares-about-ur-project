import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store';
import AppContainer from './container/app';
import './styles/style.less';

const history = createBrowserHistory();

ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <BrowserRouter basename={`who-cares-about-ur-project/`}>
                    <Route path="/" component={AppContainer} />
                </BrowserRouter>
            </Router>
        </Provider>,
  document.getElementById('root')
);


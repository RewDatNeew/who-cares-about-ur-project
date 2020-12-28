import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './style.less';
import { AppContainer } from './container';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <BrowserRouter basename={`wcaup/`}>
            <Route path="/" component={AppContainer} />
        </BrowserRouter>
    </Router>,
  document.getElementById('root')
);


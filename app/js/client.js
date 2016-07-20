import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainPage from "./components/MainPage";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={MainPage}></IndexRoute>
        </Route>
    </Router>
    ,
app);

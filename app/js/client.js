import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoApp from "./components/TodoApp";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={TodoApp}></IndexRoute>
        </Route>
    </Router>
    ,
app);

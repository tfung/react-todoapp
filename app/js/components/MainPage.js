import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

import { Link } from "react-router";

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AddTodo />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions';

// can prob remove later
import { Link } from "react-router";

export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        };
    }

    // Will only fire on render
    componentWillMount() {
        TodoStore.on('update', () => {
            this.setState({
                todos: TodoActions.getTodos()
            });
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <AddTodo />
                <TodoList todoList={this.state.todos}/>
                <Footer />
            </div>
        );
    }
}

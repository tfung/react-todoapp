import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

import TodoStore from '../stores/TodoStore';
// can prob remove later
import { Link } from "react-router";

export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        }
    }

    addTodo() {
        this.state.todos.push({
            Title: 'Test',
            Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
            DueDate: new Date()
        });

        this.setState(this.state.todos);
    }

    removeTodo() {
        this.state.todos.pop();

        this.setState(this.state.todos);
    }

    render() {
        return (
            <div>
                <Header/>
                <AddTodo addTodo={this.addTodo.bind(this)}  />
                <TodoList todoList={this.state.todos}/>
                <Footer />
            </div>
        );
    }
}

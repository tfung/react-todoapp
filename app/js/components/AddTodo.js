import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class AddTodo extends React.Component {
    addTodo() {
        let todo = {
            Id: Math.round(Math.random()*10000),
            Title: 'Get Groceries'+Math.random(),
            Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
            DueDate: new Date()
        };

        TodoActions.addTodo(todo);
    }

    render() {
        // const { addTodo } = this.props;

        return (
            <div>
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

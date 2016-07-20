import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class AddTodo extends React.Component {
    addTodo() {
        TodoActions.AddTodo({
            Title: 'Test',
            Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
            DueDate: new Date()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

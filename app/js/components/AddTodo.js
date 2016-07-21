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
            <div class="add-todo-section">
                <table class="add-todo-table">
                    <tbody>
                    <tr>
                        <th>Title:</th>
                        <td><input type="text" name="fname" /></td>
                    </tr>
                    <tr>
                        <th>Assignees:</th>
                        <td><input type="text" name="fname" /> <input type="text" name="fname" /> <input type="text" name="fname" /></td>
                    </tr>
                    <tr>
                        <th>Due Date:</th>
                        <td><input type="text" name="fname" /></td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-middle">
                    <button class="btn" onClick={this.addTodo.bind(this)}>Add Todo</button>
                </div>
            </div>
        );
    }
}

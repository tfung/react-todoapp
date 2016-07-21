import React from 'react';

import * as TodoActions from '../actions/TodoActions';

export default class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            randomTodo: ['title1','title2','title3','title4']
        }
    }

    addTodo() {
        let todo = {
            Id: Math.round(Math.random()*10000),
            Title: 'Get Groceries - '+ Math.round(Math.random()*10),
            Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
            DueDate: new Date()
        };

        TodoActions.addTodo(todo);
    }

    handleSubmit(event) {
        // TODO - handle todo submits
    }

    render() {
        return (
            <form class="add-todo-section">
                <table class="add-todo-table">
                    <tbody>
                    <tr>
                        <th>Title:</th>
                        <td><input type="text" name="title" /></td>
                    </tr>
                    <tr>
                        <th>Assignees:</th>
                        <td><input type="text" name="assignee1" /> <input type="text" name="assignee2" /> <input type="text" name="assignee3" /></td>
                    </tr>
                    <tr>
                        <th>Due Date:</th>
                        <td><input type="date" name="duedate" /></td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-middle">
                    <button class="btn" onSubmit={this.handleSubmit}>Add Todo</button>
                    <button type="button" class="btn" onClick={this.addTodo.bind(this)}>Generate Random Todo</button>
                </div>
            </form>
        );
    }
}

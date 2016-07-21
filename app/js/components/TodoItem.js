import React from 'react';
import moment from 'moment';

import * as TodoActions from '../actions/TodoActions';

export default class TodoItem extends React.Component {
    removeTodo() {
        TodoActions.removeTodo(this.props.todoItem.Id);
    }

    render() {
        const { Id, Title, Assignee, DueDate } = this.props.todoItem;

        const formattedDueDate = moment(DueDate).format('LLLL');
        const formattedAssignee = Assignee.join(', ');

        return (
            <div class="todo-item" >
                <div class="todo-item-info">
                    <span class="todo-item-title">{Title}</span>
                    <span class="todo-item-detail">Assignees: {formattedAssignee}</span>
                    <span class="todo-item-detail">Due Date: {formattedDueDate}</span>
                </div>
                <div class="todo-item-edit">
                    <button class="btn" onClick={this.removeTodo.bind(this)} >Remove</button>
                </div>
            </div>
        );
    }
}

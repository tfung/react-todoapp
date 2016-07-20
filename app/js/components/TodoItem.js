import React from 'react';
import moment from 'moment';

export default class TodoItem extends React.Component {
    render() {
        const { Title, Assignee, DueDate } = this.props.todoItem;

        const formattedDueDate = moment(DueDate).format('LLLL');
        const formattedAssignee = Assignee.join(', ');

        return (
            <div class="todo-item">
                <span class="todo-item-title">{Title}</span>
                <span class="todo-item-detail">Assignees: {formattedAssignee}</span>
                <span class="todo-item-detail">Date: {formattedDueDate}</span>
            </div>
        );
    }
}
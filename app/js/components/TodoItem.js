import React from 'react';
import moment from 'moment';

export default class TodoItem extends React.Component {
    render() {
        const { Title, Assignee, DueDate, Id } = this.props.todoItem;

        console.log(Title)

        const formattedDueDate = moment(DueDate).format('LLLL');
        const formattedAssignee = Assignee.join(', ');

        return (
            <div class="todo-item" >
                <div class="todo-item-info">
                    <span class="todo-item-title">{Title}</span>
                    <span class="todo-item-detail">Assignees: {formattedAssignee}</span>
                    <span class="todo-item-detail">Date: {formattedDueDate}</span>
                </div>
                <div class="todo-item-edit">
                    <button value={Id}>Remove</button>
                </div>
            </div>
        );
    }
}

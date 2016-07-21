import React from 'react';

import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

export default class TodoList extends React.Component {
    render() {
        const { todoList } = this.props;

        let todoItemList = todoList.map((object, key) =>
            <TodoItem todoItem={object} key={object.Id}/>
        );

        return (
            <section class="todo-section">
                <h2>Todos Left: {todoList.length}</h2>
                {todoItemList}
            </section>
        );
    }
}

import React from 'react';

import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        }
    }

    render() {
        const todoItemList = this.state.todos.map((object, key) =>
            <TodoItem todoItem={object} key={key}/>
        );

        return (
            <section class="todo-section">
                {todoItemList}
            </section>
        );
    }
}

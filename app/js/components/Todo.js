import React from 'react';

import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        }
    }

    render() {
        let todoItemList = this.state.todos.map((object, key) =>
            <TodoItem todoItem={object} key={key}/>
        );

        console.log(todoItemList[0])

        return (
            <section class="todo-section">
                {todoItemList}
            </section>
        );
    }
}

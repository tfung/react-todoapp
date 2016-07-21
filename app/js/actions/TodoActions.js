import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';

export function addTodo(todo) {
    Dispatcher.dispatch({
        type: TodoConstants.ADD_TODO,
        todo: todo
    });
}

export function removeTodo(id) {
    Dispatcher.dispatch({
        type: TodoConstants.REMOVE_TODO,
        todoId: id
    });
}

export function loadTodos() {
    axios('http://localhost:3000/api/todos')
        .then((data) => {
            Dispatcher.dispatch({
                type: TodoConstants.LOAD_TODO,
                todos: data
            });
        });
}

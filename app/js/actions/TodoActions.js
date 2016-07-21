import Dispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';

export function AddTodo(todo) {
    Dispatcher.dispatch({
        type: TodoConstants.ADD_TODO,
        todoItem: todo
    });
}

export function RemoveTodo(id) {
    Dispatcher.dispatch({
        type: TodoConstants.REMOVE_TODO,
        todoId: id
    });
}

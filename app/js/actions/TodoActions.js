import Dispatcher from '../dispatcher/Dispatcher';
import Constants from '../constants/TodoConstants';

export function AddTodo() {
    Dispatcher.dispatch({
        type: Constants.ADD_TODO,
        text: 'add todo'
    });
}

export function RemoveTodo() {
    Dispatcher.dispatch({
        type: Constants.REMOVE_TODO,
        text: 'remove todo'
    });
}

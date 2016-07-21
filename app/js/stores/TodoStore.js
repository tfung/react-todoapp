import { EventEmitter } from 'events';

import dispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';
import jquery from 'jquery';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos =
            [
                {
                    Id: Math.round(Math.random()*10000),
                    Title: 'Get Groceries',
                    Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                    DueDate: new Date()
                },
                {
                    Id: Math.round(Math.random()*10000),
                    Title: 'Get Groceries',
                    Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                    DueDate: new Date()
                },
                {
                    Id: Math.round(Math.random()*10000),
                    Title: 'Get Groceries',
                    Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                    DueDate: new Date()
                },
                {
                    Id: Math.round(Math.random()*10000),
                    Title: 'Get Groceries',
                    Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                    DueDate: new Date()
                }
            ];
    }

    addTodo(todo) {
        this.todos.push(todo)
        this.emit('update');
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter((todo) => {
            return todo.Id != todoId;
        });
        this.emit('update');
    }

    updateTodo(todo) {
        this.emit('update');
    }

    getTodos() {
        console.log(this.state)
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case TodoConstants.ADD_TODO : {
                this.addTodo(action.todo);
                break;
            }
            case TodoConstants.REMOVE_TODO : {
                this.removeTodo(action.Id);
                break;
            }
            case TodoConstants.UPDATE_TODO : {
                this.updateTodo(action.todo);
                break;
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
//window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;

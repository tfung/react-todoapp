import { EventEmitter } from 'events';

import dispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';

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
        // TODO
        this.emit('update');
    }

    getTodos() {
        return this.todos;
    }

    loadTodos(todos) {
        this.todos = todos.data;
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case TodoConstants.ADD_TODO : {
                this.addTodo(action.todo);
                break;
            }
            case TodoConstants.REMOVE_TODO : {
                this.removeTodo(action.todoId);
                break;
            }
            case TodoConstants.UPDATE_TODO : {
                this.updateTodo(action.todo);
                break;
            }
            case TodoConstants.LOAD_TODO : {
                this.loadTodos(action.todos);
                break;
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

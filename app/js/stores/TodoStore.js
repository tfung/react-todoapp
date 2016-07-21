import { EventEmitter } from 'events';

import dispatcher from '../dispatcher/Dispatcher';
import TodoConstants from '../constants/TodoConstants';
import jquery from 'jquery';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
/*
        [
            {
                Title: 'Get Groceries',
                Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                DueDate: new Date()
            },
            {
                Title: 'Get Groceries',
                Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                DueDate: new Date()
            },
            {
                Title: 'Get Groceries',
                Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                DueDate: new Date()
            },
            {
                Title: 'Get Groceries',
                Assignee: ['John Doe', 'Bon Jovi', 'John Smith'],
                DueDate: new Date()
            }
        ];
*/

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    addTodo() {
        console.log('add')
    }

    removeTodo() {
        console.log('remove')
    }

    updateTodo() {
        console.log('update');
    }

    initTodo(todoData) {
        console.log('update');
    }

    getTodos() {
        // let todos = [];
        //
        // jquery.ajax({
        //     url: 'http://localhost:3000/api/todos',
        //     success: function (data, textStatus, jqXHR) {
        //         this.todos = data;
        //         // dispatch
        //     }
        // });
        return this.todos;
    }

    handleActions(action) {
        console.log(action)

        switch(action.type) {
            case TodoConstants.ADD_TODO : {
                this.addTodo(action.todo);
                break;
            }
            case TodoConstants.REMOVE_TODO : {
                this.removeTodo();
                break;
            }
            case TodoConstants.UPDATE_TODO : {
                this.updateTodo();
                break;
            }
            case TodoConstants.INIT_TODO : {
                this.initTodo();
                break;
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register();

export default todoStore;

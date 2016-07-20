import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
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
    }

    getTodos() {
        return this.todos;
    }
}

const todoStore = new TodoStore();

export default todoStore;

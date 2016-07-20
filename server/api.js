// use this later

var TodoModel = require('./server/models/todo');

var api = function (app){

    app.get('/todos', (req, res) => {
        TodoModel.find({}, function (err, docs) {
            res.json(docs);
        });
    })

    app.get('/insert', (req, res) => {
        var todo = new TodoModel();

        todo.Title= 'todo title';
        todo.Assignee = ['1','2','3'];
        todo.DueDate = new Date();

        todo.save((err)=>{
            console.error(err);
            res.json(err);
        })

        res.send('inserted')
    })

}

module.exports = api;

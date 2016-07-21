var debug = process.env.NODE_ENV !== 'production';
var mongoConnStr = 'mongodb://localhost:27017/todo';

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var TodoModel = require('./server/models/todo');

var app = express();
app.set('port', process.env.PORT || 3000);

var db = mongoose.connect(mongoConnStr);

if (debug === true)
{
    // To allow react frontend to communicate with localhost
    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
}

/*
 * GET API
 */

app.get('/api/todos', function(req, res) {
    TodoModel.find({}, function (err, todos) {
        res.json(todos);
    });
})

app.get('/api/todos/:id', function(req, res) {
    TodoModel.findOne( {'_id': req.params.id}, function (err, todo) {
        res.json(todo);
    })
})

/*
 * POST API
 */

app.post('/api/todos', function(req, res) {
    var todo = new TodoModel();

    console.log(req.body)

    todo.Title = req.body.title;
    todo.Assignee = req.body.assignees;
    todo.DueDate = req.body.duedate;

    todo.save(function (err, todoObj) {
        if (err) res.send(err);

        res.json(todoObj.Id);
    })
})

http.createServer(app).listen(app.get('port'), (req, res) => {
    console.log('Express server listening on port ' + app.get('port'));
});

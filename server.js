var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var TodoModel = require('./server/models/todo');
var ObjectID = require('mongodb').ObjectID;

var app = express();
app.set('port', process.env.PORT || 3000);

var db = mongoose.connect('mongodb://localhost:27017/todo');

/*
 * API
 */

app.get('/api/todos', (req, res) => {
    TodoModel.find({}, function (err, docs) {
        res.json(docs);
    });
})

app.get('/api/insert', (req, res) => {
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

app.get('/', (req, res) => {
    res.send('ok')
});

http.createServer(app).listen(app.get('port'), (req, res) => {
    console.log('Express server listening on port ' + app.get('port'));
});

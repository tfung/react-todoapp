var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var TodoModel = require('./server/models/todo');

var app = express();
app.set('port', process.env.PORT || 3000);

var db = mongoose.connect('mongodb://localhost:27017/todo');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
 * API
 */

app.get('/api/todos', function(req, res) {
    TodoModel.find({}, function (err, docs) {
        res.json(docs);
    });
})

app.get('/api/insert', function(req, res) {
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

app.get('/', function(req, res) {
    res.send('ok')
});

http.createServer(app).listen(app.get('port'), (req, res) => {
    console.log('Express server listening on port ' + app.get('port'));
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema ({
    Title: String,
    Assignee: [String],
    DueDate: Date
});

module.exports = mongoose.model('Todos', TodoSchema);

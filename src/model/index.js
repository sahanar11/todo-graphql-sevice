const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    TaskId: {type: Number, required: true, unique: true},
    TaskDesc: {type: String, required: true},
    Completed: Boolean
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;

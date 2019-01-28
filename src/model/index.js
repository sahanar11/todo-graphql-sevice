const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    TaskId: {type: Number, required: true, unique: true},
    TaskDesc: {type: String, required: true},
    TaskCategory: {type: String},
    Priority: {type: Number},
    Created_date: {type: String},
    Due_Date: {type: String},
    Completed: {type: Boolean}
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;

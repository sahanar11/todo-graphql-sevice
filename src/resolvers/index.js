const Task = require("../model");

const resolvers = {
    Query: {
        tasks: async (parent, _, context) => {
            const tasks = await Task.find({});
            return tasks;
        }
    },
    Mutation: {
        create_task: async (_, {TaskId, TaskDesc,TaskCategory,Priority,Created_date,Due_Date, Completed}) => {
            const tasks = await Task.find({TaskId});
            if (tasks && tasks.length > 0) {
                console.log('Task already exists with this id - error!  ');
                return null; // TODO
            }
            const p = new Task({TaskId, TaskDesc,TaskCategory,Priority,Created_date,Due_Date, Completed});
            const savedTask = await p.save();
            return savedTask.toObject();
        },
        update_task: async(_,{ TaskId, TaskDesc,TaskCategory,Priority,Created_date,Due_Date, Completed}) => {
           
            const tasks = await Task.find({TaskId});
            if(tasks && tasks.length > 0){
                const task = tasks[0];
                task.TaskDesc = TaskDesc;
                task.TaskCategory = TaskCategory;
                task.Priority = Priority;
                task.Created_date = Created_date;
                task.Due_Date = Due_Date;
                task.Completed = Completed;
                const savedTask = await task.save();
                return savedTask.toObject();
            }
            else
            {
                console.log('Task does not exists with this id - error!  ');
                return null; // TODO
            }

        },
        delete_task: async(_,{ TaskId}) => {
            const tasks = await Task.find({TaskId});
            if(tasks && tasks.length > 0){
                const task = tasks[0];
                const deletedTask = await task.remove();
                return deletedTask.toObject();
            }else
            {
                console.log('Task does not exists with this id - error!  ');
                return null; // TODO
            }
        }
    }
};

module.exports = resolvers;
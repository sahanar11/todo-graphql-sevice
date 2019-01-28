const Task = require("../model");

const resolvers = {
    Query: {
        task: async (_, {filterKey,filterVal,parent, context}) => {
            let task;
            if(filterKey == "TaskId"){
                task = await Task.find({"TaskId": filterVal});
            }else if(filterKey == "TaskDesc"){
                task = await Task.find({"TaskDesc": filterVal});
            }else if(filterKey == "Completed"){
                task = await Task.find({"Completed": filterVal});
            }else if(filterKey == "Priority"){
                task = await Task.find({"Priority": filterVal});
            }else if(filterKey == "TaskCategory"){
                task = await Task.find({"TaskCategory": filterVal});
            } else if(filterKey == "Created_Date"){
                task = await Task.find({"Created_Date": filterVal});
            }else if(filterKey == "Due_Date"){
                task = await Task.find({"Due_Date": filterVal});
            }
            return task;
        },
      
        tasks: async (_, {sortKey, parent, context}) => {
            let tasks;
            if(sortKey == "TaskId"){
                tasks = await Task.find().sort({ TaskId:1 });    
            }else if(sortKey == "TaskDesc"){
                tasks = await Task.find().sort({ TaskDesc:1 });
            }else if(sortKey == "Completed"){
                tasks = await Task.find().sort({ Completed:1 });
            }else if(sortKey == "Priority"){
                tasks = await Task.find().sort({ Priority:1 });
            }else if(sortKey == "TaskCategory"){
                tasks = await Task.find().sort({ TaskCategory:1 });
            }else if(sortKey == "Created_Date"){
                tasks = await Task.find().sort({ Created_Date:1 });
            }else if(sortKey == "Due_Date"){
                tasks = await Task.find().sort({ Due_Date:1 });
            }
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
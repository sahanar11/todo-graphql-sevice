const { gql } = require('apollo-server-express');

const schema = gql`
type Task {
    TaskId: Int,
    TaskDesc: String,
    Completed: Boolean 
  }

type Query {
    task(filterKey: String 
        filterVal: String
        TaskId: Int
        ):[Task]
    tasks(sortKey: String): [Task]
  }
  type Mutation {
    update_task (
        TaskId: Int
        TaskDesc: String
        TaskCategory: String
        Priority: Int
        Created_date: String
        Due_Date: String
        Completed: Boolean
    ): Task,

    delete_task (
        TaskId: Int
    ): Task,

    create_task (
        TaskId: Int
        TaskDesc: String
        TaskCategory: String
        Priority: Int
        Created_date: String
        Due_Date: String
        Completed: Boolean
    ): Task
}
 
`;

module.exports = schema;
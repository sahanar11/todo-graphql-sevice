const { gql } = require('apollo-server-express');

const schema = gql`
type Query {
    tasks: [Task]
  }
  type Mutation {
    update_task (
        TaskId: Int
        TaskDesc: String
        Completed: Boolean
    ): Task,

    delete_task (
        TaskId: Int
        TaskDesc: String
        Completed: Boolean
    ): Task,

    create_task (
        TaskId: Int
        TaskDesc: String
        Completed: Boolean
    ): Task
}
  type Task {
    TaskId: Int,
    TaskDesc: String,
    Completed: Boolean 
  }
`;

module.exports = schema;
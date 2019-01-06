const { gql } = require('apollo-server-express');

const schema = gql`
    type Query {
        user: User
    }

    type User {
        username: String!
    }
`;

module.exports = schema;
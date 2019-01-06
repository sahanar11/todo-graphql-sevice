const { gql } = require('apollo-server-express');

const schema = gql`
    type Query {
        products: [Product]
    }

    type Product {
        id: Int!
        name: String!
    }
`;

module.exports = schema;
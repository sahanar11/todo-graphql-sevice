const { gql } = require('apollo-server-express');

const schema = gql`
    type Query {
        products: [Product]
    }

    # this schema allows the following mutation:
    type Mutation {
        create_product (
            id: Int!
            name: String!
        ): Product
    }

    type Product {
        id: Int!
        name: String!
    }
`;

module.exports = schema;
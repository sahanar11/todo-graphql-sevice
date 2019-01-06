
const Product = require("../model");

const resolvers = {
    Query: {
        products: async (parent, _, context) => {
            const products = await Product.find({});
            return products;
        }
    },
    Mutation: {
        create_product: async (_, { id, name }) => {
            const products = await Product.find({id});
            if (products && products.length > 0) {
                console.log('Product already exists with this id - error!');
                return null; // TODO
            }

            const p = new Product({id, name});
            const savedProduct = await p.save();
            return savedProduct.toObject();
        }
    }
};

module.exports = resolvers;

const Product = require("../model");

const resolvers = {
    Query: {
        products: (parent, _, context) => {
            // const p = new Product({
            //     id: 3,
            //     name: "Paper"
            // });
            // p.save((err) => {
            //     if (err) {
            //         console.log('Product save error!');
            //     }
            //     console.log('Product saved successfully!');
            // });
            return Product.find({}, (err, products) => {
                if (err) throw err;
                return products;
            });
        }
    }
};

module.exports = resolvers;
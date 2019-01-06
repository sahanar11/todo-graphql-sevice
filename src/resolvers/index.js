
const resolvers = {
    Query: {
        products: () => {
            return [{
                id: 0,
                name: 'Chair',
            }];
        }
    }
};

module.exports = resolvers;
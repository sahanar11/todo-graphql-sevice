
const resolvers = {
    Query: {
        user: () => {
            return {
            username: 'Robin ss',
            };
        }
    }
};

module.exports = resolvers;
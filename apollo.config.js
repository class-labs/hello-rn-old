require('dotenv').config();

module.exports = {
  client: {
    service: {
      name: 'api',
      url: process.env.GRAPHQL_API + '/graphql',
    },
  },
};

const app = require('express')();
const graphql = require('graphql');
const expressGraphQL = require('express-graphql');
const schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const compiledSchema = graphql.buildSchema(schema);

app.use('/graphql', expressGraphQL({
	schema: compiledSchema,
	graphiql: true,
	rootValue: resolvers
}));

module.exports = app;
const app = require('express')();
const graphql = require('graphql');
const expressGraphQL = require('express-graphql');

const schema = graphql.buildSchema('');

app.use('/graphql', expressGraphQL({
	schema: '',
	graphiql: true,
	rootValue: () => ''
}));

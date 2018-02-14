import {GraphQLObjectType, GraphQLString } from 'graphql';

const commentType = new GraphQLObjectType({
	fields: {
		author: GraphQLString
	}
})
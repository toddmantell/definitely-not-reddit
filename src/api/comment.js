import {GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const commentType = new GraphQLObjectType({
	name: 'comment',
	description: 'A comment in response to a post',
	fields: {
		id: {
			type: GraphQLInt,
			description: 'The identity of the comment'
		},
		author: {
			type: GraphQLString,
			description: 'The author of the comment'
		},
		body: {
			type: GraphQLString,
			description: 'The comment body'
		},
		votes: {
			type: GraphQLInt,
			description: 'The sum of upvotes and downvotes this comment received'
		}
	}
})